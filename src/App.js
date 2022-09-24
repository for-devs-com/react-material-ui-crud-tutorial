/*Open src/App.js, this App component is the root container for our application, it will contain a AppBar,
 and also, a Switch object with several Route. Each Route points to a React Component.*/
import React, { Component } from "react";
//import react-router-dom library Objects
import { Switch, Route, Link } from "react-router-dom";
//import styles
import "./App.css";
import { styles } from "./css-common"
//import components
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
//import @material-ui/core library Objects
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

class App extends Component {
  render() {
    //this.properties can now be refer by classes.
    const { classes } = this.props
    //The return statement of App is the layout of the entire application
    return (
      <div>
        {/* This code has two parts:
        First: The UI layout build with Material UI components(AppBar, ToolBar, Typography, Link, and Toolbar).
        */}
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography className={classes.name} variant="h6">
              for-devs.com
            </Typography>
            <Link to={"/tutorials"} className={classes.link}>
              <Typography variant="body2">
                Tutorials
              </Typography>
            </Link>
            <Link to={"/add"} className={classes.link}>
              <Typography variant="body2">
                Add
            </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        {/*Second: The routing to tutorial components(TutorialsList, AddTutorial, Tutorial).*/}
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);