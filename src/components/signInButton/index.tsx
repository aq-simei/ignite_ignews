import { NotLoggedInButton } from "./compose/notLoggedInButton";
import { LoggedInButton } from "./compose/loggedInButton";
type SignInButtonProps = {
  isUserLoggedIn: boolean;
}

export const SignInButton = ({isUserLoggedIn}: SignInButtonProps) => {
  return isUserLoggedIn ? <LoggedInButton /> : <NotLoggedInButton />;
};
