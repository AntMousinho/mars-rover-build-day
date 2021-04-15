import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header.js';

describe('Testing Header component: ', () => {
	it('On load, header is displayed', () => {
		render(<Header />);
		const element = screen.getByText('Mars Rover Photo Finder');
		expect(element).toBeInTheDocument();
	})
})