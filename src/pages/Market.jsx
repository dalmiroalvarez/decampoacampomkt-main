import AccountCard from "../components/AccounCard.jsx";
import Sidebar from "../components/Sidebar.jsx";
import GridProducts from "../components/GridProducts.jsx";
import styled from "styled-components";
import Logo from "../components/Logo.jsx";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 100vh;
`

const SelectContainer = styled.select`
    padding: 1em;
`
const OptionContainer = styled.option`
    padding: 1em;
`

function Market() {
    return (
        <Container>
            <Sidebar>
                <Logo>Market</Logo>
                <SelectContainer name="drop-down" id="drop-society">
                    <OptionContainer value="1">Sociedad 1</OptionContainer>
                    <OptionContainer value="2">Sociedad 2</OptionContainer>
                </SelectContainer>
                <AccountCard price={"$ 123123.12"} type={"Saldo"} color={"#363a3f"}/>
                <AccountCard price={123} type={"Puntos"} color={"#3179a7"}/>
            </Sidebar>
            <GridProducts/>
        </Container>
    );
}

export default Market;