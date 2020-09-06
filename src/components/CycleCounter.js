import React from 'react';

class CycleCounter extends React.Component {

  render() {
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="pt-20 layout-row align-items-center justify-content-center">
          <button
            data-testid="cycle-counter"
            style={{ fontSize: '1rem', width: 120, height: 30, }}
          >0</button>
        </section>
      </div>
    );
  }
}

export default CycleCounter;
