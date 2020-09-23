import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import { SideInfo } from '../SideInfo/SideInfo';
import Ufo from '../Animated/Ufo/Ufo';

import { Menu, Navigation, MobileNavigation, HamburgerToggle } from './MainMenu.css';

function MainMenu() {

  const [state, setState] = useState({
    menuOpen: false,
  });

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

  const menuElements = MenuItems.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
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
  ))

  return (
    <React.Fragment>
      <HamburgerToggle
        className={state.menuOpen ? 'open' : null}
        onClick={() => setState({ menuOpen: !state.menuOpen })}>
        <div className="menu-btn__burger"></div>
      </HamburgerToggle>
      <Menu>
        <div className="wrapper">
          <Navigation id="navigation">
            <div className="ufo">
              <Ufo />
            </div>
            {menuElements}
          </Navigation>
          <MobileNavigation id="mobile-navigation" className={state.menuOpen ? 'open' : null}>
            <ul onClick={() => setState({ menuOpen: !state.menuOpen })}>
              {menuElements}
            </ul>
          </MobileNavigation>
        </div>
      </Menu>
    </React.Fragment>
  )
}

export default MainMenu;
