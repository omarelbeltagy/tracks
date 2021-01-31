import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@material-ui/core/TextField';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {useState} from 'react'


function FiltersInput(props) {
    const [query, handleQuery] = useState({startDate: "", endDate: "", });
    return (
      <Modal
        {...props}
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
          <TextField name="startCity" style = {{margin:"0 1% 3% 1%"}} id="outlined-basic" label="Start City" variant="outlined" />
          <TextField name="endCity" style = {{margin:"0 1% 3% 1%"}} id="outlined-basic" label="End City" variant="outlined" />
          <DropdownButton style = {{margin:"5% 1%", display:"inline"}} id="dropdown-basic-button" title="Type Of Calculation" variant = "secondary">
            <Dropdown.Item name="typeOfCalculation" onClick={(event)=>{console.log(event.target.name)}}>Default</Dropdown.Item>
            <Dropdown.Item name="typeOfCalculation" onClick={(event)=>{console.log(event.target.name)}}>Modeled</Dropdown.Item>
            <Dropdown.Item name="typeOfCalculation" onClick={(event)=>{console.log(event.target.name)}}>Primary</Dropdown.Item>
        </DropdownButton>
        <DropdownButton style = {{margin:"5% 11%", display:"inline"}} id="dropdown-basic-button" title="Type Of Goods" variant = "secondary">
            <Dropdown.Item name="goodsType" onClick={(event)=>{console.log(event.target.name)}}>Cereals</Dropdown.Item>
            <Dropdown.Item name="goodsType" onClick={(event)=>{console.log(event.target.name)}}>Chemicals</Dropdown.Item>
            <Dropdown.Item name="goodsType" onClick={(event)=>{console.log(event.target.name)}}>Containers</Dropdown.Item>
        </DropdownButton>
        <h4 style ={{marginTop:"9%"}}>Sort On</h4>
        <DropdownButton style = {{margin:"5% 1%", display:"inline"}} id="dropdown-basic-button" title="Column" variant = "secondary">
            <Dropdown.Item name="orderParameter" onClick={(event)=>{console.log(event.target.name)}}>Name</Dropdown.Item>
            <Dropdown.Item name="orderParameter" onClick={(event)=>{console.log(event.target.name)}}>CO2 Emission</Dropdown.Item>
            <Dropdown.Item name="orderParameter" onClick={(event)=>{console.log(event.target.name)}}>Distance</Dropdown.Item>
            <Dropdown.Item name="orderParameter" onClick={(event)=>{console.log(event.target.name)}}>Avg. Shipment Weight</Dropdown.Item>
            <Dropdown.Item name="orderParameter" onClick={(event)=>{console.log(event.target.name)}}>Intensity Factor</Dropdown.Item>

        </DropdownButton>



        </Modal.Body>
        
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default FiltersInput;