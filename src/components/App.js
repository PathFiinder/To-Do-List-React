import React, { Component } from "react";
import "./App.sass";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import ProgressBar from "./ProgressBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.counterTasks = 3;
    this.state = {
      tasks: [
        {
          id: 0,
          name: "Pierwszy task",
          startDate: "2019.10.07",
          priority: 1,
          active: true,
          finishDate: null,
          category: "House"
        },
        {
          id: 1,
          name: "Drugi task",
          startDate: "2019.10.06",
          priority: 2,
          active: true,
          finishDate: null,
          category: "Work"
        },
        {
          id: 2,
          name: "Trzeci task",
          startDate: "2019.10.05",
          priority: 3,
          active: false,
          finishDate: "7.10.2019, 17:48:31",
          category: "Study"
        }
      ]
    };
  }

  handleDelete = id => {
    const tasks = [...this.state.tasks].filter(task => task.id !== id);
    this.setState({
      tasks: tasks
    });
  };

  handleFinished = id => {
    const tasks = [...this.state.tasks].map(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
      return task;
    });

    this.setState({
      tasks: tasks
    });
  };

  handleAddTask = (text,category,startDate,priority) => {

    
    const task = {
      id: this.counterTasks,
      name: text,
      startDate: startDate,
      priority: priority,
      active: true,
      finishDate: null,
      category: category
    }
    const newTasks = [...this.state.tasks].concat(task)

  this.setState({
    tasks: newTasks
  })

    this.counterTasks++;
  }

  render() {
    return (
      <main className="main">
        <h1 className="main__title">ToDo App </h1>
        <AddTask tasks={this.state.tasks} handleAddTask = {this.handleAddTask}/>
        <ProgressBar tasks = {this.state.tasks}/>
        <TaskList
          tasks={this.state.tasks}
          delete={this.handleDelete}
          finished={this.handleFinished}
        />
      </main>
    );
  }
}

export default App;