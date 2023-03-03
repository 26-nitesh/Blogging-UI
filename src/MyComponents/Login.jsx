import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { getAllUser, login, registerUser, validateUser } from '../Services/userService';
/* eslint-disable no-restricted-globals */
const styles = {
    backgroundImage: 
"url('https://source.unsplash.com/random/1920x1080/?wallpaper,landscape')",
    height:'100vh',
    // filter: 'blur(8px)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
//    doing with states


const Login = () =>{
//   const [user,setUser] = useState(
//     {
//       email:"",
//       password:""
//     }        
// ) 

// const update = (event)=>{
//   const name = event.target.name;
//  setUser(
//   {...user,[name]:event.target.value}
//  );
//   //  console.log(event.target.name);
// }

// const save = ()=> {
//   console.log(user)
// }

/////////////////////----------->>>>> with formik
const navigate =useNavigate();
const myValidation = yup.object(
  {
    email:yup.string().required("required !!"),
    password:yup.string().required("required !!")
  }
)

const myFormik = useFormik(
  {
     initialValues:{
      email:"",
      password:""
     },
     validationSchema:myValidation,
     onSubmit:async (values)=>{
       const response = await login(values);
       console.log(response);
    if(response.status==111){
      navigate('/user/dashboard');
    }else if(response.status==112){

    }else{

    }
      //after submit to clear form  -------->provide value to each field also( value={myFormik.values.email})
   
    }
  }
);
////////////////
  return (
    <div>
        <div className="d-flex justify-content-center mt-5">
        <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
     <Form className='bg-light mt-4' onSubmit={myFormik.handleSubmit}>
     <h2 className='mb-3 text-center text-success'>Login</h2>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={myFormik.values.email} error={myFormik.touched.email && Boolean(!myFormik.errors.email)} onChange={myFormik.handleChange}/>
        <Form.Text className="text-danger">
        {myFormik.errors.email}
        </Form.Text>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name ="password" error={myFormik.touched.password && Boolean(!myFormik.errors.password)} value={myFormik.values.password} onChange={myFormik.handleChange} />
        <Form.Text className="text-danger">
        {myFormik.errors.password}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Agree T&C" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <a href='/sign-up'>Don't have account?signUp</a>
    </Form>
     </div>
    </div>
      </div>
 
  );
}

export default Login;