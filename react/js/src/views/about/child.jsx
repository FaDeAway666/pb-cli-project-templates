import { useEffect } from 'react'
import useCountStore from '@/store/count'

function PageChild() {
  useEffect(() => {
    console.log('child render')
  }, [])

  const count = useCountStore(state => state.count)
  const increment = useCountStore(state => state.increment)
  const decrement = useCountStore(state => state.decrement)

  return (
    <>
      <h3>child</h3>
      <p>{count}</p>
      <button onClick={increment}>add</button>
      <button onClick={decrement}>sub</button>
    </>
  )
}

export default PageChild
