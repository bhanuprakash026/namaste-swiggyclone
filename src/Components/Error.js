import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError()
  return (
    <div>
      <h1>Oops somethig went wrong...</h1>
      <p>{err.error?.message}</p>
    </div>
  )
}

export default Error