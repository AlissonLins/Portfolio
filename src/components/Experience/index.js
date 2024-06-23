import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme}) => theme.text_primary};
    @media (max-widht: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme}) => theme.text_secondary};
    @media (max-width:768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const index = () => {
    return <Container>
        <Wrapper>
        <Title>Experiência</Title>
        <Desc>Embora não tenha experiência formal com empresas até o momento, convido você a explorar minha seção de 'Projetos', onde compartilho minhas experiências significativas em projetos acadêmicos e pessoais.</Desc>
        </Wrapper>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </Container>;
};

export default index;