// get partners container
partnersContainer.innerHTML = '';
// add partners to partners container
partnersFilteredByCertificationStateLevelAndAS.forEach((partner) => {
partnersContainer.innerHTML += `
<div class="partner bg-slate-300 p-4 rounded-md">
<div class="partnerInfo grid grid-cols-2">
<div class="left-box">
<h3>${partner.isOffice ? 'Oficina' : partner.inPageName}</h3>
            <p>${partner.certificationName}</p>
<p>Estado: ${partner.state}</p>
            <p>Ciudad: ${partner.city}</p>
            <p>${partner.email}</p>
</div>
<div class="right-box grid grid-cols-1">
<div class='w-20 place-self-end'>
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
<div class='w-20 place-self-end'>
<img src="${partner.isOffice ? '' : partner.certificationAS ? partnersImages.AS : ''}"/>
</div>
</div>

        </div>
      </div>
    `;
    });
