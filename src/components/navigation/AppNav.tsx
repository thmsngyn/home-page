import React from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'

import { FestivalPosters, SplashIntro } from '@/components/pages'

export enum Routes {
  SplashIntro = '/',
  Home = '/home',
  About = '/about',
  Festivals = '/festivals',
  Blog = '/blog',
}

type AppRoute = { header: string; Component?: any; redirect?: string }

const router: Record<Routes, AppRoute> = {
  [Routes.SplashIntro]: {
    Component: SplashIntro,
    header: '',
  },
  [Routes.Home]: {
    Component: () => <div>home hello</div>,
    header: 'Home',
  },
  [Routes.About]: {
    Component: () => <div>about hello</div>,
    header: 'About',
  },
  [Routes.Festivals]: {
    Component: FestivalPosters,
    header: 'Festivals',
  },
  [Routes.Blog]: {
    Component: () => {
      window.location.replace('https://blog.thmsngyn.com/')

      return null
    },
    header: 'Blog',
  },
}

export const AppNav = () => {
  const location = useLocation()

  return (
    <div>
      {location.pathname !== Routes.SplashIntro && (
        <ul style={styles.nav}>
          {Object.keys(router)
            .filter((route) => route !== Routes.SplashIntro)
            .map((key, i) => (
              <Link key={i} to={key}>
                {router[key as Routes].header}
              </Link>
            ))}
        </ul>
      )}
      <div style={styles.body}>
        <Switch>
          {Object.keys(router).map((route, i) => {
            const { Component } = router[route as Routes]

            return (
              <Route key={i} exact path={route} component={Component}></Route>
            )
          })}
        </Switch>
      </div>
    </div>
  )
}

const styles: any = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
}

styles.nav = {
  padding: 0,
  margin: 0,
  marginTop: 20,
  position: 'absolute',
  top: 0,
  height: 40,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
}

styles.body = {
  marginTop: 60,
  height: '100vh',
}
