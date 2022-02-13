import styled from "styled-components";

export const BaseFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled(BaseFlexContainer)`
  column-gap: 10px;

  & > button {
    flex: 1;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;