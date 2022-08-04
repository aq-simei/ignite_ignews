import styles from './styles.module.scss'
import { SignInButton } from '../signInButton'

type HeaderProps = {
  login: boolean
}

export const Header = ({login}: HeaderProps) => {

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt='ig.news'/>
        <nav>
          <a className={styles.active} href="">Home</a>
          <a href="">Posts</a>
        </nav>

        <SignInButton isUserLoggedIn={login}/>
      </div>
    </header>
  )
}
