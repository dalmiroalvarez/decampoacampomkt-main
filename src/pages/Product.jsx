import {useState} from "react";
import Sidebar from "../components/Sidebar.jsx";
import {Container} from "./Market.jsx";

import productsJson from '../mock/products.json'
import {useParams} from "react-router-dom";
import styled from "styled-components";
import AccountCard from "../components/AccounCard.jsx";

const TitleProduct = styled.h2`
    color: #1f4c68;
    font-size: 1.8em;
`
const SubTitle = styled.h3`
    color: #3179a7;
    font-size: 1.6em;
`

const Price = styled.h3`
    color: black;
    font-size: 1.6em;
    font-weight: bold;
`

const Button = styled.button`
    color: white;
    background-color: black;
    font-size: 1em;
    padding: 1em 1.2em;
    font-weight: bold;
    margin: 1em 0;
`

const Description = styled.p`
    width: 600px;
    font-size: 1.2em;
`

const LabelInput = styled.label`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const LabelCosto = styled.span`
    margin-left: 0.5em;
    font-weight: bold;
`


function Product() {

    const [withDiscount, setWithDiscount] = useState(true);

    const handleCheckBox = () => {
        setWithDiscount(pre => !pre);
    }

    let {id} = useParams();

    const product = productsJson.find(product => product.id === id);
    const newPrice = withDiscount ? product?.price * 0.90 : product?.price;

    return (
        <Container>
            <Sidebar>
                <AccountCard price={123} type={"Puntos"} color={"#3179a7"}/>
            </Sidebar>
            <div>
                <img src={"../../src/assets/" + product?.image} alt={product?.name} width={300} height={300}/>
            </div>
            <div>
                <TitleProduct>{product?.title}</TitleProduct>
                <SubTitle>{product?.subTitle}</SubTitle>
                <Price>ARS $ {newPrice}</Price>
                <LabelInput>
                    <input type="checkbox" id="cbox1" checked={withDiscount} onChange={handleCheckBox}/> Aplicar
                    descuento 10%<LabelCosto style={{color: "grey"}}> Costo 3000pts</LabelCosto>
                </LabelInput>

                <Button>Comprar</Button>

                <h2>Descripción</h2>
                <Description>{product?.description}</Description>
            </div>
        </Container>
    );
}

export default Product;