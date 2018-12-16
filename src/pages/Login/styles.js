import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 30%;
  padding-right: 30%;
  padding-bottom: 20%;
`;

export const Box = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Password: styled.div`
    margin-top: 5px;
    margin-bottom: 10px;
  `
}
