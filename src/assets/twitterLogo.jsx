import { Component } from "react";

export class TwitterLogo extends Component {
  render() {
    return (
      <svg
        role="graphics-symbol"
        viewBox="0 0 350 350"
        style={this.props.style}
      >
        <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
      </svg>
    );
  }
}