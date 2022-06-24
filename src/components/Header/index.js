import React, { useState } from "react"
import PropTypes from "prop-types"
import scrollTo from "gatsby-plugin-smoothscroll"

import avatar from '../../images/me.png'
import bars from '../../images/bars.svg'
import close from '../../images/close.svg'

import {
  Container,
  CustomHeader,
  Drawer,
  DrawerButton,
  DrawerButtonIcon,
  DrawerItem,
  DrawerItemsContainer,
  DrawerTitle,
  DrawerTitleContainer,
  HeaderAvatar,
  HeaderAvatarImage,
  HeaderAvatarName,
  HeaderLink,
  HeaderNavigation,
  HeaderContainer
} from "./styles"

function Header({ siteTitle }) {
  const [ isDrawerOpened, setDrawerOpenState ] = useState(false)

  const navigateAndScrollTo = (section) => {
    setDrawerOpenState(false)
    scrollTo(section)
  }

  return (
    <CustomHeader>  
      <Container>
        <HeaderContainer>
          <HeaderAvatar>
            <HeaderAvatarImage src={avatar} />
            <HeaderAvatarName>{siteTitle}</HeaderAvatarName>
          </HeaderAvatar>
          <HeaderNavigation>
            <HeaderLink 
              onClick={() => scrollTo('#home')}
            >Home</HeaderLink>
            <HeaderLink
              onClick={() => scrollTo('#carrer')}
            >Carreira</HeaderLink>
            <HeaderLink
              onClick={() => scrollTo('#skill')}
            >Habilidades</HeaderLink>
            <HeaderLink
              onClick={() => scrollTo('#education')}
            >Graduação</HeaderLink>
            <HeaderLink
              onClick={() => scrollTo('#certificate')}
            >Certificados</HeaderLink>
            <HeaderLink
              onClick={() => scrollTo('#projects')}
            >Projetos</HeaderLink>
          </HeaderNavigation>
          <DrawerButton onClick={() => setDrawerOpenState(!isDrawerOpened)}>
            <DrawerButtonIcon
              src={bars} 
              alt='Open Drawer'
            ></DrawerButtonIcon>
          </DrawerButton>
        </HeaderContainer>
      </Container>
      <Drawer opened={isDrawerOpened}>
        <DrawerTitleContainer>
          <DrawerTitle>Navegação</DrawerTitle>
          <DrawerButton onClick={() => setDrawerOpenState(!isDrawerOpened)}>
            <DrawerButtonIcon
              src={close} 
              alt='Open Drawer'
            ></DrawerButtonIcon>
          </DrawerButton>
        </DrawerTitleContainer>
        <DrawerItemsContainer>
          <DrawerItem onClick={() => navigateAndScrollTo('#home')}>Home</DrawerItem>
          <DrawerItem onClick={() => navigateAndScrollTo('#carrer')}>Carreira</DrawerItem>
          <DrawerItem onClick={() => navigateAndScrollTo('#skill')}>Habilidades</DrawerItem>
          <DrawerItem onClick={() => navigateAndScrollTo('#education')}>Graduação</DrawerItem>
          <DrawerItem onClick={() => navigateAndScrollTo('#certificate')}>Certificados</DrawerItem>
          <DrawerItem onClick={() => navigateAndScrollTo('#projects')}>Projetos</DrawerItem>
        </DrawerItemsContainer>
      </Drawer>
    </CustomHeader>
  )
} 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header