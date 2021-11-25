
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import HomeUser from './componentes/homeUser/HomeUser.jsx';

import SignUp from './Auth/pages/RegisterForm.jsx';
import SignIn from './Auth/pages/SignInForm.jsx';
import ModelCard from './users/ModelCard.jsx';

import { HomeSeller } from './users/Seller/pages/HomeSeller.jsx';
import { Bill } from './users/User/components/bill/Bill.jsx';
import { CheckBills } from './users/User/pages/checkBills/CheckBills.jsx';

import { HomeUser } from './users/User/pages/homeUser/HomeUser';
import { ShoppingCart } from './users/User/pages/shoppingCart/ShoppingCart.jsx';



const App = () => {


  return (

    <Router>
      <Switch>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/RegisterPage">
          <SignUp />
        </Route>
        <Route path="/HomeUser">
          <HomeUser />
        </Route>
        <Route path="/HomeSeller">
          <HomeSeller />
        </Route>
        <Route path="/ShoppingCart">
          <ShoppingCart />
        </Route>
        <Route path="/CheckYourBills">
          <CheckBills/>
        </Route>
        <Route path="/Bill">
          <Bill/>
        </Route>
      </Switch>
    </Router>

  )
}



export default App;
