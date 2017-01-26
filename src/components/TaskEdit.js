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
    const { task, description, dueDate } = this.props;

    this.props.taskSave({ task, description, dueDate, uid: this.props.editTask.uid });
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
  const { task, description } = state.taskCreatorForm;
  let { dueDate } = state.taskCreatorForm;
  dueDate = new Date(dueDate);

  return { task, description, dueDate };
};

export default connect(mapStateToProps, {
  taskOnChange, taskSave, taskDelete })(TaskEdit);
