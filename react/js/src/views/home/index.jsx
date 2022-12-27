import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SIGN_OUT } from '../../store/slice/user'

function PageHome() {
  const navi = useNavigate()
  const dispatch = useDispatch()

  function signout() {
    dispatch(SIGN_OUT(123))
  }

  signout()
  return (
    <>
      <h1 className="text-center text-lg">Home</h1>
      <button className="container w-20 border" onClick={() => navi('/about')}>
        go
      </button>
    </>
  )
}

export default PageHome
