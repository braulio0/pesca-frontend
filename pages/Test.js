import { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "next/router";
import User from "../components/user.js";

const Test = ({ router: { query } }) => {
  const object = JSON.parse(query.object);
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const apiGet = () => {
    axios.get(`http://localhost:8080/solicitante/${object.email}`).then(
      (response) => {
        console.log(response.data);
         setData(response.data);
          setUser(data.email);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    //const datos = apiGet(object.email);
    //console.log(datos);
   apiGet()
    //setUser(data.email);
    console.log("hola");
    console.log(User);
  }, []);

  return (
    <>
      <div>
        <User name={data.name} CURP={data.CURP} />
      </div>
    </>
  );
};

export default withRouter(Test);
