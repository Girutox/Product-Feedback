import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BoardWelcomeCard from '../BoardWelcomeCard';

describe('BoardWelcomeCard', () => {
  it('should render the component with 2 headings', () => {
    const component = render(<BoardWelcomeCard />);

    expect(component).toBeTruthy();
    expect(component.getByRole('heading', { name: 'Frontend Mentor', level: 2 })).toBeTruthy();
    expect(component.getByRole('heading', { name: 'Feedback Board', level: 4 })).toBeTruthy();
  });
});
