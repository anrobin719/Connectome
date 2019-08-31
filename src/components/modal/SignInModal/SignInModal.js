import React, { Component } from 'react';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import classes from './SignInModal.scss';

class SignInModal extends Component {
    state = {
        controls: {
            email: {
                label: '이메일',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'example@google.com'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                vaild: false,
                touched: false
            },
            password: {
                label: '비밀번호',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        },
        isSignup: false
    }

    render() {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                label={formElement.config.label}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                configType={formElement.config.elementConfig.type}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler( event, formElement.id )} />            
        ));

        const { show, onCancel } = this.props;
        return (
            <Modal show={show} modalClosed={onCancel}>
                <div className={classes.SignIn}>
                    <h4>로그인</h4>
                    {form}
                    <div className={classes.btnBox}>
                        <Button theme="invert-big">로그인하기</Button>
                    </div>
                </div>
            </Modal>

        );
    }
}

export default SignInModal;