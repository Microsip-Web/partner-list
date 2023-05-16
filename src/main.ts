import './style.css';
import { allMexicoStates } from './data/dataFilters/mexicoStates';
import { partnersOrdered } from './components/displayer';
import { partnersImages } from './data/imagesPartners/partnersImages';
import { allOffices } from './data/oficinasRegionales/oficinasRegionales';
import { Partners } from './typings/types';
import { AllORImages } from './data/oficinasRegionales/ORImages';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class='font-sora'>
    
		<div class='flex justify-between items-center max-w-6xl mx-auto px-4 py-10'>
			<div>
				<h1 class='text-6xl font-bold mb-10 text-ms-text-black'>Contacta a un Partner</h1>
			<div id="filtersContainer">
				<select id="selectState"
					class='bg-ms-dd-gray font-semibold appearance-none border-2 border-gray-200 rounded-md py-2 px-4 mr-3 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ms-orange'
				>
					<option value="all">Estado (Todos)</option>
					${allMexicoStates.map((state) => `<option value="${state}">${state}</option>`)}

				</select>

				<select id="selectCertification"
					class='bg-ms-dd-gray font-semibold appearance-none border-2 border-gray-200 rounded-md py-2 px-4 mr-3 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ms-orange'
				>
					<option value="all">Nivel (Todos)</option>
					<option value="2">Bronce</option>
					<option value="3">Plata</option>
					<option value="4">Oro</option>
					<option value="5">Elite</option>
				</select>

				<select id="selectCertificationAS"
					class='bg-ms-dd-gray font-semibold appearance-none border-2 border-gray-200 rounded-md py-2 px-4 mr-3 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ms-orange'
				>
					<option value="all">Certificación (Todas)</option>
					<option value="as">Administrador de Sucursales</option>				
				</select>

				<!--
				<button id="filterButton"class='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Filter</button>
				-->
				
    	</div>
			</div>
			<figure>
				<img class='w-96 h-96' src=https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/62c92e4f9749a0d0457f663d_Distribuidores-Microsip.webp alt="Distribuidores Microsip" />
			</figure>
		</div>

		<section class='bg-ms-section-gray py-12'>
			<div id="partnersContainer"class="grid grid-cols-3 gap-6 max-w-6xl mx-auto mt-12"></div> 
		</section>
    
  </div>
`;

// function to filter partners by state of select element
const filterPartners = () => {
	// get select element
	const selectState = document.getElementById('selectState') as HTMLSelectElement;
	// get value of select element
	const selectStateValue = selectState.value;
	// get select element
	const selectCertification = document.getElementById('selectCertification') as HTMLSelectElement;
	// get value of select element
	const selectCertificationValue = selectCertification.value;
	// get select element
	const selectCertificationAS = document.getElementById('selectCertificationAS') as HTMLSelectElement;
	// get value of select element
	const selectCertificationASValue = selectCertificationAS.value;
	// get partners container
	const partnersContainer = document.getElementById('partnersContainer') as HTMLDivElement;
	// get partners
	const partners = partnersOrdered;
	// filter partners by state; also add the partners that are offices to its matching state,
	const partnersFilteredByState = partners.filter((partner) => {
		if (selectStateValue === 'all') {
			// return only partners that are not offices
			return !partner.isOffice;
		} else {
			return partner.state === selectStateValue;
		}
	});
	// filter partners by certification level
	const partnersFilteredByCertification = partnersFilteredByState.filter((partner) => {
		if (selectCertificationValue === 'all') {
			return partner;
		} else {
			// return the certification but still include the offices
			return partner.certificationLevel === Number(selectCertificationValue) || partner.isOffice;
		}
	});
	// filter partners by certification AS, check if the partner has certificationAS equal to true
	const partnersFilteredByCertificationStateLevelAndAS = partnersFilteredByCertification.filter((partner) => {
		if (selectCertificationASValue === 'all') {
			return partner;
		} else {
			return partner.certificationAS === true;
		}
	});

	// get partners container
	partnersContainer.innerHTML = '';
	// add partners to partners container
	partnersFilteredByCertificationStateLevelAndAS.forEach((partner) => {
		partnersContainer.innerHTML += `
      <div class="${
				partner.isOffice
					? 'partner bg-white rounded-3xl h-60 p-5'
					: 'partner bg-ms-card-gray rounded-3xl h-60 p-5'
			}
			">
        <div class="partnerInfo flex flex-row justify-between gap-5">
          <div class="left-box flex flex-col space-y-3">
					  ${
							partner.isOffice
								? `<div class='w-36'>
								<img src="${
									partner.office === 'Corporativo'
										? AllORImages.corporativo
										: partner.office === 'Sureste'
										? AllORImages.sureste
										: partner.office === 'Noreste'
										? AllORImages.noreste
										: partner.office === 'Occidente'
										? AllORImages.occidente
										: partner.office === 'Golfo'
										? AllORImages.golfo
										: partner.office === 'Centro'
										? AllORImages.centro
										: partner.office === 'Bajío'
										? AllORImages.bajio
										: AllORImages.cdmx
								}"/>
							</div>`
								: ''
						}
            <p class='font-bold text-md text-ms-text-black mb-2'>${
							// if isOffice is true and equal to Torreón display Torreón
							// partner.isOffice  ? 'Oficina Regional' : partner.inPageName
							partner.isOffice ? '' : partner.inPageName.toUpperCase()
						}
						
						</p>
						<!--
            <p class='text-sm text-gray-500'>${partner.certificationName}</p>
						-->
						<div class='flex items-center'>
							<div class='mr-1'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
								</svg>
							</div>
							<div>
								<p class='text-sm text-gray-500 flex items-center'>${partner.city}</p>
							</div>
						</div>

						<div class='flex items-center'>
							<div class='mr-1'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
								</svg>
							</div>
							<div>
								<p class='text-sm text-gray-500 flex items-center'>${partner.phone}</p>
							</div>
						</div>
                    
          </div>
          <div class="right-box flex flex-col">
            <div class='w-20 m-2'>
              <img src="${
								partner.isOffice
									? ''
									: partner.certificationName === 'Bronce'
									? partnersImages.Bronce
									: partner.certificationName === 'Plata'
									? partnersImages.Plata
									: partner.certificationName === 'Oro'
									? partnersImages.Oro
									: partnersImages.Elite
							}"/>
            </div>
            <div class='w-20 m-1'>
              <img src="${partner.isOffice ? '' : partner.certificationAS ? partnersImages.AS : ''}"/>
            </div>
          </div>
        </div>
      </div>
    `;
	});
};

// add event listener to the button
// const filterButton = document.getElementById('filterButton') as HTMLButtonElement;
// filterButton.addEventListener('click', filterPartners);

// get select element
const selectState = document.getElementById('selectState') as HTMLSelectElement;
// get select element
const selectCertification = document.getElementById('selectCertification') as HTMLSelectElement;
// get select element
const selectCertificationAS = document.getElementById('selectCertificationAS') as HTMLSelectElement;

// add event listener to the select element for onchange
selectState.addEventListener('change', filterPartners);
selectCertification.addEventListener('change', filterPartners);
selectCertificationAS.addEventListener('change', filterPartners);

// onload change select element value of selectState to 'Ciudad de México'
window.onload = function () {
	selectState.value = 'Ciudad de México';
	filterPartners();
};
