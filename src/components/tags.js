import * as React from 'react'
import styled from 'styled-components'
import kebabCase from "lodash/kebabCase"
import { Link } from "gatsby"


export function TagsList({tags, ...otherProps}) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <Ul {...otherProps} style={{display: 'inline-block' }}>
      {tags.map(tag => (
        <Li key={tag}>
          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link> 
        </Li>
      ))}
    </Ul>
  )
}

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  display: inline-block;
  margin: 0;
  font-size: 16px;
  :before {
    content: ', ';
  }
  :first-child:before {
    display: none;
  }
`