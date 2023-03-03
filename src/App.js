import Footer from "./MyComponents/Footer";
import HeadNav from "./MyComponents/HeadNav";
import Login from "./MyComponents/Login";
import SignUp from "./MyComponents/signUp";
import Home from "./MyComponents/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import DashBoard from "./MyComponents/DashBoard";



function App() {
  return (
    <div>
  <HeadNav/>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      <Route path="/user/dashboard" element={<DashBoard></DashBoard>}></Route>
    </Routes>
  </BrowserRouter>
 {/* <Home/> */}
 {/* <Login/>
 <SignUp/> */}
   <Footer/>
    </div>
//  <div>
// <DashBoard></DashBoard>
// <Footer/>
// </div>
  );
}

export default App;
