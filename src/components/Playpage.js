import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { GameContext } from '../GameContext';
import Baselayout from './Baselayout';
import { Link } from 'react-router-dom';

const Playpage = () => {
	const {
		gameSelections,
		userSelection,
		compSelection,
		setCompSelection,
		setGameWinner,
		gameWinner,
		score,
		setScore,
	} = useContext(GameContext);
	const history = useHistory();

	const [counter, setCounter] = useState(3);

	useEffect(() => {
		const houseChoices = () => {
			const random = gameSelections[Math.floor(Math.random() * gameSelections.length)];
			setCompSelection(random);
		};
		houseChoices();
		// eslint-disable-next-line
	}, []);

	// console.log({
	// 	'user sel': userSelection,
	// 	'comp sel': compSelection,
	// });
	// console.log(gameWinner);

	useEffect(() => {
		if (userSelection || compSelection) {
			const count = () => {
				if (counter > 0) {
					setTimeout(() => {
						setCounter(counter - 1);
					}, 1000);
				} else {
					setCounter(null);
				}
			};
			count();
		} else {
			history.push({
				pathname: '/',
			});
		}
	}, [counter, compSelection, userSelection, history]);

	useEffect(() => {
		const gameResult = () => {
			if (userSelection && counter === null) {
				if (userSelection.name === 'rock' && compSelection.name === 'paper') {
					setGameWinner('YOU LOSE');
					setScore(score - 1);
				} else if (
					userSelection.name === 'paper' &&
					compSelection.name === 'rock'
				) {
					setGameWinner('YOU WIN');
					setScore(score + 1);
				} else if (
					userSelection.name === 'rock' &&
					compSelection.name === 'scissors'
				) {
					setGameWinner('YOU WIN');
					setScore(score + 1);
				} else if (
					userSelection.name === 'scissors' &&
					compSelection.name === 'rock'
				) {
					setGameWinner('YOU LOSE');
					setScore(score - 1);
				} else if (
					userSelection.name === 'scissors' &&
					compSelection.name === 'paper'
				) {
					setGameWinner('YOU WIN');
					setScore(score + 1);
				} else if (
					userSelection.name === 'paper' &&
					compSelection.name === 'scissors'
				) {
					setGameWinner('YOU LOSE');
					setScore(score - 1);
				} else if (userSelection.name === compSelection.name) {
					setGameWinner('DRAW');
				}
			}
		};
		gameResult();
		// eslint-disable-next-line
	}, [compSelection, userSelection, counter]);

	return (
		<Baselayout>
			{userSelection && (
				<div className='selections'>
					<div className='user-sel'>
						<h3>YOU PICKED</h3>
						<img
							src={userSelection.img}
							alt={userSelection.alt}
							className={`${userSelection.name}-c`}
						/>
					</div>

					{!counter && (
						<div className='win-decision'>
							<h1 style={{ paddingBottom: '10px' }}>{gameWinner}</h1>
							<Link to='/' className='play-again'>
								PLAY AGAIN
							</Link>
						</div>
					)}

					<div className='comp-sel'>
						<h3>THE HOUSE PICKED</h3>
						{counter != null ? (
							<div className='counter'>
								<h1>{counter}</h1>
							</div>
						) : (
							<img
								src={compSelection.img}
								alt={compSelection.alt}
								className={`${compSelection.name}-c`}
							/>
						)}
					</div>
				</div>
			)}
		</Baselayout>
	);
};

export default Playpage;
