import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/85231417?v=4" />
        <strong>Henrique Batista</strong>
        <span>Software Engineering</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}