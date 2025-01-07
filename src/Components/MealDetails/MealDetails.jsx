import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from './../Loading/Loading';







const MealDetails = () => {
    let { id } = useParams()
    const [items, setItems] = useState([]);
    const [flag, setFlag] = useState(false);


    async function getItems() {

        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        // console.log(data.meals[0]);
        setItems(data.meals[0])
        setTimeout(() => {
            setFlag(true)
        }, 1000);

    }





    useEffect(() => {

        getItems()
    }, []);
    return <>

        {flag ?
            <div className="container py-5">
                <div className="row text-white g-4 d-flex align-items-start">
                    <div className="col-lg-4">
                        <div>
                            {
                                items.strMealThumb ? <img src={items.strMealThumb} className='w-100 rounded-3' alt="" /> : ""

                            }

                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className='text-start'>
                        <h4 className=''><i>Meal Name : </i></h4>
                            {
                                
                                items.strMeal ? <h4 className='text-black fit p-2 rounded-3 my-3 text- bg-light '>{items.strMeal}</h4> : ""
                            }
                            <h4 className=''><i>information : </i></h4>
                            <div className='d-flex flex-wrap my-3  '>
                                {items.strCategory ?
                                    <span className='alert alert-danger py-1 px-2 h6 my-2 me-2'>Category : {items.strCategory}</span> : ""
                                }
                                {items.strArea ?
                                    <span className='alert alert-danger py-1 px-2 h6 my-2 me-2'>Nationality : {items.strArea}</span> : ""
                                }
                                {items.strTags ?
                                    <span className='alert alert-danger py-1 px-2 h6 my-2 me-2'>Tags : {items.strTags}</span> : ""
                                }
                            </div>








                            {!items.strYoutube && !items.strSource ? "" :
                                <div className=' my-3'>
                                    <h4 className='me-2'><i>Links : </i></h4>
                                    <div className='d-flex pt-2 '>
                                        {
                                            items.strYoutube ?
                                                <a href={items.strYoutube} target='_blank' className='me-2 text-decoration-none d-flex justify-content-center align-items-center youtube px-3 text-white rounded-3'><i className='fa-brands fa-youtube h3 mt-2 me-2'></i> <span>You Tube</span></a>
                                                : ""
                                        }

                                        {
                                            items.strSource ?
                                                <a href={items.strSource} target='_blank' className='mx-2 text-decoration-none d-flex justify-content-center align-items-center simply-recipe px-3 text-white rounded-3'><i className='fa fa-bowl-food h3 mt-2 me-2'></i> <span>Simply recipes</span></a>
                                                : ""
                                        }


                                    </div>

                                </div>
                            }


                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            <h4 className=''><i>Ingredients:</i></h4>
                            <div className='row d-flex flex-wrap justify-content-center  mt-2 fw-semibold w-100 gy-2 mx-auto'>
                                {
                                    items.strIngredient1 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6 '>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient1}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient1}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure1}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient2 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6 '>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient2}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient2}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient2}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure2}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient3 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6 '>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient3}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient3}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient3}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure3}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient4 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient4}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient4}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient4}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure4}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient5 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient5}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient5}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient5}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure5}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient6 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient6}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient6}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient6}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure6}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient7 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient7}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient7}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient7}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure7}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient8 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient8}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient8}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient8}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure8}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient9 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient9}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient9}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient9}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure9}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient10 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient10}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient10}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient10}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure10}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient11 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient11}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient11}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient11}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure11}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient12 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient12}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient12}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient12}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure12}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient13 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient13}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient13}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient13}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure13}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient14 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient14}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient14}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient14}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure14}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient15 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient15}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient15}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient15}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure15}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient16 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient16}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient16}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient16}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure16}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient17 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient17}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient17}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient17}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure17}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient18 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient18}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient18}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient18}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure18}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient19 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient19}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient19}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient19}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure19}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }
                                {
                                    items.strIngredient20 ?
                                        <div className='col-xl-3 col-lg-3 col-md-4 col-6'>
                                            <Link className='text-decoration-none text-black  ' to={`/ingredientsItem/${items.strIngredient20}`}>
                                                <div className='alert alert-success p-1  text-center ingredient-card'>
                                                    <img className=' d-block ingredient-image' src={`https://www.themealdb.com/images/ingredients/${items.strIngredient20}-small.png`} alt="" />
                                                    <div>
                                                        <h6>{items?.strIngredient20}</h6>
                                                        <h6 className='text-success'>{items?.strMeasure20}</h6>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                        : ""
                                }





                            </div>
                            <h4 className="mb-3"><i>Instructions:</i></h4>
                            {

                                items.strInstructions ? <p className='d-block text-white-50 fw-semibold'>{items.strInstructions}</p> : ""

                            }



                        </div>
                    </div>
                </div>
            </div > : <Loading />
        }

    </>
}

export default MealDetails;
