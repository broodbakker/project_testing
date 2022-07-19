/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../components/form';

const setup = (onSubmit) => {
  const utils = render(<Form onSubmit={onSubmit} />);
  const inputName = screen.getByRole('textbox', { name: /user name/i });
  const inputEmail = screen.getByRole('textbox', { name: /email address/i });
  const inputPassword = screen.getByLabelText(/password\*/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  return {
    inputName,
    inputEmail,
    inputPassword,
    submitButton,
    ...utils,
  };
};

describe('form', () => {
  const onSubmit = jest.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it('onSubmit called when all fields pass validation', async () => {
    const { inputName, inputEmail, inputPassword, submitButton } =
      setup(onSubmit);

    await user.type(inputName, 'Martijn');
    await user.type(inputEmail, 'mrtjnvanderee@gmail.com');
    await user.type(inputPassword, '2349233423423');

    await user.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        name: 'Martijn',
        email: 'mrtjnvanderee@gmail.com',
        password: '2349233423423',
      });
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('onSubmit required fields have been filled', async () => {
    const { inputEmail, inputPassword, submitButton } = setup(onSubmit);

    await user.type(inputEmail, 'mrtjnvanderemail.com');
    await user.type(inputPassword, '233423');

    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('name should be atleast 5 characters'));
    });

    await waitFor(() => {
      expect(screen.getByText('this is not an email address'));
    });

    await waitFor(() => {
      expect(screen.getByText('password should be atleast 12 characters long'));
    });
  });
});
