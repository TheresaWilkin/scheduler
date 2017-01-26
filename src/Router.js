import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" initial />
      </Scene>

      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => Actions.taskCreate()}
          key="taskList"
          component={TaskList}
          title="Tasks"
          initial
        />
        <Scene
          key="taskCreate"
          component={TaskCreate}
          title="Create Task"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
