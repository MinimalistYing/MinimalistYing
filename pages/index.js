import Head from 'next/head'
import LazyLoad from 'react-lazyload'
import Link from 'next/link'

import { Header } from '../components'
import Blog from '../components/Blog'
import category from '../_blogCategory'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>MinimalistYing.io - 首页</title>
      </Head>

      <Header active="home" />

      <main className={styles.home}>
        <ul className={styles.category}>
          {
            category.map((item, index) => (
              <Link href={`${item.key}`} key={item.key}>
                <li
                  id={item.key}
                >
                  <figure>
                    <LazyLoad style={{ height: 'calc(100% - 90px)' }} once>
                      <img src={item.img} alt="图" loading="lazy" />
                    </LazyLoad>
                    <figcaption>
                      <div className={styles.blogName}>{item.name}</div>

                      <div className={styles.blogInfo}>
                        <div className={styles.blogDate}>{item.date}</div>

                        <div className={styles.tagBox}>
                          {item.tags.map(tag => <div key={tag} className={styles.tag}>{tag}</div>)}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </Link>
            ))
          }
        </ul>
      </main>
    </>
  )
}
