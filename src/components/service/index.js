import React, { Component } from 'react'
import serviceStyles from '../assets/css/service.module.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'react-bootstrap';
import Image4 from '../assets/images/Mask Group13.png'
import Image5 from '../assets/images/Group31.png'
import { Link } from 'gatsby';
import contactDaata from '../assets/data/contactdata.json';
import { Button } from '@material-ui/core';
import LeftMenu from '../common/leftbar';


export class index extends Component {    
    render() {
        return (
            <>
            <div className={serviceStyles.header_back}>

            </div>
            <Container> 
                <Row>
                    <Col lg={4}>
                        <LeftMenu />
                    </Col>
                    <Col lg={8}>
                        <div className={serviceStyles.service_content_view}>
                            <div className={serviceStyles.service_content_topimg_section}>
                                 <img src={Image4} alt="phoneImage1" style={{width:`100%`}}/>                                
                            </div>
                            <div className={serviceStyles.self_employe_section}>
                                <h2>
                                    Being self-employed means you are formally registered as self-employed. In order to do this, you must be registered with the British HMRC (Her Majesty's Revenue and Customs).
                                </h2>
                                <h6>
                                    Registration can be done in several ways:
                                </h6>
                                <Row>
                                    <Col lg={6}>
                                        <div className={serviceStyles.register_way_left}>
                                            <div className={serviceStyles.register_item}>
                                                <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                <p>
                                                    <strong>By post,</strong>By post, sending the CWF1 request to the following address:
                                                </p>
                                            </div>
                                            <div className={serviceStyles.address_item}>
                                                <p>National Insurance Contributions Office</p>
                                                <p>Self Employed Services</p>
                                                <p>Application Processing Center</p>
                                                <p>Longbenton</p>
                                                <p>Newcastle upon Tyne</p>
                                                <p>NE98 1ZZ</p>
                                            </div> 
                                        </div>                                        
                                    </Col>
                                    <Col lg={6}>
                                        <div className={serviceStyles.register_way_left}>
                                                <div className={serviceStyles.register_item}>
                                                    <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                    <p>
                                                        <strong>Personally,</strong> submitting the CWF1 application to the nearest HMRC branch
                                                    </p>
                                                </div>
                                                <div className={serviceStyles.register_item}>
                                                    <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                    <p>
                                                        <strong>By phone, </strong> by calling the helpline:
                                                        <Link to="#" ><span>0845 603 2691</span></Link>
                                                    </p>
                                                </div>
                                                <div className={serviceStyles.register_item}>
                                                    <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                    <p>
                                                        Over the Internet. 
                                                        <Link to="#" ><span>Here</span></Link> 
                                                    </p>
                                                </div>                                                
                                            </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={serviceStyles.accounting_office_section}>
                                <h3>Help from the accounting office</h3>
                                <h5>There are many reasons why you should use the help of an accounting office.</h5>
                                <h6>These include:</h6>
                                <Row>                                    
                                    <Col lg={6}>
                                        <div className={serviceStyles.help_from_office_left}>
                                            <div className={serviceStyles.register_item}>
                                                <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                <p>
                                                    You want to avoid paying more tax than it is necessary
                                                </p>
                                            </div>
                                            <div className={serviceStyles.register_item}>
                                                <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                <p>
                                                    You want to recover the entire tax amount
                                                </p>
                                            </div>
                                            <div className={serviceStyles.register_item}>
                                                <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                <p>
                                                    You want to get your tax back as soon as possible
                                                </p>
                                            </div>
                                            <div className={serviceStyles.register_item}>
                                                <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                <p>
                                                    Your company generates a large revenue
                                                </p>
                                            </div>
                                        </div>                                        
                                    </Col>
                                    <Col lg={6}> 
                                        <div className={serviceStyles.help_from_office_right}>
                                                <div className={serviceStyles.register_item}>
                                                    <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                    <p>
                                                        Your tax situation is complicated
                                                    </p>
                                                </div>
                                                <div className={serviceStyles.register_item}>
                                                    <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                    <p>
                                                        You do not speak English well
                                                    </p>
                                                </div>
                                                <div className={serviceStyles.register_item}>
                                                    <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                    <p>
                                                        You do not want to lose your benefits
                                                    </p>
                                                </div>
                                                <div className={serviceStyles.register_item}>
                                                    <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                    <p>
                                                        You do not have the knowledge or the time to do the paperwork
                                                    </p>
                                                </div>
                                            </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={serviceStyles.accounting_office_section}>
                                <h3>What we do</h3>
                                <Row>                                    
                                    <Col lg={6}>
                                        <div className={serviceStyles.help_from_office_left}>
                                            <div className={serviceStyles.register_item}>
                                                <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                <p>
                                                    Draw up annual tax returns on behalf of our clients
                                                </p>
                                            </div>
                                            <div className={serviceStyles.register_item}>
                                                <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                <p>
                                                    Advise on how to minimise taxes (tax efficiency)
                                                </p>
                                            </div>
                                            <div className={serviceStyles.register_item}>
                                                <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                <p>
                                                    Recover overpaid taxes
                                                </p>
                                            </div>
                                            <div className={serviceStyles.register_item}>
                                                <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                <p>
                                                    Contact the Tax Office (HMRC) on your behalf
                                                </p>
                                            </div>
                                        </div>                                        
                                    </Col>
                                    <Col lg={6}> 
                                        <div className={serviceStyles.help_from_office_right}>
                                                <div className={serviceStyles.register_item}>
                                                    <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                    <p>
                                                        Registration and unenroll activities
                                                    </p>
                                                </div>
                                                <div className={serviceStyles.register_item}>
                                                    <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                    <p>
                                                        Translate documents, etc.
                                                    </p>
                                                </div>
                                                <div className={serviceStyles.register_item}>
                                                    <img src={Image5} alt="" style={{width:`24px`,height:`24px`}}/>
                                                    <p>
                                                        Help with benefits
                                                    </p>
                                                </div>                                                
                                            </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row> 
               
                <div className={serviceStyles.service_body}>
                    <p className={serviceStyles.row_title}> CONTACT </p>
                    <h1>Contact us</h1>
                        <div className={serviceStyles.contact_body}>
                            <div className={serviceStyles.contact_left}>
                            <img src="" alt=""/>
                            <div className={serviceStyles.contact_left_data}>
                                {
                                contactDaata.map(posta => {
                                    return(
                                    <div key={posta.ida} className={serviceStyles.contact_items_body}> 
                                        <img src={posta.icon}  alt="" style={{width:`65px`,height:`65px`}}/>
                                        <div className={serviceStyles.contact_item}>
                                        <p> <span>{posta.title1}</span> {posta.content1}</p>
                                        <p> <span>{posta.title2}</span> {posta.content2}</p>
                                        <p className={serviceStyles.contact_item_addline}> {posta.content3}</p>                                  
                                        </div>
                                    </div>
                                    )
                                })
                                }   
                            </div>                
                            </div>
                            <div className={serviceStyles.contact_right_form}>
                                <form>
                                    <div className="form-group">
                                    <label htmlFor="exampleInputName2">Name and surname</label>
                                        <input type="text" className="form-control" id="exampleInputName2" aria-describedby="emailHelp" placeholder="Name and surname" />
                                        </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword2">E-mail address*</label>
                                        <input type="text" className="form-control" id="exampleInputPassword2" disabled placeholder="John.doe@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea2">Message*</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="5"></textarea>
                                    </div>
                                    <div>
                                    <span>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                                    </span>
                                    </div>
                                    <Button variant="contained" className={serviceStyles.app_btn}>Send message</Button>
                                </form>
                            </div>
                        </div>                       
                    </div>                    
                              
            </Container>            
            </>
        )
    }
}

export default index
