import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button} from 'react-bootstrap';
import leftbarStyles from "./leftbar.module.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import $ from "jquery";

export class leftbar extends Component {
    componentDidMount() {            
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll > 1400) {
              $(".leftbar-module--expand_icon_body--WkKiR").css("display", "inline-block"); 
              $(".leftbar-module--accordion_body--3nnii").css("height", "65px");
          } else {
              $(".leftbar-module--expand_icon_body--WkKiR").css("display", "none");  
              $(".leftbar-module--accordion_body--3nnii").css("height", "auto"); 
          }
          if(scroll > 1900){
             $(".leftbar-module--leftbar_body--2RuWa").css("display", "none");  
          }else{
            $(".leftbar-module--leftbar_body--2RuWa").css("display", "block");
          }
      })
        $(".leftbar-module--expand_icon_body--WkKiR").click(function(){
            var he=$(".leftbar-module--accordion_body--3nnii").height();
            if(he<70){
                $(".leftbar-module--accordion_body--3nnii").css("height", "auto");
            }else{
                $(".leftbar-module--accordion_body--3nnii").css("height", "65px");
            }
        });
      }    
    render() {
        return (
            <div className={leftbarStyles.leftbar_body}>
                <div className={leftbarStyles.leftbar_title_body}>
                    <h2>
                        Self Employment 
                     </h2>
                    <span className={leftbarStyles.expand_icon_body}><ExpandMoreIcon className={leftbarStyles.expand_icon} /></span>
                </div>
               
               <div className={leftbarStyles.accordion_body}>
                <Accordion defaultActiveKey="">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Registration of company
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Help from accounting office
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                What we do
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    Contractor's Settlements - CIS
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                    PAYE (Pay As You Earn)
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                Rules
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                            <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="6">
                                Benefits
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                            <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
               </div>
            </div>
        )
    }
}

export default leftbar
