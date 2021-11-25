import React, { Component } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';

import Menu from './components/Menu';
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
      conf:'',
      tasks:[],
      showModalActivity: false,
      showModalModify: false,
      activityToBeUpdated: null
    };
  }

  componentDidMount() {
    axios.get(urlAddress + '/mytasks/1' )
    .then((response) => {
      this.setState({ tasks: response.data });
    });
  }

  getUsersTasks = (UID) => {
    axios.get(urlAddress + '/mytasks/1' )
    .then((response) => {
      this.setState({ tasks: response.data });
    });
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

  toggleModalModify = (task) => {
    this.setState({activityToBeUpdated: {task} });
    this.setState({showModalModify: !this.state.showModalModify});
  }

  toggleModalActivity = () => {
    this.setState({showModalActivity: !this.state.showModalActivity});
  }

  updateUser = (event) =>{
    this.setState({ user: event.target.value });
    console.log(this.state.user);
  }

  updatePass = (event) =>{
    this.setState({ pass: event.target.value });
    console.log(this.state.pass);
  }

  updateConf = (event) =>{
    this.setState({ conf: event.target.value });
    console.log(this.state.conf);

  }

  onLogin = () => {
    let username = this.state.user;
    let password = this.state.pass;
  }

  render() {
    return (
      <>
        <Menu updateConf = {this.updateConf} updatePass = {this.updatePass} updateUser = {this.updateUser} pass = {this.state.pass} username= {this.state.user} conf_pass={this.state.conf}/>
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Frontpage />} />
              <Route path="Sec3" element={<Sec3 />} />
              <Route path="Sec2" element={<Sec2 />} />
              <Route path="Sec4" element={<Sec4 />} />
              <Route path="Tutorials" element={<Tutorials />} />
              <Route path="PWAinstall" element={<PWAinstall />} /> 
              <Route path="Vuosikello" element={<Vuosikello addNewActivity={this.addNewActivity} getUsersTasks={this.getUsersTasks} showModalActivity={this.state.showModalActivity} toggleModalActivity={this.toggleModalActivity} tasks={this.state.tasks} modifyActivity={this.modifyActivity} toggleModalModify={this.toggleModalModify} showModalModify ={this.state.showModalModify} activityToBeUpdated={this.state.activityToBeUpdated}/>} />
              <Route path="PWAinstallmobile" element={<PWAinstallmobile />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    )
  }
}
