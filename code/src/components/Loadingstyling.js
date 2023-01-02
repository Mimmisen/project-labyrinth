import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadingSpinnerContainer = styled.div`
  --square: 13px;
  --offset: 15px;

  --duration: 2.4s;
  --delay: 0.2s;
  --timing-function: ease-in-out;

  --in-duration: 0.4s;
  --in-delay: 0.1s;
  --in-timing-function: ease-out;

  width: calc(3 * var(--offset) + var(--square));
  height: calc(2 * var(--offset) + var(--square));
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 30px;
  position: relative;

  div {
    display: inline-block;
    background: #905efc;
    border: none;
    width: var(--square);
    height: var(--square);
    position: absolute;
    padding: 0px;
    margin: 0px;
    font-size: 6pt;
    color: black;
  }
`;

export const SquareOne = styled.div`
  left: calc(0 * var(--offset));
  top: calc(0 * var(--offset));
  animation: square1 var(--duration) var(--delay) var(--timing-function)
      infinite,
    squarefadein var(--in-duration) calc(1 * var(--in-delay))
      var(--in-timing-function) both;

  @keyframes square1 {
    0% {
      left: calc(0 * var(--offset));
      top: calc(0 * var(--offset));
    }
    8.333% {
      left: calc(0 * var(--offset));
      top: calc(1 * var(--offset));
    }
    100% {
      left: calc(0 * var(--offset));
      top: calc(1 * var(--offset));
    }
  }

  @keyframes squarefadein {
    0% {
      transform: scale(0.75);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const SquareTwo = styled.div`
  left: calc(0 * var(--offset));
  top: calc(1 * var(--offset));
  animation: square2 var(--duration) var(--delay) var(--timing-function)
      infinite,
    squarefadein var(--in-duration) calc(1 * var(--in-delay))
      var(--in-timing-function) both;

  @keyframes square2 {
    0% {
      left: calc(0 * var(--offset));
      top: calc(1 * var(--offset));
    }
    8.333% {
      left: calc(0 * var(--offset));
      top: calc(2 * var(--offset));
    }
    16.67% {
      left: calc(1 * var(--offset));
      top: calc(2 * var(--offset));
    }
    25.00% {
      left: calc(1 * var(--offset));
      top: calc(1 * var(--offset));
    }
    83.33% {
      left: calc(1 * var(--offset));
      top: calc(1 * var(--offset));
    }
    91.67% {
      left: calc(1 * var(--offset));
      top: calc(0 * var(--offset));
    }
    100% {
      left: calc(0 * var(--offset));
      top: calc(0 * var(--offset));
    }
  }

  @keyframes squarefadein {
    0% {
      transform: scale(0.75);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
export const SquareThree = styled.div`
  left: calc(1 * var(--offset));
  top: calc(1 * var(--offset));
  animation: square3 var(--duration) var(--delay) var(--timing-function)
      infinite,
    squarefadein var(--in-duration) calc(2 * var(--in-delay))
      var(--in-timing-function) both;

  @keyframes square3 {
    0%,
    100% {
      left: calc(1 * var(--offset));
      top: calc(1 * var(--offset));
    }
    16.67% {
      left: calc(1 * var(--offset));
      top: calc(1 * var(--offset));
    }
    25.00% {
      left: calc(1 * var(--offset));
      top: calc(0 * var(--offset));
    }
    33.33% {
      left: calc(2 * var(--offset));
      top: calc(0 * var(--offset));
    }
    41.67% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }
    66.67% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }
    75.00% {
      left: calc(2 * var(--offset));
      top: calc(2 * var(--offset));
    }
    83.33% {
      left: calc(1 * var(--offset));
      top: calc(2 * var(--offset));
    }
    91.67% {
      left: calc(1 * var(--offset));
      top: calc(1 * var(--offset));
    }
  }

  @keyframes squarefadein {
    0% {
      transform: scale(0.75);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const SquareFour = styled.div`
  left: calc(2 * var(--offset));
  top: calc(1 * var(--offset));
  animation: square4 var(--duration) var(--delay) var(--timing-function)
      infinite,
    squarefadein var(--in-duration) calc(3 * var(--in-delay))
      var(--in-timing-function) both;
  @keyframes square4 {
    0% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }
    33.33% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }
    41.67% {
      left: calc(2 * var(--offset));
      top: calc(2 * var(--offset));
    }
    50.00% {
      left: calc(3 * var(--offset));
      top: calc(2 * var(--offset));
    }
    58.33% {
      left: calc(3 * var(--offset));
      top: calc(1 * var(--offset));
    }
    100% {
      left: calc(3 * var(--offset));
      top: calc(1 * var(--offset));
    }
  }

  @keyframes squarefadein {
    0% {
      transform: scale(0.75);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
export const SquareFive = styled.div`
  left: calc(3 * var(--offset));
  top: calc(1 * var(--offset));
  animation: square5 var(--duration) var(--delay) var(--timing-function)
      infinite,
    squarefadein var(--in-duration) calc(4 * var(--in-delay))
      var(--in-timing-function) both;

  @keyframes square5 {
    0% {
      left: calc(3 * var(--offset));
      top: calc(1 * var(--offset));
    }
    50.00% {
      left: calc(3 * var(--offset));
      top: calc(1 * var(--offset));
    }
    58.33% {
      left: calc(3 * var(--offset));
      top: calc(0 * var(--offset));
    }
    66.67% {
      left: calc(2 * var(--offset));
      top: calc(0 * var(--offset));
    }
    75.00% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }
    100% {
      left: calc(2 * var(--offset));
      top: calc(1 * var(--offset));
    }
  }

  @keyframes squarefadein {
    0% {
      transform: scale(0.75);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
