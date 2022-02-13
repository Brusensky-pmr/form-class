import React from 'react';
import {Aviasales} from "./pages/stepsForm/Aviasales";
import styled from "styled-components";
//Авиасеилз
//Валидация
//DatePicker
//Картинки

export function App() {
    return (
        <Container>
            <h1>Авиасейлс курильщика</h1>
            <FormsContainer>
                <Aviasales/>
            </FormsContainer>
        </Container>
    );
}

const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  overflow: hidden;
`;
const FormsContainer = styled.div`
  width: 350px;
`;
