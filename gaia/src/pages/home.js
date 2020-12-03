import React from "react"
import { Link } from "gatsby"

export default function home() {
  return (
    <div>
      Mi nombre{" "}
      <Link to="/">
        <button type="button" name="" id="" class="btn btn-primary">
          Hola
        </button>
      </Link>
    </div>
  )
}
