import styles from './styles.module.scss';
import { SignInButton } from '../signInButton';
import {useSession} from 'next-auth/react';

export const Header = () => {
  const session = useSession();
  const {data} = session;
  // session = {user = {name: string, email: string , image: string}, expires:  string}
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt='ig.news'/>
        <nav>
          <a className={styles.active} href="">Home</a>
          <a href="">Posts</a>
        </nav>

        <SignInButton session={data}/>
      </div>
    </header>
  )
}
