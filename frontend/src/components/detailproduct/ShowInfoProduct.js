import { Container, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"
import { Col, Row } from "reactstrap"
import product from "../../data.json"
import { Card, CardImg, Button } from 'react-bootstrap';
import { CardBody,CardGroup, CardText, CardTitle } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import anh2 from "../../assets/images/anh2.png"
import anh3 from "../../assets/images/anh3.png"
import anh4 from "../../assets/images/anh4.jpg"
function ShowInfoProduct({id}) {
    const [subProduct, setSubProduct] = useState(null)
    const [indexProduct, setIndexProduct] = useState(-1)
    const [activeIndex, setActiveIndex] = useState(0)
    const [srcBigImg, setSrcBigImg] = useState("")
    const [amount, setAmount] = useState(1)

    // hàm gọi api
    const getData = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    }

    const onSubImgClick = (index) => {
        setActiveIndex(index)
        setSrcBigImg(subProduct ? subProduct.imageUrl[index] : null)
    }
    const onTruClick =() => {
        if(amount===1){
            setAmount(1)
        }
        else(
            setAmount(amount - 1)
        )
    }
    const onCongClick =() => {
        setAmount(amount + 1)
    }
    useEffect(() => {
        // console.log(subProduct)
        // for (let i = 0 ; i< product.length ; i++){
        //     if(parseInt(product[i].id) === parseInt(id)){
        //         console.log(product[i])
        //         setSubProduct(product[i])
        //         setSrcBigImg(product[i] ? product[i].imageUrl[0] : null)
        //     }
        // }
        // gọi api lấy thông tin tất cả products
        getData("http://localhost:8000/products/" + id)
        .then((data) => {
            console.log(data.product)
            setSubProduct(data.product)
            setSrcBigImg(data.product ? data.product.imageUrl[0] : null)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id])
    return (
        <>
            <Container>
                <Row>
                    <Col sm="12">
                        <Row>
                            <Col sm="4">
                                <Row className="mt-5">
                                    <Col sm="12" className="mt-4">
                                        <div className="details">
                                            <img key="big-image" style={{width: "100%", height: 220}} src={srcBigImg}/>
                                            <div className="box">
                                                <div className="thumb">
                                                {subProduct ? subProduct.imageUrl.map((subImage, index, subProduct) => (
                                                    index === activeIndex ? <img key={index} src={subImage} className="active" onClick={() => { onSubImgClick(index) }}/> 
                                                    : <img key={index} src={subImage} onClick={() => { onSubImgClick(index) }}/>
                                                )) 
                                                : null
                                                }
                                                </div>
                                            </div>
                                        </div>   
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="8" >
                                <Row className="ms-4">
                                    <Col sm="12" className="ms-5 mb-3">
                                        <h2>{subProduct ? subProduct.name.toUpperCase() : null}</h2>
                                    </Col>
                                    <Col sm="12" className="ms-5 mb-3">
                                        {subProduct ? <p><strong>Brand:</strong> {subProduct.type}-{subProduct._id}</p> : null}
                                    </Col>
                                    <Col sm="12" className="ms-5 mb-3">
                                        <p><strong>Rated: </strong><FontAwesomeIcon className="text-warning ms-2 mr-2" icon={faStar}/>
                                        <FontAwesomeIcon className="text-warning ms-1 mr-1" icon={faStar}/>
                                        <FontAwesomeIcon className="text-warning ms-1 mr-1" icon={faStar}/>
                                        <FontAwesomeIcon className="text-warning ms-1 mr-1" icon={faStar}/>
                                        <FontAwesomeIcon className="text-warning ms-1 mr-1" icon={faStar}/>
                                        </p>
                                    </Col>
                                    <Col sm="12" className="ms-5 mb-3">
                                        {subProduct ? <p><strong>Description:</strong> {subProduct.Description}</p> : null}
                                    </Col>
                                    <Col sm="12" className="ms-5 mb-3">
                                        {subProduct ? <p><strong>Price:</strong> <strong className="text-danger" style={{fontSize: 30}}>{(subProduct.promotionPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} vnđ</strong></p> : null}
                                    </Col>
                                    <Col sm="12" className="ms-5 mb-4">
                                        <Button onClick={onTruClick} className="bg-secondary" style={{width: 40, height: 40}}>-</Button> <strong className="ms-3">{amount}</strong> <Button onClick={onCongClick} className="bg-secondary ms-3" style={{width: 40, height: 40}}>+</Button>
                                    </Col>
                                    <Col sm="12" className="ms-5 mb-3">
                                        <Button className="bg-dark">Add to card</Button>
                                    </Col>
                                </Row>
                                
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default ShowInfoProduct