import next from '../img/Next.png'
import play from '../img/Play.png'
import previous from '../img/Previous.png'
import repeat from '../img/Repeat.png'
import shuffle from '../img/Shuffle.png'

import { Col, Row } from "react-bootstrap";

const MyBottomNav = () => {

    return (

        <Col className="fixed-bottom p-0" style={{ marginLeft: "16.66667%" }}>
            <nav className="bg-dark" style={{ height: "6rem" }}>
                <div className="navbar-nav">
                    <Row>
                        <Col md={6}>
                            <div className='d-flex justify-content-end mt-3'>
                                <img src={repeat} alt="Shuffle" style={{ width: "16px" }} className='m-3' />
                                <img src={previous} alt="Shuffle" style={{ width: "16px" }} className='m-3' />
                                <img src={play} alt="Shuffle" style={{ width: "16px" }} className='m-3' />
                                <img src={next} alt="Shuffle" style={{ width: "16px" }} className='m-3' />
                                <img src={shuffle} alt="Shuffle" style={{ width: "16px" }} className='m-3' />
                            </div>
                        </Col>
                    </Row>
                    {/*<Row className='d-flex justify-content-center'>*/}
                    <Row>
                        <Col md={6} className="offset-2">
                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ background: "grey", padding: "0.15rem" }}></div>
                        </Col>
                    </Row>
                </div>
            </nav>
        </Col>
    );
}
export default MyBottomNav;