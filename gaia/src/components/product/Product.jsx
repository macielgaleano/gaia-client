import React from "react"

export default function Product({ pageContext: { product } }) {
  return <div>{product.name}</div>
}
