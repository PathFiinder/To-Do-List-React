import React from "react";
import "./ProgressBar.sass";

const ProgressBar = props => {
  const checkActiveTasks = () => {
    const tasks = props.tasks.filter(task => task.active);
    return tasks;
  };
  const active = checkActiveTasks();
  let nrOnePriority = 0;
  let nrTwoPriority = 0;
  let nrThreePriority = 0;

  active.forEach(task => {
    if (task.priority === 1) nrOnePriority++;
    else if (task.priority === 2) nrTwoPriority++;
    else if (task.priority === 3) nrThreePriority++;
  });

  const totalCountOfPriority = nrOnePriority + nrTwoPriority + nrThreePriority;

  return (
    <div className="main__item progressBar" style={active.length !== 0 ? {display: "block"} : {display: "none"}}>
      <h3 className="progressBar__title">{active.length !== 0 ? "Number of task by priorities:" : "" }</h3>
      <div
        className="progressBar__list"
        style={active.length !== 0 ? { display: "flex" } : {}}
      >
        <div
          className="progressBar__item progressBar__item--one"
          style={{
            flexBasis: (nrOnePriority / totalCountOfPriority) * 100 + "%"
          }}
        >
          {nrOnePriority !== 0 ? nrOnePriority : ""}
        </div>
        <div
          className="progressBar__item progressBar__item--two"
          style={{
            flexBasis: (nrTwoPriority / totalCountOfPriority) * 100 + "%"
          }}
        >
          {nrTwoPriority !== 0 ? nrTwoPriority : ""}
        </div>
        <div
          className="progressBar__item progressBar__item--three"
          style={{
            flexBasis: (nrThreePriority / totalCountOfPriority) * 100 + "%"
          }}
        >
          {nrThreePriority !== 0 ? nrThreePriority : ""}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
