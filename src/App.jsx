import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/85231417?v=4',
      name: 'Henrique Batista',
      role: 'Software Engineering'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa π', },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π' },
      { type: 'link', content: 'πjane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-03 21:24:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/85231417?v=4',
      name: 'Henrique Batista',
      role: 'Ubii',
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa π', },
      { type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π' },
      { type: 'link', content: 'πjane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-02 07:24:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar size={20} />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App