import React from 'react';
import logo from "../../imgs/yummy.jpg"
import { Link } from 'react-router-dom';

const Navbar = () => {

    function openSideMenuFunction() {
        document.querySelector('#sideMenu').style.cssText = 'left : 0 !important'
        document.querySelector('#openSideMenu').classList.add("d-none")

        document.querySelector('#closeSideMenu').classList.replace("d-none", "d-block")

    }

    function closeSideMenuFunction() {
        document.querySelector('#sideMenu').style.left = '-250px'
        document.querySelector('#closeSideMenu').classList.add("d-none")
        document.querySelector('#openSideMenu').classList.replace("d-none", "d-block")
    }









    function openMobileFunction() {
        document.querySelector('.mobile-menu').style.cssText = 'left : 0 !important'
    }

    function closeMobileFunction() {
        document.querySelector('.mobile-menu').style.left = '-320px'
    }


    return <>




        <div id='sideMenu' className='navbar navbar-desktop overflow-hidden fixed-top d-none d-lg-block'>
            <div className="container h-100">
                <div className="position-absolute top-0 bottom-0 end-0 side-bar  h-100 py-4">

                    <div className='top  w-100  d-flex justify-content-center align-items-start'>
                        <img src={logo} className='logo' alt="" />

                    </div>



                    <div className='middle  d-flex justify-content-center align-items-center'>
                        <i id='openSideMenu' onClick={openSideMenuFunction} className='fa fa-bars h1 text-black'></i>
                        <i id='closeSideMenu' onClick={closeSideMenuFunction} className='d-none fa fa-close h1 text-black'></i>
                    </div>


                    <div className='bottom  d-flex justify-content-center align-items-end'>
                        <div className='d-block'>
                            <i className='fa fa-globe h6 d-block text-black'></i>
                            <i className='fa fa-share-alt h6 d-block text-black'></i>
                        </div>
                    </div>

                </div>
                <div className="menu-details position-absolute bottom-0 top-0 start-0 end-0 ">
                    <ul className='py-5 px-4  list-unstyled'>
                        <li>
                            <Link className='text-decoration-none text-white fw-semibold ' onClick={closeSideMenuFunction} to={"/"}>Categories</Link>
                        </li>
                        <li className='mt-4 '>
                            <Link className='text-decoration-none text-white fw-semibold ' onClick={closeSideMenuFunction} to={"/area"}>Area</Link>
                        </li>
                        <li className='mt-4'>
                            <Link className='text-decoration-none text-white fw-semibold  ' onClick={closeSideMenuFunction} to={"/ingredients"}>Ingredients</Link>
                        </li>
                        <li className='mt-4'>
                            <Link className='text-decoration-none text-white fw-semibold  ' onClick={closeSideMenuFunction} to={"/search"}>Search</Link>
                        </li>
                        <li className='mt-4'>
                            <Link className='text-decoration-none text-white fw-semibold  ' onClick={closeSideMenuFunction} to={"/contact"}>Contact Us</Link>
                        </li>
                    </ul>
                    <div className=' position-absolute bottom-0 start-0 end-0 p-3 d-flex'>
                        <a href=""><i className='fa-brands fa-facebook-f h5 text-white me-3'></i></a>
                        <a href=""><i className='fa-brands fa-whatsapp h5 text-white me-3'></i></a>
                        <a href=""><i className='fa-brands fa-linkedin-in h5 text-white'></i></a>
                    </div>
                </div>
            </div>
        </div>







        <div className='navbar navbar-mobile bg-white  fixed-top d-lg-none'>
            <div className="container">
                <div className="row w-100 align-items-center">
                    <div className="col-6">
                        <div>
                            <img src={logo} alt="" className="logo ms-2" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='text-end d-flex justify-content-end align-items-center'>
                            <i onClick={openMobileFunction} id='open' className=' fa fa-bars h1 mt-2'></i>
                        </div>
                    </div>
                </div>


                <div className="mobile-menu">
                    <div className="position-absolute top-0 bottom-0 end-0 side-bar  h-100 py-4">

                        <div className='top  w-100  d-flex justify-content-center align-items-start'>
                            <img src={logo} className='logo' alt="" />

                        </div>



                        <div className='middle  d-flex justify-content-center align-items-center'>
                            <i id='close' onClick={closeMobileFunction} className=' fa fa-close h1 text-black'></i>
                        </div>


                        <div className='bottom  d-flex justify-content-center align-items-end'>
                            <div className='d-block'>
                                <i className='fa fa-globe h6 d-block text-black'></i>
                                <i className='fa fa-share-alt h6 d-block text-black'></i>
                            </div>
                        </div>

                    </div>
                    <div className="menu-details position-absolute bottom-0 top-0 start-0 end-0 ">
                        <ul className='py-5 px-4  list-unstyled'>
                            <li>
                                <Link className='text-decoration-none text-white fw-semibold ' onClick={closeMobileFunction} to={"/"}>Categories</Link>
                            </li>
                            <li className='mt-4 '>
                                <Link className='text-decoration-none text-white fw-semibold ' onClick={closeMobileFunction} to={"/area"}>Area</Link>
                            </li>
                            <li className='mt-4'>
                                <Link className='text-decoration-none text-white fw-semibold  ' onClick={closeMobileFunction} to={"/ingredients"}>Ingredients</Link>
                            </li>
                            <li className='mt-4'>
                                <Link className='text-decoration-none text-white fw-semibold  ' onClick={closeMobileFunction} to={"/search"}>Search</Link>
                            </li>
                            <li className='mt-4'>
                                <Link className='text-decoration-none text-white fw-semibold  ' onClick={closeMobileFunction} to={"/contact"}>Contact Us</Link>
                            </li>
                        </ul>
                        <div className=' position-absolute bottom-0 start-0 end-0 p-3 d-flex'>
                            <a href=""><i className='fa-brands fa-facebook-f h5 text-white me-3'></i></a>
                            <a href=""><i className='fa-brands fa-whatsapp h5 text-white me-3'></i></a>
                            <a href=""><i className='fa-brands fa-linkedin-in h5 text-white'></i></a>
                        </div>
                    </div>
                </div>






            </div>
        </div>

    </>
}

export default Navbar;
