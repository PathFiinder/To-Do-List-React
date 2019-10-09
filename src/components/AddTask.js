import React, { Component } from "react";
import "./AddTask.sass";
class AddTask extends Component {
  date = new Date();
  state = {
    text: "",
    category: "",
    startDate: this.date.toISOString().slice(0, 10),
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
    this.setState({
      category: event.target.value
    });
  };

  handleSelectPriority = event => {
    this.setState({
      priority: event.target.value * 1
    });
  };
  render() {
    return (
      <div className="main__item addTask">
        <div className="addTask__dataContainer">
          <p className="addTask__dataDay">
            {this.date.toLocaleDateString().match(/^([^.]+)/g)}
          </p>
          <p className="addTask__dataMonth">
            {this.date.toLocaleString("en-us", { month: "short" })}
          </p>
          <p className="addTask__dataYear">{this.date.getFullYear()}</p>
        </div>
        <h2 className="addTask__nameofDay">
          {this.date.toLocaleString("en-us", { weekday: "long" })}
        </h2>
        <div className="addTask__form form">
          <div className="form__item form__item--category">
            <p className="form__title form__categoryTitle">Choose category: </p>
            <ul className="form__categoryList">
              <button
                className="form__singleCategory"
                value="House"
                onClick={this.handleChooseCategory}
              >
                House
              </button>
              <button
                className="form__singleCategory"
                value="Work"
                onClick={this.handleChooseCategory}
              >
                Work
              </button>
              <button
                className="form__singleCategory"
                value="Study"
                onClick={this.handleChooseCategory}
              >
                Study
              </button>
              <button
                className="form__singleCategory"
                value="Other"
                onClick={this.handleChooseCategory}
              >
                Other
              </button>
            </ul>
          </div>
          <div className="form__item form__item--priority">
            <p className="form__title form__priorityTitle">
              Choose task priority:{" "}
            </p>
            <select
              name="priority"
              id="priority"
              className="form__prioritySelect"
              value={this.state.priority}
              onChange={this.handleSelectPriority}
            >
              <option
                value={1}
                className="priority__single priority__single--normal"
              >
                normal
              </option>
              <option
                value={2}
                className="priority__single priority__single--important"
              >
                important
              </option>
              <option
                value={3}
                className="priority__single priority__single--v-important"
              >
                very important
              </option>
            </select>
          </div>
          <div className="form__item form__item--date">
            <p className="form__title form__dateTitle">Choose Date:</p>
            <input
              type="date"
              className="form__date"
              value={this.state.startDate}
              onChange={this.handleChangeDate}
              min={this.date.toISOString().slice(0, 10)}
              required="required"
            />
          </div>
          <div className="form__item form__item--text">
            <input
              type="text"
              className="form__textInput"
              value={this.state.text}
              onChange={this.handleChangeValue}
              placeholder="Add new task"
            />
            <button
              className="form__button"
              onClick={() => {
                const { text, category } = this.state;
                if (text.length > 2 && category !== "") {
                  this.props.handleAddTask(
                    this.state.text,
                    this.state.category,
                    this.state.startDate,
                    this.state.priority
                  );
                  this.setState({
                    text: "",
                    category: "",
                    startDate: this.date.toISOString().slice(0, 10),
                    priority: 1
                  });
                } else if (text.length === 0
                  ) {
                  alert("Insert task name");
                } else if (text.length > 0 && text.length <= 2) {
                  alert("Task name have to be longer than two chars");
                } else if (category === "") {
                  alert("Choose catgeory");
                }
              }}
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
