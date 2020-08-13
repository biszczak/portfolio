import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import { SideInfo } from '../SideInfo/SideInfo';

import { Menu, Navigation } from './MainMenu.css';

const MainMenu = () => {

  const MenuItems = useStaticQuery(graphql`
  {
    allWordpressWpApiMenusMenusItems(filter: {
      name: {
        eq: "Main menu"
      }
    }){
      edges{
        node{
          name
          items{
          title
          object_slug
          url
        }}
      }
    }
  }
`)
  return (
    <Menu>
      <div className="wrapper">
        <Navigation>
          {MenuItems.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <li key={item.title}>
              {item.url.indexOf('#') !== -1
                ? (<AnchorLink to={`/${item.url.split("//").pop()}`} >
                  {item.title}
                </AnchorLink>
                )
                : (<Link to={`/${item.object_slug}`} >
                  {item.title}
                </Link>)}
            </li>
          ))}
        </Navigation>
      </div>
    </Menu>
  )
}

export default MainMenu;
