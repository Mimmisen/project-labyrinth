import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { keyframes } from 'styled-components';
import uniqid from 'uniqid';
import Confetti from './Confetti';
import styled from 'styled-components/macro';
import { navigateGame } from '../reducer/game';
import BG2 from './img/bg2.png';
import BG3 from './img/bg3.png';
import BG4 from './img/bg4.png';
import BG5 from './img/bg5.png';
import BG6 from './img/bg6.png';
import BG7 from './img/bg7.png';
import BG8 from './img/bg8.png';
import arrow from './img/arrow.svg';
import navigator from './img/navigator.svg';

import {
  Background,
  GameText,
  ButtonController,
  Btn,
  MiddeBtn,
  Modal,
  HistoryArrowContainer
} from './Styling';
import Loadingspinner from './Loadingspinner';

const HistoryArrow = styled.img`
  transform: rotate(${(props) => props.rotate});
`;

const Navigator = styled.img`
  transform: scale(0.2);
  position: absolute;
`;

const Labyrinth = () => {
  const [select, setSelect] = useState([]);
  const [prevStep, setPrevStep] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((store) => store.game.items);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      dispatch(navigateGame('move', 'East'));
      setPrevStep('East');
    } else if (e.key === 'ArrowLeft') {
      dispatch(navigateGame('move', 'West'));
      setPrevStep('West');
    } else if (e.key === 'ArrowDown') {
      dispatch(navigateGame('move', 'South'));
      setPrevStep('South');
    } else if (e.key === 'ArrowUp') {
      dispatch(navigateGame('move', 'North'));
      setPrevStep('North');
    }

    setTimeout(() => setPrevStep(''), 1500);
  });

  const onNavigate = (type, direction) => {
    // STORE HISTORY, SELECTED STEPS
    setSelect((prev) => [...prev, direction]);
    // STORE LAST STEP
    setPrevStep(direction);
    //
    dispatch(navigateGame(type, direction));

    setTimeout(() => setPrevStep(''), 1500);
  };

  const changeDirectionToIcon = (way) => {
    if (way === 'North') {
      return <p>N</p>;
    } else if (way === 'South') {
      return <p>S</p>;
    } else if (way === 'East') {
      return <p>E</p>;
    } else if (way === 'West') {
      return <p>W</p>;
    }
  };

  const arrowStyle = (way) => {
    if (way === 'North') {
      return '1/2';
    } else if (way === 'South') {
      return '3/2';
    } else if (way === 'East') {
      return '2/3';
    } else if (way === 'West') {
      return '2/1';
    }
  };

  const btnNavigator = ['North', 'East', 'South', 'West'];

  const filterDirection = items.actions.map((item) => item.direction);

  const filterDisableBtn = () => {
    const newOne = btnNavigator.filter(
      (item) => !filterDirection.includes(item)
    );

    return newOne.map((item) => (
      <Btn border={item} position={arrowStyle(item)} disabled>
        {changeDirectionToIcon(item)}
      </Btn>
    ));
  };

  const activeBtnAnimation = () => {
    return keyframes`
		50% {
			transform: scale(1.05);
			background-color: #A7E8CE;
			z-index: 3;
		}
	`;
  };

  // CHANGE BACKGROUND DEPENDING ON THE ROOM
  const changeBG = () => {
    switch (items.coordinates) {
      case '0,0':
        return BG2;
      case '1,0':
        return BG3;
      case '1,1':
        return BG4;
      case '0,1':
        return BG5;
      case '0,2':
        return BG6;
      case '0,3':
        return BG7;
      case '1,3':
        return BG8;
      default:
        return 'red';
    }
  };

  const historyArrow = (way) => {
    switch (way) {
      case 'South':
        return '180deg';
      case 'West':
        return '-90deg';
      case 'East':
        return '90deg';
      default:
        return '0deg';
    }
  };
  const EndPage = () => {
    if (items.coordinates === '1,3') {
      return <Confetti />;
    } else return <></>;
  };
  return (
    <Background background={changeBG()}>
      <HistoryArrowContainer>
        {select.map((item) => (
          <HistoryArrow
            key={uniqid()}
            rotate={historyArrow(item)}
            src={arrow}
            alt="arrows to show history"
          />
        ))}
      </HistoryArrowContainer>
      <Modal text={prevStep}>
        You chose {prevStep} <Loadingspinner />
      </Modal>
      {EndPage()}
      {items.actions.map((item) => {
        return (
          <div key={uniqid()}>
            <GameText>{item.description}</GameText>
          </div>
        );
      })}
      <Navigator src={navigator} />
      <ButtonController>
        {items.actions.map((item) => {
          return (
            <>
              <Btn
                key={uniqid()}
                border={item.direction}
                position={arrowStyle(item.direction)}
                onClick={() => onNavigate(item.type, item.direction)}
                animation={activeBtnAnimation()}>
                {changeDirectionToIcon(item.direction)}
              </Btn>
            </>
          );
        })}
        {filterDisableBtn()}
        <MiddeBtn></MiddeBtn>
      </ButtonController>
    </Background>
  );
};

export default Labyrinth;
