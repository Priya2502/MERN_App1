import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import "../templateCSS/login.css";
import  { Redirect } from 'react-router-dom'
import {
  withRouter
} from 'react-router-dom'

class RegisterComponent extends Component {
  state = {
    email: "",
    password: "",
    msg: null,
    loggedIn:false
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error != prevProps.error) {
      //Check login error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
      if (isAuthenticated) {
        this.setState(()=>({
          loggedIn:true
        }))
        // this.props.history.push('/shopping')
      }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    //Attempt to login
    this.props.login(user);
  };
  render() {
    if(this.state.loggedIn==true){
      return <Redirect to='/shopping' />
    }
    return React.createElement('html', {className:"loginHtml"}, React.createElement('head', {}, React.createElement('title', {}, 'Login Page')    /* Made with love by Mutiullah Samim  */
    /* Bootsrap 4 CDN */, React.createElement('link', {
'rel': 'stylesheet',
'href': 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
'integrity': 'sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO',
'crossOrigin': 'anonymous'
}    /* Fontawesome CDN */), React.createElement('link', {
'rel': 'stylesheet',
'href': 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
'integrity': 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
'crossOrigin': 'anonymous'
}    /* Custom styles */), React.createElement('link', {
'rel': 'stylesheet',
'type': 'text/css',
'href': 'styles.css'
})), React.createElement('body', {className:"loginBody"}, React.createElement('div', { 'className': 'loginContainer' }, React.createElement('div', { 'className': 'd-flex justify-content-center h-100' }, React.createElement('div', { 'className': 'card' }, React.createElement('div', { 'className': 'card-header' }, React.createElement('h3', {}, 'Sign Up'), React.createElement('div', { 'className': 'd-flex justify-content-end social_icon' }, React.createElement('span', {}, React.createElement('i', { 'className': 'fab fa-facebook-square' })), React.createElement('span', {}, React.createElement('i', { 'className': 'fab fa-google-plus-square' })), React.createElement('span', {}, React.createElement('i', { 'className': 'fab fa-twitter-square' })))), React.createElement('div', { 'className': 'card-body' }, React.createElement('form', {}, React.createElement('div', { 'className': 'input-group form-group' }, React.createElement('div', { 'className': 'input-group-prepend' }, React.createElement('span', { 'className': 'input-group-text' }, React.createElement('i', { 'className': 'fas fa-user' }))), React.createElement('input', {
'type': 'text',
'name': 'name',
'id': 'name',
'className': 'form-control',
'placeholder': 'name',
'onChange': this.onChange
})), 
React.createElement('div', { 'className': 'input-group form-group' }, React.createElement('div', { 'className': 'input-group-prepend' }, React.createElement('span', { 'className': 'input-group-text' }, React.createElement('i', { 'className': 'fas fa-key' }))), React.createElement('input', {
    'type': 'email',
    'name': 'email',
    'id': 'email',
    'className': 'form-control',
    'placeholder': 'email',
    'onChange': this.onChange
    })),
React.createElement('div', { 'className': 'input-group form-group' }, React.createElement('div', { 'className': 'input-group-prepend' }, React.createElement('span', { 'className': 'input-group-text' }, React.createElement('i', { 'className': 'fas fa-key' }))), React.createElement('input', {
'type': 'password',
'name': 'password',
'id': 'password',
'className': 'form-control',
'placeholder': 'password',
'onChange': this.onChange
})), React.createElement('div', { 'className': 'row align-items-center remember' }, React.createElement('input', { 'type': 'checkbox' }), 'Remember Me\n\t\t\t\t\t'), React.createElement('div', { 'className': 'form-group' }, React.createElement('button', {
'onClick': this.onSubmit.bind(this),
'className': 'btn float-right login_btn'
}, 'Register')))), React.createElement('div', { 'className': 'card-footer' }, React.createElement('div', { 'className': 'd-flex justify-content-center links' }, '\n\t\t\t\t\tAlready have an account?', React.createElement('a', { 'href': '#' }, 'Sign In'))))))));

  }
  }
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
// export default LoginComponent;

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(RegisterComponent);//withRouter
