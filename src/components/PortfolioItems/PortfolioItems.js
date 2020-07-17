import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const PortfolioItems = () => {
    const projects = useStaticQuery(graphql`
    {
        allWordpressWpPortfolio{
          edges{
            node{
                id
                slug
                title
                excerpt,
                content,
                featured_media {
                source_url
              }
            }
          }
        }
      }
    `)
    return (
        <>
            {
                projects.allWordpressWpPortfolio.edges.map(portfolioItem => (
                    <div key={portfolioItem.node.id}>
                        <h2>{portfolioItem.node.title}</h2>
                        <img src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" />
                        <div dangerouslySetInnerHTML={{ __html: portfolioItem.node.excerpt }} />
                        <Link to={`/portfolio/${portfolioItem.node.slug}`}>Read more</Link>
                    </div>
                ))
            }
        </>
    )
}

export default PortfolioItems;