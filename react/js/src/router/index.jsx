import { Routes, Route, BrowserRouter } from 'react-router-dom'
import routeConfig from './config'

function renderRoute(routes) {
  return routes.map(route => {
    const { path, key, element } = route
    const config = {
      path,
      key,
      element
    }
    return (
      <Route {...config} key={config.key}>
        {route.children ? renderRoute(route.children) : null}
      </Route>
    )
  })
}

function BaseRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoute(routeConfig)}
        {/* <Route path="/" element={<PageHome />}></Route>
        <Route path="/about" element={<PageAbout />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default BaseRouter
