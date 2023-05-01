import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavouriteAction } from "../redux/actions";
import { addToFavouriteAction } from "../redux/actions";

const MyAlbum = () => {

    const favAlbums = useSelector(state => state.favAlbums.favourite.albums);

    const dispatch = useDispatch();

    const [album, setAlbum] = useState({});

    const params = useParams();

    const isFav = favAlbums.length > 0 && favAlbums.find(favAlbum => favAlbum.id === parseInt(params.albumId));

    console.log(favAlbums);

    useEffect(() => {
        console.log("PARAMS: ", params);
        fetchAlbum(params.albumId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.albumId]);

    const fetchAlbum = async (albumId) => {

        console.log(albumId);

        try {

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`);

            if (response.ok) {
                const data = await response.json();
                console.log("data : ", data);
                console.log(data.tracks);
                setAlbum(data);
                //setLoading(false);

            } else {
                console.log("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        (album && album.artist && album.tracks &&
            <Col sm={10} className="text-light" style={{ marginLeft: "16.66667%", paddingBottom: "6rem" }}>
                <div className="ps-5 pe-5 pt-5 ms-5 pe-5 mt-5">
                    <Row>
                        <Col sm={4} className="d-flex align-items-center flex-column text-center">
                            <div style={{ width: "200px" }}>
                                <div className="mb-2" style={{ height: "200px" }}>
                                    <img src={album.cover_medium} alt="cover" className="w-100 h-100 object-fit-cover"></img>
                                </div>
                                <h6 className="mx-5 mb-2 fw-bold">{album.title}</h6>
                                <Link to={`/artist/${album.artist.id}`} style={{ textDecoration: "none", color: "#fff" }}><p className="mx-5 mb-2">{album.artist.name}</p></Link>
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <Button variant="success" className="rounded-pill" type="submit" style={{ width: "150px" }}>Play</Button>
                                    {isFav ? (
                                        <FaHeart
                                            className="fs-4"
                                            onClick={() => 
                                                dispatch(removeFromFavouriteAction(album))}
                                        />
                                    ) : (
                                        <FaRegHeart
                                            className="fs-4"
                                            onClick={() => 
                                                dispatch(addToFavouriteAction(album))}
                                        />
                                    )}
                                </div>
                            </div>
                        </Col>
                        <Col sm={8}>
                            {album.tracks.data.map((track, index) => (
                                <div className="d-flex justify-content-between py-3" key={index}>
                                    <p>{track.title}</p>
                                    <p>{`${Math.floor(track.duration / 60)}:${(track.duration % 60 / 10).toFixed(0).padStart(2, '0')}`}</p>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    );
}
export default MyAlbum;