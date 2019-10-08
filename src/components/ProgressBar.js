import React from "react";
import "./ProgressBar.css";

const ProgressBar = props => {
  const checkActiveTasks = () => {
    const tasks = props.tasks.filter(task => task.active);
    console.log(tasks);
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
    <div
      className="ProgressBar"
      style={active.length !== 0 ? { display: "flex" } : {}}
    >
      <div
        className="ProgessBar__Item PogressBar__Item--one"
        style={{
          flexBasis: (nrOnePriority / totalCountOfPriority) * 100 + "%"
        }}
      >
        {nrOnePriority !== 0 ? nrOnePriority : ""}
      </div>
      <div
        className="ProgessBar__Item PogressBar__Item--two"
        style={{
          flexBasis: (nrTwoPriority / totalCountOfPriority) * 100 + "%"
        }}
      >
        {nrTwoPriority !== 0 ? nrTwoPriority : ""}
      </div>
      <div
        className="ProgessBar__Item PogressBar__Item--three"
        style={{
          flexBasis: (nrThreePriority / totalCountOfPriority) * 100 + "%"
        }}
      >
        {nrThreePriority !== 0 ? nrThreePriority : ""}
      </div>
    </div>
  );
};

export default ProgressBar;
