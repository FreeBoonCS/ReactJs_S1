import React , {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Gallary from './gallary';
import Contact from './mycontact';

const Myprofile = () => <h2 className="text-center"> View Profile </h2>;
const Myeducation = () => <h2 className="text-center"> Education Details </h2>;
const Experience = () => <h2 className="text-center"> Experience Details </h2>;
const Project = () => <h2 className="text-center"> Project Details </h2>;



class Profile extends Component{
  
    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-4"><h3>Nested Routing</h3></div>
                    <div className="col-lg-8 text-right">
                        <div className="btn-group">
                            <Link className="btn btn-primary" to="/profile">View Profile</Link>
                            <Link className="btn btn-primary" to="/profile/edu">My Education</Link>
                            <Link className="btn btn-primary" to="/profile/exp">Experience</Link>
                            <Link className="btn btn-primary" to="/profile/project">My Projects</Link>
                            <Link className="btn btn-primary" to="/profile/contact">My Contact</Link>
                            <Link className="btn btn-primary" to="/profile/photo">My Gallary</Link>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <Switch>
                            <Route exact path="/profile" component={Myprofile}/>
                            <Route exact path="/profile/edu" component={Myeducation}/>
                            <Route exact path="/profile/exp" component={Experience}/>
                            <Route exact path="/profile/project" component={Project}/>
                            <Route exact path="/profile/contact" component={Contact}/>
                            <Route exact path="/profile/photo" component={Gallary}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;