import React, { useState, MouseEvent, MouseEventHandler } from 'react'
import { useLocation } from 'react-router-dom'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import Nav from './Nav'
import NavLinks from './NavLinks'
import NavLink from './NavLink'
import Image from './Image'
import SocialIcons from './SocialIcons'
import SocialIconContainer from '../SocialIcon'
import MenuButton from './MenuButton'
import MenuContent from './MenuContent'
import Indicator from './Indicator'
import Icon from '../Icon'

import Photo from '../../assets/images/IMG_20180208_192306.jpg'

import pathNameFormatter from '../../utils/pathNameFormatter'

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(true)
  const { pathname: path } = useLocation()

  const formattedPath = pathNameFormatter(path) as string

  const _clickHandler: MouseEventHandler<HTMLElement> = (event: MouseEvent) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }
  return (
    <Nav>
      <>
        {
          formattedPath
            ? <Indicator path={formattedPath}/>
            : <Image src={Photo} />
        }

      </>
      <MenuButton clickHandler={_clickHandler}/>
      <MenuContent isOpen={isOpen}>
        <NavLinks>
          <NavLink
            to='/'
            $isActive={path === '/'}
          >Home</NavLink>
          <NavLink
            to='/about'
            $isActive={path === '/about'}
          >About</NavLink>
          <NavLink
            to='/works'
            $isActive={path === '/works'}
          >Works</NavLink>
          <NavLink
            to='/services'
            $isActive={path === '/services'}
          >Services</NavLink>
          <NavLink
            to='/contact'
            $isActive={path === '/contact'}
          >Contact</NavLink>
        </NavLinks>
        <SocialIcons>
          <SocialIconContainer>
            <Icon IconComponent={IoLogoInstagram} size='2rem'/>
          </SocialIconContainer>
          <SocialIconContainer>
            <Icon IconComponent={IoLogoGithub} size='2rem'/>
          </SocialIconContainer>
          <SocialIconContainer>
            <Icon IconComponent={IoLogoLinkedin} size='2rem'/>
          </SocialIconContainer>
        </SocialIcons>
      </MenuContent>
    </Nav>
  )
}
