import React, { useContext } from 'react';
import Baselayout from './Baselayout';
import paperimg from '../images/icon-paper.svg';
import scissorsimg from '../images/icon-scissors.svg';
import rockimg from '../images/icon-rock.svg';
import { GameContext } from '../GameContext';

const Gameplay = () => {
    const {rock, paper, scissors} = useContext(GameContext)
    return (
        <Baselayout>
            <img src={paperimg} alt='hand' className='paper' onClick={paper}/>
            <img src={scissorsimg} alt='hand' className='scissors' onClick={scissors}/>
            <img src={rockimg} alt='hand' className='rock' onClick={rock}/>
        </Baselayout>
    )
}

export default Gameplay;
