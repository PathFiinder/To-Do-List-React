import React from "react";
import SingleTask from "./SingleTask.js";
import "./TaskList.css";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const finished = props.tasks.filter(task => !task.active);

  if (finished.length >= 2) {
    finished.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      } else if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }
  const activeTasks = active.map(task => (
    <SingleTask
      key={task.id}
      task={task}
      delete={props.delete}
      finished={props.finished}
    />
  ));

  const finishedTasks = finished.map(task => (
    <SingleTask
      key={task.id}
      task={task}
      delete={props.delete}
      finished={props.finished}
    />
  ));
  return (
    <div className="TaskList">
      <div className="TaskList__Group TaskList__Group--Started">
        {active.length !== 0 ? (
          <h2 className="TaskList__Title">Started tasks</h2>
        ) : (
          ""
        )}
        <div className="TaskList__List List">{activeTasks}</div>
      </div>
      <div className="TaskList__Group TaskList__Group--Finished">
        {finished.length !== 0 ? (
          <h2 className="TaskList__Title">Finished</h2>
        ) : (
          ""
        )}
        <div className="TaskList__List List">{finishedTasks}</div>
      </div>
      {active.length === 0 && finished.length === 0 ? "No tasks to do " : ""}
    </div>
  );
};

export default TaskList;
