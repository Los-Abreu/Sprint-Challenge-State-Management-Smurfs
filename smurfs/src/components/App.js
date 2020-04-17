import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import SmurfContext from '../context/SmurfContext';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';


export default function App (){
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data)
        setSmurfs(res.data)
      })
      .catch(err => {
        console.log(err, 'error with smurfs')
      })
    }, []);

    const smurfForm = smurf => {
      axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    };

    return (
      <div className="App">
        <SmurfContext.Provider value={{smurfs}}>
        <h1>SMURFS! 2.0 W/ Context</h1>
        <SmurfForm SmurfForm={smurfForm} />
        <SmurfList />
        </SmurfContext.Provider>
      </div>
    );
    }