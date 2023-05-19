import { partners } from '../data/partners';

// filter parters by isInPage property
const partnersFilteredByIsInPage = partners.filter((partner) => partner.isInPage === true);

export const partnersOrdered = partnersFilteredByIsInPage.sort((a, b) => {
	/* This code block is sorting an array of partners based on certain criteria. */
	// Check if either a or b has isOffice property set to true
	const isAOffice = a.isOffice === true;
	const isBOffice = b.isOffice === true;

	// If only a has isOffice set to true, place it at index 0
	if (isAOffice && !isBOffice) return -1;
	// If only b has isOffice set to true, place it at index 0
	if (!isAOffice && isBOffice) return 1;

	// Sort by certification level in descending order
	if (a.certificationLevel > b.certificationLevel) return -1;
	if (a.certificationLevel < b.certificationLevel) return 1;

	// If certification levels are the same, sort by name in ascending order
	if (a.inPageName > b.inPageName) return 1;
	if (a.inPageName < b.inPageName) return -1;

	return 0;
});

// console log parters
// console.log(partners);
