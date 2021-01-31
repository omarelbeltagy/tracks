import Carousel from 'react-bootstrap/Carousel'
import {useState, useRef} from 'react'
import img1 from "./../first.jpg"
import img2 from "./../second.jpg"
import img3 from "./../third.jpg"
import Button from 'react-bootstrap/Button'
import DateInput from "./../Components/DateInput"
import Collapse from 'react-bootstrap/Collapse'
import Jumbotron from 'react-bootstrap/Jumbotron'


const captionStyle = {
  marginBottom:"2%"

};


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const[displayed, setDisplayed] = useState(false);

    const myRef = useRef()
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const handleDisplay = (event) => {
      console.log("Handle display was called");

      setDisplayed(true)
      setTimeout(()=>{
        myRef.current.scrollIntoView({behavior: "smooth"})
      }, 200)


      
    }

    const button = <Button onClick={handleDisplay} style={{margin:"6% 0 0 0"}}>To Analytics</Button>;



  
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
      <Jumbotron style = {{padding:"5%"}}>
        <h1 style = {{textAlign:"left", marginLeft:"4%"}}>Hello, Green Earth!</h1>
        <p style = {{textAlign:"left", margin:"4%"}}> 
          Here should be some text about what we do and why you would care about finding out
          more about the Analytics. Some Lorem Ipsum for the aesthetic: Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. 
       </p>
       <p>
       </p>
      </Jumbotron>
      
      <Collapse in={displayed}>
      <div ref={myRef}>
      <DateInput />
      </div>

      </Collapse>

      </div>
    );
  }
  
export default ControlledCarousel;