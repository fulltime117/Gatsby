import React, { Component } from 'react'
import Header from '../components/common/header'
import Service from '../components/service'
import Footer from '../components/common/footer'

export class service extends Component {
    render() {
        return (
        <>     
            <Header />
            <Service />
            <Footer />
        </>
        );
    }
}

export default service
