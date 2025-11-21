import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock wagmi and rainbowkit hooks
jest.mock('wagmi', () => ({
  useAccount: () => ({ isConnected: true }),
}));
jest.mock('@rainbow-me/rainbowkit', () => ({
  ConnectButton: () => <button>Connect</button>,
}));

// Mock Phoenix and Liveness components to avoid Three.js in tests
jest.mock('../components/three/PhoenixLogo3D', () => ({
  PhoenixLogo3D: () => <div data-testid="phoenix" />,
}));
jest.mock('../components/three/LivenessPlaceholder', () => ({
  LivenessPlaceholder: () => <div data-testid="liveness" />,
}));
jest.mock('../components/three/SuccessPhoenix', () => ({
  SuccessPhoenix: () => <div data-testid="success-phoenix" />,
}));

import EnrollPage from '../app/app/enroll/page';

describe('EnrollPage', () => {
  test('renders start scan button and goes through scan to success', () => {
    jest.useFakeTimers();
    render(<EnrollPage />);
    // Should see Start Scan button initially
    const startButton = screen.getByRole('button', { name: /start scan/i });
    expect(startButton).toBeInTheDocument();
    // Click Start Scan
    fireEvent.click(startButton);
    // It should display scanning placeholder
    const scanningText = screen.getByText(/scanning/i);
    expect(scanningText).toBeInTheDocument();
    // Fast-forward timer to simulate scan completion
    act(() => {
      jest.advanceTimersByTime(4000);
    });
    const successMessage = screen.getByText(/enrollment complete/i);
    expect(successMessage).toBeInTheDocument();
    jest.useRealTimers();
  });
});