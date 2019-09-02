import React, { Component, Fragment } from 'react';

import classes from './Modal.scss';
import Backdrop from  '../Backdrop/Backdrop';

class Modal extends Component {
    render() {
        return (
            this.props.show ? (
                <Fragment>
                    <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                    <div
                        className={classes.Modal}
                        style={{
                            opacity: this.props.show ? '1' : '0',
                            transform: this.props.show ? 'translateY(-50%)' : 'translateY(-20vh)' 
                        }}>
                            {this.props.children}
                    </div>
                </Fragment>
            ) : null
        );
    }
}

export default Modal;