import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import { Context } from "../Context";
import firebase from "../firebase";

export default function NewPerson() {
 const { handleClose } = useContext(Context);

 return (
  <div>
   <Formik
    initialValues={{
     name: "",
     profileLink: "",
     interest: "",
     folowersNo: "",
     country: "",
     dataAdded: "",
     note: ""
    }}
    onSubmit={data => {
     firebase
      .firestore()
      .collection("potentialColab")
      .add({
       ...data
      });
     handleClose();
    }}
   >
    {({ values, handleChange, handleSubmit }) => (
     <Form onSubmit={handleSubmit}>
      <Form.Label>Name</Form.Label>
      <Form.Control
       type="text"
       name="name"
       value={values.name}
       onChange={handleChange}
       type="text"
      />
      <Form.Label>Last Name</Form.Label>
      <Form.Control
       name="profileLink"
       value={values.profileLink}
       onChange={handleChange}
       type="text"
      />
      <Form.Label>Interest</Form.Label>
      <Form.Control
       name="interest"
       value={values.interest}
       onChange={handleChange}
       type="text"
      />
      <Form.Label>Folowers NO</Form.Label>
      <Form.Control
       name="folowersNo"
       value={values.folowersNo}
       onChange={handleChange}
       type="text"
      />
      <Form.Label>Country</Form.Label>
      <Form.Control
       name="country"
       value={values.country}
       onChange={handleChange}
       type="text"
      />
      <Form.Label>Data added</Form.Label>
      <Form.Control
       name="dataAdded"
       value={values.dataAdded}
       onChange={handleChange}
       type="text"
      />
      <Form.Label>Note</Form.Label>
      <Form.Control
       name="note"
       value={values.note}
       onChange={handleChange}
       type="text"
      />
      <Button type="submit">sub</Button>
     </Form>
    )}
   </Formik>
  </div>
 );
}
