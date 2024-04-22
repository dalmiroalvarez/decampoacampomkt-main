import styled from "styled-components";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #3179a7;
    justify-content: center;
    align-items: center;
    padding: 1em;
    max-width: 300px;
    max-height: 350px;

    &:hover {
        background-color: #f3f3f3;
        cursor: pointer;
    }
`
const TitleProduct = styled.p`
    font-size: 1em;
    font-weight: bold;
    margin: 0;
`
const PriceProduct = styled.p`
    font-size: 1.2em;
    font-weight: bold;
`

function Product({product, onPress}) {
    return (
        <ProductContainer onClick={onPress}>
            <img src={"../../src/assets/" + product?.image} alt={product?.title} width={200} height={200}/>
            <TitleProduct>{product?.title}</TitleProduct>
            <PriceProduct>${product?.price}</PriceProduct>
        </ProductContainer>
    );
}

export default Product;