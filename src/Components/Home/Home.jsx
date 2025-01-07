import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './../Loading/Loading';







const Home = () => {

    const [categories, setCategories] = useState([]);

    const [flag, setFlag] = useState(false);

    async function getCategories() {
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        setCategories(data.categories)
        setTimeout(() => {
            setFlag(true)
        }, 1000);
        // console.log(data.categories);

    }


    useEffect(() => {
        getCategories()
    }, []);
    return <>


        {flag ? <div className="container py-4 categories">
            <div className="row g-4 justify-content-center mx-auto">
                {
                    categories.map((item, index) =>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-6 overflow-hidden category-card" key={index}>
                            <Link className='text-black text-decoration-none' to={`/categoryitem/${item.strCategory}`}>
                                <div className=' position-relative rounded-3'>
                                    {item.strCategoryThumb ?
                                        <img src={item.strCategoryThumb} className='w-100 rounded-3' alt="" /> :""

                                    }
                                    <div className="layer rounded-3 p-3  bg-light text-center d-flex justify-content-center align-items-center">
                                        {/* {item.idCategory}- */}
                                        <h4 className=''>{item.strCategory}</h4>
                                        {/* <p className='mt-3'>{item.strCategoryDescription.slice(0 , 80)+' ..... '}<span className='text-primary'>more</span> </p> */}
                                    </div>
                                </div>
                            </Link>
                        </div>


                    )
                }
            </div>
        </div> : <Loading />}



    </>
}

export default Home;
