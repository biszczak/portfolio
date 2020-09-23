import React from 'react';
import { useHistory } from "react-router-dom";

import { Portfolio } from './Portfolio.css';
import Layout from '../../components/Layout/layout';
import Footer from '../Homepage/Sections/Footer/Footer';

export default ({ pageContext }) => {


    return (
        <div style={{ overflow: 'hidden' }}>
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
                        <h3>Użyte technologie</h3>
                        <div dangerouslySetInnerHTML={{ __html: pageContext.acf.technologies }}></div>
                    </div>
                    <div className="back" onClick={() => window.history.back()}>
                        Wróć
                </div>
                </Portfolio>
            </Layout>
            <Footer />
        </div>
    )
};