import React, { Component } from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image} from 'react-bootstrap';
import styled from 'styled-components';
import dummywo from './images/dummy-women.jpg';
import niranjan from './images/niranjan-swamy-N.jpg';
import vinod from './images/vinod-singh.jpg';
import krishna from './images/krishna.jpg';
import data from './data.json';
import './imagestyles.css';
import MediaQuery from 'react-responsive';

const Styles = styled.div`
  .jumbo {
    background-image: linear-gradient(135deg, #F1F2B5 0%, #3498db 100%);
    min-height: 700px;
    position: relative;
    z-index: -2;
  }
`;
export default class Members extends Component {
    state = {
        Member:[
            {id:0,Name:'Niranjan Swamy N',Designation:'Co-Founder',Info:data[0].info,pic:niranjan},
            {id:1,Name:'Dr. Vinod Singh',Designation:'Chief Operating Officer',Info:data[1].info,pic:vinod},
            {id:2,Name:'Sinu George',Designation:'Director',Info:data[2].info ,pic:dummywo},
            {id:3,Name:'Krishna Raghavan',Designation:'Director',Info:data[3].info,pic:krishna}
        ]
    }
    render() {
        console.log(data);
        //console.log(this.props);
        const props = this.props.match.params.id;
        return (
            <div><Styles>
            <Jumbo fluid className="jumbo">
                <Container className="rounded mt-5 contain">
                <Row>
                    <Col sm={4} className="p-4">
                        <div className="mt-2 img-hover-zoom" style={{backgroundColor:"white",borderRadius:'50%'}}>
                            <Image src={this.state.Member[props].pic} fluid className="profile" style={{borderRadius:'20px'}}/>
                        </div>    
                    </Col>
                    <MediaQuery query="(max-device-width: 1224px)">
                    <Col sm={8} className="py-4">
                        <div className=" membername py-2 rounded">
                            <h2 className=" text-white font-weight-bold animated fadeInLeft slow py-2 px-4">{this.state.Member[props].Name}</h2>
                            <h5 className="font-weight-bold text-white animated fadeInRight slower py-2 px-4">{this.state.Member[props].Designation}</h5>
                        </div>    
                    </Col>
                   </MediaQuery> 
                <MediaQuery query="(min-device-width: 1224px)">
                    <Col sm={8} className="mt-5 py-4">
                        <div className="mt-5 membername py-2 rounded">
                            <h1 className=" text-white font-weight-bold animated fadeInLeft slow py-2 px-4">{this.state.Member[props].Name}</h1>
                            <h5 className="font-weight-bold text-white animated fadeInRight slower py-2 px-4">{this.state.Member[props].Designation}</h5>
                        </div>    
                    </Col>
               </MediaQuery>     
               
                    </Row>
                    <Row>
                        <Col className="px-3 rounded">
                            <p className="mt-2 p-4 animated fadeIn font-weight-bold" style={{fontFamily:"'Rubik', sans-serif",lineHeight:'2em',fontSize:'18px'}}>
                                {this.state.Member[props].Info}
                            </p>
                        </Col>    
                    </Row>           
                </Container>
            </Jumbo>
            </Styles>
            </div>
        )
    }
}
