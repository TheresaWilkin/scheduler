import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { taskOnChange, taskSave, taskDelete } from '../actions';
import { Card, CardSection, Button } from './common';

class TaskEdit extends Component {
  componentWillMount() {
      _.each(this.props.editTask, (value, prop) => {
        this.props.taskOnChange({ prop, value });
      });
  }

  onButtonPress() {
    const { task, description, dueDate, dateCreated, subtasks } = this.props;

    this.props.taskSave({
      task,
      description,
      dueDate,
      subtasks,
      dateCreated,
      uid: this.props.editTask.uid
    });
  }

  onDeletePress() {
    this.props.taskDelete({ uid: this.props.editTask.uid });
  }

  render() {
    return (
      <Card>
        <TaskForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onDeletePress.bind(this)}>
            Delete Task
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { task, description, subtasks } = state.taskCreatorForm;
  let { dueDate, dateCreated } = state.taskCreatorForm;
  dueDate = new Date(dueDate);
  dateCreated = new Date(dateCreated);

  return { task, description, dueDate, dateCreated, subtasks };
};

export default connect(mapStateToProps, {
  taskOnChange, taskSave, taskDelete })(TaskEdit);
