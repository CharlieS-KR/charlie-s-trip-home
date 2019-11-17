import React, { Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import actionTypes from '../actions/actionTypes';
import {
    FormControl,
    InputLabel,
    Input,
    Button
} from '@material-ui/core';

type FormProps = {
    currentOption: string;
    submitItem: (currentOption: string, state: FormState) => Object;
}

interface FormState {
    title: string;
    description: string;
    createdBy: string;
}

class AddItemForm extends Component<FormProps> {
    state = {
        title: '',
        description: '',
        createdBy: ''
    }
    
    handleTitleInput = (event: any) => {
        this.setState({ title: event.target.value });
    }

    handleDescriptionInput = (event: any) => {
        this.setState({ description: event.target.value });
    }

    handleCreatedByInput = (event: any) => {
        this.setState({ createdBy: event.target.value });
    }

    render() {
        return (
            <div style={{ marginBottom: 20, border: '1px solid grey', maxWidth: 300, paddingBottom: 40, marginLeft: 'auto', marginRight: 'auto' }}>
                <h2>Enter your new item</h2>
                <FormControl>
                    <InputLabel htmlFor='title_input'>Title</InputLabel>
                    <Input id='title_input'  placeholder='Enter your title...' onChange={this.handleTitleInput}/>
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor='description_input'>Description</InputLabel>
                    <Input id='description_input' placeholder='Enter description...' onChange={this.handleDescriptionInput}/>
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor='created_by_input'>Created By</InputLabel> 
                    <Input id='created_by_input' placeholder='Enter your name...' onChange={this.handleCreatedByInput}/>
                </FormControl>
                <br />
                <Button onClick={() => this.props.submitItem(this.props.currentOption, this.state)} variant='contained' color='primary' style={{ marginTop: 20 }}>Submit Item</Button>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        submitItem: (type: string, state: FormState) => {
            switch (type) {
                case 'food':
                    return dispatch({ type: actionTypes.addFoodItem, payload: state })
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(AddItemForm);