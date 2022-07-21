import React from 'react'

function MoviesList({movies}) {
  return (
    <div>
    {
        movies.map(movie=><div>hello</div>)
    }
    </div>
  )
}

export default MoviesList