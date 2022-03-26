import React from "react"

import Header from '../components/common/header'
import Home from '../components/home'
import Footer from '../components/common/footer'
import $ from "jquery";

class  index extends React.Component {

  componentDidMount() {    
    $("button").click(function() {
      $("h1").toggleClass("red");
    });
  }

  render() {
    return (
      <>     
        <Header />
        <Home />
        <Footer />
      </>
    );
  }
}

export default index
