import { AuthRender, noAuthRender, screen } from "../../../utils/test-utils";
import { SignInButton } from "../index";

describe("SignInButton", () => {
  const authenticatedSession = {
    expires: "1",
    user: {
      name: "test user",
      email: "test@email",
      image: "",
    },
  };

  const noSession = null; //in this case, we can pass null as the session, because the button props accept null | Session types

  const authSetup = () => {
    AuthRender(<SignInButton session={authenticatedSession} />);
  };

  const noAuthSetup = () => {
    noAuthRender(<SignInButton session={noSession} />);
  };

  describe("when the user is not logged in", () => {
    it("should render the SignIn button", () => {
      noAuthSetup();
      const signInText = screen.getByRole("button", {
        name: "Sign In With Github",
      });

      expect(signInText).toBeInTheDocument();
    });
  });

  describe("when the user is logged in", () => {
    it("should render the user's github name", () => {
      authSetup();
      const userName = screen.getByRole("button", { name: "test user" });

      expect(userName).toBeInTheDocument();
    });

    it("should render a close icon", () => {
      authSetup();
      const closeIcon = screen.getByTestId("close_icon");

      expect(closeIcon).toBeInTheDocument();
    });
  });
});
