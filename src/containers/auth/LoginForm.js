import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/Auth/AuthForm";
import { check } from "../../modules/admin";
import { changeField, initializeForm, login } from "../../modules/auth";

// import { FaCrown } from "react-icons/fa";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, admin } = useSelector(({ auth, admin }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    admin: admin.admin,
  }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { password } = form;
    dispatch(login({ password }));
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("Error");
      console.log(authError);
      setError("X");
      return;
    }
    if (auth) {
      console.log("Login");
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if(admin){
      try {
        localStorage.setItem('admin', JSON.stringify(admin));
      } catch(e) {
        console.log('localStorage is not working');
      }
    }
  }, [admin])

  return (
    <AuthForm
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;
