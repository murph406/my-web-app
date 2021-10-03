import React, { Component } from 'react'
import { withThemeContext } from '../../context';

export class HomePage extends Component {

  render() {
    const { themeContext } = this.props;
    const { isDarkTheme, toggleTheme } = themeContext

    return (
      <div className="App" style={{ backgroundColor: (isDarkTheme) ? 'black' : 'white' }}>
        <div style={{ color: (isDarkTheme) ? 'white' : 'black', cursor: 'pointer' }} onClick={() => toggleTheme()}>Home Page</div>
      </div >
    );
  }
}


export default withThemeContext(HomePage)
