import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
        }}
      }
    }
  }
`)
  return (
    <Menu>
      <Navigation>
        {MenuItems.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <Link to={`/${item.object_slug}`} key={item.title}>
            {item.title}
          </Link>
        ))}
      </Navigation>
    </Menu>
  )
}

export default MainMenu;
