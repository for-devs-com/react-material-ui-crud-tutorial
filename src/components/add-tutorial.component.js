/*Create React Components
Now we’re gonna build 3 components corresponding to 3 Routes defined before.

Add item Component
This component has a Form to submit new Tutorial with 2 fields: title & description.

components/add-tutorial.component.js
*/
import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

import { TextField, Button, withStyles } from "@material-ui/core"
import { styles } from "../css-common"

class AddTutorial extends Component {

    /*First, we define the constructor and set initial state, bind this to the different events.*/
    constructor(props) {
        super(props);
        /*Because there are 2 fields, so we create 2 functions to track the values of the input...*/
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        /*and set that state for changes*/
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        //Initialize the state
        this.state = {
            id: null,
            title: "",
            description: "",
            published: false,
            submitted: false
        };
    }

    //handles title Form changes
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    //handles description Form changes
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    //newTutorial() updates the state in memory
    newTutorial() {
        this.setState({
            id: null,
            title: "",
            description: "",
            published: false,

            submitted: false
        });
    }
    //saveTutorial() attends to update state in the database
    saveTutorial() {
        var data = {
            title: this.state.title,
            description: this.state.description
        };

        /*
        TODO: explain wha the TutorialDataService does
        We also have a function to get value of the form (state) and send the POST request to the Web API. It calls TutorialDataService.create() method.*/
        TutorialDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    published: response.data.published,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    /*For render() method, we check the submitted state, if it is true, we show Add button for creating new
     Tutorial again. Otherwise, a Form will display.*/
    render() {
        const { classes } = this.props

        return (
            <React.Fragment>
                {this.state.submitted ? (
                    <div className={classes.form}>
                        <h4>You submitted successfully!</h4>
                        <Button
                            size="small"
                            color="primary"
                            variant="contained"
                            onClick={this.newTutorial}>
                            Add
                        </Button>
                    </div>
                ) : (
                        <div className={classes.form}>
                            <div className={classes.textField}>
                                <TextField
                                    label="Title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                    required
                                />
                            </div>

                            <div className={classes.textField}>
                                <TextField
                                    label="Description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChangeDescription}
                                    required
                                />
                            </div>

                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                onClick={this.saveTutorial}>
                                Submit
                            </Button>
                        </div>
                    )}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(AddTutorial)