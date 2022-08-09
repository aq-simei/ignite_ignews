import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "../../../signInButton/styles.module.scss";
import { signOut, useSession } from "next-auth/react";


export const LoggedInButton = () => {
  const {data} = useSession();

  return (
    <button type="button" className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub color="#04D361" data-testid="github_icon"/>
      {data?.user?.name}
      <FiX color="#737380" className={styles.closeIcon} data-testid='close_icon'/>
    </button>
  );
};
