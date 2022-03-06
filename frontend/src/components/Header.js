import Logo from "./Logo"
import IconNavBar from "./IconNavBar"
import { Container, Navbar } from "react-bootstrap"

function Header ({user}){
    return (
        <Navbar fixed="top">
            <Container>
                <Logo/>
                <IconNavBar user={user}/>
            </Container>
        </Navbar>
    )
}
export default Header