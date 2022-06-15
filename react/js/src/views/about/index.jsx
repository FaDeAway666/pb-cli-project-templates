import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function PageAbout() {
  useEffect(() => {
    console.log('about render')
  }, [])

  const nav = useNavigate()

  return (
    <>
      <h1>About</h1>
      <button
        onClick={() => {
          nav(-1)
        }}
      >
        back
      </button>
      <button
        onClick={() => {
          nav('/about/child')
        }}
      >
        child
      </button>
      <Outlet />
    </>
  )
}

export default PageAbout
