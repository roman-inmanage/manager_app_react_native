import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button } from './baseComponents';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';

class EmployeeEdit extends Component {
  componentWillMount(){
      _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate({ prop, value});
      });
  }

  onSavePressed(){

  }

    render(){
      return (
        <Card>
          <EmployeeForm />
          <CardSection>
            <Button onPress={this.onSavePressed.bind(this)}>
              Save changes
            </Button>
          </CardSection>
        </Card>
      )
    }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {name, phone, shift};
};

export default connect(null, {employeeUpdate})(EmployeeEdit);
