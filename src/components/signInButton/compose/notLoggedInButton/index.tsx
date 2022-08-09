import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import styles from "../../styles.module.scss";

export const NotLoggedInButton = () => {
  return (
    <button type="button" className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub color="#EBA417" data-testid='github_icon'/>
      Sign In With Github
    </button>
  );
};
