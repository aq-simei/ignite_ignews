import { render, screen }   from '../../../utils/test-utils';
import {SubscribeButton} from '../../subscribeButton/index';

describe ('Subscribe Button',  () => {
  const setup = () => {
    render(<SubscribeButton />);
  }

  it('should render the button with the correct message', () => {
    setup();

    const buttonText = screen.getByText('Subscribe now');

    expect(buttonText).toBeInTheDocument();
  });
})
