import { NavLink, useNavigate } from "react-router-dom";
import Container from "../common/Container";
import { useSelector } from "react-redux";
import Logout from "../Auth/Logout";

export default function Header() {
  // const authStatus = useSelector(state=>state.auth.status);
  // console.log(authStatus)
  // const navigate = useNavigate();
  const authStatus = true;

  return (
    <>
      <div className="header">
        <Container>
          <div className="header-container">
            <div className="header-content">Header</div>
            <div className="navigation" id="navigation">
              <NavLink to="/"  className="nav-item">Home</NavLink>
              <NavLink to="/about"  className="nav-item">About</NavLink>
              <NavLink  to="/contact" className="nav-item">Contact</NavLink>
              {
                ()=>{
                  if(authStatus){
                    return (
                      <>
                         <NavLink  to="/login" className="nav-item">Login</NavLink>
                         <NavLink  to="/register" className="nav-item">Register</NavLink>
                      </>
                    )
                  }else{
                    return <>
                    <Logout/>
                    </>
                  }
                }
              }
           

            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
