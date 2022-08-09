import { NotLoggedInButton } from "./compose/notLoggedInButton";
import { LoggedInButton } from "./compose/loggedInButton";
import { Session } from "next-auth/core/types";

type SignInButtonProps = {
  session: Session | null;
};

export const SignInButton = ({ session }: SignInButtonProps) => {
  return session ? (
    <LoggedInButton />
  ) : (
    <NotLoggedInButton />
  );
};
