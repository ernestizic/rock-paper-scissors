import React, {useContext, useState, useEffect} from 'react';
import { GameContext } from '../GameContext';
import Baselayout from './Baselayout';

const Playpage = () => {
    const { userSelectionImg, compSelectionImg, comsel, decision, winner } = useContext(GameContext)

    const [counter, setCounter] = useState(3);

    useEffect(() => {
        const count =()=> {
            if (counter > 0) {
                setTimeout(() => {
                    setCounter(counter - 1)
                }, 1000);
            }else{
                setCounter(null)
            }
        }
        count();
        comsel();
        decision();
    }, [counter, comsel, decision])

    
    return (
        <Baselayout>
            <div className='selections'>
                <div className='user-sel'>
                    <h3>YOU PICKED</h3>
                    {userSelectionImg}
                </div>

                { !counter && <div className='win-decision'>
                    <h1>{winner}</h1>
                    <button className='play-again'>PLAY AGAIN</button>
                </div>}
                
                <div className='comp-sel'>
                    <h3>THE HOUSE PICKED</h3>
                    {counter != null? (
                        <div className='counter'>
                            <h1>{counter}</h1>
                        </div>
                    ) : (
                        <div className='com-sel-img'>
                            {compSelectionImg}
                        </div>
                    )}
                    
                </div>
            </div>
        </Baselayout>
    )
}

export default Playpage
