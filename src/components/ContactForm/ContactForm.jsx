import css from './ContactForm.module.css';
import { useState } from "react";
import { useId } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'

export default function ContactForm({ onAddContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{7,15}$/,
      'Number must contain only digits and be between 7 and 15 characters'
    )
    .required('Number is required'),
});

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.formContact}>
          <label htmlFor={nameFieldId} className={css.labelContact}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
            required
          />
          <ErrorMessage name="name" component="div" className={css.errorMessage} />

          <label htmlFor={numberFieldId} className={css.labelContact}>Number</label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={numberFieldId}
            required
          />
          <ErrorMessage name="number" component="div" className={css.errorMessage} />

          <button className={css.buttonAdd} type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
}