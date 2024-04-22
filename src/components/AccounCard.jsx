import styled from "styled-components";
import Wallet from "../icons/wallet.jsx";

const AccountCardContainer = styled.div`
    display: flex;
    background-color: ${props => props.color};
    padding: 1em;
    flex-direction: row;
    gap: 16px;
    border-radius: 16px;
    justify-content: start;
    align-content: center;

    &:hover {
        opacity: 0.8;
    }
`
const Title = styled.p`
    font-size: 1em;
    color: white;
    margin: 0;
`
const SubTitle = styled.p`
    font-size: 1.2em;
    color: white;
    font-weight: bold;
    margin: 0;
`


function AccountCard({price, type, color}) {
    return (
        <AccountCardContainer color={color}>
            <Wallet/>
            <div>
                <Title>{type}</Title>
                <SubTitle>{price}</SubTitle>
            </div>
        </AccountCardContainer>
    );
}

export default AccountCard;