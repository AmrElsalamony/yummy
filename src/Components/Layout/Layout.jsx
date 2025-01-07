import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';

const Layout = () => {



    return <>

    <Navbar/>
<div className='pt-5 mt-4 mt-lg-0 pt-lg-0'>
    
<Outlet></Outlet>

</div>



    </>
}

export default Layout;
