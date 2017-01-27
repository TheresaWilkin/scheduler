import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { tasksFetch } from '../actions';
import ListItem from './ListItem';

class TaskList extends Component {
  componentWillMount() {
    this.props.tasksFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ tasks }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(tasks);
  }

  renderRow(task) {
    return <ListItem task={task} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  let tasks = _.map(state.tasks, (val, uid) => {
    return { ...val, uid };
  });

  const newTasks = [];

  tasks.forEach((taskObj) => {
    if (taskObj.subtasks.length !== 0) {
      const count = parseInt(taskObj.subtasks, 10);
      const dueDate = new Date(taskObj.dueDate).getTime();
      const dateCreated = new Date(taskObj.dateCreated).getTime();
      const milliseconds = dueDate - dateCreated;
      const distance = Math.floor(milliseconds / taskObj.subtasks);

      for (let i = 1; i <= count; i++) {
        const newSeconds = dateCreated + (distance * i);
        const subDate = new Date(newSeconds);

        const obj = {
          task: `${taskObj.task} ${i}`,
          description: taskObj.description,
          dueDate: subDate,
          subtasks: ''
        };
        newTasks.push(obj);
      }
      newTasks.push({ ...taskObj, task: `${taskObj.task} MAIN` });
    } else {
      newTasks.push(taskObj);
    }
  });

  tasks = newTasks.sort((a, b) => {
    const aDate = new Date(a.dueDate).getTime();
    const bDate = new Date(b.dueDate).getTime();
    return aDate - bDate;
  });
  
  return { tasks };
};

export default connect(mapStateToProps, { tasksFetch })(TaskList);
