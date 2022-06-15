import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../store/slice/count'

function PageChild() {
  useEffect(() => {
    console.log('child render')
  }, [])

  const countState = useSelector(state => state.count)
  const dispatch = useDispatch()

  function add() {
    dispatch(increment())
  }

  return (
    <>
      <h3>child</h3>
      <p>{countState.count}</p>
      <button onClick={add}>add</button>
    </>
  )
}

export default PageChild
