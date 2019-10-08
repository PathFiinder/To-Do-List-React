import React from "react";
import "./SingleTask.css";

const SingleTask = props => {
  const finishDate = new Date(props.task.finishDate).toLocaleString();

  const checkPriority = () => {
    let priorityStyle = "";
    switch (props.task.priority) {
      case 1:
        priorityStyle = "red";
        break;
      case 2:
        priorityStyle = "yellow";
        break;
      case 3:
        priorityStyle = "green";
        break;
      default:
        return "";
    }
    return priorityStyle;
  };

 
  return (
    <div className="List__SingleItem SingleItem">
      <h3 className="SingleItem__name">Task name: {props.task.name}</h3>
      <p className="SingleItem__startDate">
        {props.task.finishDate === null
          ? `Start date: ${props.task.startDate}`
          : `Start date: ${props.task.startDate} - Finished ${finishDate}`}
      </p>
      <p className="SingleItem__category">Category: {props.task.category}</p>
      <div className="SingleItem__icons">
        <button
          className="SingleItem__singleIcon SingleItem__singleIcon--delete fas fa-times"
          onClick={() => props.delete(props.task.id)}
        ></button>
        {props.task.active === true ? (
          <button
            className="SingleItem__singleIcon SingleItem__singleIcon--check fas fa-check"
            onClick={() => props.finished(props.task.id)}
          ></button>
        ) : (
          ""
        )}
      </div>
      <span className="SingleItem__priority" style={{backgroundColor: checkPriority()}}></span>
    </div>
  );
};

export default SingleTask;
