import React, { Component } from "react";
import Plan from "./Plan";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];

      this.setState({ items: items, text: "" });
    }
  };
  handleDelete = (id) => {
    console.log("delete", id);
    const oldItems = [...this.state.items];
    console.log("oldItems ", oldItems);
    const newItems = oldItems.filter((element, i) => {
      return i !== id;
    });
    console.log("newItems ", newItems);
    this.setState({items:newItems});
  };
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-7 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center">Today's App</h2>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="write plan here"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-warning px-5 fw-bold"
                  onClick={this.handleAdd}
                >
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {this.state.items.map((valu, i) => (
                    <Plan
                      key={i}
                      id={i}
                      val={valu}
                      sendData={this.handleDelete}
                    />
                  ))}
                  {/* {console.log(this.state.items)} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
