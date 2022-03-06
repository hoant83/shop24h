import { Container, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

function Logo (){
    const navigate = useNavigate();
    const onLogoClick = () => {
        console.log("Logo được click!")
        navigate("/")
    }
    return (
            <Navbar.Brand type="button" onClick={onLogoClick}><h2 className="text-black">Devcamp</h2></Navbar.Brand>
    )
}
export default Logo