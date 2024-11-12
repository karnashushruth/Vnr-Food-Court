import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-[url(logo.webp)] h-100 w-100 " >
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="logo.webp"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2 "
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 mr-96 ">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
        
 </li>
                           
                            <li>
                                <NavLink
                                to="/annapurna"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Annapurna
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/jacks"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   Jacks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="mba"
                                    className= {({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    MBA 
                                </NavLink>
                            </li>
                            
                            <li >
                                <NavLink
                                
                                to="login"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-orange-700" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Login 
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </div>
    );
}
