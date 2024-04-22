import Product from "./Product.jsx";
import products from '../../src/mock/products.json'
import product from "./Product.jsx";
import styled from "styled-components";
import router from "../router/router.jsx";
import {useNavigate} from "react-router-dom";

const ContainerGrid = styled.div`
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    max-width: 1024px;
    padding: 1em;
`


function GridProducts() {
    let navigate = useNavigate();

    const productsData = product.length > 0 ? products : [];

    const handleOnPressProduct = () => {
        console.log("Holis")
        return navigate("product/1")
    }


    return (
        <ContainerGrid>
            {
                productsData.map((product, index) => (
                    <Product key={index} product={product} onPress={handleOnPressProduct} />
                ))
            }
        </ContainerGrid>
    );
}

export default GridProducts;