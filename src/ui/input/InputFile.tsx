import React, {FC} from 'react';
import styled from "styled-components";

interface IProps {
    onChange?: any;
    name?: string;
}

export const InputFile: FC<IProps> = ({onChange, name}) => {
    return (
        <Container>
            <label>Загрузить фото
                <input type="file" name={name} onChange={onChange}/>
            </label>
        </Container>
    );
};

const Container = styled.div`
  & input[type="file"] {
    display: none;
  }
  label {
    background: #000;
    color: #fff;
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
  }
`;