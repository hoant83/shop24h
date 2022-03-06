import { Col, Container, Row } from "reactstrap"
import InfoFooter1 from "./InfoFooter1"
import InfoFooter2 from "./InfoFooter2"
import InfoFooter3 from "./InfoFooter3"
import SocialFooter from "./SocialFooter"
function Footer (){
    return(
        <Container fluid className="bg-light">
            <Container>
                <Row>
                    <Col sm="3">
                        <InfoFooter1/>
                    </Col>
                    <Col sm="3">
                        <InfoFooter2/>
                    </Col>
                    <Col sm="3">
                        <InfoFooter3/>
                    </Col>
                    <Col sm="3" className="mt-4 text-center">
                        <SocialFooter className="text-black"/>
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}
export default Footer