import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl mb-4">Dwale is Located in:</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <p>Mpemba,</p>
                                <p>Blatyre,</p>
                                <p>Malawi.</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-17 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#hero" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About Us</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#services" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Residences</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#cta" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-6">OUR RESIDENCES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">The Pool</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">The Kitchen</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">The Livingroom</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">The Bedrooms</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div className="text-xl mb-6">
                            Social Media Links.
                        </div>

                                <div className="text-md font-medium mb-6">
                                    Follow us on social media.
                                </div>
                        <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                        </svg>
                                        </Link>
                                    </li>
                                <li className="flex justify-center items-center">
                                <a href="https://www.instagram.com/your_instagram" 
   target="_blank" 
   rel="noreferrer" 
   className="rounded-full flex justify-center bg-white h-8 text-pink-600 w-8 mx-1 text-center pt-1">
   
   <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        className="fill-current font-black hover:animate-pulse">
        
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM18 7.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 16a3.5 3.5 0 0 0 0-7z"/>
   </svg>

</a>

</li>

                                   
                                    
                                </ul>
                            </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-black-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Dwale
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
