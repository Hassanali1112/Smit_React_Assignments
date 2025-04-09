import React, { useState } from 'react'
import Form from '../../Components/Form/Form'

const Login = () => {

    const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

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
    }]

     const submitHandler = (event) => {
       event.preventDefault();
       console.log( email, password);
       // alert("submit hit")
       setEmail("");
      
       setPassword("");
      
     };
  return (
    <div className="form_Container">
      <form onSubmit={submitHandler}>
        <h2>Sign Up form</h2>
        {fields.map((field, index) => {
          // console.log(field)
          return (
            <Form field={field} index={index} key={index} />
            // <div className="form-group py-2" key={index}>
            //   <label className="text-capitalize" htmlFor={input.id}>
            //     {input.name} :
            //   </label>
            //   <input
            //   value={input.value}
            //   onChange={(e)=>{
            //     input.update(e.target.value)
            //   }}
            //     type={input.type}
            //     className="form-control"
            //     id={input.id}
            //     placeholder={input.name}
            //   />
            // </div>
          );
        })}

        {/* render the button component! */}
        <input type="submit" value={"Submit"} className="btn btn-success" />
      </form>
    </div>
  );
}

export default Login