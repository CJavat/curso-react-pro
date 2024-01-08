import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';



export const RegisterPage = () => {

  const { name, email, password1, password2, formData, onChange, resetForm, isValidEmail } = useForm({ name: '', email: '', password1: '', password2: '' });

  const onSubmit = ( evt: FormEvent<HTMLFormElement> ) => {
    evt.preventDefault();

    console.log(formData);
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={ (evt) => onSubmit(evt) }>
        <input 
          type="text" 
          placeholder="Name"
          name='name'
          value={ name }
          onChange={ (evt) => onChange(evt) }
          className={` ${ name.trim().length <= 0 && 'has-error' } `}
        />
        { name.trim().length <= 0 && ( <span>Este campo es necesario</span> ) }
        
        <input 
          type="email" 
          placeholder="Email"
          name='email'
          value={ email }
          onChange={ (evt) => onChange(evt) }
          className={` ${ !isValidEmail( email ) && 'has-error' } `}
        />
        { !isValidEmail( email ) && ( <span>Este campo es necesario</span> ) }

        <input 
          type="password" 
          placeholder="Password"
          name='password1'
          value={ password1}
          onChange={ (evt) => onChange(evt) }
          className={` ${ name.trim().length <= 0 && 'has-error' } `}
        />
        { password1.trim().length <= 0 && ( <span>Este campo es necesario</span> ) }
        { password1.trim().length < 6 && password1.trim().length >0 && ( <span>La contraseña debe tener 6 caracteres</span> ) }

        <input 
          type="password" 
          placeholder="Repeat Password"
          name='password2'
          value={ password2}
          onChange={ (evt) => onChange(evt) }
          className={` ${ name.trim().length <= 0 && 'has-error' } `}
        />
        { password2.trim().length <= 0 && ( <span>Este campo es necesario</span> ) }
        { password2.trim().length > 0 && password1 !== password2 && ( <span>La contraseñas deben ser iguales</span> ) }

        <button type='submit'>Create</button>
        <button type='button' onClick={ resetForm }>Reset Form</button>
      </form>
    </div>
  )
}
