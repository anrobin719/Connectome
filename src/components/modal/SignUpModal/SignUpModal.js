import React, { Component } from 'react';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { updateObject, checkValidity } from '../../../shared/utility';
import classes from './SignUpModal.scss';
import Modal from '../../UI/Modal/Modal';

class SignUpModal extends Component {
    state = {
        controls: {
            firstName: {
                label: '이름',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: '길동'
                },
                value: '',
                validation: {
                    required: true
                },
                vaild: false,
                touched: false
            },
            lastName: {
                label: '성',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: '홍'
                },
                value: '',
                validation: {
                    required: true
                },
                vaild: false,
                touched: false
            },
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
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: false
    }

    inputChangedHandler = (event, controlName) => {
        const updateControls = updateObject( this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        })
        this.setState({controls: updateControls});
    }

    signUpSubmit = (e) => {
        e.preventDefault();
        const signUpData = {
            firstName: this.state.controls.firstName.value,
            lastName: this.state.controls.lastName.value,
            email: this.state.controls.email.value,
            password: this.state.controls.password.value,
            isSignUp: true
        }
        this.props.signUpHandler(signUpData);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            });
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
                changed={(event) => this.inputChangedHandler( event, formElement.id )}
                autoComplete="off" />            
        ));

        const { show, cancelHandler, loading, error} = this.props;
        return (
            <Modal show={show} modalClosed={cancelHandler}>
                <div className={classes.SignUp}>
                    <form onSubmit={this.signUpSubmit}>
                        <h4>회원가입</h4>
                        {form}
                        { error ? <div>{error}</div> : null }
                        <div className={classes.btnBox}>
                            <Button theme="invert-big">회원가입하기</Button>
                        </div>
                    </form>
                </div>
            </Modal>

        );
    }
}

export default SignUpModal;