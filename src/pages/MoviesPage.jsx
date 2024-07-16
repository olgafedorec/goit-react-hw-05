import { Field, Form, Formik } from "formik";

export default function HomePage(){
    return (
        <div >
        <Formik>
              <Form>
                <Field type="text" name="query" placeholder="Search movies..."/>
                <button type="submit">Search</button>
              </Form>
            </Formik>
        </div>
    )
}