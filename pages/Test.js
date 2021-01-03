import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css'
import User from './components/user.js'

const Test = ( { users } ) => {
  const [data, setData] = useState([]);
  const api = () => {
    axios.get(`http://localhost:8080/solicitante/${users}`)
    .then(response => {
      console.log(response.data);
      setData(response.data);
    }, error => {
      console.log(error);
  });
}

  useEffect(()=>{
    api()
},[])  // includes empty dependency array

return (
  <>
    <User name={data.name}  CURP={data.CURP} />
  </>
)



}

export default Test;
