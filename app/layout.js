















export default function RootLayout({ children }) {

  const header = (
    <header>
      <h1>Elis Blog</h1>
      <p>welcome to my $1000 blog</p>
    </header>
  )

  const footer=(
    <div>
      <br/>
      <h3> developed eli</h3>
    </div>
  )
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      {header}
        {children}
      {footer}
      </body>
    </html>
  )
}
