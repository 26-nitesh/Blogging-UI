import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { registerUser, validateUser } from '../Services/userService';
import { Alert } from 'react-bootstrap';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
/* eslint-disable no-restricted-globals */
const styles = {
    backgroundImage: 
"url('https://source.unsplash.com/random/900x900/?wallpaper,landscape')",
    height:'100vh',
    // filter: 'blur(8px)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
function SignUp() {

  const[register,DoReg]= useState(
    {
      name:"",
      email:"",
      password:""
    }   
  )
  const [message, setMessage] = useState("Welcome");
  const [show, setShow] = useState();
  // const updateOnChange = (event)=>{
  //   const name = event.target.name;
  //   DoReg(
  //     {...register,[name]:event.target.value}
  //   )
  // }

  // const  save =  async (e) =>{
  //   //  const msg = registerUser(register);
  // //  const response= await registerUser(register);
  // //     if(response.status==101){
  // //       setMessage("HELLO");
     
  // //     }else if(response.status==102){

  // //       setTimeout(() => {
  // //         setMessage("HELLO");
  // //       }, 500);
  // //     }
  // //     console.log(response);

  const navigate =useNavigate()
  
  // }
  const myFormik = useFormik(
    {
       initialValues:{
        name:"",
        email:"",
        password:"",
        about:""
       },
       onSubmit: async (values)=>{
        console.log(values);
       const response= await registerUser(values);
      if(response.status==101){
        setMessage(response.msg);
        navigate('/sign-up')
        setShow(true)
      }else if(response.status==102){
         setShow(true)
         setMessage(response.msg);
         navigate('/sign-up')
        // setTimeout(() => {
        //   setMessage("GELLO");
        // }, 500);
      }
      console.log(response);
        //after submit to clear form  -------->provide value to each field also( value={myFormik.values.email})
      myFormik.resetForm();
      }
    }
  );
  return (
    <div>

  <div className="alert alert-warning alert-dismissible fade show mt-5" role="alert">
  <strong>{message}</strong>
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
 
        <div className="d-flex justify-content-center mt-5">
        {/* <h2 id='u'className='mt-5'>{message}</h2> */}
        <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
     <Form className='bg-light mt-4' onSubmit={myFormik.handleSubmit} >
     <h2 className='mb-3 text-center text-success'>Sign Up</h2>
     <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" value={myFormik.values.name} onChange={myFormik.handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address/User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" name ="email" value={myFormik.values.email} onChange={myFormik.handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name ="password" value={myFormik.values.password} onChange={myFormik.handleChange} />
      </Form.Group>
      <Form.Label>About</Form.Label>
        <Form.Control type="text" name='about' value={myFormik.values.about} onChange={myFormik.handleChange}/>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Agree T&C"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUp
      </Button>
      <Button className='m-2' variant="warning" type="reset">
        Reset
      </Button>
    </Form>
     </div>
    </div>
    
      </div>
 
  );
}

export default SignUp;