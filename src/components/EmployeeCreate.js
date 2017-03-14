import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button } from './baseComponents';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onEmployeeCreate(){
      const { name, phone, shift } = this.props;
      this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }

  componentWillUnmount(){
    this.props.employeeCreateInitialState();
  }

  render(){
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
            <Button
              onPress={this.onEmployeeCreate.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }

};



const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);
