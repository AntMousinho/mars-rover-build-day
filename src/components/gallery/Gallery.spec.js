import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Gallery from './Gallery.js';

describe('Testing Gallery component', () => {
	it('on load, button is visible', () => {
		render(<Gallery />);
		const element = screen.getByRole('button');
		expect(element).toBeInTheDocument();
	})
})