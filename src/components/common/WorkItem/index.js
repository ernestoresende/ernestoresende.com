import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const WorkItem = ({ image, projectTitle, projectDescription }) => {

  return (
    <div>
      <GatsbyImage image={image} />
      <h2>{projectTitle}</h2>
      <p>{projectDescription}</p> 
    </div>
  )
}

export default WorkItem;
