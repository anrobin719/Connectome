import React, { Component } from "react";

import { updateObject, checkValidity } from "../../../shared/utility";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import Loading from "../../UI/Loading/Loading";
import classes from "./SignInModal.scss";

class SignInModal extends Component {
  state = {
    controls: {
      email: {
        label: "이메일",
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "example@google.com"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        vaild: false,
        touched: false
      },
      password: {
        label: "비밀번호",
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isSignup: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.show && this.props.show !== prevProps.show) {
      this.initializeAuthInput();
    }
  }

  initializeAuthInput = () => {
    const initControls = updateObject(this.state.controls, {
      email: updateObject(this.state.controls.email, {
        value: "",
        touched: false
      }),
      password: updateObject(this.state.controls.password, {
        value: "",
        touched: false
      })
    });
    console.log("initializeAuthInput");
    this.setState({ controls: initControls });
  };

  inputChangedHandler = (event, controlName) => {
    const updateControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      })
    });
    this.setState({ controls: updateControls });
  };

  signInSubmit = e => {
    e.preventDefault();
    const signInData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value,
      isSignUp: false
    };
    this.props.signInHandler(signInData);
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let form = formElementsArray.map(formElement => (
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
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    const { show, cancelHandler, loading, error } = this.props;
    return (
      <Modal show={show} modalClosed={cancelHandler}>
        {loading ? <Loading extraClass="fit" /> : null}
        <div className={classes.SignIn}>
          <form onSubmit={this.signInSubmit}>
            <h4>로그인</h4>
            {form}
            {error ? <div className={classes.errorMessage}>{error}</div> : null}
            <div className={classes.btnBox}>
              <Button theme="invert-big">로그인하기</Button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default SignInModal;
