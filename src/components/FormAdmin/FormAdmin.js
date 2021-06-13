import React from "react";
import { Field, reduxForm } from "redux-form";

// import styles from "./FormAdmin.module.css";

const FormAdmin = (props) => {
  return (
    // <div className={styles.formAdmin}>
    //   <h2>Hello from FormAdmin</h2>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Title"} name={"title"} component={"input"} />
      </div>
      <div>
        <Field
          placeholder={"Description"}
          name={"description"}
          component={"textarea"}
        />
      </div>
      <div>
        <Field
          placeholder={"TextContent"}
          name={"textContent"}
          component={"textarea"}
        />
      </div>
      {/* <div>
              <Field placeholder={"Description"} name={"d escription"} component={"input"}/>
          </div> */}
      <div><button>Enter new data</button></div>
    </form>
    // </div>
  );
};

const AddHomeContentFormRedux = reduxForm({ form: "HomeContent" })(
  FormAdmin
);

// export default FormAdmin;
export default AddHomeContentFormRedux;
