import React from 'react'
import wrapper from './wrapper'

const PageHome = React.lazy(() => import('@/views/home'))
const PageAbout = React.lazy(() => import('@/views/about'))
const PageChild = React.lazy(() => import('@/views/about/child.jsx'))

console.log(PageChild, 'pagechild')

export default [
  {
    path: '/',
    key: 'home',
    element: wrapper(PageHome)
  },
  {
    path: 'about',
    key: 'about',
    element: wrapper(PageAbout),
    children: [
      {
        path: 'child',
        key: 'child',
        element: wrapper(PageChild)
      }
    ]
  }
]
