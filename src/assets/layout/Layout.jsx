import Navbar from "../components/Navigation/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {



    return (
    <>
    <div className=" mb-[110px]">
      <Navbar/>
    </div>


    
        <Outlet/>
    
        

      <Footer/>  
    </>
  )
}
