import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";

import formJSON from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJSON) {
  initialValues[ input.name ] = input.value;

  if( !input.validations ) continue;

  let schema = Yup.string();
  
  for (const rule of input.validations) {
    if( rule.type === 'required' ) {
      schema = schema.required("Este campo es requerido");
    }

    if( rule.type === 'minLength' ) {
      schema = schema.min( (rule as any).value || 1, `Minimo de ${ (rule as any).value } caracteres` );
    }

    if( rule.type === 'email' ) {
      schema = schema.email("Escribe un email válido");
    }

    // ... Otras reglas
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={ ( values ) => {
          console.log( values );
        }}
      >
        {( formik ) => (
          <Form noValidate>
            {
              formJSON.map(({ type, name, placeholder, label, options }) => {

                if( type === "input" || type === "password" || type === "email" ) {
                  return <MyTextInput 
                            key={ name }
                            type={ (type as any) } 
                            name={ name } 
                            label={ label } 
                            placeholder={ placeholder } />
                } else if ( type === "select" ) {
                  return <MySelect
                    key={ name }
                    label={ name }
                    name={ name }
                  >
                    <option value="">Select an option</option>
                    {
                      options?.map( opt => (
                        <option key={ opt.id } value={ opt.id }>{ opt.label }</option>
                      ))
                    }
                  </MySelect>
                }

                return <span>{ type } No es compatible</span>
              })
            }
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
