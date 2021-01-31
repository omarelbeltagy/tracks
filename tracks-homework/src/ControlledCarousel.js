import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'
import img1 from "./first.jpg"
import img2 from "./second.jpg"
import img3 from "./third.jpg"
import Button from 'react-bootstrap/Button';
import DateInput from "./../Components/DateInput"
import Collapse from 'react-bootstrap/Collapse'


const captionStyle = {
  marginBottom:"2%"

};


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const[displayed, setDisplayed] = useState(false);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const handleDisplay = (event) => {
      setDisplayed(true);
    }

    const button = <Button onClick={handleDisplay}>To Analytics</Button>;

  
    return (
      <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption style = {captionStyle}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            {button}

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
  
          <Carousel.Caption style={captionStyle}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            {button}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
  
          <Carousel.Caption style={captionStyle}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            {button}

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Collapse in={displayed}>
      <div>
      <DateInput />
      </div>

      </Collapse>

      </div>
    );
  }
  
export default ControlledCarousel;