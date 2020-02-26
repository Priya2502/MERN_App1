import React, { Component } from "react";
class LoginComponent extends Component {
  state = {};
  render() {
    return React.createElement('html', {}, React.createElement('head', {}, React.createElement('title', {}, 'Login Page')    /* Made with love by Mutiullah Samim  */
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
})), React.createElement('body', {}, React.createElement('div', { 'className': 'container' }, React.createElement('div', { 'className': 'd-flex justify-content-center h-100' }, React.createElement('div', { 'className': 'card' }, React.createElement('div', { 'className': 'card-header' }, React.createElement('h3', {}, 'Sign In'), React.createElement('div', { 'className': 'd-flex justify-content-end social_icon' }, React.createElement('span', {}, React.createElement('i', { 'className': 'fab fa-facebook-square' })), React.createElement('span', {}, React.createElement('i', { 'className': 'fab fa-google-plus-square' })), React.createElement('span', {}, React.createElement('i', { 'className': 'fab fa-twitter-square' })))), React.createElement('div', { 'className': 'card-body' }, React.createElement('form', {}, React.createElement('div', { 'className': 'input-group form-group' }, React.createElement('div', { 'className': 'input-group-prepend' }, React.createElement('span', { 'className': 'input-group-text' }, React.createElement('i', { 'className': 'fas fa-user' }))), React.createElement('input', {
'type': 'text',
'className': 'form-control',
'placeholder': 'username'
})), React.createElement('div', { 'className': 'input-group form-group' }, React.createElement('div', { 'className': 'input-group-prepend' }, React.createElement('span', { 'className': 'input-group-text' }, React.createElement('i', { 'className': 'fas fa-key' }))), React.createElement('input', {
'type': 'password',
'className': 'form-control',
'placeholder': 'password'
})), React.createElement('div', { 'className': 'row align-items-center remember' }, React.createElement('input', { 'type': 'checkbox' }), 'Remember Me\n\t\t\t\t\t'), React.createElement('div', { 'className': 'form-group' }, React.createElement('input', {
'type': 'submit',
'value': 'Login',
'className': 'btn float-right login_btn'
})))), React.createElement('div', { 'className': 'card-footer' }, React.createElement('div', { 'className': 'd-flex justify-content-center links' }, '\n\t\t\t\t\tDon\'t have an account?', React.createElement('a', { 'href': '#' }, 'Sign Up')), React.createElement('div', { 'className': 'd-flex justify-content-center' }, React.createElement('a', { 'href': '#' }, 'Forgot your password?'))))))));

      //     <div className="container">
      //     <div className="d-flex justify-content-center h-100">
      //       <div className="card">
      //         <div className="card-header">
      //           <h3>Sign In</h3>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
  }
}

export default LoginComponent;
