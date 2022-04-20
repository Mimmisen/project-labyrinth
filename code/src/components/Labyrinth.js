import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import game, { navigateGame } from '../reducer/game'
import styled from 'styled-components/macro'

const Background = styled.div`
	background: ${(props) => props.background};
`

const ButtonController = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);

	background: #fdb100;
	border: solid 2px #000;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	place-items: center;
`

const Btn = styled.button`
	background: #f10db3;
	border: none;
	grid-area: ${(props) => props.position};
	width: 80%;
	height: 80%;
	border: solid 2px #000;

	&:disabled {
		background: #c573af;
	}
`

/*const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100px;
	gap: 10px;

	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`
*/
/*const Square = styled.div`
	padding: 10px;
	width: 10px;
	padding: 5px;
	height: 10px;
	background: ${(props) => props.background};
`
*/
/*const Box = styled.span`
	width: 30px;
	height: 30px;
	background-color: green;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		width: 10px;
		padding: 10px;
		height: 10px;
		left: 0;
		top: 0;
		transform: translateX(${(props) => (props.position === 'West' ? '20px' : '')});
		transform: translateY(${(props) => (props.position === 'North' ? '20px' : '')});
		transform: translateX(${(props) => (props.position === 'East' ? '20px' : '')});
		transform: translateY(${(props) => (props.position === 'South' ? '-20px' : '')});
		background-color: black;
	}
`
*/

const Labyrinth = () => {
	const [select, setSelect] = useState([])
	const dispatch = useDispatch()
	const items = useSelector((store) => store.game.items)

	const onNavigate = (type, direction) => {
		setSelect((prev) => [...prev, direction])
		dispatch(navigateGame(type, direction))
	}

	const onRestartClick = () => {
		dispatch(game.actions.restartGame())
	}

	const changeDirectionToIcon = (way) => {
		if (way === 'North') {
			return '⬆️'
		} else if (way === 'South') {
			return '⬇️'
		} else if (way === 'East') {
			return '➡️'
		} else if (way === 'West') {
			return '⬅️'
		}
	}

	const arrowStyle = (way) => {
		if (way === 'North') {
			return '1/2'
		} else if (way === 'South') {
			return '3/2'
		} else if (way === 'East') {
			return '2/3'
		} else if (way === 'West') {
			return '2/1'
		}
	}

	const btnNavigator = ['North', 'East', 'South', 'West']

	const filterDirection = items.actions.map((item) => item.direction)

	const filterDisableBtn = () => {
		const newOne = btnNavigator.filter((item) => !filterDirection.includes(item))

		return newOne.map((item) => (
			<Btn position={arrowStyle(item)} disabled>
				{changeDirectionToIcon(item)}
			</Btn>
		))
	}

	const changeBG = () => {
		switch (items.coordinates) {
			case '0,0':
				return '10px'
				break
			case '1,0':
				return 'pink'
				break
			case '1,1':
				return 'green'
				break
			case '0,1':
				return 'blue'
				break
			case '0,2':
				return 'red'
				break
			case '0,3':
				return 'yellow'
				break
			case '1,3':
				return 'orange'
				break
			default:
				return 'red'
		}
	}

	return (
		<Background background={changeBG()}>
			<p>You choose {select}</p>
			{items.actions.map((item) => {
				return (
					<div>
						<p>{item.description}</p>
					</div>
				)
			})}

			<ButtonController>
				{items.actions.map((item) => {
					return (
						<>
							<Btn
								position={arrowStyle(item.direction)}
								onClick={() => onNavigate(item.type, item.direction)}
							>
								{changeDirectionToIcon(item.direction)}
							</Btn>
						</>
					)
				})}
				{filterDisableBtn()}
			</ButtonController>

			<button type='button' onClick={onRestartClick}>
				{!items.actions.length ? 'play again' : 'restart game'}
			</button>
		</Background>
	)
}

export default Labyrinth

/*	<p>You choose {select}</p>
			{items.actions.map((item) => {
				return (
					<div>
						<p>{item.description}</p>
						<button onClick={() => onNavigate(item.type, item.direction)}>{item.direction}</button>
					</div>
				)
			})}
			<button type='button' onClick={onRestartClick}>
				{items.coordinates === '1,3' ? 'play again' : 'restart game'}
			</button> */
/*<Wrapper>
				<div>
					<Square background={items.coordinates === '1,0' ? 'pink' : 'black'}></Square>
					<Square background={items.coordinates === '1,1' ? 'pink' : 'black'}></Square>
					<Square background={items.coordinates === '0,1' ? 'pink' : 'black'}></Square>
				</div>
				<div>
					<Square background={items.coordinates === '0,2' ? 'pink' : 'black'}></Square>
					<Square background={items.coordinates === '0,3' ? 'pink' : 'black'}></Square>
					<Square background={items.coordinates === '1,3' ? 'pink' : 'black'}></Square>
				</div>
				<div>
					<Square></Square>
					<Square></Square>
					<Square></Square>
				</div>
			</Wrapper>
	<Box position={nav}></Box>*/
