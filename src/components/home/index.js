import React from 'react';
import homeStyles from '../assets/css/home.module.css'
import Image1 from '../assets/images/Mask Group.png'
import Image2 from '../assets/images/Mask Group2.png'
import Image3 from '../assets/images/Mask Group12.png'
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import serviceDaata from '../assets/data/service.json';
import contactDaata from '../assets/data/contactdata.json';
import { Button } from '@material-ui/core';
import $ from "jquery";

class homeContent extends React. Component {
  componentDidMount() {    
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
          $("#nav_menu").css("background", "#343840");         
      } else {
          $("#nav_menu").css("background", "transparent");          
      }
  })
  }
  render() {
    return (       
        <div> 
           <div className={homeStyles.carousel_item}>
                <img src={Image1} alt="phoneImage1" style={{width:`100%`}}/>
                <Container>
                  <div>
                    <div className={homeStyles.carousel_caption}>
                      <h1>Professional services for individual <br></br>clients and companies</h1>
                      <p>Lorem Ipsum is simply dummy text</p>
                    </div>
                  </div>
                </Container>
            </div>
            <Container>

            <div className={homeStyles.about_us_body}>
              <p className={homeStyles.content_row_title}> ABOUT US </p>
              <h1>Our company is a professional financial agency, employing experienced and qualified accountants, ready to take on any task regarding tax, accounting or business consulting.</h1>
              <div className={homeStyles.sub_link}>
                  <Link to="#" ><span>Meet our business</span></Link>
              </div>
            </div>

            <div className={homeStyles.service_body}>
              <p className={homeStyles.row_title}> OUR SERVICES </p>
              <h1>We’re focus on</h1>             
              
                <div className={homeStyles.service_content}>  
                      {
                        serviceDaata.map(post => {
                          return(
                            <Link to="#">
                            <div key={post.id} className={homeStyles.service_item_body}> 
                              <img src={post.icon} alt=""/>
                              <h6>{post.titles}</h6>
                              <p>{post.contants}</p>
                            </div>
                            </Link>
                          )
                        })
                      }                                       
                </div>                       
            </div>

            <div className={homeStyles.service_body}>
              <p className={homeStyles.row_title}> HOW WE HELP </p>
              <h1>How we help</h1>
                <div className={homeStyles.how_help_body}>  
                  <img src={Image2} alt="phoneImage1" style={{width:`384px`}}/>
                  <div className={homeStyles.how_help_content}>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                    </p>
                    <div className={homeStyles.sub_link}>
                        <Link to="#" ><span>Find out how we help</span></Link>
                    </div>
                  </div>                                                       
                </div>                       
            </div>

            <div className={homeStyles.service_body}>
              <p className={homeStyles.row_title}> CONTACT </p>
              <h1>Contact us</h1>
                <div className={homeStyles.contact_body}>
                    <div className={homeStyles.contact_left}>
                      <img src="" alt=""/>
                      <div className={homeStyles.contact_left_data}>
                        {
                          contactDaata.map(posta => {
                            return(
                              <div key={posta.ida} className={homeStyles.contact_items_body}> 
                                <img src={posta.icon}  alt="" style={{width:`65px`,height:`65px`}}/>
                                <div className={homeStyles.contact_item}>
                                  <p> <span>{posta.title1}</span> {posta.content1}</p>
                                  <p> <span>{posta.title2}</span> {posta.content2}</p>
                                  <p className={homeStyles.contact_item_addline}> {posta.content3}</p>                                  
                                </div>
                              </div>
                            )
                          })
                        }   
                      </div>                
                    </div>
                    <div className={homeStyles.contact_right_form}>
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputNamel1">Name and surname</label>
                          <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Name and surname" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">E-mail address*</label>
                          <input type="text" className="form-control" id="exampleInputPassword1" disabled placeholder="John.doe@gmail.com"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlTextarea1">Message*</label>
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <div>
                          <span>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                          </span>
                        </div>
                        <Button variant="contained" className={homeStyles.app_btn}>Send message</Button>
                      </form>
                    </div>
                </div>                       
            </div>
            </Container>
            <div className={homeStyles.location_section}>
                <img src={Image3} alt="phoneImage1" style={{width:`100%`}}/>
            </div>
        </div> 
    );
  }
}

export default homeContent;
