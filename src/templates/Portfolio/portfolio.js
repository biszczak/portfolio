import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { Portfolio } from './Portfolio.css';
import Layout from '../../components/Layout/layout';
import Footer from '../Homepage/Sections/Footer/Footer';

export default ({ pageContext }) => {

    const isProtected = pageContext.acf.image_1;

    return (
        <div style={{ overflow: 'hidden' }}>
            <Layout>
                <Portfolio>
                    <h2>
                        {pageContext.title}
                    </h2>
                    <div>
                        <img className="main" src={pageContext.featured_media.source_url} alt={pageContext.title} />
                        {isProtected ?
                            <AnchorLink to={`/${pageContext.acf.project_url.split("//").pop()}`} >Więcej</AnchorLink>
                            :
                            <a href={pageContext.acf.project_url} target="_blank" rel="noreferrer">Zobacz</a>
                        }
                    </div>
                    <div>
                        <h3>Opis</h3>
                        <div className="desc" dangerouslySetInnerHTML={{ __html: pageContext.acf.description }}></div>
                    </div>
                    <div>
                        <h3>Wykonywane zadania w projekcie</h3>
                        <div className="responsibilities" dangerouslySetInnerHTML={{ __html: pageContext.acf.responsibilities }}></div>
                    </div>
                    <div>
                        <h3>Użyte technologie</h3>
                        <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
                    </div>
                    {isProtected ?
                        <div id="screenshots">
                            <img className="main" src={pageContext.acf.image_1.source_url} alt={pageContext.title} />
                            <img className="main" src={pageContext.acf.image_2.source_url} alt={pageContext.title} />
                            <img className="main" src={pageContext.acf.image_3.source_url} alt={pageContext.title} />
                        </div>
                        : null}
                    <div className="back" onClick={() => window.history.back()}>
                        Wróć
                </div>
                </Portfolio>
            </Layout>
            <Footer />
        </div>
    )
};