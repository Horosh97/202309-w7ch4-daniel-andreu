import styled from "styled-components";

const SlothFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .form {
    &__container {
      display: flex;
      gap: 20px;
      font-size: 1.4rem;
    }

    &__label {
      color: ${({ theme }) => theme.colours.main};
    }

    &__input {
      border-radius: 10px;
      font-size: inherit;
      color: ${({ theme }) => theme.colours.main};
      border: 2px #c6855a solid;
    }
  }

  .button {
    color: ${({ theme }) => theme.colours.main};
    padding: 20px;
    font-size: 1.6rem;
    border-radius: 10px;
  }
`;

export default SlothFormStyled;
