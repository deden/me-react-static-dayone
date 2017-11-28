import React from 'react'
import { getSiteProps } from 'react-static'
import glamorous from 'glamorous'
//
import logoImg from '../logo.png'

const LogoImage = glamorous.img({
  maxWidth: '100%',
})

export default getSiteProps(({ title }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>{ title }</h1>
    <LogoImage src={logoImg} alt="" />
  </div>
))
