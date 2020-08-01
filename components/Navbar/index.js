import React, { Component } from 'react';
import Link from 'next/link';

import MenuItem from '../MenuItem';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {classArr, isActive} =this.props;
    const menu = [
      {title:'About me',imgUrl:'dark/profile.png', href:'/'},
      {title:'Work',imgUrl:'dark/work.png', href:'/work'},
      {title:'Timeline',imgUrl:'dark/timeline.png', href:'/timeline'},
      {title:'Porfolio',imgUrl:'dark/portfolio.png', href:'/porfolio'},
      {title:'Photos',icon:'icon-camera', href:'/photos'},
      {title:'Contact',imgUrl:'dark/contact.png', href:'/contact'},
    ]
    let activeClass ="" ;
    if(isActive) {
      activeClass += " active";
    }
    return (
      <div className={classArr +" sidebar " + activeClass}>
        {/* <div className="avatar">
          <img
          className="avatar-img"
            src="/static/avatar4.jpg"
            alt="Avatar"
          />
          <div className="name">Hai, Ho Thanh</div>
        </div> */}
        <nav className="menu">
          <ul>
            {
              menu.length>0 && menu.map((item,index) => {
                return (
                  <MenuItem title={item.title} imgUrl={`/static/sidebar/${item.imgUrl}`} href={item.href} icon={item.icon} key={index}/>
                )
              })  
            }
          </ul>
        </nav>
        <footer>
          <nav className="social">
            <ul className="icon-wrapper">
              <li className="icon github">
                <a href="https://github.com/BlackWolf2303" target="_blank"
                  ><i className="icon-github"></i
                ></a>
              </li>
              <li className="icon medium">
                <a href="https://blackwolf0559.wordpress.com/" target="_blank"
                  ><i className="icon-wordpress"></i
                ></a>
              </li>
              <li className="icon facebook">
                <a href="https://www.facebook.com/SteveJobsManInTheMachine/" target="_blank"
                  ><i className="icon-facebook"></i
                ></a>
              </li>
              <li className="icon linkedin">
                <a href="https://www.linkedin.com/in/haiht/" target="_blank"
                  ><i className="icon-linkedin"></i
                ></a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Navbar;