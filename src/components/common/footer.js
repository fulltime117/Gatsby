import React, { Component } from 'react'
import footerStyles from "./footer.module.css"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';



export class footer extends Component {
    
    render(){
        return( 
            <div className={footerStyles.footer_body}>               
                <div>
                    <p>© Copyright by Accountancy Mariola Kochanska</p>
                </div>             
                <div className={footerStyles.footer_right}>
                    <p><Link to="#" ><span>Terms & Conditions</span></Link> </p>               
                    <p className={footerStyles.auther_part}><span>Made by</span><Link to="#" ><span> Fluid.Boxes</span></Link></p>
                </div> 
            </div> 
            )
        }
}

export default footer
