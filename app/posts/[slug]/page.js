

import fs from "fs"
import matter from "gray-matter"
import { remark } from 'remark'
import html from 'remark-html'
import { MDXRemote} from 'next-mdx-remote/rsc'
// import markdownStyles from './markdown-styles.module.css'

const getPost= async (slug)=>{
    const folder = "post/"
    const file = `${folder}${slug}.md`
    const data = fs.readFileSync(file, "utf8")
    const contentresult = matter(data)
    const content = contentresult.content
    return content
    }

     const postPage= async (props) =>{
   const slug = props.params.slug
   const blogContent = await getPost(slug)
  return (
    
  <MDXRemote source={blogContent} />

  )
}

export default postPage

 