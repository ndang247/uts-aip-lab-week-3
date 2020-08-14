import React from 'react';

class Selector extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: ''
        }
    }
    render() {
        return (
        <div>
        <h1>Imperial to Metric Converter</h1>
        <p>
            <button onClick={() => this.setState({type: 'Temperature'})}>
                Temperature
            </button>
            <button onClick={() => this.setState({type: 'Distance'})}>
                Distance
            </button>
            <p/>
            <Converter type={this.state.type}/>
        </p>
        </div>
        );
    }
}

class Converter extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: '',
        result: ''
      };
      this.calculate = this.calculate.bind(this);
    }
  
    render() {
      let page;
      let input = (
          <div>
              <input type='text' value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}></input>
              <p></p>
              <button onClick={this.calculate}>Convert</button>
          </div>
          );

      if (this.props.type === 'Temperature') {
        page = (
        <div>
            <label>Fahrenheit: </label>
            {input}
            <p>Celsius: {this.state.result}</p>
        </div>
        ); 
      } else {
        page = (
        <div>
            <label>Miles: </label>
            {input}
            <p>Kilometers: {this.state.result}</p>
        </div>
        );
      }
      return page;
    }

    calculate() {
        if (this.props.type === 'Temperature') {
            let temperatureResult = (this.state.value - 32) * 5/9;
            this.setState({result: temperatureResult});   
        } else {
            let distanceResult = this.state.value * 1.609344;
            this.setState({result: distanceResult});
        }
        this.setState({value: ''});
    }
  }

  export default Selector;  