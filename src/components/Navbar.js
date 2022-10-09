import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../UserContext'


function Navbar() {

    const context = useContext(UserContext);
    const {
        bucket,
        setBucket,
    } = context;

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light '>
                <div className='container px-4 px-lg-5 d-flex justify-content-between'>
                    <Link to='/' className="navbar-brand" href="#!">Travel Agency</Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> */}
                    <div className="" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">All Products</a></li>
                                    <li><a className="dropdown-divider"></a></li>
                                    <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                    <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul> */}

                        <Link to='/bucket'>
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Bucket
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{bucket}</span>
                            </button>
                        </Link>


                    </div>
                </div>
            </nav>
            <Outlet />
        </>

    )
}

export default Navbar