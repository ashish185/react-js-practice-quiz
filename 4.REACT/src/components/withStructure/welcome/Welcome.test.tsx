import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Welcome', () => {
    test('renders correctly', () => {
        render(<Welcome />);
        const elem = screen.getByText('Welcome');
        expect(elem).toBeInTheDocument();
    });
    
    test('renders with a lang', () => {
        render(<Welcome lang='React' />);
        const elem = screen.getByText('Welcome React');
        expect(elem).toBeInTheDocument();
    });
})