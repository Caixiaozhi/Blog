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
      document.body.removeEventListener('logout')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
