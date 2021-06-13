import React from "react";
import { Field, reduxForm } from "redux-form";

// import styles from "./FormAdmin.module.css";

const LoginForm = (props) => {
  return (
    <form
    onSubmit={props.handleSubmit}
    >
      <div>
        <Field
          placeholder={"Login"}
          name={"login"}
          component={"input"}
          //   onChange={onNewMessageChange}
        />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field
          type={"checkbox"}
          name={"rememberMe"}
          component={"input"}
        />
        Remember me
      </div>
        <button
        //    onClick={onSendMessageClick}
        >
          Login
        </button>
      {/* </div> */}
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

// const AddMessageFormRedux = reduxForm({form: "DialogAddMessageForm"})(FormAdmin);

// export default LoginForm;
export default LoginReduxForm;
