import Header from "../Header"
import Footer from "../footer/Footer"
import { Container } from "react-bootstrap"
import BreadcrumComponent from "./BreadcrumbComponent"
import ContentComponent from "./categoriesContent/ContentComponent"
function CategoriesProductPage ({user}){
    return (
        <>
            <Container>
                <Header user={user}/>
                <br></br>
                <br></br>
                <br></br>
                <BreadcrumComponent/>
                <br></br>
                <br></br>
                <ContentComponent/>
                <br></br>
            </Container>
            <Footer/>
        </>
    )
}

export default CategoriesProductPage