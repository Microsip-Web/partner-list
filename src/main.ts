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
	partnersFilteredByCertificationStateLevelAndAS.forEach((partner) => {
		partnersContainer.innerHTML += `
      <div class="${
				partner.isOffice ? 'partner bg-white rounded-3xl  p-5' : 'partner bg-ms-card-gray rounded-3xl p-5'
			} h-60 
			">
        <div class="partnerInfo flex flex-row justify-between gap-5">
          <div class="left-box flex flex-col space-y-3">
					  ${
							partner.isOffice
								? `<div class='w-28'>
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
									<svg xmlns="http://www.w3.org/2000/svg" class="w-6" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
										<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
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
