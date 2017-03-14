import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button, Dialog } from './baseComponents';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {

  state = { showModal: false };

  componentWillMount(){
      _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate({ prop, value});
      });
  }

  onSavePressed(){
      const { name, phone, shift } = this.props;
      this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid });
  }

  onDecline(){
    this.setState(!this.state.showModal);
  }

  onAccept(){

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
          <CardSection>
            <Button onPress={() => this.setState({ showModal: !this.state.showModal})}>
              Fire employee!
            </Button>
          </CardSection>
          <Dialog visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}>
            Are you sure you want to fire {this.props.name}?
          </Dialog>
        </Card>

      )
    }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit);
