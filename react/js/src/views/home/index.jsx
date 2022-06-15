import { useNavigate } from "react-router-dom"

function PageHome () {
  const navi = useNavigate()
  return <>
    <h1 className="text-center text-lg">Home</h1>
    <button className="container w-20 border" onClick={() => navi('/about')}>go</button>
  </>
}

export default PageHome