import MyGallery from "./MyGallery";

import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MySearchGallery from "./MySearchGallery";

const MyMain = () => {

    /*const rockArtists = ['queen','u2','thepolice','eagles','thedoors','oasis','thewho','bonjovi'];
    const popArtists = ['maroon5','coldplay','onerepublic','jamesblunt','katyperry','arianagrande'];
    const hipHopArtists = ['eminem','snoopdogg','lilwayne','drake','kanyewest'];*/

    const queryResults = useSelector(state => state.querySearch.queryResult);

    const rockArtists = ['thewho'];
    const popArtists = ['maroon5'];
    const hipHopArtists = ['eminem'];

    const [rockArtist , setRockArtist] = useState("");
    const [popArtist , setPopArtist] = useState("");
    const [hipHopArtist , sethipHopArtist] = useState("");

    console.log(queryResults);
    
    useEffect(() => {
        setRockArtist(rockArtists[Math.floor(Math.random() * rockArtists.length)]);
        setPopArtist(popArtists[Math.floor(Math.random() * popArtists.length)]);
        sethipHopArtist(hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Col sm={10} className="text-light" style={{marginLeft:"16.66667%", paddingBottom:"6rem"}}>

            {queryResults.length > 0 &&
                <MySearchGallery queryResults={queryResults.slice(0,4)} />
            }
            <MyGallery title={"Rock Classics"} artist={rockArtist}/>
            <MyGallery title={"Pop Culture"} artist={popArtist}/>
            <MyGallery title={"Hip Hop"} artist={hipHopArtist}/>

        </Col>
    );
}
export default MyMain;