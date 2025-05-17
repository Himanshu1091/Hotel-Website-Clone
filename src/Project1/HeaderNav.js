import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderNav = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-black fixed-top">
            <div className="container ">
                <div className="navbar-brand">
                    <a href="#" className="nav-link ms-5 fs-3"><b>Taj</b></a>
                </div>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#Home" className="nav-link text-light p-2 ms-5">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="#About" className="nav-link text-light p-2 ms-5">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Contact" className="nav-link text-light p-2 ms-5">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Contact" className="nav-link text-light p-2 ms-5">BOOKINGS</a>
                        </li>
                    </ul>
                </div>
                <form action="" className="d-flex">
                    <button className="btn btn-warning me-2">BOOK A STAY</button>
                    <button className="btn btn-danger">RESERVE TABLE</button>
                </form>
            </div>
        </nav>
    );
};

export default HeaderNav;