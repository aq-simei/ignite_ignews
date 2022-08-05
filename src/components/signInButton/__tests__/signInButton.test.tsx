import { render, screen } from "../../../utils/test-utils";
import { SignInButton } from "../index";

describe("SignInButton", () => {

  const setup = (isUserLogged: boolean) => {
    render(<SignInButton isUserLoggedIn={isUserLogged} />);
  };

  describe("when the user is not logged in", () => {
    it("should render the SignIn button", () => {
      setup(false);
      const signInText = screen.getByRole("button", {name: 'Sign In With Github'});

      expect(signInText).toBeInTheDocument();
    });
  });
  describe("when the user is logged in", () => {
    it("should render the user's github name", () => {
      setup(true);
      const userName = screen.getByRole('button', {name: "GH Username"});

      expect(userName).toBeInTheDocument();
    });

    it("should render a close icon", () => {
      setup(true);
      const closeIcon = screen.getByTestId("close_icon");

      expect(closeIcon).toBeInTheDocument();
    });
  });
});
