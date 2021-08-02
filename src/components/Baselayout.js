import React, { useState } from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import Modal from './Modal';


const Baselayout = ({children}) => {

    const [modal, setModal] = useState(false);

    const showModal =()=> {
        setModal(true);
    }

    const hideModal =()=> {
        setModal(false);
    }
    return ( 
        <>
            <Header />
            <div className='triangle'>
                {children}
            </div>

            <div className='rule-btn-div'>
                <button className='rule-btn' onClick={showModal}>RULES</button>
            </div>
            {modal && <Modal hideModal={hideModal}/> }
        </>
     );
}


Baselayout.propTypes = {
    children: propTypes.arrayOf(propTypes.element).isRequired
}
 
export default Baselayout;