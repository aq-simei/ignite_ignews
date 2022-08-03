import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "../../../signInButton/styles.module.scss";

export const LoggedInButton = () => {
  return (
    <button type="button" className={styles.signInButton} >
      <FaGithub color="#04D361" data-testid="github_icon"/>
      GH Username
      <FiX color="#737380" className={styles.closeIcon} data-testid='close_icon'/>
    </button>
  );
};
