import styles from "./styles.module.scss";

interface subscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: subscribeButtonProps) => {
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
