
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
import { HomeUser } from './users/User/pages/homeUser/HomeUser';



const App = () => {
  const [userData, setUserData] = useState({ id: "" })

  return (



    <Router>
      <Switch>
        <Route path="/" exact>
          <SignIn
            setData={setUserData}
          />
        </Route>
        <Route path="/RegisterPage">
          <SignUp />
        </Route>
        <Route path="/HomeUser">
          <HomeUser
            dataPost={userData}
          />
        </Route>
        <Route path="/HomeSeller">
          <HomeSeller
            dataSeller={userData}
          />
        </Route>
      </Switch>
    </Router>



  )
}



export default App;
