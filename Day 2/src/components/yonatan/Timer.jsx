import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    }
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  render() {
    const { time } = this.state;
    return (
      <p>
        Timer: <span>{time}</span>
      </p>
    )
  }
}

export default Timer;