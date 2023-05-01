import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyArtist = () => {

    const [artist, setArtist] = useState({});
    const params = useParams();
    
    useEffect(() => {
        console.log("PARAMS: ", params);
        fetchArtist(params.artistId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.artistId]);

    const fetchArtist = async (artistId) => {

        console.log(artistId);

        try {

            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`);

            if (response.ok) {
                const data = await response.json();
                console.log("data : ", data);
                
                setArtist(data);

                console.log("ARTIST: " +artist);
                
            } else {
                console.log("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <h1>My Artist</h1>
    );
}
export default MyArtist;