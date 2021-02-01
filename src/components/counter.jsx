import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  // handleIncrement = (product) => {
  //   // console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // Take ss of this and delete
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  //   // can be used like this
  // }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Render");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className='btn btn-secondary btn-sm m-2'
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  deselectIfZero() {}

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
