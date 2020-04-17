import React, { useState } from 'react';
//import Axios from 'axios';

const SmurfForm = (props) => {
    const [newSmurf, setSmurf] = useState({
        name:"",
        age:"",
        height:""
    });

    const handleChange = (e) => {
        setSmurf({...newSmurf, [e.target.name] : e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.SmurfForm(newSmurf);
        setSmurf({
            name:"",
            age:"",
            height:""
        });
    //     Axios
    //         .post('http://localhost:3333/smurfs', newSmurf)
    //         .then((res) => {
    //             console.log(res);
    //             setSmurf({})
    //         })
    //         .catch(err => console.log(err, 'error with smurfs api'))
 };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
            <input
                name='name'
                type='text'
                onChange={handleChange}
                value={newSmurf.name}
            />
            </label>
            <label>
                Age:
            <input
                name='age'
                type='text'
                onChange={handleChange}
                value={newSmurf.age}
            />
            </label>
            <label>
                Height:
            <input
                name='height'
                type='text'
                onChange={handleChange}
                value={newSmurf.height}
            />
            </label>
            <button type='submit' onClick={handleSubmit}>Summon a Smurf</button>
        </form>
    )
}

export default SmurfForm;