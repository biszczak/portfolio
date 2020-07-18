import React from 'react';
import Layout from '../../components/Layout/layout';
// import PortfolioItems from '../../components/PortfolioItems/PortfolioItems';

import { Wrapper } from './Page.css';

export default ({ pageContext }) => (
    <Layout>
        <Wrapper>
            <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
        </Wrapper>
    </Layout>
);