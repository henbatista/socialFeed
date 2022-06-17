import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/85231417?v=4"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <dir className={styles.authorAndTime}>
              <strong>Henrique Batista</strong>
              <time title='11 de maio às 08:13' dataTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </dir>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Parabpens!! </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}