import React from "react";
import "./SingleTask.sass";

const SingleTask = props => {
  const finishDate = new Date(props.task.finishDate).toLocaleString();

  const checkPriority = () => {
    let priorityStyle = "";
    switch (props.task.priority) {
      case 1:
        priorityStyle = "#CF7370";
        break;
      case 2:
        priorityStyle = "#F9F975";
        break;
      case 3:
        priorityStyle = "#7DDBB6";
        break;
      default:
        return "";
    }
    return priorityStyle;
  };

  return (
    <div className="list__singleItem singleItem">
      <h3 className="singleItem__name">
        <span className="singleItem__name--bold">Task name:</span>{" "}
        {props.task.name}
      </h3>
      <p className="singleItem__category">
        <span className="singleItem__category--bold">Category: </span>
        {props.task.category}
      </p>
      <p className="singleItem__startDate">
        {props.task.finishDate === null
          ? `Start date: ${props.task.startDate}`
          : `Start date: ${props.task.startDate} Finished: ${finishDate}`}
      </p>
      <div className="singleItem__buttons" style={props.task.active === true ? {width: "44px"} : {width: "22px"}}>
        <button
          className="singleItem__singleButton singleItem__singleButton--delete fas fa-times"
          style={props.task.active === true ? {flexBasis: "50%"} : {flexBasis: "100%"}}
          onClick={() => props.delete(props.task.id)}
        ></button>
        {props.task.active === true ? (
          <button
            className="singleItem__singleButton singleItem__singleButton--check fas fa-check"
            style={props.task.active === true ? {flexBasis: "50%"} : {flexBasis: "0%"}}
            onClick={() => props.finished(props.task.id)}
          ></button>
        ) : (
          ""
        )}
      </div>
      <span
        className="singleItem__priority"
        style={{ backgroundColor: checkPriority() }}
      ></span>
    </div>
  );
};

export default SingleTask;
