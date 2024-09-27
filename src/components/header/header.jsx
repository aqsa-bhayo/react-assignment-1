import React from 'react'
import logo from './../../assets/Group 1.png'

const header = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <img src={logo} alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-black gap-4">
                            <li className="nav-item">
                                <a className="nav-link gap-2 text-black" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black" href="#">Contact Us</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <button type="button" class="btn">Log in</button>
                            <button
                                className="btn btn-warning rounded-5 py-2 px-3"
                                style={{ backgroundColor: '#ef8d21' }}>
                                Book Scooter
                            </button>

                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default header
