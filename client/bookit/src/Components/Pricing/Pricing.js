import React from "react";

export default class Pricing extends React.Component {
    state = {
        priceInputValue: "1",
        priceInput: {
          0: "0",
          1: "5",
          2: "10",
          3: "15",
          4: "20",
          5: "25",
          6: "30",
          7: "35",
          8: "40",
          9: "45+"
        },
        priceOutput: {}
    }

    slider = React.createRef();
    sliderValue = React.createRef();

    componentDidMount() {
        this.slider.current.setAttribute("min", 0);
        this.slider.current.setAttribute(
          "max",
          Object.keys(this.state.priceInput).length - 1
        );
        this.thumbSize = parseInt(
          window
            .getComputedStyle(this.sliderValue.current)
            .getPropertyValue("--thumb-size"),
          10
        );
        this.handleSliderValuePosition(this.slider.current);
      }
    
      handlePricingSlide = e => {
        this.setState({ priceInputValue: e.target.value });
        this.handleSliderValuePosition(e.target);
      };
    
      handleSliderValuePosition = input => {
        const multiplier = input.value / input.max;
        const thumbOffset = this.thumbSize * multiplier;
        const priceInputOffset =
          (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
        this.sliderValue.current.style.left =
          input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
      };
    
      getPricingData = (obj, pos) => {
        return pos !== undefined
          ? obj[this.state.priceInputValue][pos]
          : obj[this.state.priceInputValue];
      };

render() {
    return(
        <div className="pricing">
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <span>Price</span>
            <input
              type="range"
              ref={this.slider}
              defaultValue={this.state.priceInputValue}
              onChange={this.handlePricingSlide}
            />
          </label>
          <div ref={this.sliderValue} className="pricing-slider-value">
            {this.getPricingData(this.state.priceInput)}
          </div>
        </div>
        </div>
    )
}
}