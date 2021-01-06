import { useState } from "react";
import { useForm } from "react-hook-form";
// also Alert component from bootstrap
//import { Alert } from 'react-bootstrap';

const PortfolioForm = () => {
  const [user, setUser] = useState([]);
  // useForm()
  // 1. register -> register input
  // 2. handleSubmit -> extract data from the form
  // 3. errors -> object containing errors
  const { register, handleSubmit, errors } = useForm();

  // function to output form data
  // we need to pass it to onSubmit of form element
  const onSubmit = (formData) => {
    const user = JSON.stringify(formData);
    setUser(user);
    console.log(user);
  };

  return (
    // pass onSubmit to handleSubmit of hook form
    // when button will be pressed you should see form data
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          // Register input
          ref={register}
          name="name"
          type="text"
          className="form-control"
          id="title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          // Register input
          ref={register}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};
