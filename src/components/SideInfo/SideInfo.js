import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import styled from 'styled-components';

const Wrapper = styled.div`
color: pink;
`

const SideInfo = () => (
    <StaticQuery query={graphql`
    {
        allWordpressSiteMetadata{
          edges{
            node{
              name
              description
            }
          }
        }
      }
    `} render={props => (
            <Wrapper>
                <div>
                    {props.allWordpressSiteMetadata.edges[0].name.title}
                </div>
                <div>
                    {props.allWordpressSiteMetadata.edges[0].name.description}
                </div>
            </Wrapper>
        )} />
)

export default SideInfo;