import { useNavigate } from 'react-router-dom'
import useUserStore from '@/store/user'

import { useCallback, useEffect } from 'react'

function PageHome() {
  const navi = useNavigate()

  const userInfo = useUserStore((state) => state.user)
  const setUserInfo = useUserStore((state) => state.setUser)

  const signin = useCallback(() => {
    setUserInfo({
      name: 'xixi'
    })
    console.log(userInfo, 'userinfo')
  }, [])

  useEffect(() => {
    signin()
  }, [signin])

  return (
    <>
      <h1 className="text-center text-lg">Home</h1>
      <div className='text-right'>{ userInfo?.name }</div>
      <button className="container w-20 border" onClick={() => navi('/about')}>
        go
      </button>
    </>
  )
}

export default PageHome
