import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Countries, Licenses, Fishing } from "../constant/info.js";

const SingIn = () => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const router = useRouter();
  // useForm()
  // 1. register -> register input
  // 2. handleSubmit -> extract data from the form
  // 3. errors -> object containing errors
  const { register, handleSubmit, errors } = useForm();
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  // function to output form data
  // we need to pass it to onSubmit of form element
  const onSubmit = (formData) => {
    const user = JSON.stringify(formData);
    setUser(user);
    console.log(user);
    axios
      .post("http://localhost:8080/solicitante/registro", user, axiosConfig)
      .then((res) => {
        console.log(res);
        console.log(res.status);
        res.status === 200 &&
          router.push({
            pathname: "/Test",
            query: { object: user },
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // function to get all clubs on db
  //
  const apiGet = () => {
    var response;
    axios.get(`http://localhost:8080/clubs/`).then(
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
    apiGet();
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            ref={register}
            name="Username"
            type="text"
            className="form-control"
            required
            id="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Direccion</label>
          <input
            ref={register}
            name="address"
            type="text"
            className="form-control"
            id="address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Numero telefonico</label>
          <input
            ref={register}
            name="phone"
            type="number"
            className=" form-control"
            id="phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="RFC">RFC</label>
          <input
            ref={register}
            name="RFC"
            type="text"
            className="form-control text-uppercase"
            id="RFC"
          />
        </div>
        <div className="form-group">
          <label htmlFor="CURP">CURP</label>
          <input
            ref={register}
            name="CURP"
            type="text"
            className="form-control text-uppercase"
            id="CURP"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Codigo Postal</label>
          <input
            ref={register}
            name="zipCode"
            type="number"
            className="form-control"
            id="zipCode"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Estado</label>
          <select name="country" className="form-control" ref={register}>
            {Countries.map((countries) =>
              countries === "" ? (
                <option value={countries}> --Seleccione una-- </option>
              ) : (
                <option value={countries}> {countries}</option>
              )
            )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            ref={register}
            name="email"
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Email</label>
          <input
            ref={register}
            name="password"
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="licenseFishing">Licencias</label>
          <select name="licenseFishing" className="form-control" ref={register}>
            {Licenses.map((license) =>
              license === "" ? (
                <option value={license}> --Seleccione una-- </option>
              ) : (
                <option value={license}> {license} </option>
              )
            )}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fishing">Zona de pesca</label>
          <select name="fishing" className="form-control" ref={register}>
            {Fishing.map((fishing) =>
              fishing === "" ? (
                <option value={fishing}> --Seleccione una-- </option>
              ) : (
                <option value={fishing}> {fishing} </option>
              )
            )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="clubName"> Nombre de Club</label>
          <select name="clubName" className="form-control" ref={register}>
            {data.map(({ name }) => (
              <option value={name}>{name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default SingIn;
