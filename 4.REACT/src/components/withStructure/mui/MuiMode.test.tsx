import { render, screen } from '@testing-library/react';
import MuiMode from './MuiMode';
import { ModeProviders } from '../../../providers/ModeProviders';

describe("MuiMode", () => {
    test("renders text correctly", () => {
        render(<MuiMode />, {
            wrapper: ModeProviders
        });
        const h1Elem = screen.getByRole("heading");
        expect(h1Elem).toHaveTextContent("light mode");
    })
})