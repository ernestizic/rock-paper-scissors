import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router';
import paperimg from './images/icon-paper.svg';
import scissorsimg from './images/icon-scissors.svg';
import rockimg from './images/icon-rock.svg';

export const GameContext = createContext();

const GameContextProvider = (props) => {
	const history = useHistory();

	const data = [
        {
            id: 2,
            name: 'paper',
            img: paperimg,
            alt: 'paper',
            className: 'paper'
        },
		{
            id: 3,
			name: 'scissors',
			img: scissorsimg,
            alt: 'scissors',
            className: 'scissors'
		},
        {
            id: 1,
            name: 'rock',
            img: rockimg,
            alt: 'rock',
            className: 'rock'
        },
	];

	const [score, setScore] = useState(0);
	const [gameSelections] = useState(data);
	const [userSelection, setUserSelection] = useState(null);
	const [compSelection, setCompSelection] = useState(null);
	const [gameWinner, setGameWinner] = useState(null);

    const handleGamePlay =(userSelect)=> {
		history.push({
			pathname: '/gameplay',
		})
        setUserSelection(userSelect)
    }

	return (
		<GameContext.Provider
			value={{
                gameSelections,
				gameWinner,
                userSelection,
                compSelection,
				score,
                setCompSelection,
                setScore,
                handleGamePlay,
                setGameWinner,
			}}
		>
			{props.children}
		</GameContext.Provider>
	);
};

export default GameContextProvider;
