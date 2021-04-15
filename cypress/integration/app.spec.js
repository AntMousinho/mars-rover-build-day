describe('Mars rover app tests', () => {
	beforeEach(() => {
		cy.visit('/');
	})

	context('On page load', () => {
		it('Displays Header', () => {
			cy.contains('Mars Rover Photo Finder');
		})

		it('Displays Subheader', () => {
			cy.contains('Images from 54 million kilometres away!');
		})

		it('Displays find photo button', () => {
			cy.get('#mars-find-photo').should('be.visible');
		})

		it('Displays clear button', () => {
			cy.get('#mars-clear').should('be.visible');
		})

		it('Displays drop down box, perseverance initially selected', () => {
			cy.get('#rover-select').should('be.visible');
			cy.get('#rover-select').should('have.value', 'Perseverance')
		})
	})

	context('Gallery component functionality', () => {
		it('first time clicking findPhoto button', () => {
			const urlToIntercept = 'https://api.nasa.gov/mars-photos/api/v1/rovers*';

			cy.intercept('GET', urlToIntercept, { 'fixture': 'perseverance-13042021.json'})
			cy.spy(global.Math, 'floor', () => 2);
			
			cy.get('#mars-find-photo').click();
			
			const expectedSrcFile = 'https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00053/ids/edr/browse/ncam/NRE_0053_0671642384_862ECM_N0032046NCAM00408_00_0LLJ01_1200.jpg'
	
			cy.get('#mars-image-0').should('have.attr', 'src', expectedSrcFile);
		})

		it('switch rover search selection', () => {
			cy.get('#rover-select').select('Curiosity');
			cy.get('#rover-select').should('have.value', 'Curiosity');
		})

		it('searching curiocity images returns curiocity images', () => {
			
		})
	})
})