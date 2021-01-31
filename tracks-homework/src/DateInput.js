import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'
import OutTable from "./Table"


const data = [{cName: "Bello", co2: 32.0, distance: 1380, avgWeight: 1.4, 
      intensityFactor:0.21},{cName: "Mo", co2: 62.0, distance: 920, avgWeight: 0.4, 
      intensityFactor:0.71},{cName: "L", co2: 12.8, distance: 380, avgWeight: 1.0, 
      intensityFactor:0.31}]





let now = new Date();



class DateInput extends React.Component {
    constructor(props) {
      super(props);

      //Setting the default startDate to (now - 70 days) and endDate to now
      this.state = {startDate: new Date(new Date().setDate(new Date().getDate()-70)), 
        endDate: now, displayed: false};

    
      console.log("Constructor called")
      console.log(this.state);

    this.handleChange.bind(this);
    this.handleDisplay.bind(this);
    // this.render.bind(this);
    }

    handleDisplay(event){
      console.log("Display Handler called, state will now be changed")
      this.setState({displayed: !this.state.displayed});
      console.log(this.state.displayed);
    }

    handleChange(event) {

        console.log("Handler Called")

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: new Date(value)}, () => {console.log(this.state)});

      }
      
  
    render() {
      return (
        <div >
        <form >
            <TextField
            name="startDate"
            id="startDate"
            label="Start Date"
            type="date"
            defaultValue={
                (new Date(new Date().setDate(new Date().getDate()-70))).toISOString().substring(0,10) }
            InputLabelProps={{shrink: true}}
            onChange={this.handleChange.bind(this)}
            style={{margin:"7% 3% 0"}}
  />
              <TextField
            name="endDate"
            id="endDate"
            label="End Date"
            type="date"
            defaultValue={now.toISOString().substring(0,10)}
            InputLabelProps={{shrink: true}}
            onChange={this.handleChange.bind(this)}
            style={{margin:"7% 3% 0"}}
  />

         <Button variant="outline-primary" size="lg" style={{margin:"7% 2.5% 0"}} onClick={this.handleDisplay.bind(this)}>Search</Button>

        </form>
        <Collapse in={this.state.displayed}>
        <div>
        <OutTable data = {data} />
        </div>
      </Collapse>
        </div>
      );
    }
  }

  export default DateInput;
