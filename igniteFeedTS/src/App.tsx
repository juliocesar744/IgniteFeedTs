import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/juliocesar744.png',
      name: 'Julio Lara',
      role: 'Fullstack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    ],
    publishedAt: new Date('2022-06-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Fullstack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '#google'},
    ],
    publishedAt: new Date('2022-06-03 20:00:00')
  },
]

function App() {
  return (
    <div >
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
