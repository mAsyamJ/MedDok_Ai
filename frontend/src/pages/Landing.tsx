import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <>
      <p>Landing Page uy</p>
      <Link to={'/login'}>Login page</Link>
    </>
  )
}
