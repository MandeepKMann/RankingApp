import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
    static displayName = Home.name;

    render() {

        return (
            <section className="homeSection">
                <div className="homeFlex">
                    <Container className="homeTextContainer">
                        <h1>Welcome to Raccoon Ranker!</h1>
                        <p>Are you looking for a fun and easy way to rank raccoons? Look no further! Raccoon Ranker is the perfect place where everyone can come together and rate different kinds of raccoons. We offer an extensive list of raccoons from all over the world, so there's something for everybody.</p>
                        <p>Check out our Famous Raccoons to rank some of our more popular furry friends. You can also check out Local Raccoons to see some up and coming stars!</p>
                        <div className="links">
                            <Link to="/rank-famous">Famous Raccoons</Link>
                            <Link to="/rank-local">Local Raccoons</Link>
                        </div>
                    </Container>          
                </div>
            </section>
        );
      }
}
