import {rhythm} from '../utils/typography'
import {Link} from 'gatsby'
import React from 'react'

export function PostsList({posts}) {
  return (
    <>
      {posts.map(({node}) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
            <article key={node.fields.slug}>
                <header>
                    <h3
                    style={{
                        marginBottom: rhythm(1 / 4),
                    }}
                    >
                    <Link style={{boxShadow: `none`}} to={node.fields.slug}>
                        {title}
                    </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                </header>
                <section>
                    <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
                </section>
            </article>
        )
      })}
    </>
  )
}