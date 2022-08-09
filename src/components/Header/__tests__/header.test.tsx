import { AuthRender, noAuthRender, screen } from "../../../utils/test-utils";
import {Header} from '../index';


describe('Header', () => {
  const authSetup = () => {
    AuthRender(<Header />)
  }

  const noAuthSetup = () => {
    noAuthRender(<Header />);
  }

  it('should render the nav bar and the logo', () => {
    authSetup();
    const homeLink = screen.getByRole('link', {name: 'Home'});
    const postsLink = screen.getByRole('link', {name:'Posts'});
    const logo = screen.getByAltText('ig.news')

    expect(homeLink).toBeInTheDocument();
    expect(postsLink).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  })

  describe('when user is not logged in', () => {
    it('should render the sign in button', () => {
      noAuthSetup();

      const signInButton = screen.getByRole('button', {name: 'Sign In With Github'});

      expect(signInButton).toBeInTheDocument();
    });
  });

  describe('when user is logged in', () => {
    it("should render the user's github name", () => {
    authSetup();
    const loggedInButton = screen.getByRole('button', {name: 'test user'})

    expect(loggedInButton).toBeInTheDocument();
    })
  })
})
