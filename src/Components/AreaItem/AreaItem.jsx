import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './../Loading/Loading';


const AreaItem = () => {
    let { id } = useParams()
    const [areaItem, setAreaItem] = useState([]);
    const [flag, setFlag] = useState(false);


    async function getAreaItem() {

        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`)
        // console.log(data);
        setAreaItem(data.meals)
        
        

        setTimeout(() => {
            setFlag(true)
        }, 1000);


    }


      useEffect(() => {
    
            getAreaItem()
        }, []);


    return <>
 {flag ? <div className="container py-4 categories">
            <h2 className='text-center text-black bg-white py-2 mb-4 rounded-3 '>{id} Food</h2>
            <div className="row g-4 justify-content-center">
                {
                    areaItem.map((item, index) =>

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

export default AreaItem;
