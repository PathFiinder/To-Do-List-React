import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
  state = {
    text: "",
    category: "",
    startDate: "",
    priority: 1
  };
  date = new Date();

  handleChangeValue = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleChangeDate = event => {
    this.setState({
      startDate: event.target.value
    });
  };

  handleChooseCategory = event => {
    this.setState ({
      category: event.target.value
    })
  }

  handleSelectPriority = event => {
    this.setState({
      priority: event.target.value*1
    })
  }
  render() {
    return (
      <div className="AddTask">
        <div className="AddTask__DataContainer">
          <p className="AddTask__DataDay">
            {this.date.toLocaleDateString().match(/^([^.]+)/g)}
          </p>
          <p className="AddTask__DataMonth">
            {this.date.toLocaleString("en-us", { month: "short" })}
          </p>
          <p className="AddTask__DataYear">{this.date.getFullYear()}</p>
        </div>
        <h3 className="AddTask__NameOfDay">
          {this.date.toLocaleString("en-us", { weekday: "long" })}
        </h3>
        <div className="AddTask__Form Form">
          <div className="Form__Item Form__Item--Category">
            <p className="Form__CategoryTitle">Category</p>
            <ul className="Form__CategoryList">
              <button className="Form__SingleCategory" value="House" onClick={this.handleChooseCategory}>
                House
              </button>
              <button className="Form__SingleCategory" value="Work" onClick={this.handleChooseCategory}>
                Work
              </button>
              <button className="Form__SingleCategory" value="Study" onClick={this.handleChooseCategory}>
                Study
              </button>
              <button className="Form__SingleCategory" value="Other" onClick={this.handleChooseCategory}>
                Other
              </button>
            </ul>
          </div>
          <div className="Form__Item">
            <label htmlFor="priority">
              <select name="priority" id="priority" value={this.state.priority} onChange={this.handleSelectPriority}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </label>
          </div>
          <div className="Form__Item Form__Item--Date">
            <p className="Form__DateTitle">Choose Date:</p>
            <input
              type="date"
              className="Form__Date"
              value={this.state.startDate}
              onChange={this.handleChangeDate}
            />
          </div>
          <div className="Form__Item Form__Item--Text">
            <input
              type="text"
              className="Form__TextInput"
              value={this.state.text}
              onChange={this.handleChangeValue}
            />
            <button
              className="Form__Button"
              onClick={() =>
                this.props.handleAddTask(
                  this.state.text,
                  this.state.category,
                  this.state.startDate,
                  this.state.priority
                )
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTask;
