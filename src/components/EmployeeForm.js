import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, EditText } from './baseComponents';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';


class EmployeeForm extends Component {

    render(){
      return(
        <View>
          <CardSection>
              <EditText
              label="Name"
              placeholder="employee name"
              value={this.props.name}
              onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}/>
          </CardSection>
          <CardSection>
              <EditText
                label="Phone"
                placeholder="employee phone number"
                value={this.props.phone}
                onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}/>
          </CardSection>
          <CardSection style={{ flexDirection: 'column'}}>
            <Text style={styles.pickerLabelStyle}>
                Select a Shift
            </Text>
            <View style={styles.pickerContainerStyle}>
              <Picker
                  style={styles.pickerStyle}
                  selectedValue={this.props.shift}
                  onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
                >
                <Picker.Item label='Monday' value='Monday'/>
                <Picker.Item label='Thuesday' value='Thuesday'/>
                <Picker.Item label='Wednesday' value='Wednesday'/>
                <Picker.Item label='Thursday' value='Thursday'/>
                <Picker.Item label='Friday' value='Friday'/>
                <Picker.Item label='Saturday' value='Saturday'/>
                <Picker.Item label='Sunday' value='Sunday'/>
              </Picker>
            </View>
          </CardSection>
        </View>

      );
    }
};

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  pickerStyle: {
    borderWidth: 0.5,
    marginLeft: 10
  },
  pickerContainerStyle: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 15
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
