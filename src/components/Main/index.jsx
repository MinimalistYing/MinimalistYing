import React, { Component } from 'react'
import './style.less'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import blogs, { category } from '@blog'

class Main extends Component {
  state={
    categories: category.map(({ key, img, date, tags = [] }) => ({
      name: blogs[key].slice(2, blogs[key].indexOf('\n')),
      key,
      img,
      date,
      tags,
    }))
  }

  render () {
    return (
      <main className='home'>
        <h1>Blogs</h1>
        <ul className='blogs-category'>
          {
            this.state.categories.map((item, index) => (
                <li
                  id={item.key}
                  key={item.key}
                  onClick={() => this.props.history.push(`${item.key}.html`)}
                  className={this.props.history.location.pathname.endsWith(`${item.key}.html`) ? 'selected' : ''}
                >
                  <figure>
                    <LazyLoad style={{ height: 'calc(100% - 110px)' }} once>
                      <img src={item.img} alt="图" loading="lazy" />
                    </LazyLoad>
                    <figcaption>
                      <div className="blog-name">{item.name}</div>
                      <div className="blog-date">{item.date}</div>

                      <div className="tag-box">
                        {item.tags.map(tag => <div key={tag} className="tag">{tag}</div>)}
                      </div>
                    </figcaption>
                  </figure>
                </li>
            ))
          }
        </ul>
      </main>
    )
  }
}

export default Main
