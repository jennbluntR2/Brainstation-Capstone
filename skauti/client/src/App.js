import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import Gallery from './Gallery';
import Login from './Login';
import Nav from './Nav';
import DetailForm from './DetailForm';
import './App.css';
import './font.css'

 // Initialize Firebase
 const API_KEY = process.env.REACT_APP_FB_API_KEY;
 const config = {
    apiKey: API_KEY,
    authDomain: "skauti-5686c.firebaseapp.com",
    databaseURL: "https://skauti-5686c.firebaseio.com",
    projectId: "skauti-5686c",
    storageBucket: "skauti-5686c.appspot.com",
    messagingSenderId: "919184650032"
  };
  firebase.initializeApp(config);
  
const database = firebase.firestore();
database.settings({ timestampsInSnapshots: true});


class App extends Component {
  state = {
    userInfo: [],
    newImage: {}
}

 componentDidMount() {
//retreve data from firestore
  database.collection("user-id").get().then((snapshot) => {
    const imageData = [];
        snapshot.docs.forEach(doc => {
        imageData.push(doc.data());
    });
      this.setState({
        userInfo: imageData
      });
    });
  } 

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Login path='/login' exact render= {() => <Login />}/>
              <Route path='/gallery' exact render={(props) => <Gallery userGallery= {this.state.userInfo} /> }/>
              <Route path='/details' exact render={() => <DetailForm database={database} />} />
              <Route path='' render= {() => <Login />}/>
            </Switch>
          </div>
       </Router>
      </div>
    );
  }
}

export default App;



