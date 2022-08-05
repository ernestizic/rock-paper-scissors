import React, { useContext } from 'react';
import Baselayout from './Baselayout';
import { GameContext } from '../GameContext';

const Gameplay = () => {
	const { gameSelections, handleGamePlay } = useContext(GameContext);
	return (
		<Baselayout>
			<div className='triangle'>
				{gameSelections?.map((selected) => (
					<img
						key={selected.id}
						src={selected.img}
						className={selected.className}
						alt={selected.alt}
						onClick={() => handleGamePlay(selected)}
					/>
				))}
			</div>
		</Baselayout>
	);
};

export default Gameplay;
