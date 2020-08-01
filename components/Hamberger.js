import React, { Component, useEffect } from 'react';
// import document from 'next/document';


class Hamberger extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.isToggle = this.isToggle.bind(this);
  }
  isToggle() {
    this.props.isToggle();
  }

  componentDidMount() {
    if (process.browser) {
      let lastScrollTop = 0;
      let intro = document.getElementsByClassName('intro')[0];
      window.addEventListener("scroll", function(e) { 
        let scrollTop = window.scrollY;
        switch(true) {
          case (scrollTop >70):
            console.log('100 dowwwwwww');
            intro.classList.add('sub-intro');
            break;

          case(scrollTop <=70):
            console.log('100 uppppp');
            intro.classList.remove('sub-intro');
            break;

          // case(scrollTop <= 100):
          //   intro.classList.remove('sub-intro');
          //   break;
          default:
            return true;
        }
        lastScrollTop = scrollTop;
      });
    }
  }


  render() { 
    const { isActive } = this.props;
    let icon;
    if(isActive) {
      icon = <span className="icon-cross"></span>;
      
    }else { 
      icon = <span className="icon-menu"></span>
    }
    

    return ( 
      <div className=" top-bar"> 
      <button onClick={this.isToggle} className="hamberger">
        {icon}
      </button>
      <div className="intro">
        <h1 className="intro-name">HO THANH HAI</h1>
        <p>MID-LEVEL FRONT END DEVELOPER</p>
        <p className="exp-year">have been programming for 2 years</p>
      </div>
    </div>
    );
  }
}

export default Hamberger;
