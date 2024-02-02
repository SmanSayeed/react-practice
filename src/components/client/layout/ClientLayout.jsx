import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import '../clientStyle.css'
import Container from "../common/Container";
export default function ClientLayout() {
  return (
    <>
    <Header/>
    <Container>
        <div className="content-body">
        <Outlet/>
        </div>
    </Container>

    <Footer/>

    </>
  )
}
