import React from 'react';
import './login.css';

validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
 }

handleChange(event) {
    this.setState({value: event.target.value});
}

handleSubmit = event => {
    event.preventDefault();
}

  
function login(){
    return(
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleChange}>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" >
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-success">Login</button>
    
        </form>    
    )
}
export default login ;
