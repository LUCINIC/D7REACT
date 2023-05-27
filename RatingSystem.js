import React from 'react'
import { StarFill } from "react-bootstrap-icons"
import { nanoid } from 'nanoid'

const RatingSystem = ({ stars }) => { // una props: numero stelle
  return (
    <>
      {
        [...Array(stars)].map((id) => {
          return <StarFill key={nanoid()} />
        })
      }
    </>
  )
}

export default RatingSystem