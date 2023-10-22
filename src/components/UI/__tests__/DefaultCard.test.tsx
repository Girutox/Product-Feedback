import { describe, it, expect } from 'vitest';
import DefaultCard from '../DefaultCard';
import { render } from '@testing-library/react';

describe('DefaultCard', () => {
  it('should render the component', () => {
    const component = render(<DefaultCard>
      <div>Test</div>
    </DefaultCard>);

    expect(component).toBeTruthy();
    expect(component.getByText('Test')).toBeTruthy();
  });
});