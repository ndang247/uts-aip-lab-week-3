import React from 'react';

class Converter extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          type: '',
          value: '',
          result: ''
      };
      this.calculate = this.calculate.bind(this);
    }

    resetResult() {
        this.setState({result: ''});
    }
  
    render() {
        let page;
        const selector = (
            <div>
                <h1>Imperial to Metric Converter</h1>
                <p>
                    <button onClick={ () => {
                        this.setState({type: 'Temperature'});
                        this.resetResult();
                        }}>
                        Temperature
                    </button>
                    <button onClick={ () => {
                        this.setState({type: 'Distance'});
                        this.resetResult();
                        }}>
                        Distance
                    </button>
                    <p/>
                </p>
            </div>
        );
        const input = (
            <div>
                <input type='text' value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}></input>
                <p></p>
                <button onClick={this.calculate}>Convert</button>
            </div>
        );

      if (this.state.type === 'Temperature') {
        page = (
        <div>
            {selector}
            <label>Fahrenheit: </label>
            {input}
            <p>Celsius: {this.state.result}</p>
        </div>
        ); 
      } else {
        page = (
        <div>
            {selector}
            <label>Miles: </label>
            {input}
            <p>Kilometers: {this.state.result}</p>
        </div>
        );
      }
      return page;
    }

    calculate() {
        if (this.state.type === 'Temperature') {
            let temperatureResult = (this.state.value - 32) * 5/9;
            this.setState({result: temperatureResult});   
        } else {
            let distanceResult = this.state.value * 1.609344;
            this.setState({result: distanceResult});
        }
        this.setState({value: ''});
    }
  }

  export default Converter; 