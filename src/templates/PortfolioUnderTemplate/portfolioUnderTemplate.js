import React, { Fragment } from 'react';
import Layout from '../../components/Layout/layout';
import PortfolioItems from '../../components/PortfolioItems/PortfolioItems';
import Footer from '../Homepage/Sections/Footer/Footer';

import { Wrapper } from './portfolioUnderTemplate.css';


export default ({ pageContext }) => (
    <div style={{ overflow: 'hidden' }}>
        <Layout>
            <Wrapper>
                <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
                <div className="optional-desc" dangerouslySetInnerHTML={{ __html: pageContext.content }} />
                <PortfolioItems />
            </Wrapper>
        </Layout>
        <Footer />
    </div>
);