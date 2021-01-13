import axios from 'axios';

export const apiGet = (email) => {
    axios.get(`http://localhost:8080/solicitante/${email}`).then(
      (response) => {
        console.log(response.data);
       // setData(response.data);
      //  setUser(data.email);
      return (response.data);
      },
      (error) => {
        console.log(error);
        return (error);
      }
    );
  };


