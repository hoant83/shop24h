import React from 'react';
import { Button} from '@mui/material';
import { Card, CardGroup, CardImg, Col, Container } from 'react-bootstrap';
import { CardBody, CardText, CardTitle } from 'reactstrap';
import { useNavigate, useParams } from "react-router-dom";
function ProductsListComponent ({productNew}){
    const navigate = useNavigate();
    const onAProductClick = (paramId, paramName) => {
        console.log("Chi tiết sản phẩm đã được click!")
        navigate("/detail-product/" + paramId + "/" + paramName);
    }
    return (
        <Container>
            <CardGroup>
                {productNew.map((product, index, productNew) => (
                    <Col sm={6} md={4} p={4} lg={4} key={product._id} onClick={() => { onAProductClick(product._id, product.name) }}>
                        <Card className='mb-2 ms-2' type="button" title='Click vào để xem chi tiết'>
                            <CardImg
                            alt={product.name}
                            src={product.imageUrl[0]}
                            top="true"
                            width="100%"
                            height="220"
                            />
                            <CardBody>
                            <CardTitle tag="h5">
                                {product.name}
                            </CardTitle>
                            <CardText>
                                <del>{(product.buyPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND</del> <strong className="text-success">{(product.promotionPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND</strong>
                            </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </CardGroup>
        </Container>
    )
}

export default ProductsListComponent