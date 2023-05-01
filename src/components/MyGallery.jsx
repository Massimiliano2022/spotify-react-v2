import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const MyGallery = ({ title, artist }) => {

    const [albums, setAlbums] = useState([]);


    const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`;

    const fetchAlbums = async () => {

        if (artist) {

            const response = await fetch(URL);
            try {
                if (response.ok) {
                    const albums = await response.json();
                    console.log("data : ", albums);

                    const newAlbumsArr = [...albums.data].slice(0, 4);
                    setAlbums(newAlbumsArr);
                    //setLoading(false);

                } else {
                    console.log("Error fetching results");
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        fetchAlbums();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [artist]);


    return (
        <div className="p-5 m-5">
            <h3 className="mb-4">{title}</h3>
            <Row className="p-0 m-0">
                {albums.map((album, index) => (
                    <Col sm={6} md={3} key={index}>
                        <div className="text-light w-100 text-center" style={{ width: "200px", height: "200px" }}>
                            <Link to={`/album/${album.album.id}`}>
                                <img src={album.album.cover_big} className="w-100 h-100 object-fit-cover mb-2" alt="Cover Album" />
                            </Link>
                            <Link to={`/album/${album.album.id}`} style={{ textDecoration: "none", color: "#fff" }}><h6 className="text-truncate mb-2">{album.title}</h6></Link>
                            <Link to={`/artist/${album.artist.id}`} style={{ textDecoration: "none", color: "#fff" }}><p className="mb-2">{album.artist.name}</p></Link>
                        </div>
                    </Col>
                ))}
            </Row>
        </div> 
    );

}
export default MyGallery;