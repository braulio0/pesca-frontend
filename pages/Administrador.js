import { useState, useEffect } from "react";
import { withRouter } from "next/router";
import axios from "axios";
import ListUser from "./../components/listUsers";

const Administrador = () => {
  const [user, setUser] = useState([]);
  const apiGet = () => {
    axios.get(`http://localhost:8080/solicitante/`).then(
      (response) => {
        console.log(response.data);
        setUser(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    apiGet();
    console.log(user);
  }, []);

  return (<>
          <ListUser data={ user }/>
    </>);
};
export default withRouter(Administrador);
