import React, { useState } from "react";
import Form from "../../Components/Form/Form";
import { supabase } from "../../Utils/config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fields = [
    {
      type: "email",
      value: email,
      update: setEmail,
      name: "email",
      require: true,
      id: "emailInput",
    },
    {
      type: "password",
      value: password,
      update: setPassword,
      name: "password",
      require: true,
      id: "passwordInput",
    },
  ];

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(email, password);

    try {
      const { data, error } = await supabase.auth.getSession();

      if (data) {
        console.log(data);
        window.location.assign("/userdashboard");
      } else{
        throw error
      }
    } catch (error) {
      console.log(error);
    }
    
    setEmail("");

    setPassword("");
  };
  return (
    <div className="form_Container">
      <form onSubmit={submitHandler}>
        <h2>Sign Up form</h2>
        {fields.map((field, index) => {
          
          return <Form field={field} index={index} key={index} />;
        })}

        {/* render the button component! */}
        <input type="submit" value={"Submit"} className="btn btn-success" />
      </form>
    </div>
  );
};

export default Login;
