import React from 'react';
import image  from "../../imgs/yummy.jpg"




const Loading = () => {
    return <>
    <div className='loading position-fixed top-0 end-0 start-0 bottom-0 bg-black d-flex justify-content-center align-items-center'>
    {/* <i className='fa fa-spinner fa-spin text-white h1'></i> */}
    <div className='bg-light rounded-circle p-3 fa-fade d-flex justify-content-center align-items-center loading-image'>
    <img src={image} className='rounded-circle w-100 ' alt="" />



    </div>

    </div>
    
    </>
}

export default Loading;
