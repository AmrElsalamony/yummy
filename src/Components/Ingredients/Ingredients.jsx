import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './../Loading/Loading';


const Ingredients = () => {

    
    const [ingredients, setIngredients] = useState([]);
    const [images, setImages] = useState([]);
    const [flag, setFlag] = useState(false);


    async function getIngredients() {

        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        // console.log(data.meals.slice(0,49));
        setIngredients(data.meals.slice(0,50))

   

        setTimeout(() => {
            setFlag(true)
        }, 1000);


    }


      useEffect(() => {
    
        getIngredients()
        }, []);

    return <>
       {flag?<div className="container py-4">
        <div className="row d-flex justify-content-center g-3">
            {
            ingredients.map((el , index)=>
            
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-6 ">
                    <Link className='text-decoration-none' to={`/ingredientsItem/${el.strIngredient}`}>
                    <div className='ingredient-main text-center p-3 text-black bg-light rounded-3'>
                        <img className='w-100' src={`https://www.themealdb.com/images/ingredients/${el.strIngredient}.png`} alt="" />
                        <h4 className='h5'>{el.strIngredient}</h4>
                        {/* <p>{el.strDescription?.slice(0,50)+'...'}</p> */}
                    </div>
                    </Link>
                </div>
           
            )
            }
        </div>
    </div>:<Loading/>}
    
    </>
}

export default Ingredients;
