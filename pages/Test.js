import { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "next/router";
import User from "../components/user.js";

const Test = ({ router: { query } }) => {
  const object = JSON.parse(query.object);
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const api = () => {
    console.log(user);
    axios.get(`http://localhost:8080/solicitante/${object.email}`).then(
      (response) => {
        console.log(response.data);
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <div>
        <User name={data.name} CURP={data.CURP} />
        <h2> FUNCIONA {object.nombre} </h2>
        <h3> FUNCIONE {object.apellido}</h3>
        <h4> hook {user}</h4>
      </div>
    </>
  );
};

export default withRouter(Test);
