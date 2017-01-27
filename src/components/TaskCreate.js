import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  taskOnChange,
  taskCreate
} from '../actions';
import { Card, CardSection, Button } from './common';
import TaskForm from './TaskForm';

class TaskCreate extends Component {
  onButtonPress() {
    const { task, description, dueDate, subtasks, dateCreated } = this.props;

    this.props.taskCreate({ task, description, dueDate, subtasks, dateCreated });
  }

  render() {
    return (
      <Card>
        <TaskForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ taskCreatorForm }) => {
  const { task, description, dueDate, subtasks, dateCreated } = taskCreatorForm;

  return { task, description, dueDate, subtasks, dateCreated };
};

export default connect(mapStateToProps, { taskOnChange, taskCreate })(TaskCreate);
