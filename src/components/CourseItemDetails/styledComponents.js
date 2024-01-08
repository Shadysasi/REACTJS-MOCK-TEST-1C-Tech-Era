import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
`
export const CourseItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 80%;
`
export const CourseImgContainer = styled.div``
export const CourseItemImg = styled.img`
  width: 300px;
  margin-right: 20px;
`
export const CourseDescription = styled.div``
export const CourseItemHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  color: #1e293b;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #475569;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  height: 400px;
  width: 400px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 42px;
  font-weight: bold;
  color: #1e293b;
`
export const FailureText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #64748b;
`
export const RetryBtn = styled.button`
  color: #ffffff;
  background-color: #4656a1;
  font-size: 16px;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
`
