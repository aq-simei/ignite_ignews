import styles from "./styles.module.scss";

export const SubscribeButton = () => {
  return (
    <button
      className={styles.subscribeButton}
      type="button"
      onClick={() => {
        alert("Subscription not implemented yet");
      }}
    >
      Subscribe now
    </button>
  );
};
