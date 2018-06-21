import React, { Component } from 'react';

import { submitLogout } from '_utils/Authorization';


class App extends Component {

  constructor(props) {
    super(props)
  }


  componentWillMount() {
    document.body.addEventListener('logout', submitLogout)
  }

  componentWillUnmount() {
    try {
      document.body.removeEventListener('logout', submitLogout)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
