import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from "react";

import game from '../reducer/game'
import Game from './Game'
import Labyrinth from './Labyrinth'
import pause from './img/pause.svg'
import Polygon from './img/Polygon.svg'

import ReturnBtn from './img/returnbtn.svg'
import Logotype from './img/logo.png'
import Music from './img/music.mp3'
import {
	MainWrapper,
	ConsoleContainer,
	ConsoleFrame,
	BottomStyling,
	GoBackBtnImg,
	GoBackBtn,
	PlayBtn,
	Logo,
} from './Styling'

const StartPage = () => {
	const [playMusic, setPlayMusic] = useState(false)
	const items = useSelector((store) => store.game.items)
	const dispatch = useDispatch()

	const onRestartClick = () => {
		dispatch(game.actions.restartGame())
	}

	// BACKGROUND MUSIC
	const audioPlaye = useRef();

	const controlMusic = () => {
		   
		    const prevValue = playMusic;
		    setPlayMusic(!prevValue);	
			
			if (!prevValue) {
				audioPlaye.current.play();
			} else {
				audioPlaye.current.pause();
			}
		}


	


	return (
		<MainWrapper>
			<audio ref={audioPlaye} src={Music}/>
			<ConsoleContainer>
				<ConsoleFrame>{items ? <Labyrinth /> : <Game />}</ConsoleFrame>
				<GoBackBtn type='button' onClick={onRestartClick}>
					<GoBackBtnImg src={ReturnBtn} alt='click to restart'></GoBackBtnImg>
				</GoBackBtn>
				<PlayBtn onClick={controlMusic}><img src={playMusic ? Polygon : pause} /></PlayBtn>
				<Logo src={Logotype}></Logo>
				<BottomStyling />
			</ConsoleContainer>
		</MainWrapper>
	)
}

export default StartPage
