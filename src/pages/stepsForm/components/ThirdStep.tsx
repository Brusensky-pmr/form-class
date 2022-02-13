import {FC, useState} from "react";
import {BaseFlexContainer, ButtonContainer, StyledForm} from "../styles";
import {Input} from "../../../ui/input/Input";
import {InputFile} from "../../../ui/input/InputFile";
import styled from "styled-components";
import {Switch} from "../../../ui/Switch";

interface IProps {
    goBack: () => void;
}

export const ThirdStep: FC<IProps> = ({goBack}) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <StyledForm
            action="#"
            style={{display: "flex", flexDirection: "column", rowGap: "12px"}}
        >
            <fieldset style={{display: "flex", flexDirection: "column", rowGap: "12px"}}>
                <legend>Параметры</legend>
                <Input
                    textError={"required"}
                    inputType={"number"}
                    label={"Количество билетов"}
                    id={"ticketAmount"}
                    name={"ticketAmount"}
                />

                <BaseFlexContainer>
                    <div>Класс</div>
                    <select name="placeClass" id="placeClass">
                        <option value="1">Супер эконом (стоячий)</option>
                        <option value="2">Эконом (табурет)</option>
                        <option value="3">Бизнес (кресло dxRacer)</option>
                    </select>
                </BaseFlexContainer>
                <BaseFlexContainer>
                    <div>Трезвый пилот</div>
                    <Switch value={isChecked} onChange={setIsChecked}/>
                </BaseFlexContainer>
            </fieldset>
            <fieldset>
                <p>В бизнес классе летают только красивые люди.</p>
                <input type="checkbox" id={"beautyTest"}/>
                <label htmlFor="beautyTest">Я красавчик!</label>
                <BaseFlexContainer>
                    <div>Докажите!</div>
                    <InputFile/>
                </BaseFlexContainer>
            </fieldset>

            <ButtonContainer>
                <button onClick={goBack}>Назад</button>
                <BookBtn type="submit">заказать</BookBtn>
            </ButtonContainer>
        </StyledForm>
    );
};
const BookBtn = styled.button`
  background: #ff6f32;
  border: none;
  color: aliceblue;
  font-weight: bold;
  font-size: 20px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;

  :active {
    background: #f54700;
  }
`;
