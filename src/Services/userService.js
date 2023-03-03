import axios from "axios";

const url ="http://localhost:4000/user";
const backendUrl="http://localhost:2626/blogging-backend/api/create-user";

const RESPONSE = {
  msg:"",
  status:0
} 

export const registerUser = async (user)=>{
    const y =axios.post(backendUrl,user);
    y.then(()=>{
        console.log("okk");

    }).catch(()=>{
        console.log("tyutr");
    })

const checkIfAlreadyExist =await validateUser(user.email);
console.log(checkIfAlreadyExist.data);
    if(checkIfAlreadyExist.data.length>0)
    {
      RESPONSE.status=101;
      console.log(checkIfAlreadyExist.data.length);
      RESPONSE.msg='User with this email already exist Kindly login or try different email';
      return RESPONSE;
    }
    else
    {
      const register=await doReg(user);
      RESPONSE.status=102
      RESPONSE.msg='Register Sucessfully Kindly Login';
      return RESPONSE;
    }
  
    };

async function doReg(user){
  try{
   const res = await axios.post(url,user);
   return res;
  }catch(err){
     
  }
}

export const login= async(user)=>{
  console.log(user.email);
      const response = await validateUser(user.email);
      if(response.data.length!=0){
        console.log(response.data.length);
        if(response.data[0].password==user.password){
          RESPONSE.msg=response.data[0].name;;
          RESPONSE.status=111
        }else{
          RESPONSE.msg=""
          RESPONSE.status=112
        }
      }
      return RESPONSE;
}

export async function  validateUser(email) {
    try {
        const userUrl=url+'?email='+email;
      const response = await axios.get(userUrl);
      return response;
    } catch (error) {
      console.error(error);
    }
  }