import React from 'react'
import { Link } from 'react-router-dom'

import Hero from 'components/Hero'
import Button from 'components/Button'
import TextInput from 'components/TextInput'
import HeroSVG from 'pages/Home/HeroSVG'

import RightSideBlock from 'pages/Home/RightSideBlock'
import HeroTextWrapper from 'pages/Home/HeroTextWrapper'
import HeroInputWrapper from 'pages/Home/HeroInputWrapper'

import guidelines from 'guidelines'
import styled from 'styled-components'

const { colors } = guidelines

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 400px) {
    padding: 1.5rem;
  }
`
const _HeroTextHeader = styled.h1`
  font-weight: bold;
  font-family: 'Fira Sans';
  color: ${colors.coolGrey};

  @media (max-width: 899px) {
    font-size: 4.3rem;
    margin-bottom: 1rem;
  }
`
const _HeroSecondaryText = styled.p`
  @media (max-width: 899px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

const _HeroThirdText = styled.p`
  @media (max-width: 899px) {
    font-size: 1.3rem;
  }
`

export default function Home () {
  return (
    <_Container>
      <Hero>
        <HeroSVG />
        <RightSideBlock>
          <HeroTextWrapper>
            <_HeroTextHeader>
              Olá, meu nome é Erick
            </_HeroTextHeader>
            <_HeroSecondaryText>
              Sou freelancer com mais de 5 anos de experiência
              <br />
              Profissional criando sites e integrando serviços web
              <br />
            </_HeroSecondaryText>
            <_HeroThirdText>
              Fique à vontade para entrar em contato comigo <Link to='/works' style={{ color: colors.darkBlueGreen, textDecoration: 'none', fontWeight: 'bold' }}> ou dar uma olhada no meu trabalho </Link>
            </_HeroThirdText>
          </HeroTextWrapper>
          <HeroInputWrapper>
            <TextInput
              grow='4'
              borderRadius='5px 0 0 5px'
              padding='1.4rem'
              placeholder='Email Address'
              color={colors.darkBlueGreen}
            />
            <Button grow='1' borderRadius='0 5px 5px 0'>
              Contact me
            </Button>
          </HeroInputWrapper>
        </RightSideBlock>
      </Hero>
    </_Container>
  )
}
