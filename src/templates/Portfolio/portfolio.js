import React from 'react';

import { Portfolio } from './Portfolio.css';
import Layout from '../../components/Layout/layout';

export default ({ pageContext }) => (
    <Layout>
        <Portfolio>
            <h2>
                {pageContext.title}
            </h2>
            <div>
                <img className="main" src={pageContext.featured_media.source_url} alt={pageContext.title} />
                <a href={pageContext.acf.project_url} target="_blank" rel="noreferrer">Zobacz</a>
            </div>
            <div>
                <h3>Opis projektu</h3>
                <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
            </div>
            <div>
                <h3>Zadania w projekcie</h3>
                <p>{pageContext.acf.responsibilities}</p>
            </div>
            <div>
                <h3>Użyte technologie</h3>
                <div>
                    <img src={pageContext.acf.tech_1_image.source_url} alt={pageContext.acf.tech_1_image.title} />
                    <div>
                        {pageContext.acf.tech_1_name}
                    </div>
                </div>
            </div>
        </Portfolio>
    </Layout>
);