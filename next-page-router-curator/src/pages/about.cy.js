import About from './about.js';
 
describe('<About />', () => {
  it('should render and display expected content', () => {
    cy.mount(<About />);
 
    cy.get('h1').contains('About');

    cy.get('p').contains('Alvarez');
  });
});