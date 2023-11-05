import React, { forwardRef, useImperativeHandle } from "react";
import "./form.css";
import { useFormik } from "formik";
import checkIP from "../../services/ipCheckService";

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "le nom et le prenom est exigé";
  }
  if (!values.intention) {
    errors.intention = "l'intention est exigé";
  }

  return errors;
}

const Form = forwardRef((props, ref) => {
  
   const formik = useFormik({
    initialValues: {
      name: "",
      intention: "",
    },
    validate,
    onSubmit: async (values) => {
      // console.log(values);
      try {
        const isIpValid = await checkIP();
        if (isIpValid) {
          alert("OK");
        } else {
          alert("KO");
        }
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    },
  });
  useImperativeHandle(ref, () => ({
    submit: () => {
      formik.handleSubmit();
    },
  }));

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="d-flex flex-column pb-4 w-auto">
        <label htmlFor="name">Nom et Prénom :</label>
        <input
          className="bg-transparent border border-2 border-end-0 border-start-0 border-top-0 border-white"
          type="text"
          id="name"
          name="name"
          placeholder="Jeal"
          onChange={formik.handleChange}
          value={formik.values.name}
          required
        />
        {formik.errors.name ? (
          <div className="text-danger mt-2">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="d-flex flex-column pb-4 w-auto">
        <label htmlFor="intention">Mon Intention :</label>
        <span className="text-white pb-2 text-opacity-75">
          l'intention, l'objectif de ce Shynlei
        </span>
        <input
          className="bg-transparent border border-2 border-end-0 border-start-0 border-top-0 border-white"
          type="text"
          id="intention"
          name="intention"
          placeholder="Mon rêl"
          onChange={formik.handleChange}
          value={formik.values.intention}
          required
        />
        {formik.errors.intention ? (
          <div className="text-danger mt-2">{formik.errors.intention}</div>
        ) : null}
      </div>
    </form>
  );
});

export default Form;
