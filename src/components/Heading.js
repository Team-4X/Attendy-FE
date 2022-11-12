// This assumes a value called headingString is given to this component
// In this component we get that value and put it into a h1 tag.
// TODO: style with tailwind css


import { useState } from "react"

export const Heading = (props) => {
  const [headingString, setHeadingString] = useState(props.headingString)

  return (
    <div>
      <h1>{headingString}</h1>
    </div>
  )
}
