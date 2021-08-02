import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';

import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>

      </div>
    );
  }
}

export default App;

// const HatsPage = (props) => {

//   console.log(props.match.params)
//   return (
//   <div>
//     <h1>Home PAGE</h1>
//   </div>
//   );
//  };

// const TopicList = (props) => {
//   return (
//   <div>
//     <h1>Topic List</h1>
//     <Link to={`${props.match.url}/13`} >To topic 13</Link>
//     <Link to={`${props.match.url}/14`} >To topic 14</Link>
//     <Link to={`${props.match.url}/15`} >To topic 15</Link>

//   </div>
//   );
// }

// const TopicDetail = (props) => {

//   console.log(props)

//   return (
//   <div>
//     <h1>Topic Detail PAGE</h1>
//   </div>
//   );
// }
