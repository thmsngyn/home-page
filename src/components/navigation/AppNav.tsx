import React from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'

import { SplashIntro } from '@/components/pages'

enum Routes {
  SplashIntro = 'SplashIntro',
  Home = 'Home',
  About = 'About',
}

type AppRoute = { path: string; component: any }

const router: Record<Routes, AppRoute> = {
  [Routes.SplashIntro]: {
    path: '/',
    component: SplashIntro,
  },
  [Routes.Home]: {
    path: '/home',
    component: <div>home hello</div>,
  },
  [Routes.About]: {
    path: '/about',
    component: <div>about hello</div>,
  },
}

export const AppNav = () => {
  const location = useLocation()
  console.log({ location })

  return (
    <div>
      {location.pathname !== router[Routes.SplashIntro].path && (
        <ul style={styles.nav}>
          {Object.keys(router)
            .filter((route) => route !== Routes.SplashIntro)
            .map((key, i) => (
              <Link key={i} to={router[key as Routes].path}>
                {key}
              </Link>
            ))}
        </ul>
      )}
      <div style={styles.body}>
        <Switch>
          {Object.values(router).map((route, i) => (
            <Route key={i} exact path={route.path}>
              {route.component}
            </Route>
          ))}
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
