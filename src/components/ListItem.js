import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { task } = this.props;
    const date = new Date(task.dueDate).toDateString();
    return (
      <CardSection style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.titleStyle}>
            {task.task}
          </Text>
          <Text style={styles.dateStyle}>{date}</Text>
        </View>
        <Text style={styles.detailStyle}>{task.description}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 2
  },
  dateStyle: {
    fontSize: 14,
    alignSelf: 'flex-end',
    flex: 1,
    paddingRight: 15
  },
  detailStyle: {
    fontSize: 14,
    paddingLeft: 15
  }
};

export default ListItem;
