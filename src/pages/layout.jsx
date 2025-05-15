import {Outlet, NavLink} from "react-router-dom"
const Layout=()=>{
    return(
        <>
       <div className="container">
       <div className="logo">
        <img src="./logo.png" alt="" />
        <hr color="black"/>
       </div>
        <nav>
            <ul>
               <li>
               <NavLink to="/">Home</NavLink>            
               </li>
              

               <li>
                <NavLink to="/about">About</NavLink>
               </li>
               <li>
                <NavLink to="/adventages">Advantages</NavLink>
               </li>
               <li>
                <NavLink to="/freeclub">freeclub</NavLink>
               </li>
                <li>
               <NavLink to="/contact">Contact</NavLink>            
               </li>
            </ul>
        </nav>
        </div>
        <hr />
        <Outlet/>
        
        </>
    )
}

export default Layout