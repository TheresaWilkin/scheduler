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
    const { task, description, dueDate } = this.props;

    this.props.taskCreate({ task, description, dueDate });
  }

  render() {
    console.log(this.props.editTask);
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
  const { task, description, dueDate } = taskCreatorForm;
  return { task, description, dueDate };
};

export default connect(mapStateToProps, { taskOnChange, taskCreate })(TaskCreate);
