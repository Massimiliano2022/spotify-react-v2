import logo from '../Spotify_Logo.png'

import { FaBookOpen, FaHome } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchQueryAction } from '../redux/actions';

const MyLeftBar = () => {

    const [query, setQuery] = useState("");

    const dispatch = useDispatch();

    const navigator=useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if(query !== ""){
          dispatch(getSearchQueryAction(query));
          navigator('/');
          setQuery("");
        }
      };

    return (
        <Col sm={2} className='vh-100 d-flex flex-column justify-content-between p-3' style={{ zIndex: 1, position: "fixed", background: 'black' }}>
            <nav className="navbar-dark">
                <div className="navbar-brand py-3">
                    <a href="#home">
                        <img src={logo} alt='Logo' style={{ width: "130px", height: "40px" }} />
                    </a>
                </div>
                <ul className="navbar-nav mb-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link d-flex align-items-center gap-2" href="#home">
                            <FaHome className='fs-3' />
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link d-flex align-items-center gap-2" href="#link">
                            <FaBookOpen className='fs-3' />
                            Your library
                        </Link>
                    </li>
                </ul>
                <Form className="d-flex" role="search">
                    <InputGroup className="mb-3">
                        <FormControl 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Button 
                            type="button"
                            variant="outline-secondary" 
                            className="rounded-end rounded-1 rounded-start-0" 
                            onClick={handleClick}
                            >
                            GO
                            </Button>
                    </InputGroup>
                </Form>
            </nav>
            <nav className="navbar-dark">
                <div className="d-flex flex-column">
                    <Button className="d-block rounded-pill mb-3" variant="light" type="button">Sign up</Button>
                    <Button className="d-block rounded-pill mb-3" variant="dark" type="button">Login</Button>
                </div>
                <ul className="navbar-nav text-light d-flex flex-row align-items-center">
                    <li className="nav-item">
                        <Link className="nav-link fs-6 me-2" href="#">
                            Cookie Policy
                        </Link>
                    </li>
                    <span style={{color:"grey"}}>|</span>
                    <li className="nav-item">
                        <Link className="nav-link fs-6 ms-2" href="#">
                            Privacy
                        </Link>
                    </li>
                </ul>
            </nav>
        </Col>
    );
}
export default MyLeftBar;