import { FaGithub } from "react-icons/fa";
import styles from "../../styles.module.scss";

export const NotLoggedInButton = () => {
  return (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#EBA417" data-testid='github_icon'/>
      Sign In With Github
    </button>
  );
};
