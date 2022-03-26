import React from "react"
import headerStyles from "./header.module.css"
import { Link } from "gatsby"
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


class  Header extends React.Component {  
render(){
  return(
    <div className={headerStyles.menu_body}> 
      <div className={headerStyles.phone_menu}>
        <div className={headerStyles.logo_div}><Link to="#"><span className={headerStyles.res_logo}>MK Accountancy</span></Link></div>
        <div className={headerStyles.menu_icon}> <IconButton onClick={() => this.props.showmenu()}><MenuIcon /></IconButton></div>
      </div>
        <div className={headerStyles.nav} id="nav_menu">
          <div className={headerStyles.nav_container} >
            <div className={headerStyles.nav_content}>
              <div className={headerStyles.nav_menu}>
                <Link to="/"><span className={headerStyles.logo}>MK Accountancy</span></Link>
              </div>
              <div className={headerStyles.nav_menu}>
                <div className={headerStyles.papch}>
                  <div className={headerStyles.papch_price}>
                    <Link to="#" ><span>About us</span></Link>
                  </div>
                  <div className={headerStyles.papch_account}>
                    <Link to="../service"><span>Services</span></Link>                    
                  </div>
                </div>
                <div className={headerStyles.btn}>
                    <Button variant="contained" className={headerStyles.contact_btn}>Contact</Button>
                    <Button variant="contained" className={headerStyles.app_btn}>Free Consultation</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div> 

  )
}
}
export default Header;