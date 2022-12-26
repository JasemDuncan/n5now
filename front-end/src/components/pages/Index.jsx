import React from 'react'
import {Link} from 'react-router-dom'

export const Index = () => {
  return (
    <div>
      <h1>Welcome, to n5now</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel magni quidem odit sapiente, voluptas ut est perspiciatis hic labore quia neque libero beatae cumque facere aspernatur delectus sint dolor.</p>
      <Link to="/permissions" className="">Show permissions</Link>
    </div>
  )
}
