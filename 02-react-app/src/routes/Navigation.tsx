import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstractation, RegisterFormikPage, DynamicForm } from "../03-forms/pages";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo" />

          <ul>
            <li>
              <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik-page" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={ <RegisterPage /> } />
          <Route path="/register-formik-page" element={ <RegisterFormikPage /> } />
          <Route path="/formik-basic" element={ <FormikBasicPage /> } />
          <Route path="/formik-yup" element={ <FormikYupPage /> } />
          <Route path="/formik-components" element={ <FormikComponents /> } />
          <Route path="/formik-abstractation" element={ <FormikAbstractation /> } />
          <Route path="users" element={ <h1>Users Page</h1> } />
          <Route path="/dynamic-form" element={ <DynamicForm /> } />

          <Route path="/*" element={ <Navigate to="/home" replace /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
