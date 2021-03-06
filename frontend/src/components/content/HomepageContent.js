import { Button} from '@mui/material';
import { Container, Navbar} from "react-bootstrap"
import React from 'react';
import CarouselComponent from "./CarouselComponent"
import LastestProducts from "./LastestProducts"
import ViewAll from "./ViewAll"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function HomepageContent (){
    const [products, setProducts] = useState([]);
    const [hideAllViewAfterClick, setHideAllViewAfterClick] = useState("block")
    const navigate = useNavigate();

    const goToCategoriesProductPage = () => {
        console.log("nút chuyển trang đến danh mục sản phẩm được click")
        navigate("/categoriesproductpage");
    }
    // hàm gọi api
    const getData = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    }
    const onViewAllClick = () => {
        // gọi api lấy thông tin tất cả products
        getData("http://localhost:8000/products")
            .then((data) => {
                console.log(data.products)
                setProducts(data.products);
                setHideAllViewAfterClick("none")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    useEffect(() => {
        setHideAllViewAfterClick("block")
        // gọi api lấy thông tin tất cả products
        getData("http://localhost:8000/products?limit=4&skip=4")
            .then((data) => {
                console.log(data.products)
                setProducts(data.products);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <>  
            <Navbar fixed='bottom'>
                <Container>
                    <Button onClick={goToCategoriesProductPage} className='btn bg-success text-white' >Go to Products Page</Button>
                </Container>
            </Navbar>
            <CarouselComponent/>
            <LastestProducts products={products}/>
            <div style={{display: hideAllViewAfterClick}} className="text-center mt-5 mb-5">
                <ViewAll onViewAllClick = {onViewAllClick}/>
            </div>
            
        </>
            
    )   

}  

  

export default HomepageContent