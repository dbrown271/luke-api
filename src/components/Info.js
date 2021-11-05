import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';


const Info = () => {
    const { id, category } = useParams();
    const [info, setInfo] = useState({})

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                console.log(response)
                setInfo(response.data)
            })
            .catch(err => console.log(err))

    }, [category, id])




    return (
        <div>
            <>

            <h1>{info.name}</h1>
            <p>Height: {info.height}</p>
            <p>Weight: {info.mass}</p>
            <p>Hair Color: {info.hair_color}</p>

            </>
        </div>
    );
};



export default Info;