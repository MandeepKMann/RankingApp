import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (
          <section className="homeSection">
              <Container>
                  <div className="homePage">
                        <h1>Welcome to Raccoon Ranker!</h1>
                        <p>Are you looking for a fun and easy way to rank raccoons? Look no further!</p>
                        <p>Raccoon Ranker is the perfect place where everyone can come together and rate different kinds of raccoons.</p>
                        <p>We offer an extensive list of raccoons from all over the world, so there's something for everybody.</p>
                        <p>Check out our Famous Raccoons to rank some of our more popular furry friends.</p>
                        <p>You can also check out Local Raccoons to see some up and coming stars!</p>
                  </div>
              </Container>          
          </section>
    );
  }
}
