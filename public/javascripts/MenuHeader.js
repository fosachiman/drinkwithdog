import React from 'react';

export default class MenuHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  listMenuHeader() {
    return (
      <div className='menu-header'>
        List View
      </div>
    )
  }

  singleBarMenuHeader() {
    return (
      <div className='menu-header'>
        <div onClick={() => this.props.multiBarView()}>Return to List View</div>
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
      <div>
        {menuHeader}
      </div>
    );
  }
}
