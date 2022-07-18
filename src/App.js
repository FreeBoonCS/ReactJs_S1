import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

//import functionName, className from './filename.js';
import MyUser from './user.js';
import UserLogin from './login'
import UserProfile from './profile';
import MyProduct from './product';
import Header from './header';
import MyItem from './item';
import MyBook from './book';
import StateOne from './myclass/state1';
import State2 from './myclass/state2';
import StateThree from './myclass/state3';
import StateFour from './myclass/state4';
import StateFive from './myclass/state5';
import StateSix from './myclass/state6';
import StateSeven from './myclass/state7';
import StateEight from './myclass/state8';
import Crud from './myclass/state9';
import stateTen from './myclass/state10';
import ManageProps from './myclass/product.js';

import Profile from './myclass/myprofile';
import HookOne  from './hook1';
import HookTwo  from './hook2';
import HookThree  from './hook3';
import HookFour  from './hook4';
import HookFive  from './hook5';


function App() {
  return (
            <HashRouter>
              <Header/>
             
              <Route exact path="/book-list" component={MyBook}/>
              <Route exact path="/item-list" component={MyItem}/>
              <Route exact path="/user-list" component={MyUser}/>
              <Route exact path="/user-login" component={UserLogin}/>
              <Route exact path="/produst-list" component ={MyProduct}/> 
              <Route exact path="/my-profile" component={UserProfile}/>  
              <Route exact path="/state-one" component={StateOne}/>
              <Route exact path="/state-2" component={State2}/> 
              <Route exact path="/state-3" component={StateThree}/>
              <Route exact path="/state-4" component={StateFour}/>
              <Route exact path="/state-5" component={StateFive}/>  
              <Route exact path="/state-6" component={StateSix}/> 
              <Route exact path="/state-7" component={StateSeven}/>  
              <Route exact path="/state-8" component={StateEight}/>         
              <Route exact path="/crud" component={Crud}/>    
              <Route exact path="/state-10" component={stateTen}/>      
              <Route exact path="/product" component={ManageProps} />

              <Route path="/profile" component={Profile}/>
              <Route exact path="/hook1" component={HookOne}/>   
              <Route exact path="/hook2" component={HookTwo}/>  
              <Route exact path="/hook3" component={HookThree}/>
              <Route exact path="/:id/:type/myhook" component={HookFour}/> 
              <Route exact path="/:id/:type/use-effect" component={HookFive} />
  

            </HashRouter>
          );
}
export default App;
// create a component product.js function name Myproduct and import in app.js and print it
// npm install react-router-dom

