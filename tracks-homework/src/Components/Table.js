import React, { useState, useEffect } from 'react';
import BTable from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios'


const customStyle={width:"85%", margin:"7%"};

function Table(props){
  // A Modal pops over in this same component displaying the clicked
  //carrier details, hence the hooks show and title.

  const [data, setData] = useState([]);
  const [endpoint, setEndpoint] = useState("");
  const [show, setShow] = useState(false);
  const [title,setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [activePage, setActivePage] = useState(1);

  

  useEffect(()=>{
    const startDate = new Date(props.query.startDate);
    const endDate = new Date(props.query.endDate);
    let endpoint = 'http://localhost:8000/wel/?startDate='+startDate.toISOString().substring(0,10)+
    "&endDate="+endDate.toISOString().substring(0,10)

    if(props.query.typeOfCalculation){
      endpoint+='&typeOfCalculation='+props.query.typeOfCalculation
    }
    if(props.query.goodsType){
      endpoint+='&goodsType='+props.query.goodsType
    }
    if(props.query.startCity){
      endpoint+='&startCity='+props.query.startCity
    }
    if(props.query.endCity){
      endpoint+='&endCity='+props.query.endCity
    }
    if(props.query.orderParameter){
      endpoint+='&orderParameter='+props.query.orderParameter
    }

    setEndpoint(endpoint);

    axios.get(endpoint)
    .then(function (response) {
      setData(response.data)
      setPages(Math.ceil(response.data.length/20)); //Paging on client side only for the aesthetic (not performance)
  });

  if(props.query.orderParameter=="Intensity Factor"){
      data.sort(comparableFunction); //Sorting on client side because column not originally in DB.
  }

  },[props.query]);

  const comparableFunction = (a,b) =>{
    if(parseFloat(a.intensityFactor) < parseFloat(b.intensityFactor)){
      return -1;
    }
    if(parseFloat(a.intensityFactor) == parseFloat(b.intensityFactor)){
      return 0;
    }
    if(parseFloat(a.intensityFactor) > parseFloat(b.intensityFactor)){
      return 1;
    }
  }

    return(
      <div key={endpoint}>
      {data.length!=0 ? 
      <BTable striped bordered hover size="sm" style={customStyle}>
        <thead>
          <tr>
            <th>Carrier Name</th>
            <th>CO2 Emission</th>
            <th>Distance</th>
            <th>Avg. Shipment Weight</th>
            <th>Intensity Factor</th>
          </tr>
        </thead>
        
        <tbody>
        {data.slice((20*(activePage-1)),(20*activePage)-1).map((entry) => 
          <tr key={"e"+entry.cName} onClick={(event) => {
              setTitle(event.target.parentNode.firstChild.innerHTML)
              setShow(true)
          }}>
            <td >{entry.cName}</td>
            <td>{entry.co2}</td>
            <td>{entry.distance}</td>
            <td>{entry.avgWeight}</td>
            <td>{entry.intensityFactor}</td>
          </tr>  
        )}
        </tbody>

        <div style={{margin:"2% 0 0 32%", position:"absolute"}}>
        <Pagination count={pages} color="primary" variant="outlined" onChange={(event, p)=> setActivePage(p)}/>
        </div>

      </BTable> : <h2 style={{margin:"5%"}}>Your inputs returned no results, Please change dates or reduce filters.</h2>}
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                {title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  This text is supposed to show the details of the carrier. Next is some lorum ipsum for
                  the aesthetic. Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                  ipsam atque a dolores quisquam quisquam adipisci possimus
                  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                  deleniti rem!
                </p>
              </Modal.Body>
            </Modal>

    </div>
    );

}



export default Table;