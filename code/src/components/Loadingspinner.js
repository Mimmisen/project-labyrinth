import React from 'react';
import {
  Container,
  LoadingSpinnerContainer,
  SquareOne,
  SquareTwo,
  SquareThree,
  SquareFour,
  SquareFive
} from '../components/Loadingstyling';

const Loadingspinner = () => {
  return (
    <Container>
      <LoadingSpinnerContainer>
        <SquareOne></SquareOne>
        <SquareTwo></SquareTwo>
        <SquareThree></SquareThree>
        <SquareFour></SquareFour>
        <SquareFive></SquareFive>
      </LoadingSpinnerContainer>
    </Container>
  );
};

export default Loadingspinner;
