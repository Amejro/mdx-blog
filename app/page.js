import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"



const getPost=()=>{
  const folder = "post/"
  const files = fs.readdirSync(folder)
  const markdownposts = files.filter((file)=>file.endsWith(".md"))
  
  const posts = markdownposts.map((fileName)=>{
    const fileContent = fs.readFileSync(`post/${fileName}`, "utf8")
    const frontMatter = matter(fileContent)
    return {
      title:frontMatter.data.title,
      date:frontMatter.data.date,
      subtitle:frontMatter.data.subtitle,
      slug:fileName.replace(".md", ""),

    }
  })
 
  return posts
  }


   export default async function  Home() { 
const postMetaData = await getPost()

const postPreview = postMetaData?.map((post, index)=>(
  <div key={index}>
    <Link href={`/posts/${post.slug}`}>
    <h2 >{post.title}</h2>
    <p >{post.subtitle}</p>
    <p >{post.date}</p>
    </Link>
  </div>
))
  return (
   <>
  {postPreview}
   </>
   
    
  )
}
