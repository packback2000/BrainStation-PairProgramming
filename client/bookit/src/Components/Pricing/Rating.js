import React from "react";

export default class Rating extends React.Component {
    state = {
        ratingInputValue: "0",
        rateInput: {
          0: "1",
          1: "2",
          2: "3",
          3: "4",
          4: "5",
        
        },
        rateOutput: {}
    }

    slider = React.createRef();
    sliderValue = React.createRef();

    componentDidMount() {
        this.slider.current.setAttribute("min", 0);
        this.slider.current.setAttribute(
          "max",
          Object.keys(this.state.rateInput).length - 1
        );
        this.thumbSize = parseInt(
          window
            .getComputedStyle(this.sliderValue.current)
            .getPropertyValue("--thumb-size"),
          10
        );
        this.handleSliderValuePosition(this.slider.current);
      }
    
      handleRatingSlide = e => {
        this.setState({ rateInputValue: e.target.value });
        this.handleSliderValuePosition(e.target);
      };
    
      handleSliderValuePosition = input => {
        const multiplier = input.value / input.max;
        const thumbOffset = this.thumbSize * multiplier;
        const rateInputOffset =
          (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
        this.sliderValue.current.style.left =
          input.clientWidth * multiplier - thumbOffset + rateInputOffset + "px";
      };
    
      getRatingData = (obj, pos) => {
        return pos !== undefined
          ? obj[this.state.rateInputValue][pos]
          : obj[this.state.rateInputValue];
      };

render() {
    return(
        <div className="pricing">
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <span>Rating</span>
            <input
              type="range"
              ref={this.slider}
              defaultValue={this.state.rateInputValue}
              onChange={this.handleRatingSlide}
            />
          </label>
          <div ref={this.sliderValue} className="pricing-slider-value">
            {this.getRatingData(this.state.rateInput)}
          </div>
        </div>
        </div>
    )
}
}