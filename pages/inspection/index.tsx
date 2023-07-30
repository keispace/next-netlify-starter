import { promises as fs } from 'fs'
import path from 'path'

// posts will be populated at build time by getStaticProps()
function Inspection({ inspections }) {
  return (
    <div className="container">
      <main>
        <ul>
          {inspections.map((post) => (
            <li key={'inspection' + post.filename}>
              <h3>{post.filename}</h3>
              post.
              {/* <p>{post.content}</p> */}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'public', 'inspections')
  const filenames = await fs.readdir(postsDirectory)

  const inspections = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = await fs.readFile(filePath, 'utf8')
    return {
      filename,
      content: fileContents,
    }
  })
  return {
    props: {
      inspections: await Promise.all(inspections),
    },
  }
}

export default Inspection
