import React, {useContext} from 'react'
import { GameContext } from '../GameContext';
import logo from '../images/logo.svg';

const Header = () => {
    const {score} = useContext(GameContext)
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>

            <div className='score'>
                <p style={{color: 'hsl(229, 64%, 46%)'}}>SCORE</p>
                <p style={{color: 'hsl(229, 25%, 31%)', fontSize: '50px', fontWeight: 'bold'}}>{score}</p>
            </div>
        </div>
    )
}

export default Header
