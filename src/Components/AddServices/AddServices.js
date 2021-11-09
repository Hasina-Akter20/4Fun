import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://blooming-badlands-12704.herokuapp.com/services", data).then((res) => {
      if (res.data.insertedId) {
        reset();
      }
    });
  };
  return (
    <div className="mt-5 pt-5">
      <h1 className="title-color">Please add a service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          className="service-input"
          placeholder="Title"
          required
        />
        <br />
        <input
          {...register("details")}
          className="service-input"
          placeholder="details"
          required
        />{" "}
        <br />
        <input
          type="number"
          {...register("price")}
          placeholder="Price"
          className="service-input"
          required
        />
        <br />
        <input
          {...register("img")}
          className="service-input"
          placeholder="image-url"
          required
        />{" "}
        <br />
        <input type="submit" className="service-input mb-5" />
      </form>
    </div>
  );
};

export default AddServices;
