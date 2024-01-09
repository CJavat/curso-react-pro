import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyTextInput, MySelect, MyCheckbox } from "../components";

import '../styles/styles.css';

export const FormikAbstractation = () => {

  return (
    <div className="">
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={ ( values ) => {
          console.log( values )
        }}
        validationSchema={ Yup.object({
          firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Campo Obligatorio'),
          lastName: Yup.string()
                        .max(10, 'Debe de tener 10 caracteres o menos')
                        .required('Campo Obligatorio'),
          email: Yup.string()
                    .email('Escribe un email válido')
                    .required("Campo Obligatorio"),
          terms: Yup.boolean()
                    .oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
                      .notOneOf(['it-jr'], 'Esta opción no es permitida')
                      .required("Campo Obligatorio")
        }) }
      >
        { (formik) => (
            <Form>
              <MyTextInput label="First Name" name="firstName" placeholder="Daniel" />

              <MyTextInput label="Last Name" name="lastName" placeholder="Plascencia" />
              
              <MyTextInput label="Email" name="email" type="email" placeholder="test1@gmail.com" />

              <MySelect label={"Job Type"} name={"jobType"}>
                <option value="">Pick Something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">It Senior</option>
                <option value="it-jr">It Jr</option>
              </MySelect>

              <MyCheckbox label="Terms and Conditions" name="terms" />

              <button type='submit'>Submit</button>
            </Form>
          )}
      </Formik>
    </div>
  )
}
