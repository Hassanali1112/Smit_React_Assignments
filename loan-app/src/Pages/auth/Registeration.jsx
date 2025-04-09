import React, { useState } from 'react'
import Form from '../../Components/Form/Form'
import { Button } from 'react-bootstrap'
import "./auth.css"

const Registeration = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [number, setNumber] = useState('')


  const fields = [
    {
      type: "text",
      value: name,
      update: setName,
      name: "full name",
      requrire: true,
      id: "nameInput",
    },
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
    {
      type: "password",
      value: confPassword,
      update: setConfPassword,
      name: "Confirm password",
      require: true,
      id: "confPasswordInput",
    },
    {
      type: "number",
      value: number,
      update: setNumber,
      name: "number",
      require: true,
      id: "numberInput",
    },
  ];

  const submitHandler = (event) =>{
    event.preventDefault()
    console.log(name,email,password,confPassword,number)
    // alert("submit hit")
    setEmail("")
    setName("")
    setPassword("")
    setConfPassword("")
    setNumber("")

  }

  return (
    <>
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

      
        {/* <Form
          fields={fields}
          submitHandler={submitHandler}
          formText="Registeration Form"
          btnText="Submit"
        /> */}
      

      {/* <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} /> */}
    </>
  );
}

export default Registeration
