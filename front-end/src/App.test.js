import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, screen } from './test-utils'
import '@testing-library/jest-dom/extend-expect'

import App from './App';

it('renders without crashing', () => {
    render(<App />);
});

