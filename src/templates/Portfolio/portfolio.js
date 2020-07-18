import React from 'react';

// import { Wrapper } from './Portfolio.css';
import Layout from '../../components/Layout/layout';

export default ({ pageContext }) => (
    <Layout>
        <h2>
            {pageContext.title}
        </h2>
        <a href={pageContext.acf.portfolio_url} target="_blank" rel="noreferrer">Zobacz</a>
        <img src={pageContext.featured_media.source_url} alt={pageContext.title} />
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
    </Layout>
);