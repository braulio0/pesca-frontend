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
    apiGet();
    console.log("hola");
    console.log(User);
  }, []);

  return (
    <>
      <div>
        <User
          Username={data.Username}
          licenseFishing={data.licenseFishing}
          fishing={data.fishing}
          status={data.status}
          clubName={data.clubName}
        />
      </div>
    </>
  );
};

export default withRouter(Test);
