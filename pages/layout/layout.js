import React, { Component } from 'react';
import { initGA, logPageView } from "../../components/GoogleAnalytics.js"

import Navbar from '../../components/Navbar';
import "../../styles/styles.scss";
import Hamberger from '../../components/Hamberger';
import Footer from '../../components/Footer';
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isActive: false,
    },
    this.isToggle = this.isToggle.bind(this);
  }

  isToggle() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() { 
    const { isActive } = this.state;
    const {id, children} = this.props;

    let activeClass ="" ;
    if(isActive) {
      activeClass += " active";
    }

    return ( 
      <section className="page row no-gutters">
      <Navbar isActive = {isActive} classArr="col-3 col-md-2 col-lg-2 col-xl-1"/>
      <div className="col col-sm-2 col-md-2 col-lg-2 col-xl-1 sidebar-spacing"></div>
      <div id={id} className={"col col-sm-10 col-md-10 col-lg-10 col-xl-11 main-content" + activeClass}>
        <Hamberger isActive = {isActive} isToggle = {this.isToggle}/>
        {children}
        <Footer />
      </div>
    </section>
    );
  }
}

export default Layout;
// import Navbar from '../../components/Navbar';
// import "../../styles/styles.scss";
// const Layout = (props) => (

// );
// export default Layout;

