import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik 
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={ ( values ) => {
          console.log( values )
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
                      .min(2, "Escribe más de 2 caracteres")
                      .max(15, "Escribe menos de 15 caracteres")
                      .required("Este campo es obligatorio"),
            email: Yup.string()
                      .email("Escribe un email válido")
                      .required("Este campo es obligatorio"),
            password1: Yup.string()
                          .min(6, "Escribe mínimo 6 caracteres")
                          .required(),
            password2: Yup.string()
                          .oneOf([Yup.ref('password1')], "Las contraseñas no coinciden")
                          .required("Este campo es obligatorio")
          })
        }
      >
        { ({ handleReset }) => (
          <Form>
            <MyTextInput label='Nombre' name='name' placeholder='Daniel' />
            <MyTextInput label='Email' name='email' placeholder='ejemplo@gmail.com' />
            <MyTextInput label='Password' name='password1' type='password' placeholder='***' />
            <MyTextInput label='Repeat Password' name='password2' type='password' placeholder='***' />
            
            
            <button type='submit'>Create</button>
            <button type='button' onClick={ handleReset }>Reset Form</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
