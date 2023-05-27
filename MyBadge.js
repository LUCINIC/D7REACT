import React from 'react'
import Badge from 'react-bootstrap/Badge';


const MyBadge = ({str, color}) => {
  return (
    <Badge className="mb-5" bg={color}>{str}</Badge>
  )
}

export default MyBadge