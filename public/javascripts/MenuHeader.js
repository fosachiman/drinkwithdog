import React from 'react';

export default class MenuHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  listMenuHeader() {
    return (
      <div className='menu-header'>
        <h3 className="menu-title">List View</h3>
      </div>
    )
  }

  singleBarMenuHeader() {
    return (
      <div className='menu-header'>
        <div className="arrow-cont">
          <img className="back-arrow" src="./images/DWD_Icon_Arrow.svg" onClick={() => this.props.multiBarView()} />
        </div>
        <div className="menu-cont">
        <h3 className="menu-title">Return to List View</h3>
        </div>
      </div>
    )
  }

  render() {
    let menuHeader;
      if (this.props.menuState === 'list')
        menuHeader = this.listMenuHeader();
      else
        menuHeader = this.singleBarMenuHeader();
    return (
      <div className="menu-header-bg">
        {menuHeader}
      </div>
    );
  }
}
