import React from 'react'
import {FaBars, FaShoppingCart } from 'react-icons/fa'
import { Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav active">
            <div className="burger text-light">
                <FaBars/>
            </div>
            <div className="logo">
                <Link className="item-link" to="/"><h3 >Grab Eat</h3></Link>
            </div>
            <ul className="nav-links ">
                <li><Link className="item-link bg-light fw-bold rounded px-2 py-1 text-secondary" to="/login">LOGIN</Link></li>
                <li><Link className="item-link bg-light fw-bold rounded px-2 py-1 text-secondary px-3" to="/cart"><FaShoppingCart /><span className="text-danger cart-icon-total position-absolute">10</span></Link></li>
            </ul>
        </div>
    )
}

export default Navbar
