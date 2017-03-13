import React from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
      <Router sceneStyle={{ paddingTop: 50}}>
        <Scene key="login" component={LoginForm} title="Login" type={ActionConst.RESET}/>
        <Scene key="main">
          <Scene key="employeeList" rightTitle="Add" onRight={() => Actions.employeeCreate()} component={EmployeeList} title="Employees" />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        </Scene>
      </Router>
  );
};

export default RouterComponent;
