import {NavLink} from "react-router-dom";

const Navbar = () => 
{
const navLinkStyles=({isActive})=>{
  return {
    fontWeight:isActive ? 'bold' : 'normal'
  }
}
  return (
    <nav >      
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li > <NavLink style={navLinkStyles} to={"/"} className="nav-link " aria-current="page">Home</NavLink> </li>
          <li> <NavLink  style={navLinkStyles} to={"/about"} className="nav-link " aria-current="page">About </NavLink> </li>
          <li > <NavLink  style={navLinkStyles} to={"/contact"} className="nav-link " aria-current="page">Contact </NavLink> </li>
             
            </ul>
          
        </nav>
     
  );
};
export default Navbar;
