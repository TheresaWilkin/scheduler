import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Circle } from './common';

class ListItem extends Component {
  onRowPress() {
    const { task } = this.props;
    Actions.taskEdit({ editTask: task });
  }

  render() {
    const { task } = this.props;

    const date = new Date(task.dueDate).toDateString();
    const today = new Date().getTime();
    const dateDue = new Date(task.dueDate).getTime();
    const ms = 86400000;

    let due;
    if (dateDue < (today - ms)) {
      due = { backgroundColor: '#c0392b' };
    } else if (dateDue > (today + ms)) {
      due = { backgroundColor: '#2ecc71' };
    } else {
      due = { backgroundColor: '#f1c40f' };
    }

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={{ flexDirection: 'column' }}>
            <Circle style={due} />
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.titleStyle}>
                {task.task}
              </Text>
              <Text style={styles.dateStyle}>{date}</Text>
            </View>
            <Text style={styles.detailStyle}>{task.description}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 2,
  },
  dateStyle: {
    fontSize: 14,
    alignSelf: 'flex-end',
    flex: 1,
    paddingRight: 15,
    fontFamily: 'Baskerville-Italic'
  },
  detailStyle: {
    fontSize: 14,
    paddingLeft: 15,
    fontFamily: 'Baskerville'
  },
};

export default ListItem;
