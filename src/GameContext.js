import React, { createContext, useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import paperimg from './images/icon-paper.svg';
import scissorsimg from './images/icon-scissors.svg';
import rockimg from './images/icon-rock.svg';

export const GameContext = createContext();

const GameContextProvider = (props) => {
    const history = useHistory();

    const [score, setScore] = useState(0)
    const [userSelection, setUserSelection] = useState(null)
    const [userSelectionImg, setUserSelectionImg] = useState(null)
    const [compSelection, setCompSelection] = useState(null)
    const [compSelectionImg, setCompSelectionImg] = useState(null)
    const [winner, setWinner] = useState(null)

    const [final, setFinal] = useState(compSelection)

    useEffect(() => {
        //setFinal(compSelection);
        if (final === 'YOU LOSE') {
            setScore(score - 1)
        } else if (final === 'YOU WIN') {
            setScore(score + 1)
        } else {
            setScore(score)
        }
    }, [compSelection,final, score])

    const comsel = useCallback(() => {
            const choices = ['rock', 'paper', 'scissors']

            const random = choices[Math.floor(Math.random() * choices.length)];
            setCompSelection(random);
    
            if (compSelection === 'rock') {
                setCompSelectionImg(<img src={rockimg} alt='rock' className='rock-c'/>)
            } else if (compSelection === 'paper') {
                setCompSelectionImg(<img src={paperimg} alt='paper' className='paper-c'/>)
            } else {
                setCompSelectionImg(<img src={scissorsimg} alt='scissors' className='sci-c'/>)
            }
        },[compSelection])
        

    const rock =()=> {
        history.push ({
            pathname: '/gameplay'
        })
        setUserSelection('rock')
        setUserSelectionImg(<img src={rockimg} alt='rock' className='rock-c'/>)
        
    }

    const paper =()=> {
        history.push ({
            pathname: '/gameplay'
        })
        setUserSelection('paper')
        setUserSelectionImg(<img src={paperimg} alt='paper' className='paper-c'/>)
    
    }

    const scissors =()=> {
        history.push ({
            pathname: '/gameplay'
        })
        setUserSelection('scissors')
        setUserSelectionImg(<img src={scissorsimg} alt='scissors' className='sci-c'/>)
        
    }

    const decision = useCallback(() => {
            if (userSelection === 'rock' && compSelection === 'paper'){
                setWinner('YOU LOSE')
            } else if (userSelection === 'paper' && compSelection === 'rock') {
                setWinner('YOU WIN')
            } else if (userSelection === 'rock' && compSelection === 'scissors') {
                setWinner('YOU WIN')
            } else if (userSelection === 'scissors' && compSelection === 'rock') {
                setWinner('YOU LOSE')
            } else if (userSelection === 'scissors' && compSelection === 'paper') {
                setWinner('YOU WIN')
            } else if (userSelection === 'paper' && compSelection === 'scissors') {
                setWinner('YOU LOSE')
            } else{
                setWinner('DRAW')
            }
        },[compSelection, userSelection])



    return ( 
        <GameContext.Provider value={{score, userSelectionImg, compSelectionImg, winner, comsel, rock, paper, scissors, decision}}>
            {props.children}
        </GameContext.Provider>
     );
}
 
export default GameContextProvider;