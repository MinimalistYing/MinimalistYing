import { Blog } from '../../components'

import content from './index.md'
import category from '../../_blogCategory'

export default function Article () {
  return <Blog content={content} />
}