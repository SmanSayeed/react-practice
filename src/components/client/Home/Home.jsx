import { NavLink, Outlet } from "react-router-dom";
import Text from "../common/Text";

export default function Home() {
  return (
    <>
    <div>
    <Text type="title" className="text-center">
        Home
      </Text>
    </div>
    {/* <img src="https://i.ibb.co/m0SH84h/65aa4c80bdac923e99892c82-Group-2734-min-p-2000.png" alt="img" /> */}
    <div className="items" >
      
      <NavLink to="/password-generator" className="item">Password Generator</NavLink>
      <NavLink to="/currency" className="item">Currency Converter</NavLink>
      <NavLink to="/blog" className="item">Blog</NavLink>
      <NavLink to="/todo" className="item">Todo</NavLink>
      <NavLink to="/counter" className="item">Counter</NavLink>
    </div>
     <div className="">
     <Outlet/>
     </div>

    </>
  )
}
