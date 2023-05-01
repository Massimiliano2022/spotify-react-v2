import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import MyMain from "./components/MyMain";
import MyLeftBar from "./components/MyLeftBar";
import MyBottomNav from "./components/MyBottomNav";
import MyAlbum from "./components/MyAlbum";
import MyArtist from "./components/MyArtist";


function App() {
  return (
    <BrowserRouter>
      <Container fluid className="w-100" style={{background: "linear-gradient(to right, #334660, #111821)"}}>
        <Row>
          <MyLeftBar />
          <Routes>
            <Route path="/" element={<MyMain />} />
            <Route path="/album/:albumId" element={<MyAlbum />} />
            <Route path="/artist/:artistId" element={<MyArtist />} />
          </Routes>
        </Row>
        <Row>
          <MyBottomNav/>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;