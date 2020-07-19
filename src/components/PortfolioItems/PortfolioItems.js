import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { Grid, ItemContainer } from './PortfolioItems.css';

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
              acf{
                  category
              }
            }
          }
        }
      }
    `)
    return (
        <Grid>
            {
                projects.allWordpressWpPortfolio.edges.map(portfolioItem => (
                    <Link
                        className="item-link"
                        key={portfolioItem.node.id}
                        to={`/portfolio/${portfolioItem.node.slug}`}>
                        <ItemContainer>
                            <img src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" />
                            <div className="title-and-description">
                                <h2>{portfolioItem.node.title}</h2>
                                <span className="category">{portfolioItem.node.acf.category}</span>
                                <div className="description" dangerouslySetInnerHTML={{ __html: portfolioItem.node.excerpt }} />
                                <span className="see">Szczegóły</span>
                            </div>
                        </ItemContainer>
                    </Link>
                ))
            }
        </Grid>
    )
}

export default PortfolioItems;