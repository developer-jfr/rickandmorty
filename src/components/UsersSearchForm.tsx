import React from "react";
import "./Users.css";
import { Field, Form, Formik } from "formik";
const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

export type FormType = {
  name: string;
  status: string;
  gender: string;
};

type PropsType = {
  onFilterChanged: (filter: FormType) => void;
};

const UsersSearchForm: React.FC<PropsType> = ({ onFilterChanged }) => {
  const submit = (
    values: FormType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    onFilterChanged(values);
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="search-container ">
      <Formik
        enableReinitialize
        initialValues={{ name: "", status: "", gender: "" } as FormType}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="search-form">
              <Field className="search-input" type="text" name="name" />

              <div className='search-select-container'>
                <Field className='search-select' name="status" as="select">
                  <option value="alive">alive</option>
                  <option value="dead">dead </option>
                  <option value="unknown">unknown</option>
                </Field>

                <Field className='search-select' name="gender" as="select">
                  <option value="female">female</option>
                  <option value="male">male </option>
                  <option value="genderless ">genderless </option>
                  <option value="unknown ">unknown </option>
                </Field>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Find
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UsersSearchForm;

{
  /**
  <div className="search-container ">
      <div className="search-form">
        <input type="text" className="search-input" />
        <button>Find</button>
      </div>
    </div>
*/
}
