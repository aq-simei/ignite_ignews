import { render, screen } from "../../../utils/test-utils";
import {NotLoggedInButton} from "../../signInButton/compose/notLoggedInButton/index";

describe('NotLoggedInButton', () => {
  const setup = () => {
    render(<NotLoggedInButton />)
  }

  it('should render the GitHub Icon', () => {
    setup();
    const githubIcon = screen.getByTestId('github_icon');

    expect(githubIcon).toBeInTheDocument();
  });
  
  it('should render the Sign In message', () => {
    setup();
    const buttonText = screen.getByRole('button', {name: 'Sign In With Github'});

    expect(buttonText).toBeInTheDocument();
  })
})
