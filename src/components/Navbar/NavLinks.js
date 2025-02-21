import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-10 font-extrabold text-black-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-10 font-extrabold text-black-500 hover:text-blue-900" smooth to="/#services">
                Our Residences
            </HashLink>
            <HashLink className="px-10 font-extrabold text-black-500 hover:text-blue-900" smooth to="/#contact">
                Contact Us
            </HashLink>
            
        </>
    )
}

export default NavLinks;
