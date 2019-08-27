import React, { Fragment } from 'react';

import classes from './Modal.scss';
import Backdrop from  '../Backdrop/Backdrop';

const Modal = ( props ) => {
    return (
        props.show ? (
            <Fragment>
                <Backdrop show={props.show} clicked={props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        opacity: props.show ? '1' : '0',
                        transform: props.show ? 'translateY(-50%)' : 'translateY(-20vh)' 
                    }}>
                        {props.children}
                </div>
            </Fragment>
        ) : null
    );
}

export default Modal;