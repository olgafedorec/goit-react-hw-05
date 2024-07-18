import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export default function TitleFilter({  onFilter }) {
    return (
        <div >
        <Formik
           initialValues={{ query: "" }}
           onSubmit={(values, actions) => {
            if(!values.query.trim()) {
                toast.error('This field can not be empty!');
                return;
              }
               onFilter(values.query);
               actions.resetForm();
           }}>
              <Form>
                <Field 
                type="text" 
                name="query"  
                placeholder="Search movies..."/>
                <button type="submit">Search</button>
                <ErrorMessage/>
              </Form>
            </Formik>
        </div>
    )
}