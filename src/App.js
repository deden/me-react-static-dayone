/* global tw */
import React from 'react'
import { Router, Link } from 'react-static'
import { css } from 'glamor'
import glamorous from 'glamorous'

import Routes from 'react-static-routes'

import { Provider } from 'react-redux'
import store from './connectors/redux'


css.global('html, body', tw('font-demo-serif font-light text-base m-0 p-0'))
css.global('a', tw('no-underline text-demo-color font-bold'))
const NavStyled = glamorous.nav(tw('w-full bg-demo-color'))
const LinkStyled = glamorous(Link)(tw('text-white p-4 inline-block'))
const Content = glamorous.div(tw('p-4'))

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <NavStyled>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/about">About</LinkStyled>
          <LinkStyled to="/blog">Blog</LinkStyled>
        </NavStyled>
        <Content>
          <Routes />
        </Content>
      </div>
    </Router>
  </Provider>
)
