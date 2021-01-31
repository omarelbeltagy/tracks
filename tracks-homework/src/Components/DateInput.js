import React from 'react';
import { TextField } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'
import Table from "./../Components/Table"
import FilterListIcon from '@material-ui/icons/FilterList';
import Modal from 'react-bootstrap/Modal';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


let now = new Date();

class DateInput extends React.Component {
    constructor(props) {
      super(props);

      //Setting the default startDate to (now - 70 days) and endDate to now
      this.state = {
        startDate: new Date(new Date().setDate(new Date().getDate()-70)), 
        endDate: now,
        startCity: "",
        endCity: "",
        goodsType: "",
        typeOfCalculation: "",
        orderParameter: "",
      displayed: false, //this handles displaying the resulting table
      filtersDisplay: false}; //this handles displaying the Filter&Sort form
    }

    

    

    handleDisplay(event){
      this.setState({displayed: true}); //once Search is clicked, output is always displayed
      

    }

    handleQuery(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch(name){
          case "startDate": this.setState({
            [name]: new Date(value)});
            break;
          case "endDate": this.setState({
            [name]: new Date(value)});
            break;
          case "typeOfCalculation": this.setState({
            [name]: target.innerHTML=="All"? "" : target.innerHTML.toLowerCase()});
            break;
          case "startCity": this.setState({
            [name]: value});
            break;
          case "endCity": this.setState({
            [name]: value});
            break;
          case "goodsType": this.setState({
            [name]: target.innerHTML=="All"? "" : target.innerHTML});
            break;

          case "orderParameter":
            switch(target.innerHTML){
              case "Name": this.setState({
                [name]: "id"});
                break;
              case "CO2 Emission": this.setState({
                [name]: "total_co2_emitted"});
                break;
              case "Distance": this.setState({
                [name]: "travelled_distance"});
                break;
              case "Avg. Shipment Weight": this.setState({
                [name]: "weight"});
                break;
              case "None": this.setState({
                [name]: ""
              });
              break;

              case "Intensity Factor": this.setState({
                [name]: "Intensity Factor"});
          } 
      }

    }
  
    render() {
      console.log(this.state);
      return (
        <div >
        <form >
            <TextField
            name="startDate"
            id="startDate"
            label="Start Date"
            type="date"
            defaultValue={this.state.startDate.toISOString().substring(0,10)}
            InputLabelProps={{shrink: true}}
            onChange={this.handleQuery.bind(this)}
            style={{margin:"7% 3% 0"}}
  />
              <TextField
            name="endDate"
            id="endDate"
            label="End Date (Exclusive)"
            type="date"
            defaultValue={this.state.endDate.toISOString().substring(0,10)}
            InputLabelProps={{shrink: true}}
            onChange={this.handleQuery.bind(this)}
            style={{margin:"7% 3% 0"}}
  />

              <FilterListIcon style={{margin:"7.5% 3% 0 0"}} onClick = {()=>{this.setState({filtersDisplay: !this.state.filtersDisplay})}}/>
        

              <Button variant="outline-primary" size="lg" style={{margin:"7.5% 2.5% 0"}} onClick={this.handleDisplay.bind(this)}>Search</Button>

        </form>
        <Collapse in={this.state.filtersDisplay}>
        <div>
        <Modal
        show={this.state.filtersDisplay}
        onHide={()=> {this.setState({filtersDisplay: !this.state.filtersDisplay})}}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Filter & Sort
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <h4>Filters</h4>

          <TextField onChange = {this.handleQuery.bind(this)} name="startCity" style = {{margin:"0 1% 3% 1%"}} id="outlined-basic" label="Start City" variant="outlined" value={this.state.startCity}/>
          <TextField onChange = {this.handleQuery.bind(this)} name="endCity" style = {{margin:"0 1% 3% 1%"}} id="outlined-basic" label="End City" variant="outlined" value={this.state.endCity} />
          <DropdownButton style = {{margin:"5% 1%", display:"inline"}} id="dropdown-basic-button" title={this.state.typeOfCalculation==""? "Type of Calculations": this.state.typeOfCalculation} variant = "secondary">

            <Dropdown.Item name="typeOfCalculation" onClick={this.handleQuery.bind(this)}>All</Dropdown.Item>
            <Dropdown.Item name="typeOfCalculation" onClick={this.handleQuery.bind(this)}>Default</Dropdown.Item>
            <Dropdown.Item name="typeOfCalculation" onClick={this.handleQuery.bind(this)}>Modeled</Dropdown.Item>
            <Dropdown.Item name="typeOfCalculation" onClick={this.handleQuery.bind(this)}>Primary</Dropdown.Item>
        </DropdownButton>
        <DropdownButton style = {{margin:"5% 11%", display:"inline"}} id="dropdown-basic-button" title={this.state.goodsType==""? "Type of Goods": this.state.goodsType} variant = "secondary">
            <Dropdown.Item name="goodsType" onClick={this.handleQuery.bind(this)}>All</Dropdown.Item>
            <Dropdown.Item name="goodsType" onClick={this.handleQuery.bind(this)}>Cereals</Dropdown.Item>
            <Dropdown.Item name="goodsType" onClick={this.handleQuery.bind(this)}>Chemicals</Dropdown.Item>
            <Dropdown.Item name="goodsType" onClick={this.handleQuery.bind(this)}>Containers</Dropdown.Item>
        </DropdownButton>

        <h4 style ={{marginTop:"9%"}}>Sort On</h4>

        <DropdownButton style = {{margin:"5% 1%", display:"inline"}} id="dropdown-basic-button" title={this.state.orderParameter==""? "Column": this.state.orderParameter} variant = "secondary">
            <Dropdown.Item name="orderParameter"  onClick={this.handleQuery.bind(this)}>None</Dropdown.Item>
            <Dropdown.Item name="orderParameter"  onClick={this.handleQuery.bind(this)}>Name</Dropdown.Item>
            <Dropdown.Item name="orderParameter" onClick={this.handleQuery.bind(this)}>CO2 Emission</Dropdown.Item>
            <Dropdown.Item name="orderParameter" onClick={this.handleQuery.bind(this)}>Distance</Dropdown.Item>
            <Dropdown.Item name="orderParameter" onClick={this.handleQuery.bind(this)}>Avg. Shipment Weight</Dropdown.Item>
            <Dropdown.Item name="orderParameter" onClick={this.handleQuery.bind(this)}>Intensity Factor</Dropdown.Item>
        </DropdownButton>

        </Modal.Body>
        
        <Modal.Footer>
          <Button onClick={() => this.setState({filtersDisplay: !this.state.filtersDisplay})}>Save</Button>
        </Modal.Footer>
      </Modal>

        </div>
      </Collapse>

        <Collapse in={this.state.displayed}>
        <div>
        <Table query ={this.state} />
        </div>
      </Collapse>
        </div>
      );
    }
  }

  export default DateInput;
