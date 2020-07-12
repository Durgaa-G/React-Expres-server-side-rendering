import React, { Component } from 'react';
import Header from '../Components/Header';

export default function (ComposedComponent) {
  class PageLayout extends Component {

    render() {
      return (
        <React.Fragment>

          <Header/>
          <main className="main-conainer">
          <ComposedComponent {...this.props} />
          </main>

        </React.Fragment>
      )

    }

  }
  return PageLayout;
}
