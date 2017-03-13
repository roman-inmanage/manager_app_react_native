import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection } from './baseComponents';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component{

  onRowPressed(){
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render(){
    const { name } = this.props.employee;

    return (
      <TouchableOpacity onPress={this.onRowPressed.bind(this)}>
        <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
        </CardSection>
      </TouchableOpacity>

    );
  }
};

const styles = {
  titleStyle: {
    fontSize: 18,
    padding: 15
  }
}

export default ListItem;
