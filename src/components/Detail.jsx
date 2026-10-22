import React from 'react'
import { useParams } from 'react-router'
export const Detail = () => {
    const {id} = useParams();
  return (
    <div>Detail {id}</div>
  )
}
