import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';


const Header = ({ currentUser }) => (
   <div className="header">
    
      <Link to='/' className="logo-container">
         <img className="logo" src="https://tse2.mm.bing.net/th?id=OIP.89EgQZMlDL96-_7wen5vtQHaHa&pid=Api&P=0&w=300&h=300" alt="" height="50px" width="50px"/>
      </Link>

      <div className="options">
          <Link className="option" to='/shop'>
              SHOP
          </Link>

          <Link className="option" to='/shop'>
              CONTACT
          </Link>
          
          {
              currentUser ?
              <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>:
          <Link className="option" to='/shop'>
              SIGN IN
          </Link>
          }
      </div>
   </div>
);

export default Header;