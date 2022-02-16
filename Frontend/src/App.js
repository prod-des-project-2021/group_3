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

import mansikki from './components/pictures/lehma.png';

// const urlAddress = 'http://localhost:4000' //change this to heroku address when it goes there
const urlAddress = 'https://hymyt.herokuapp.com' //heroku api adress

export default class App extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      user:'',
      pass:'',
      conf:'',
      loggedIn: false,
      userId: '1',
      tasks:[],
      showModalActivity: false,
      showModalModify: false,
      showLogin: false,
      activityToBeUpdated: null,
      year: '',
      regFail: false,
      logFail: false,
      tips: null,
      showMansikki: false,
      mansikkiTip: 'Terve, olen Mansikki!',
      mansikkiClass: false
    };
  }

  componentDidMount() {
    let username = this.state.user.toLowerCase();
    let password = this.state.pass;
    axios.post(urlAddress + '/mytasks/' + this.state.userId,
    {
      user : username,
      pass: password 
    }).then((response) => {
      this.setState({ tasks: response.data });
      const found = response.data.find(element => element.month === 13);
      if (found) {
        this.setState({year: found.task_name});
      }
    });
    if (this.state.tips == null) {
      axios.get(urlAddress + '/tips')
      .then((response) => {
        this.setState({ tips: response.data });
      });
    } else if (Math.random() <= 0.3){
      let tip = this.state.tips[Math.floor(Math.random() * this.state.tips.length)].tip;
      if (tip) {
        this.setState({showMansikki: true, mansikkiTip: tip });
      }
    }
  }

  getUsersTasks = (id) => {
    if (id) {
      axios.post(urlAddress + '/mytasks/1',
    ).then((response) => {
      this.setState({ tasks: response.data });
      });
    } else {
      let username = this.state.user.toLowerCase();
      let password = this.state.pass;
      axios.post(urlAddress + '/mytasks/' + this.state.userId,
      {
        user : username,
        pass: password 
      }).then((response) => {
        this.setState({ tasks: response.data });
      });
    }
  }

  //change the year/title for vuosikello
  changeYear = (title) => {
    let username = this.state.user.toLowerCase();
    let password = this.state.pass;
    axios.put(urlAddress + '/updateYear', 
    {
      user : username,
      pass: password,
      title: title,
      user_id: this.state.userId 
    }).then((response => {
      this.componentDidMount();
    }))
    .catch(error => {
      alert(error);
    })
  }

  //adding activity to the vuosikello
  addNewActivity = (task, info, month, category) => {
    let username = this.state.user.toLowerCase();
    let password = this.state.pass;
    let userID = this.state.userId;
    axios.post(urlAddress + '/yearclockActivities', 
    {
      user : username,
      pass: password,
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

  //modifying one activity in vuosikello
  modifyActivity = (task, info, month, category, stage, id) => {
    let username = this.state.user.toLowerCase();
    let password = this.state.pass;
    axios.put(urlAddress + '/updateActivity', 
    {
      user: username,
      pass: password,
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

  //logout
  logout = () => {
    this.setState({user: '', pass: '', conf: '', loggedIn: false, userId: '1', year: 'Vuosikello'})
    this.getUsersTasks('1');
    // window.location.reload(true)
  }

  //deleting spesific task from vuosikello
  deleteActivity = (id) => {
    let username = this.state.user.toLowerCase();
    let password = this.state.pass;
    axios.delete(urlAddress + '/deleteActivity', 
    {
      data: 
      {
        user:username,
        pass:password,
        task_id: id
      }
    }).then((response => {
      this.componentDidMount();
      this.setState({showModalModify: !this.state.showModalModify});
    }))
    .catch(error => {
      alert(error);
    })
  }

   //toggles the visibility of modal for login
   toggleLogin = (state) => {
    this.setState({showLogin: state });
  }

  //toggles the visibility of modal for modifying activity
  toggleModalModify = (task) => {
    this.setState({activityToBeUpdated: {task} });
    this.setState({showModalModify: !this.state.showModalModify});
  }

  //toggles the visibility of modal for adding activity
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
    let username = this.state.user.toLowerCase();
    let password = this.state.pass;
   
    axios.post(urlAddress + '/logon', {
      user: username,
      pass: password
    })
    .then((response) => {
      if(response.data) {
        this.toggleLogin(false);
        this.setState({ loggedIn: true, userId: response.data});
        this.componentDidMount();
      }
      else {
        this.setState({logFail: true});
      }
    }).catch( error => {
        this.setState({logFail: true});
    })
  }

  //on Delete send data to API to validate credentials, then deleting those
  onDelete = () =>{
    let username = this.state.user.toLowerCase();
    let password = this.state.pass;

    axios.post(urlAddress + '/delaccount', {
      user: username,
      pass: password
    })
    .then((response) => {
      alert("Käyttäjätili poistettu")
      this.setState({ loggedIn: false }) 
      this.logout();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  //on Registration send data to API to submit values to DB
  onRegister = () =>{
    let username = this.state.user.toLowerCase();
    let password = this.state.pass;
    let confirmation = this.state.conf;

    if(password.toString().trim() === confirmation.toString() ){
      axios.post( urlAddress + '/signup', {
        user: username,
        pass: password,
      })
      .then((response) => {
        this.setState({logFail: false});
      })
      .catch(error => {
        this.setState({logFail: true});
        console.log(error);
        alert("Käyttäjänimi varattu!")
      });
    }
    this.setState({logFail: true});
  }

  logFailToFalse = () => {
    this.setState({logFail: false});
  }

  reverseMansikki = () => {
    this.setState({mansikkiClass: true});
    setTimeout(() => this.setState({showMansikki: false, mansikkiClass: false}), 500);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header toggleLogin={this.toggleLogin} showLogin={this.state.showLogin} logFailToFalse={this.logFailToFalse} logFail={this.state.logFail} updateConf={this.updateConf} updatePass={this.updatePass} updateUser={this.updateUser}
                onLogin={this.onLogin} onRegister={this.onRegister} onDelete={this.onDelete}
                pass={this.state.pass} user={this.state.user} conf_pass={this.state.conf} loggedIn={this.state.loggedIn} logout={this.logout}/>
          {this.state.showMansikki ?
            <div onClick={()=> this.reverseMansikki()} className={this.state.mansikkiClass ? 'reverseMansikkiContainer' : 'mansikkiContainer' }>
              <div className='speechBubble'><p>{this.state.mansikkiTip}</p><br /><p className='mansikkiClick'>(Paina minua, jotta menen pois)</p></div>
              <img alt='Auttava Mansikki lehmä' className='mansikki'src={mansikki}/>
            </div> 
          : null}
          <div className="container">
            <Routes>
              <Route path="/" element={<Frontpage />} />
              <Route path="Sec2" element={<Sec2 />} />
              <Route path="Sec3" element={<Sec3 />} />
              <Route path="Sec4" element={<Sec4 />} />
              <Route path="Tutorials" element={<Tutorials />} />
              <Route path="PWAinstall" element={<PWAinstall />} /> 
              <Route path="Vuosikello" element={<Vuosikello loggedIn={this.state.loggedIn} changeYear={this.changeYear} year={this.state.year} addNewActivity={this.addNewActivity} getUsersTasks={this.getUsersTasks} showModalActivity={this.state.showModalActivity} toggleModalActivity={this.toggleModalActivity} tasks={this.state.tasks} modifyActivity={this.modifyActivity} toggleModalModify={this.toggleModalModify} showModalModify ={this.state.showModalModify} activityToBeUpdated={this.state.activityToBeUpdated} deleteActivity={this.deleteActivity}/>} />
              <Route path="Lahteet" element={<References />} />
              <Route path="PWAinstallmobile" element={<PWAinstallmobile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    )
  }
}
