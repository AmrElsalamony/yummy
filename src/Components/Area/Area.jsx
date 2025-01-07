import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './../Loading/Loading';

const Area = () => {

    const [area, setArea] = useState([]);
    const [flag, setFlag] = useState(false);

    async function getArea() {
        let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        setArea(data.meals)
        setTimeout(() => {
            setFlag(true)
        }, 1000);
    }




    useEffect(() => {

        getArea()

    }, []);



    return <>
        {flag ? <div className="container py-4">
            <div className="row d-flex justify-content-center g-3">
                {
                    area.map((el, index) =>

                        <div key={index} className="col-md-3 ">
                            <Link className='text-decoration-none' to={`/areaItem/${el.strArea}`}>
                                <div className='text-center p-4 text-black bg-light rounded-3'>
                                    <i className='h1 fa fa-house'></i>
                                    <h4 className='h3'>{el.strArea}</h4>
                                </div>
                            </Link>
                        </div>

                    )
                }
            </div>
        </div> : <Loading />}


    </>
}

export default Area;
