import {render, screen} from '../../../utils/test-utils';
import {LoggedInButton} from '../compose/loggedInButton/index';

describe('LoggedInButton', () => {

  const setup = () => {
    render(<LoggedInButton />);
  }
  
  it('should render the logged user name on the button', () => {
    setup();
    const loggedInButton = screen.getByRole('button', {name: 'GH Username'});

    expect(loggedInButton).toBeInTheDocument();
  })
  it('should render a close icon', () => {
    setup();
    const closeIcon = screen.getByTestId('close_icon');

    expect(closeIcon).toBeInTheDocument();
  })
  it('should render the GitHub Icon', () => {
    setup();
    const githubIcon = screen.getByTestId('github_icon');
    
    expect(githubIcon).toBeInTheDocument();
  })
})
