import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../footer/Footer";
import ShowInfoProduct from "./ShowInfoProduct";
import BreadcrumDetailPage from "./BreadcrumDetailPage";
import ShowDescriptionProduct from "./ShowDescriptionProduct"
import RelatedProducts from "./RelatedProducts"
function DetailProductPage ({user}) {
    const {id, name} = useParams();
    console.log(id)
    console.log(name)
    const navigate = useNavigate();
    return(
        <>
            <Header user={user}/>
            <br></br>
            <br></br>
            <br></br>
            <BreadcrumDetailPage name={name}/>
            <br></br>
            <br></br>
            <ShowInfoProduct id={id}/>
            <br></br>
            <br></br>
            <ShowDescriptionProduct id={id}/>
            <br></br>
            <RelatedProducts id={id}/>
            <Footer/>
        </>
    )
}

export default DetailProductPage