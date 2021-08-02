import React from 'react';
import rules from '../images/image-rules.svg';
import close from '../images/icon-close.svg';

const Modal = ({hideModal}) => {
    return (
        <div className='modal'>
            <div className='modal-head'>
                <h2>RULES</h2>
                <img src={close} alt='close' className='close' onClick={hideModal}/>
            </div>
            <img src={rules} alt='rule'/>
        </div>
    )
}

export default Modal
