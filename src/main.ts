import './style.css';
import { allMexicoStates } from './data/dataFilters/mexicoStates';
import { partnersOrdered } from './components/displayer';
import { partnersImages } from './data/imagesPartners/partnersImages';
// import { allOffices } from './data/oficinasRegionales/oficinasRegionales';
// import { Partners } from './typings/types';
import { AllORImages } from './data/oficinasRegionales/ORImages';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class='font-sora'>
    
		<div class='
		flex flex-col justify-between items-center max-w-6xl mx-auto px-4 py-10
		lg:flex-row
		'>
			<div>
				<h1 class='text-6xl font-bold mb-10 text-ms-text-black'>Contacta a un Partner</h1>
			<div id="filtersContainer" class="
			grid grid-cols-1 gap-6 max-w-6xl mx-auto mt-12 px-4
			lg:grid-cols-3
			">

			<div class="
				flex flex-col
			">
				<label for="selectState" class='text-sm text-gray-500'>Estado</label>
				<select id="selectState"
								class=' bg-ms-dd-gray font-semibold  border-2 border-gray-200 rounded-md py-2 pl-2 pr-8 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ms-orange'
				>
					<option value="all">Estados (Todos)</option>
					${allMexicoStates.map((state) => `<option value="${state}">${state}</option>`)}
			</select>
			</div>
      
			<div class="
			flex flex-col
		">
				<label for="selectCertification" class='text-sm text-gray-500'>Nivel</label>
				<select id="selectCertification"
					class='bg-ms-dd-gray font-semibold border-2 border-gray-200 rounded-md py-2 pl-2 pr-8 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ms-orange'
					>
					<option value="all">Nivel (Todos)</option>
					<option value="2">Bronce</option>
					<option value="3">Plata</option>
					<option value="4">Oro</option>
					<option value="5">Elite</option>
			</select>
			</div>
			
			<div class="
			flex flex-col
		">
				<label for="selectCertificationAS" class='text-sm text-gray-500'>Certificación</label>
				<select id="selectCertificationAS"
					class='bg-ms-dd-gray font-semibold border-2 border-gray-200 rounded-md py-2 pl-2 pr-8 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ms-orange'
					>
					<option value="all">Certificación (Todas)</option>
					<option value="as">Administrador de Sucursales</option>				
				</select>
			</div>		

				<!--
				<button id="filterButton"class='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Filter</button>
				-->
				
    	</div>
			</div>
			<figure>
				<img class='w-96 h-auto' src=https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/62c92e4f9749a0d0457f663d_Distribuidores-Microsip.webp alt="Distribuidores Microsip" />
			</figure>
		</div>

		<section class='bg-ms-section-gray py-12'>
			<div id="partnersContainer"class="
			grid grid-cols-1 gap-6 max-w-6xl mx-auto mt-12 px-4
			md:grid-cols-2
			lg:grid-cols-3
			"></div> 
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
	partnersFilteredByCertificationStateLevelAndAS.forEach((partner, index) => {
		partnersContainer.innerHTML += `
      <div class="${
				partner.isOffice ? 'partner bg-white rounded-3xl  p-5' : 'partner bg-ms-card-gray rounded-3xl p-5'
			} h-64 
			key-${index}
			">
        <div class="partnerInfo flex flex-row justify-between gap-5">
          <div class="left-box flex flex-col space-y-3">
					  ${
							partner.isOffice
								? `<div class='w-28'>
								<img src="${
									// import logoMS from AllORImages
									AllORImages.logoMS
								}"/>
								<p class="
								text-xs text-gray-500 
								">
									${
										partner.office === 'Corporativo'
											? 'Corporativo'.toUpperCase()
											: partner.office === 'Sureste'
											? 'Sureste'.toUpperCase()
											: partner.office === 'Noreste'
											? 'Noreste'.toUpperCase()
											: partner.office === 'Occidente'
											? 'Occidente'.toUpperCase()
											: partner.office === 'Golfo'
											? 'Golfo'.toUpperCase()
											: partner.office === 'Centro'
											? 'Centro'.toUpperCase()
											: partner.office === 'Bajío'
											? 'Bajío'.toUpperCase()
											: 'Oficina CDMX'.toUpperCase()
									}
								</p>
							</div>`
								: ''
						}
            <p class='font-bold text-md text-ms-text-black mb-1'>${
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
								<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
									<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
								</svg>
							</div>
							<div>
								<p class='text-sm text-gray-500 flex items-center'>${partner.city}</p>
							</div>
						</div>

						<div class='flex items-center'>
							<div class='mr-1'>
								<!--link to phone clickable on icon-->
								<a href="tel:${partner.phone}">
									<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-5" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
									</svg>
								</a>
							</div>
							<div>
								<a href="tel:${partner.phone}">
									<p class='text-sm text-gray-500 flex items-center'>${partner.phone}</p>
								</a>
							</div>
						</div>

						<div class='social-icons flex items-center pt-2'>
							${
								// if partner has email, display email icon
								partner.email
									? `
								<div class='mr-1 p-2 rounded-lg ${partner.isOffice ? 'bg-ms-text-black' : 'bg-white'}'>
								<!--link to email clickable on icon-->
								<a href="mailto:${partner.email}" class="${
											partner.isOffice ? 'text-white' : 'text-ms-text-black'
									  } hover:text-ms-orange transition duration-300 ease-in-out
										">
										<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
											<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/>
										</svg>
									
								</a>
								</div>
								`
									: ''
							}
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
