import React, { Component } from 'react';
import { Card, CardSection, EditText, Button, Spinner } from './baseComponents';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';
import { Text } from 'react-native';

class LoginForm extends Component {

  onEmailChanged(text){
      this.props.emailChanged(text);
  }

  onPasswordChanged(password){
    this.props.passwordChanged(password);
  }

  onLoginUser(){
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton(){
    const { loading } = this.props;
    if (loading){
        return <Spinner />
    }
    return (
      <Button
          onPress={this.onLoginUser.bind(this)}>
        Log In
      </Button>
    );
  }
    render(){
        return(
            <Card>
                <CardSection>
                  <EditText
                    label="Email"
                    placeholder="user@gmail.com"
                    onChangeText={this.onEmailChanged.bind(this)}
                    value = {this.props.email}/>
                </CardSection>
                <CardSection>
                  <EditText
                    secureTextEntry
                    label="Password"
                    placeholder="password"
                    onChangeText={this.onPasswordChanged.bind(this)}
                    value={this.props.password}/>
                </CardSection>
                <Text style={styles.errorTextStyle}>
                  {this.props.error}
                </Text>
                <CardSection >
                  {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 5
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
