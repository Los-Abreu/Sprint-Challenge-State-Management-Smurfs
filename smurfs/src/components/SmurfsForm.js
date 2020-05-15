import React, {useState, useContext} from 'react'
import SmurfsContext from '../context/SmurfsContext';


function SmurfsForm() {

    const [ smurfForm, setSmurfForm  ] = useState({ name:'', age: 0, height:'' })
    const { postRequest } = useContext(SmurfsContext)


const handleOnchange = (e) => {

    setSmurfForm({...smurfForm, [e.target.name]: e.target.value })

}

const handleSubmit = (e) => {
    e.preventDefault()
    postRequest(smurfForm)
    e.target.reset()

}

    return (

        <form onSubmit={handleSubmit}>
            <h2>Invite a new Smurf</h2>
            <label>
                <input name='name' type='text' values={smurfForm} onChange={handleOnchange} placeholder='name'></input>
            </label>
            <label>
                <input name='age' type='number' values={smurfForm} onChange={handleOnchange} placeholder='age'></input>
            </label>
            <label>
                <input name='height' type='text' values={smurfForm} onChange={handleOnchange} placeholder='height in cm'></input>
            </label>
            <label>
                <button type='submit'>Invite</button>
            </label>
        </form>
    )
}

export default SmurfsForm;