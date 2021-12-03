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
import References from './components/References';

const urlAddress = 'http://localhost:4000' //change this to heroku address when it goes there

export default class App extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      user:'',
      pass:'',
      conf:'',
      loggedIn: false,
      tasks:[],
      showModalActivity: false,
      showModalModify: false,
      activityToBeUpdated: null,
      year: ''
    };
  }

  componentDidMount() {
    axios.get(urlAddress + '/mytasks/1' )
    .then((response) => {
      this.setState({ tasks: response.data });
      const found = response.data.find(element => element.month === 13);
      if (found) {
        this.setState({year: found.task_name});
      }
    });
  }

  getUsersTasks = (UID) => {
    axios.get(urlAddress + '/mytasks/1' )
    .then((response) => {
      this.setState({ tasks: response.data });
    });
  }

  changeYear = (title) => {
    axios.put(urlAddress + '/updateYear', 
    {
      title: title,
      user_id: '1' 
    }).then((response => {
      this.componentDidMount();
    }))
    .catch(error => {
      alert(error);
    })
  }

  addNewActivity = (task, info, month, category) => {
    //Here the userId should be received from state
    let userID = 1
    axios.post(urlAddress + '/yearclockActivities', 
    {
      user_id: userID,
      task_name: task,
      month: month,
      category: category,
      info: info, 
      stage: 'red'
    })
    .then((response => {
      this.componentDidMount();
      this.toggleModalActivity();
    }))
    .catch(error => {
      alert(error);
    })
  }

  modifyActivity = (task, info, month, category, stage, id) => {
    axios.put(urlAddress + '/updateActivity', 
    {
      task_name: task,
      month: month,
      category: category,
      info: info, 
      stage: stage,
      task_id: id
    }).then((response => {
      this.componentDidMount();
      this.setState({showModalModify: !this.state.showModalModify});
    }))
    .catch(error => {
      alert(error);
    })
  }

  deleteActivity = (id) => {
    axios.delete(urlAddress + '/deleteActivity', 
    {
      data: {task_id: id}
    }).then((response => {
      this.componentDidMount();
      this.setState({showModalModify: !this.state.showModalModify});
    }))
    .catch(error => {
      alert(error);
    })
  }

  toggleModalModify = (task) => {
    this.setState({activityToBeUpdated: {task} });
    this.setState({showModalModify: !this.state.showModalModify});
  }

  toggleModalActivity = () => {
    this.setState({showModalActivity: !this.state.showModalActivity});
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
      this.setState({ loggedIn: true }) 
    })
    .catch(function (error) {
      console.log(error);
      alert("username or password incorrect!")
    });
  }

  //on Delete send data to API to validate credentials, then deleting those
  onDelete = () =>{
    let username = this.state.user;
    let password = this.state.pass;

    axios.post(urlAddress + '/delaccount', {
      user: username,
      pass: password
    })
    .then((response) => {
      console.log(response.data)
      alert("Account deleted")
      this.setState({ loggedIn: false }) 
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
        alert("username already exists!")
      });
    }
  }

  render() {
    return (
      <>
        <BrowserRouter>
        <Header updateConf={this.updateConf} updatePass={this.updatePass} updateUser={this.updateUser}
                onLogin={this.onLogin} onRegister={this.onRegister} onDelete={this.onDelete}
                pass={this.state.pass} username={this.state.user} conf_pass={this.state.conf} loggedIn={this.state.loggedIn}/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Frontpage />} />
              <Route path="Sec2" element={<Sec2 />} />
              <Route path="Sec3" element={<Sec3 />} />
              <Route path="Sec4" element={<Sec4 />} />
              <Route path="Tutorials" element={<Tutorials />} />
              <Route path="PWAinstall" element={<PWAinstall />} /> 
              <Route path="Vuosikello" element={<Vuosikello changeYear={this.changeYear} year={this.state.year} addNewActivity={this.addNewActivity} getUsersTasks={this.getUsersTasks} showModalActivity={this.state.showModalActivity} toggleModalActivity={this.toggleModalActivity} tasks={this.state.tasks} modifyActivity={this.modifyActivity} toggleModalModify={this.toggleModalModify} showModalModify ={this.state.showModalModify} activityToBeUpdated={this.state.activityToBeUpdated} deleteActivity={this.deleteActivity}/>} />
              <Route path="Lahteet" element={<References />} />
              <Route path="PWAinstallmobile" element={<PWAinstallmobile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    )
  }
}
