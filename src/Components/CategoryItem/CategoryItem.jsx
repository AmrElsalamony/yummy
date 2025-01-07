import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './../Loading/Loading';



const CategoryItem = () => {

    let { id } = useParams()
    const [items, setItems] = useState([]);
    const [flag, setFlag] = useState(false);


    async function getItems() {

        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
        // console.log(data.meals);
        setItems(data.meals)

        setTimeout(() => {
            setFlag(true)
        }, 1000);


    }



    useEffect(() => {

        getItems()
    }, []);

    return <>
        {flag ? <div className="container py-4 categories">
            <div className="row g-4 justify-content-center">
                {
                    items.map((item, index) =>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-6 overflow-hidden category-card" key={index}>
                            <Link className='text-black text-decoration-none' to={`/mealdetails/${item.idMeal}`}>
                                <div className=' position-relative rounded-3'>
                                    {
                                        item.strMealThumb ?
                                            <img src={item.strMealThumb} className='w-100 rounded-3' alt="" /> :
                                            ""
                                    }
                                    <div className="layer rounded-3 p-3  bg-light text-center d-flex justify-content-center align-items-center">
                                        <h5 className=''>{item.strMeal}</h5>
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

export default CategoryItem;
