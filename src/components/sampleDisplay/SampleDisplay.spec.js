import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SampleDisplay from './SampleDisplay.js';

const mockImage = {
	"id": 824485,
	"sol": 53,
	"camera": {
		"id": 38,
		"name": "NAVCAM_LEFT",
		"rover_id": 8,
		"full_name": "Navigation Camera - Left"
	},
	"img_src": "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00053/ids/edr/browse/ncam/NLF_0053_0671642384_862EBY_N0032046NCAM00408_00_0LLJ01_1200.jpg",
	"earth_date": "2021-04-13",
	"rover": {
		"id": 8,
		"name": "Perseverance",
		"landing_date": "2021-02-18",
		"launch_date": "2020-07-30",
		"status": "active"
	}
}

describe('Testing SampleDisplay component', () => {
	beforeEach(() => {
		render(
			<SampleDisplay 
				index={0} 
				url={mockImage.img_src} 
				inputAlt={`${mockImage.rover.name}-0}`} 
				date={mockImage.earth_date} 
				sol={mockImage.sol} 
				camera={mockImage.camera.full_name} 
				imgId={mockImage.id}
			/>
		);
	})

	it('displays correct image', () => {
		const element = screen.getByRole('img')
		expect(element.src).toBe('https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00053/ids/edr/browse/ncam/NLF_0053_0671642384_862EBY_N0032046NCAM00408_00_0LLJ01_1200.jpg')
	})

	it('displays correct date information', () => {
		const element = document.getElementById('sample-date-0')
		expect(element.innerHTML).toBe('Earth Date: 2021-04-13');
	})

	it('displays correct sol information', () => {
		const element = document.getElementById('sample-sol-0')
		expect(element.innerHTML).toBe('Sol: 53');
	})

	it('displays correct camera information', () => {
		const element = document.getElementById('sample-camera-0')
		expect(element.innerHTML).toBe('Camera: Navigation Camera - Left');
	})

	it('displays correct id information', () => {
		const element = document.getElementById('sample-id-0')
		expect(element.innerHTML).toBe('Id: 824485');
	})
})