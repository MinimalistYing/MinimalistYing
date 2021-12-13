import Head from 'next/head'
import { Markdown, Header } from '../index'

import category from '../../_blogCategory'

export default function Blog ({ content }) {
  const index = content.indexOf('\n')
  const title = content.slice(2, index)
  const body = content.slice(index + 1)
  const cat = category.find(({ name }) => name === title)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <div className='blog'>
        <figure>
          <img className="blog-img" src={cat?.img} />
          <figcaption>
            <div className="blog-name">{title}</div>
            <div className="blog-date">{cat?.date}</div>
            <div className="tag-box">
              {cat?.tags?.map(tag => <div key={tag} className="tag">{tag}</div>)}
            </div>
          </figcaption>
        </figure>

        <div className="md-box">
          <Markdown data={body} />
        </div>
      </div>
    </>
  )
}