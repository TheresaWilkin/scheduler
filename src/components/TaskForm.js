import React, { Component } from 'react';
import { View, Text, DatePickerIOS } from 'react-native';
import { connect } from 'react-redux';
import { taskOnChange } from '../actions';
import { CardSection, Input } from './common';

class TaskForm extends Component {
  render() {
    return (
      <View>
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
      </View>
    );
  }
}

const styles = {
  dateTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { task, description } = state.taskCreatorForm;
  let { dueDate } = state.taskCreatorForm;
  dueDate = new Date(dueDate);
  
  return { task, description, dueDate };
};

export default connect(mapStateToProps, { taskOnChange })(TaskForm);
