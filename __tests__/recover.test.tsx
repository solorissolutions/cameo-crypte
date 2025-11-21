import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('wagmi', () => ({
  useAccount: () => ({ isConnected: true }),
}));
jest.mock('@rainbow-me/rainbowkit', () => ({
  ConnectButton: () => <button>Connect</button>,
}));
jest.mock('../components/three/PhoenixLogo3D', () => ({
  PhoenixLogo3D: () => <div data-testid="phoenix" />,
}));
jest.mock('../components/three/LivenessPlaceholder', () => ({
  LivenessPlaceholder: () => <div data-testid="liveness" />,
}));
jest.mock('../components/three/SuccessPhoenix', () => ({
  SuccessPhoenix: () => <div data-testid="success-phoenix" />,
}));

import RecoverPage from '../app/app/recover/page';

describe('RecoverPage', () => {
  test('allows input of address and triggers recovery flow', () => {
    jest.useFakeTimers();
    render(<RecoverPage />);
    const input = screen.getByLabelText(/wallet address/i);
    fireEvent.change(input, { target: { value: '0xdeadbeef' } });
    const startButton = screen.getByRole('button', { name: /start recovery/i });
    fireEvent.click(startButton);
    // scanning placeholder
    const scanning = screen.getByText(/verify your identity/i);
    expect(scanning).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    const success = screen.getByText(/recovery successful/i);
    expect(success).toBeInTheDocument();
    jest.useRealTimers();
  });
});