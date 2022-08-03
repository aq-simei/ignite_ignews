import { NotLoggedInButton } from "./compose/notLoggedInButton";
import { LoggedInButton } from "./compose/loggedInButton";
export const SignInButton = () => {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? <LoggedInButton /> : <NotLoggedInButton />;
};
