import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const StarWars = () => {
    const [allStars, setAllStars] = useState([])

    const [formInfo, setFormInfo] = useState({
        id: "",
        category: ""

    })

    const history = useHistory();


    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => {
                console.log("Star Wars API INFO ---> ", response.data)
                let results = Object.keys(response.data)
                console.log("Results is this-->", results)
                setAllStars(results)
            })
            .catch(err => console.log(err))
    }, [])


    const changeHandler = (e) => {
        console.log("Changing")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Info Submitted", formInfo)
        axios.get(`https://swapi.dev/api/${formInfo.category}/${formInfo.id}`)
            .then(response => {
                console.log("reposnse from api -->", response)
                history.push(`/${formInfo.category}/${formInfo.id}`)
            })
            .catch(err => console.log(err))
    }





    return (
        <div>
            <form onSubmit={submitHandler} className="">
                <div className="form-group">
                    <select onChange={changeHandler} className="form-control" name="category" id="">
                        <option value="">Select An Option</option>
                        {
                            allStars.map((allStars, i) => {
                                return (
                                    <option key={i} value={allStars}>{allStars}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">ID:</label>
                    <input onChange={changeHandler} className="form-control" type="number" name="id" id="" />
                </div>
                <input type="submit" value="Search" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};



export default StarWars;