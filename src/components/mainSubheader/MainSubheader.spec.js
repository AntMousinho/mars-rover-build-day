import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import MainSubheader from './MainSubheader.js';

describe('Testing MainSubheader component: ', () => {
	it('On app load, displays subheader', () => {
		render(<MainSubheader />)
		const element = screen.getByText('Images from 225 million kilometres away!');
		expect(element).toBeInTheDocument();
	})
})