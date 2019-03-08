import React, { Component } from "react";
import produce, { applyPatches } from "immer";
import "./app.css";

class App extends Component {
  undo = [];
  state = { value: "", items: [] };

  handleAddPatch = (patch, inversePatches) => {
    this.undo.push(inversePatches);
  };

  handleAdd = e => {
    e.preventDefault();

    const nextState = produce(
      this.state,
      draft => {
        draft.value = "";
        draft.items.push({ name: this.state.value });
      },
      this.handleAddPatch
    );
    this.setState(nextState);
  };

  handleUndo = () => {
    const undo = this.undo.pop();
    if (!undo) return;
    this.setState(applyPatches(this.state, undo));
  };

  handleClear = () => {
    const nextState = produce(
      this.state,
      draft => {
        draft.items = [];
        draft.value = "";
      },
      this.handleAddPatch
    );
    this.setState(nextState);
  };
  render() {
    return (
      <div className="App">
        {this.state.items.map(({ name }) => {
          return <div>{name}</div>;
        })}
        <form onSubmit={this.handleAdd}>
          <input
            autoFocus
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          />
          <button type="submit">Add</button>

          <div className="actions">
            <button onClick={this.handleUndo} type="button">
              Undo
            </button>
            <button onClick={this.handleClear} type="button">
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
