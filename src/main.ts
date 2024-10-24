import './style.css';
import { allMexicoStates } from './data/dataFilters/mexicoStates';
import { partnersOrdered } from './components/displayer';
import { partnersImages } from './data/imagesPartners/partnersImages';
import { AllORImages } from './data/oficinasRegionales/ORImages';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class='font-sora'>
    <div class='grid grid-cols-1 gap-6 max-w-6xl mx-auto py-10 lg:grid-cols-3 px-4 xl:px-0'>
      <div class='px-0 lg:col-span-2 flex flex-col justify-center'>
        <h1 class='text-6xl font-bold mb-10 text-ms-text-black text-center lg:text-left'>Contacta a un Partner</h1>
      <div id="filtersContainer" class="grid grid-cols-1 gap-6 max-w-6xl mx-auto mt-1 px-4 
      md:px-0 lg:grid-cols-3">
        <div class="flex flex-col">
          <label for="selectState" class='text-sm text-gray-500'>Estado</label>
          <select id="selectState"
                class='bg-ms-dd-gray font-semibold  border-2 border-gray-200 rounded-md py-2 pl-2 pr-8 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ms-orange'
          >
            <option value="all">Estados (Todos)</option>
              ${allMexicoStates.map((state) => `<option value="${state}">${state}</option>`)}
          </select>
        </div>
      
      <div class="flex flex-col">
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
      
      <div class="flex flex-col">
        <label for="selectCertificationAS" class='text-sm text-gray-500'>Certificación</label>
        <select id="selectCertificationAS"
          class='bg-ms-dd-gray font-semibold border-2 border-gray-200 rounded-md py-2 pl-2 pr-8 h-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ms-orange'
          >
          <option value="all">Certificación (Todas)</option>
          <option value="as">Administrador de Sucursales</option>        
        </select>
      </div>
    </div>
      </div>
      <figure class='lg:col-span-1 flex justify-center items-center'>
        <img class='w-80 h-auto' src=https://cdn.prod.website-files.com/627983ccef617d453b9485ad/66dbb6ddb74ad2e23c4355aa_ContactaaunPartner.png alt="Distribuidores Microsip" />
      </figure>
    </div>

    <section class='bg-ms-section-gray pt-12 pb-24'>
      <div id="partnersContainer"class="grid grid-cols-1 gap-6 max-w-6xl mx-auto mt-12 px-4
      xl:px-0 md:grid-cols-2 lg:grid-cols-3"></div> 
    </section>  
  </div>
`;

// function to filter partners by state of select element
const filterPartners = () => {
  const selectState = document.getElementById('selectState') as HTMLSelectElement;
  const selectStateValue = selectState.value;
  const selectCertification = document.getElementById('selectCertification') as HTMLSelectElement;
  const selectCertificationValue = selectCertification.value;
  const selectCertificationAS = document.getElementById('selectCertificationAS') as HTMLSelectElement;
  const selectCertificationASValue = selectCertificationAS.value;
  const partnersContainer = document.getElementById('partnersContainer') as HTMLDivElement;
  const partners = partnersOrdered;

  const partnersFilteredByState = partners.filter((partner) => {
    if (selectStateValue === 'all') {
      return !partner.isOffice;
    } else {
      return partner.state === selectStateValue;
    }
  });

  const partnersFilteredByCertification = partnersFilteredByState.filter((partner) => {
    if (selectCertificationValue === 'all') {
      return partner;
    } else {
      return partner.certificationLevel === Number(selectCertificationValue) || partner.isOffice;
    }
  });

  const partnersFilteredByCertificationStateLevelAndAS = partnersFilteredByCertification.filter((partner) => {
    if (selectCertificationASValue === 'all') {
      return partner;
    } else {
      return partner.certificationAS === true;
    }
  });

  partnersContainer.innerHTML = '';

  if (partnersFilteredByCertificationStateLevelAndAS.length === 0) {
    partnersContainer.innerHTML = `
      <div class="no-results text-left text-ms-text-gray font-semibold text-xl mt-12 mb-12 w-full">
        <p>No se encontraron partners que coincidan con los criterios seleccionados.</p>
      </div>
    `;
  } else {
    partnersFilteredByCertificationStateLevelAndAS.forEach((partner, index) => {
      partnersContainer.innerHTML += `
        <div class="${partner.isOffice ? 'partner bg-white rounded-3xl  p-5' : 'partner bg-ms-card-gray rounded-3xl p-5'
        } h-64
        key-${index}
        ">
          <div class="partnerInfo flex flex-row justify-between gap-5">
            <div class="left-box flex flex-col">
              ${partner.isOffice
          ? `<div class='w-28'>
                    <img src="${AllORImages.logoMS}"/>
                    <p class="text-xs text-gray-500">${partner.office.toUpperCase()}</p>
                  </div>`
          : ''
        }
              <p class='font-bold text-md text-ms-text-black mb-2'>${partner.isOffice ? '' : partner.inPageName.toUpperCase()}</p>
              <div class='flex items-center mb-1 '>
                <div class='mr-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-6" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <p class='text-sm text-gray-500 flex items-center'>${partner.city}</p>
                </div>
              </div>

              <div class='flex items-center mb-6'>
                <div class='mr-1'>
                  <a href="tel:${partner.phone}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-6" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
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

              <div class='social-icons flex items-center'>
                ${partner.email
          ? `
                    <div class='mr-1 p-2 rounded-lg ${partner.isOffice ? 'bg-ms-text-black' : 'bg-white'}'>
                    <a href="mailto:${partner.email}" class="${partner.isOffice ? 'text-white' : 'text-ms-text-black'
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
            <div class="right-box grid grid-rows-[auto, auto] place-items-end h-full">
              <div class='w-24 m-2'>
                <img src="${partner.isOffice
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
                <img src="${partner.certificationAS ? partnersImages.AS : ''}"/>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }
};

// get select elements
const selectState = document.getElementById('selectState') as HTMLSelectElement;
const selectCertification = document.getElementById('selectCertification') as HTMLSelectElement;
const selectCertificationAS = document.getElementById('selectCertificationAS') as HTMLSelectElement;

// add event listener to the select elements for onchange
selectState.addEventListener('change', filterPartners);
selectCertification.addEventListener('change', filterPartners);
selectCertificationAS.addEventListener('change', filterPartners);

// onload change select element value of selectState to 'Ciudad de México'
window.onload = function () {
  selectState.value = 'Ciudad de México';
  filterPartners();
};
