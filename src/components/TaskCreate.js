import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePickerIOS, Text } from 'react-native';
import {
  taskOnChange,
  taskCreate
} from '../actions';
import { Card, CardSection, Input, Button } from './common';

class TaskCreate extends Component {
  onButtonPress() {
    const { task, description, dueDate } = this.props;

    this.props.taskCreate({ task, description, dueDate });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Task"
            placeholder="Write Essay"
            value={this.props.task}
            onChangeText={value => this.props.taskOnChange({ prop: 'task', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Description (optional)"
            placeholder="5 paragraphs, MLA format"
            value={this.props.description}
            onChangeText={value => this.props.taskOnChange({ prop: 'description', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.dateTextStyle}>Due Date</Text>
          <DatePickerIOS
            date={this.props.dueDate}
            mode="date"
            onDateChange={value => this.props.taskOnChange({ prop: 'dueDate', value })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  dateTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = ({ taskCreatorForm }) => {
  const { task, description, dueDate } = taskCreatorForm;
  return { task, description, dueDate };
};

export default connect(mapStateToProps, { taskOnChange, taskCreate })(TaskCreate);
