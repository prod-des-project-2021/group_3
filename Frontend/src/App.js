import './App.css';
import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';

import Header from './components/Menu';
import Frontpage from './components/Frontpage';
import Sec2 from './components/section2';
import Sec3 from './components/section3';
import Sec4 from './components/section4';
import Tutorials from './components/tutorials';
import PWAinstall from './components/PWAinstall';
import Vuosikello from './components/Vuosikello';
import PWAinstallmobile from './components/PWAinstallmobile';

const urlAddress = 'http://localhost:4000' //change this to heroku address when it goes there

export default class App extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      user:'',
      pass:'',
      conf:''
    };
  }

  getUsersTasks = (UID) => {
    axios.get(urlAddress + '/mytasks/1' )
    .then((response) => {
      console.log(response.data)
    });
  }

  //Login/registration user input update
  updateUser = (event) =>{
    this.setState({ user: event.target.value });
  }

  //Login/registration password input update
  updatePass = (event) =>{
    this.setState({ pass: event.target.value });
  }

  //Login/registration password confirmation input update
  updateConf = (event) =>{
    this.setState({ conf: event.target.value });
  }

  //On login send data to API to verify User credentials
  onLogin = () => {
    let username = this.state.user;
    let password = this.state.pass;
   
    axios.post(urlAddress + '/logon', {
      user: username,
      pass: password
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  //on Registration send data to API to submit values to DB
  onRegister = () =>{
    let username = this.state.user;
    let password = this.state.pass;
    let confirmation = this.state.conf;

    if(password.toString().trim() === confirmation.toString() ){
      axios.post( urlAddress + '/signup', {
        user: username,
        pass: password,
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <>
        <Header updateConf={this.updateConf} updatePass={this.updatePass} updateUser={this.updateUser}
              onLogin={this.onLogin} onRegister={this.onRegister}
              pass={this.state.pass} username={this.state.user} conf_pass={this.state.conf}/>
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Frontpage />} />
              <Route path="Sec3" element={<Sec3 />} />
              <Route path="Sec2" element={<Sec2 />} />
              <Route path="Sec4" element={<Sec4 />} />
              <Route path="Tutorials" element={<Tutorials />} />
              <Route path="PWAinstall" element={<PWAinstall />} />
              <Route path="Vuosikello" element={<Vuosikello />} />
              <Route path="PWAinstallmobile" element={<PWAinstallmobile />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    )
  }
}
