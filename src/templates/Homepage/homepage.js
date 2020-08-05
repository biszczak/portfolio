import React from 'react';
import Layout from '../../components/Layout/layout';

import Top from './Sections/Top/Top';
import About from './Sections/About/About';
import Technologies from './Sections/Technologies/Technologies';
import Contact from './Sections/Contact/Contact';

import { Homepage } from './Homepage.css';


export default ({ pageContext }) => (
    <Layout className="homepage-layout" isHomepage={true}>
        <Homepage>
            <Top />
            <About />
            <Technologies />
            <Contact />
        </Homepage>
    </Layout>
);