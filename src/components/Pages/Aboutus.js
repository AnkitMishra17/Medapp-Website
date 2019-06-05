import React from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image } from 'react-bootstrap';
import styled from 'styled-components';
import bgimg from './images/bg-4.jpg';
import './imagestyles.css';
import MediaQuery from 'react-responsive';

const Styles = styled.div`
  .jumbo {
    background: url(${bgimg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 700px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const caption = {
  fontFamily: 'Ubuntu, sans-serif'
};

const Aboutus = () => {
  return (
    <div>
        <Styles>   
              <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="p-4" style={{marginTop:'15%'}}>
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                      <h1 className="display-4 font-weight-bold">ABOUT US </h1>
                    </Col>
                    <Col sm={6} className="mt-3 p-4">    
                        <p className="display-5 mt-2" style={{fontSize:'25px'}}>
                            We’re all united around a common mission — touching life, changing life, and saving life.
                        </p>
                    </Col>    
                </Row>
                </Container>
            </Jumbo>
            <Container className="p-4 animated bounceIn">
                <Row className="p-3">
                    <Col sm={6} className="mt-3 p-4 container" style={{borderBottomLeftRadius:'50px'}}>
                      <p style={caption}>
                      Across our network of healthcare services, our team provide compassionate, quality care to millions of patients through a wide range of services: from primary care to chronic care management, disease management, preventive care to curative care and advanced one point solutions for all diagnostic services. 
                      </p>
                    <div>
                      <Image src="https://img.icons8.com/ios/50/000000/quote-left-filled.png"/>
                        <h2 className="ml-5 font-weight-normal lead d-flex justify-content-center" style={{fontSize:'25px',color:'black',fontFamily: "'Quicksand', sans-serif"}}>
                          We’re also collaborating with others to enhance healthcare solutions across the care continuum.
                        </h2>
                    </div>
                      <p className="mt-3"  style={caption}>
                      Healthcare is changing. medapp.in is Changing it for the Better.
                      </p>
                      <p className="mt-2"  style={caption}>
                      At medapp.in, we’ve had a longstanding commitment to serving our clients, patients, employees, healthcare teams and partners.
                      </p>
                      <p className="mt-2"  style={caption}>
                      Today, we’re a leading healthcare services company working across the system to improve primary healthcare service delivery, patient support programme and healthcare outcomes.
                      </p>
                    </Col>
                  <MediaQuery query="(min-device-width: 1224px)">      
                    <Col sm={6} className="d-flex flex-column justify-content-center mt-5 p-4 container rounded-circle" style={{height:'500px',width:'500px',backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'}}>
                        <div className="mt-2 phrase" align="center" style={{fontFamily: "'Quicksand', sans-serif"}}>
                          <h1 className="text1">We’re all united around a common mission of</h1>
                          <span className="mt-3  text2"><h2 className="animated fadeIn display-5 font-weight-bold" >Touching life, changing life, and saving life.</h2></span>
                        </div>    
                    </Col> 
                  </MediaQuery>     
                  <MediaQuery query="(max-device-width: 1224px)">      
                    <Col sm={6} className="d-flex flex-column justify-content-center mt-3 p-4 jumbotron" style={{backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',borderTopRightRadius:'50px'}}>
                        <div className="mt-2" align="center">
                          <h4>We’re all united around a common mission of</h4>
                          <span className="mt-5"><h2 className="animated fadeIn text-dark">Touching life, changing life, and saving life.</h2></span>
                        </div>    
                    </Col> 
                  </MediaQuery>
                </Row>
                </Container>
                <Container className="p-2 animated bounceIn delay-1s">
                <Row className="p-3">
                  <MediaQuery query="(min-device-width: 1224px)">    
                      <Col sm={6} className="d-flex flex-column justify-content-center mt-5 p-4 rounded-circle" style={{height:'500px',width:'500px',backgroundImage: 'linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)'}}>
                        <div className="mt-1 phrase" align="center">
                          <h1 className="text1" style={{fontSize:'3em',fontFamily: "'Quicksand', sans-serif",color:'black'}}>Our Commitment to Quality</h1>
                        </div>    
                      </Col> 
                  </MediaQuery>
                    <MediaQuery query="(max-device-width: 1224px)">    
                        <Col sm={6} className="d-flex flex-column justify-content-center mt-3 p-4 jumbotron" style={{backgroundImage: 'linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)',borderTopLeftRadius:'50px'}}>
                         <div className="mt-2 p-3" align="center">
                            <h1 className="animated zoomIn display-5" style={{fontFamily: "'Quicksand', sans-serif"}}>Our Commitment to Quality</h1>
                         </div>
                        </Col>        
                    </MediaQuery>
                   <Col sm={6} className="mt-3 p-5 container" style={{borderBottomRightRadius:'50px'}}>    
                    <div>
                      <Image src="https://img.icons8.com/ios/50/000000/quote-left-filled.png"/>
                        <h2 className="ml-5 mt-2 font-weight-normal lead d-flex justify-content-center" style={{fontSize:'25px',color:'black',fontFamily: "'Quicksand', sans-serif"}}>
                          Healthcare is changing. And at medapp.in, we have a plan to lead that charge.
                        </h2>
                    </div>
                      <p className="mt-4" style={caption}>
                        How? By making safety services, innovative technology and industry-leading clinical outcomes the cornerstones of our mission. By seeking to provide high-quality, high-value care backed by compassionate service. By giving our caregivers the tools, technologies and resources they need to deliver the best care possible. By always doing what’s right for our clients and communities.
                      </p>
                      <p className="mt-2" style={caption}>
                        Our Commitment to Quality honors the trust that our clients and communities place in our services, like disease management, patient support programme, health promotion and disease prevention practices and other health care facilities. It's at the core of everything we do and every decision our client make.
                      </p>                     
                    </Col>    
                </Row>
                </Container>                
        </Styles>
    </div>
  )
}

export default Aboutus;