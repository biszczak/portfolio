import React from 'react';
import Layout from '../../components/Layout/layout';

import Top from './Sections/Top/Top';
import About from './Sections/About/About';
import Technologies from './Sections/Technologies/Technologies';
// import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';
import Rocket from '../../components/Animated/Rocket/Rocket';
import Astronaut from '../../components/Animated/Astronaut/Astronaut';
import Satellite from '../../components/Animated/Satellite/Satellite';

import { Homepage } from './Homepage.css';

export default ({ pageContext }) => {

    return (
        <Layout className="homepage-layout" isHomepage={true}>
            <Homepage>
                <Top />
                <About />
                <Technologies />
                {/* <Contact /> */}
                <Footer />
                <div className="rocket" >
                    <Rocket />
                </div>
                <div className="astronaut">
                    <Astronaut />
                </div>
                <div className="satellite">
                    <Satellite />
                </div>
            </Homepage>
        </Layout>
    )
};