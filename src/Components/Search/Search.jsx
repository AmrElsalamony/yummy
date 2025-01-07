import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './../Loading/Loading';
const Search = () => {
    const [items, setItems] = useState([]);

    async function getItems(e) {
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value?e.target.value:""}`)
        setItems(data.meals)
        
       

    }

    return <>
        <div className="container py-4">
            <input onInput={getItems} className='w-100 form-control' type="text" placeholder='search for a meal' />
             <div className="container py-4 categories">
            <div className="row g-4 justify-content-center">
                {
                   items?
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
                :
                <div className='py-5 mt-5 alert alert-danger text-bg-danger-subtle'>
                    <p className='h3 text-center'><i className='fa fa-close text-danger h1'></i><br /> No results <br /> Try another meal</p>
                </div>
                }
            </div>
        </div>
        </div>

    </>
}

export default Search;
