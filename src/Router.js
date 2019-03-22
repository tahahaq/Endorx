import React from 'react';
import {Scene, Router ,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" tabs>
                <Scene key="login" component={LoginForm} title="Please login" initial hideTabBar/>
                <Scene
                    key="employeeList"
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    component={EmployeeList}
                    title="Employees"
                    hideTabBar/>
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee" />
            </Scene>

        </Router>
    )
};

export default RouterComponent;