import styled from 'styled-components/macro';
import BG1 from './img/bg1.png';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConsoleContainer = styled.section`
  width: 90%;
  max-width: 450px;
  background: #9fb4ff;
  min-height: 700px;
  border: 4px solid #000;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ConsoleFrame = styled.div`
  background: #fea9e0;
  margin: 1.75em 1em 0 1em;
  height: 350px;
  width: 90%;
  border: solid 4px #000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottomStyling = styled.div`
  height: 30px;
  background: #fea9e0;
  width: 100%;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  align-self: center;
  border-top: 3px solid #000;

  @media (min-width: 667px) {
    width: 450px;
  }
`;

export const StartButton = styled.button`
  background: transparent;
  border: none;
  width: 150px;
  z-index: 2;
  position: absolute;
  bottom: 7vh;
  left: 2vw;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StartButtonImg = styled.img`
  width: 40vw;
  max-width: 200px;
  position: absolute;
  top: 100px;
  left: -20px;
`;

export const LabelName = styled.label`
  color: #fff;
  text-align: center;
`;
export const Span = styled.span`
  display: block;
  font-size: 20px;

  @media (min-width: 667px) {
    font-size: 28px;
  }
`;

export const GoBackBtn = styled.button`
  background: transparent;
  border: transparent;
  position: absolute;
  top: 416px;
  right: 2vw;

  &:hover {
    transform: scale(1.2);
  }
`;
export const GoBackBtnImg = styled.img`
  padding-bottom: 1em;
  z-index: 2;
`;

export const Logo = styled.img`
  width: 120px;
  position: absolute;
  bottom: 40px;
  right: 10px;
`;

export const ConsoleContent = styled.section`
  background: #fff;
  height: 320px;
  width: 90%;
  border-radius: 10px;
  border: 2px solid;
`;
export const GameText = styled.p`
  font-size: 16px;
  color: #fff;
  padding: 0 0.5em 0.5em;
  text-align: center;

  @media (min-width: 667px) {
    font-size: 18px;
  }
`;

export const GameTextHeader = styled.p`
  font-size: 16px;
  color: #fff;
  padding: 0 0.25em 1em;
  text-align: center;

  @media (min-width: 667px) {
    font-size: 24px;
  }
`;

export const UsernameInput = styled.input`
  height: 20px;
  font-family: inherit;
  margin-top: 0.5em;
  border: 2px solid #202020;
  text-align: center;
  font-size: 16px;
  padding-bottom: 0.25em;

  @media (min-width: 667px) {
    font-size: 20px;
    height: 35px;
  }
`;
export const UsernameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  border-radius: 6px;
  justify-content: center;
  background: url(${BG1});
  background-size: cover;
  height: 100%;
  position: relative;
`;

export const Background = styled.div`
  background: url(${(props) => props.background});
  background-size: cover;
  position: relative;
  height: 95%;
  width: 95%;
  display: flex;
  border: 2px solid #000;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonController = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background: #fff08e;
  border: solid 2px #000;
  padding: 15px;
  border-radius: 50%;
  place-items: center;
  position: absolute;
  top: 375px;
  left: 1vw;
  cursor: pointer;
`;

export const Btn = styled.button`
  background: #ffffff;
  grid-area: ${(props) => props.position};
  width: 10px;
  height: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px #000;
  border-bottom: ${(props) =>
    props.border === 'North' ? ' solid 2px #FFF' : ''};
  border-top: ${(props) => (props.border === 'South' ? ' solid 2px #FFF' : '')};
  border-left: ${(props) => (props.border === 'East' ? ' solid 2px #FFF' : '')};
  border-right: ${(props) =>
    props.border === 'West' ? ' solid 2px #FFF' : ''};
  border-top-left-radius: ${(props) =>
    props.border === 'North' ? ' 5px ' : ''};
  border-top-right-radius: ${(props) =>
    props.border === 'North' ? ' 5px ' : ''};
  border-bottom-right-radius: ${(props) =>
    props.border === 'East' ? ' 5px ' : ''};
  border-top-right-radius: ${(props) =>
    props.border === 'East' ? ' 5px ' : ''};
  border-bottom-left-radius: ${(props) =>
    props.border === 'South' ? ' 5px ' : ''};
  border-bottom-right-radius: ${(props) =>
    props.border === 'South' ? ' 5px ' : ''};
  border-top-left-radius: ${(props) =>
    props.border === 'West' ? ' 5px ' : ''};
  border-bottom-left-radius: ${(props) =>
    props.border === 'West' ? ' 5px ' : ''};
  animation: ${(props) => props.animation} 1s ease-in-out infinite;

  /* &:disabled {
			background: #C573AF;
		} */

  @media (min-width: 667px) {
    width: 25px;
    height: 25px;
    padding: 30px;
  }
`;

export const MiddeBtn = styled(Btn)`
  grid-area: 2/2;
  width: 100%;
  height: 100%;
  position: relative;
  border: solid 2px #fff;

  &::after {
    content: '';
    width: 35px;
    height: 35px;
    background: #000;
    border-radius: 50%;
    position: absolute;
  }

  @media (min-width: 667px) {
    &:after {
      width: 45px;
      height: 45px;
    }
  }
`;

export const Modal = styled.div`
  background: #fff;
  display: ${(props) => (props.text !== '' ? 'inline-block' : 'none')};
  position: absolute;
  text-align: center;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  height: 100px;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0%);
  z-index: 5;
  transform: all 0.4s ease;
`;

export const HistoryArrowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  position: absolute;
  margin: 10px;
  bottom: 0;
`;
export const PlayBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fea9e0;
  border: 2px solid #000;
  position: absolute;
  bottom: 175px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledConfetti = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
