import { promises as fs } from 'fs'
import path from 'path'

// posts will be populated at build time by getStaticProps()
function Inspection({ inspections }) {
  return (
    <div className="container">
      <main>
        <img
          src="/inspection/bg1.png"
          style={{ width: '100vw', maxHeight: '700px' }}
        />
        <ul>
          {inspections.map((post) => (
            <li key={'inspection' + post.filename}>
              <h6>{post.filename}</h6>
              <h6>미생물 검출 실험 결과 통보서</h6>
              {/* <p>{post.content}</p> */}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(
    process.cwd(),
    'public',
    'inspection',
    'result',
  )
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
