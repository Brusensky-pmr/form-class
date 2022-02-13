import {BaseSyntheticEvent, FC, useState} from "react";
import {BaseFlexContainer, ButtonContainer, StyledForm} from "../styles";
import {Input} from "../../../ui/input/Input";
import {InputFile} from "../../../ui/input/InputFile";
import styled from "styled-components";
import {Switch} from "../../../ui/Switch";

interface IProps {
    goBack: () => void;
}

export const ThirdStep: FC<IProps> = ({goBack}) => {
    const [state3, setState3] = useState({
        parameters: {
            ticketAmount: 0,
            placeClass: "bitch",
            adequatePilot: false,
        },
        businessCondition: {
            isHandsome: false,
            customerPhoto: "",
        }
    });
    const handleClassChange = (event: BaseSyntheticEvent) => {
        setState3(state => {
            console.log(event.target.value);
            console.log(state);

            return {
                ...state,
                parameters: {
                    ...state.parameters,
                    placeClass: event.target.value,
                }
            }
        })
    }
    const handleVidyatelChange = (value: boolean, event: BaseSyntheticEvent) => {
        setState3(state => {
            console.log(value);
            console.log(state);

            return {
                ...state,
                parameters: {
                    ...state.parameters,
                    adequatePilot: value,
                }
            }
        })
        event.stopPropagation();
    }
    const handleBeautyChange = (event: BaseSyntheticEvent) => {
        setState3(state => {
            console.log(event.target.checked);
            console.log(state);

            return {
                ...state,
                businessCondition: {
                    ...state.businessCondition,
                    isHandsome: event.target.checked,
                }
            }
        })
    }
    const handleSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        const elements = event.target.elements;
        console.log(event.target.elements);
        console.log("placeClass", elements.placeClass.value);
        console.log("isHandsome", elements.isHandsome);
        console.log("customerPhoto", elements.customerPhoto);
        console.log("adequatePilot", elements.adequatePilot.checked);
        console.log("ticketAmount", elements.ticketAmount.value);
        console.log(state3);
    }
    return (
        <StyledForm action="#" onSubmit={handleSubmit}>
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
                    <select name="placeClass" id="placeClass" onChange={handleClassChange}>
                        <option value="bitch">Супер эконом (стоячий)</option>
                        <option value="norm">Эконом (табурет)</option>
                        <option value="cashNotProblem">Бизнес (кресло dxRacer)</option>
                    </select>
                </BaseFlexContainer>
                <BaseFlexContainer>
                    <div>Трезвый пилот</div>
                    <Switch name={"adequatePilot"} value={state3.parameters.adequatePilot}
                            onChange={handleVidyatelChange}/>
                </BaseFlexContainer>
            </fieldset>
            {state3.parameters.placeClass === "cashNotProblem" &&
                <fieldset>
                    <p>В бизнес классе летают только красивые люди.</p>
                    <input type="checkbox" name={"isHandsome"} id={"isHandsome"} onChange={handleBeautyChange}/>
                    <label htmlFor="beautyTest">Я красавчик!</label>
                    {
                        state3.businessCondition.isHandsome && (<>
                            <p/>
                            <BaseFlexContainer>
                                <div>Докажите!</div>
                                <InputFile name={"customerPhoto"}/>
                            </BaseFlexContainer>
                        </>)
                    }
                </fieldset>
            }

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
