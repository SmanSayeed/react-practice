import { Route, Routes } from "react-router-dom"
import ClientLayout from "./components/client/layout/ClientLayout.jsx"
import AdminLayout from "./components/admin/AdminLayout.jsx"
import Home from "./components/client/Home/Home.jsx"
import Profile from "./components/admin/Profile.jsx"
import Error from "./components/Error.jsx"
import About from "./components/client/About/About.jsx"
import Contact from "./components/client/Contact/Contact.jsx"
import PasswordGenerator from "./components/client/PasswordGenerator/PasswordGenerator.jsx"
import Currency from "./components/client/Currency/Currency.jsx"
import conf from "./conf/conf.js"
import Blog from "./components/client/Blog/Blog.jsx"
import Login from "./components/client/Auth/Login.jsx"
import Register from "./components/client/Auth/Register.jsx"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth.js"
import { login, logout } from "./store/authSlice.js"
import Todo from "./components/client/Todo/Todo.jsx"
import TodoItem from "./components/client/Todo/TodoItem.jsx"
import Counter from "./components/client/Counter/Counter.jsx"
import Store from "./components/client/Store/Store.jsx"
function App() {
// console.log(conf.appwriteUrl)
const [loading,setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(() => {
  authService.getCurrentUser()
  .then(userData=>{
    if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  })
  .catch(err=>console.log("Error getting user from app.js=> ",err))
  .finally(()=>setLoading(false))
}, []);

if(loading) return "Loading...";

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Home/>}>
            <Route path="/" element={<PasswordGenerator/>} />
              <Route path="/password-generator" element={<PasswordGenerator/>} />
              <Route path="/currency" element={<Currency/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/todo" element={<Todo/>} />
              <Route path="/todo/:item" element={<TodoItem/>} />
              <Route path="/counter" element={<Counter/>} />
              <Route path="/store" element={<Store/>} />
              <Route path="*" element={<Error/>} />
            </Route>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
          <Route path="/admin" element={<AdminLayout/> }>
            <Route index element={<Profile/>}/>
          </Route>
          <Route path="*" element={<Error/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
