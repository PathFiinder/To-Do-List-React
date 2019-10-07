import React from "react";
import SingleTask from "./SingleTask.js";
import "./TaskList.css";
const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const activeTasks = active.map(task => (
    <SingleTask
      key={task.id}
      task={task}
      delete={props.delete}
      finished={props.finished}
    />
  ));

  const finished = props.tasks.filter(task => !task.active);
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
