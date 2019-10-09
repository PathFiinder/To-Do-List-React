import React from "react";
import SingleTask from "./SingleTask.js";
import "./TaskList.sass";

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
    <div className="main__item taskList">
      <div className="taskList__group taskList__group--started">
        {active.length !== 0 ? (
          <h2 className="taskList__title">Started tasks</h2>
        ) : (
          ""
        )}
        <div
          className="taskList__list list"
          style={
            active.length !== 0 ? { paddingTop: "10px" } : { paddingTop: "0px" }
          }
        >
          {activeTasks}
        </div>
      </div>
      <div
        className="taskList__group taskList__group--finished"
        style={
          finished.length !== 0 && active.length !== 0
            ? { marginTop: "20px" }
            : { marginTop: "0px" }
        }
      >
        {finished.length !== 0 ? (
          <h2 className="taskList__title">Finished</h2>
        ) : (
          ""
        )}
        <div
          className="taskList__list list"
          style={
            finished.length !== 0
              ? { paddingTop: "10px" }
              : { paddingTop: "0px" }
          }
        >
          {finishedTasks}
        </div>
      </div>
      {active.length === 0 && finished.length === 0 ? "No tasks to do " : ""}
    </div>
  );
};

export default TaskList;
