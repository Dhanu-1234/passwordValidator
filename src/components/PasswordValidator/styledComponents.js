import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(to right, #383a4e, #24263c);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ValidatorCard = styled.div`
  background-color: #475569;
  height: 43%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 300px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-family: 'Roboto';
  font-weight: 500;
  margin: 10px;
`

export const Paragraph = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  margin: 10px;
`

export const PasswordInput = styled.input`
  background-color: #edeeff;
  width: 60%;
  padding: 9px;
  border-width: 0px;
  outline: 0px;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  margin: 5px;
`
