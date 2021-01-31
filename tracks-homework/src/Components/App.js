import "./../App.css";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from "./Appbar";
import ControlledCarousel from './ControlledCarousel';
import DateInput from './DateInput';
import Footer from "./Footer";
import PartnersFooter from "./PartnersFooter";
import Table from "./Table";
import Carrier from "./Carrier";

const query = {
  startDate: "2020-07-07",
  endDate: "2020-07-08",
  typeOfCalculation:"modeled"
}




function App() {
  let initialOptions = {filter:{}, sort:{}};
  // const [data, setData] = useState([]);
  // const[options, setOptions] = useState(initialOptions);

  return (
    <div className="App">
    {/* <DateInput /> */}
     <Appbar />
     <ControlledCarousel/>
    <PartnersFooter />
    <Footer/>
     </div>
  );
}

export default App;
