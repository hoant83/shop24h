
import { useEffect, useState } from "react"
import { Card, CardGroup, CardImg, Col, Container } from 'react-bootstrap';
import { CardBody, CardText, CardTitle } from 'reactstrap';
//import product from "../../data.json"

function RelatedProducts ({id}) {
    const [subProduct, setSubProduct] = useState(null)
    // hàm gọi api
    const getData = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    }
    useEffect(() => {
        const subRelatedProducts = []
        getData("http://localhost:8000/products")
        .then((data) => {
            for (let i = 0 ; i< data.products.length ; i++){
                if(data.products[i]._id == id){
                    console.log(data.products[i])
                    for(let j = 0; j < data.products.length; j ++){
                        if(data.products[i].type == data.products[j].type){
                            subRelatedProducts.push(data.products[j])
                        }
                    }
                }
            }
            console.log(subRelatedProducts)
            setSubProduct(subRelatedProducts)
        })
        .catch((error) => {
            console.log(error)
        })
        }, [id])

    return(
        <>
            <Container style={{marginBottom: 40}}>
                    <h2 className='mb-3 mt-5'>Related Products </h2>
                    <CardGroup>
                        {subProduct ? subProduct.map((product, index, products) => (
                            <Col sm={4} md={3} p={2} lg={3} key={product._id}>
                                <Card>
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
                                            <del>{(product.buyPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND</del> <strong className="text-success">{(product.promotionPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND</strong><br></br>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )) : null}
                    </CardGroup>
                </Container>
        </>
    )
}

export default RelatedProducts