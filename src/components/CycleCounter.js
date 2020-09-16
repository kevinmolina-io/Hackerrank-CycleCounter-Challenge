import React from "react";

class CycleCounter extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      counter: (this.state.counter + 1) % this.props.cycle,
    });
  };

  render() {
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="pt-20 layout-row align-items-center justify-content-center">
          <button
            onClick={this.handleClick}
            data-testid="cycle-counter"
            style={{ fontSize: "1rem", width: 120, height: 30 }}
          >
            {this.state.counter}
          </button>
        </section>
      </div>
    );
  }
}

export default CycleCounter;
