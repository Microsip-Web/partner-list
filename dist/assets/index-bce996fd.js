(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const S=["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];let r=[{isOffice:!0,id:1,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Microsip Corporativo",phone:"(871) 720-0302",certificationName:"NA",certificationLevel:0,certificationAS:!1,email:"contacto@microsip.com"}],f={isOffice:!0,id:4,isInPage:!0,office:"Bajío",state:"Guanajuato",city:"León",inPageName:"Oficina Regional del Bajío",phone:"(477) 699-5568",certificationName:"NA",certificationLevel:0,certificationAS:!1,email:"mariajose.villarreal@microsip.com"},C={isOffice:!0,id:2,isInPage:!0,office:"Ciudad de México",state:"Ciudad de México",city:"México",inPageName:"Oficina Regional Ciudad de México",phone:"(55) 8852-2756",certificationName:"NA",certificationLevel:0,certificationAS:!1,email:"roberto.cazares@microsip.com"},d={isOffice:!0,id:1,isInPage:!0,office:"Centro",state:"Estado de México",city:"Benito Juárez",inPageName:"Oficina Regional del Centro",phone:"(55) 5530-0042",certificationName:"NA",certificationLevel:0,certificationAS:!1,email:"eduardo@microsipmx.mx"},g={isOffice:!0,id:1,isInPage:!0,office:"Golfo",state:"Puebla",city:"Puebla",inPageName:"Oficina Regional del Golfo",phone:"(222) 134-5729",certificationName:"NA",certificationLevel:0,certificationAS:!0,email:"or_golfo@microsipgolfo.com"},h={isOffice:!0,id:1,isInPage:!0,office:"Noreste",state:"Nuevo León",city:"Apodaca",inPageName:"Oficina Noreste",phone:"(81) 8286-3500",certificationName:"NA",certificationLevel:0,certificationAS:!0,email:"info@microsipmty.com"},m={isOffice:!0,id:1,isInPage:!0,office:"Occidente",state:"Jalisco",city:"Zapopan",inPageName:"Oficina Regional de Occidente",phone:"(333) 647-4305",certificationName:"NA",certificationLevel:0,certificationAS:!1,email:"jorge@microsipoccidente.com.mx"},u={isOffice:!0,id:1,isInPage:!0,office:"Sureste",state:"Yucatán",city:"Mérida",inPageName:"Oficina Sureste",phone:"(999) 926-3228",certificationName:"NA",certificationLevel:0,certificationAS:!0,email:"carlos@microsipste.com"};const x={...f,state:"Aguascalientes"};let y=[{...x},{id:1,isInPage:!0,office:"Bajio",state:"Aguascalientes",city:"Aguascalientes",inPageName:"Casa de Software de Aguascalientes",phone:"(449) 978-3038",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"jj.rodriguez@csags.com.mx"},{id:2,isInPage:!0,office:"Bajio",state:"Aguascalientes",city:"Aguascalientes",inPageName:"Renovatio Pyme Aguascalientes",phone:"(449) 916-8852",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:""}];const A={...r[0],state:"Baja California"};let L=[{...A},{id:1,isInPage:!0,office:"Corporativo",state:"Baja California",city:"Tijuana",inPageName:"Ing. Jesús Felizardo Inzunza Medina",phone:"(664) 368-7592",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:""}];const I={...r[0],state:"Baja California Sur"};let b=[{...I},{id:1,isInPage:!0,office:"Corporativo",state:"Baja California Sur",city:"La Paz",inPageName:"Protek Mexico",phone:"(612) 102-8921",certificationName:"Oro",certificationLevel:4,certificationAS:null,email:"soporte@protekmexico.com.mx"}];const O={...u,state:"Campeche"};let M=[{...O},{id:1,isInPage:!0,office:"Sureste",state:"Campeche",city:"Ciudad del Carmen",inPageName:"Expertos ERP",phone:"(938) 136-8000",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:""}];const B={...u,state:"Chiapas"};let T=[{...B},{id:1,isInPage:!0,office:"Sureste",state:"Chiapas",city:"Tuxtla Gutiérrez",inPageName:"Casa de Software Tuxtla",phone:"(961) 612-0589",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"javier.baqueiro@cstuxtla.com"},{id:2,isInPage:!0,office:"Sureste",state:"Chiapas",city:"San Cristobal de las Casas",inPageName:"Teknologix",phone:"(967) 131-5051",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"info@cssancristobal.com"},{id:3,isInPage:!0,office:"Sureste",state:"Chiapas",city:"Tuxtla Gutiérrez",inPageName:"Doctor PYME",phone:"(961) 146-4443",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"jjmacias@integraconsorcio.com.mx"}];const w={...r[0],state:"Chihuahua"};let E=[{...w},{id:1,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Cd. Cuauhtemoc",inPageName:"Asesorías de Cuauhtémoc",phone:"(625) 581-2014",certificationName:"Elite",certificationLevel:5,certificationAS:!0,email:"admon@asesoriasdecuauhtemoc.com"},{id:2,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Chihuahua",inPageName:"SOLUTEC",phone:"(614) 354-9134",certificationName:"Elite",certificationLevel:5,certificationAS:!0,email:"ventas@solu-tec.com.mx"},{id:3,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Chihuahua",inPageName:"Tecnología DSA",phone:"(614) 413-0416",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:"ventas@tecnologiadsa.com"},{id:4,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Delicias/Camargo",inPageName:"Ingenio Computacional de Delicias S.A. de C.V.",phone:"(639) 139-0062",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"solucionesmicro@ingenio.com.mx"},{id:5,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Cd. Juárez",inPageName:"Ferreiro Terrazas y Asociados",phone:"(656) 617-2076",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"fferreiro@fta.com.mx"},{id:6,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Parral",inPageName:"DANTO SYSTEMS",phone:"(627) 522-0140",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:"alberto@danto.mx"},{id:7,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Hgo. del Parral",inPageName:"SICWS INFORMATICA PARA TU NEGOCIO",phone:"(627) 522-7017",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"contacto@sicws.com"},{id:8,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Cd. Cuauhtémoc",inPageName:"ACR Computación",phone:"(625) 581-6547",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"alejandro@acrcomputacion.com.mx"},{id:9,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Cd. Cuauhtémoc",inPageName:"SERVICIOS COMPUTACIONALES DEL CORREDOR SA DE CV",phone:"(625) 589-1083",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"alertareg@gmail.com"},{id:10,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Cd. Cuauhtémoc",inPageName:"Mundo Computacional",phone:"(625) 582-8555",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"mundocomputacional@hotmail.com"},{id:11,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Cd. Cuauhtémoc",inPageName:"Jesús Elías Baray Legarda",phone:"(625) 115-2307",certificationName:"Plata",certificationLevel:3,certificationAS:!1,email:"jbarayl@hotmail.com"},{id:12,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Cd. Cuauhtémoc",inPageName:"Compu Service",phone:"(625) 587-7310",certificationName:"Plata",certificationLevel:3,certificationAS:!1,email:"ventas@compuservice.mx"},{id:13,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Cd. Cuauhtémoc",inPageName:"Computación y Consultoría Integral",phone:"(625) 589-1083",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"codinam@gmail.com"},{id:14,isInPage:!0,office:"Corporativo",state:"Chihuahua",city:"Cd. Cuauhtémoc",inPageName:"SISCOM",phone:"(625) 581-2024",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"siscom2000@prodigy.net.mx"}];const j={...C,state:"Ciudad de México"};let z=[{...j},{id:3,isInPage:!0,office:"Ciudad de México",state:"Ciudad de México",city:"México",inPageName:"Simplifica",phone:"(55) 5105-6844",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"marco.herrera.oli@simplifica.mx"},{id:4,isInPage:!0,office:"Ciudad de México",state:"Ciudad de México",city:"México",inPageName:"ITBCMOOD",phone:"(55) 1209-1376",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"contacto@itbc.mx"},{id:5,isInPage:!0,office:"Ciudad de México",state:"Ciudad de México",city:"México",inPageName:"Soleti",phone:"(55) 1953-9350",certificationName:"Plata",certificationLevel:3,certificationAS:!1,email:"dorianmr@soleti.mx"},{id:6,isInPage:!0,office:"Ciudad de México",state:"Ciudad de México",city:"México",inPageName:"Omey Consulting",phone:"(55) 1684-4390",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"gerardo.rivas@omey.com.mx"},{id:7,isInPage:!0,office:"Ciudad de México",state:"Ciudad de México",city:"México",inPageName:"Sakbe Networks",phone:"(55) 7588-0242",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"contacto@sakbenetworks.com"},{id:8,isInPage:!0,office:"Ciudad de México",state:"Ciudad de México",city:"México",inPageName:"Asesorame",phone:"(55) 2072-0356",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"marco@asesorame.com.mx"},{id:9,isInPage:!0,office:"Ciudad de México",state:"Ciudad de México",city:"México",inPageName:"MicMex",phone:"(55) 5353-2222",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"ventas@micmex.com.mx"}],G=[...r,{id:2,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"AzulBlue",phone:"(871) 149-8486",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:"azulblue@azulblue.mx"},{id:3,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Lorena María Triana Pánuco",phone:"(871) 233-8589",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"trianapanuco@hotmail.com"},{id:4,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Expertos en Punto de Venta",phone:"(871) 716-5854",certificationName:"Elite",certificationLevel:5,certificationAS:!0,email:"jorge@expertospv.com"},{id:5,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"IR Soluciones",phone:"(871) 149-9596",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:"romulo@irsoluciones.com.mx"},{id:6,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"SOTI",phone:"(871) 722-3952",certificationName:"Plata",certificationLevel:3,certificationAS:!1,email:"acastro@soti.com.mx"},{id:7,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Clic Laguna",phone:"(871) 192-0734",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:"ventas@cliclaguna.com"},{id:8,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Javier Luna Pereda",phone:"(871) 720-5666",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"Info@webpublicity.com.mx"},{id:9,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Global Tech",phone:"(871) 720-8100",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"mgarcia@globaltech.mx"},{id:10,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Protek Mexico",phone:"(871) 714-2410",certificationName:"Oro",certificationLevel:4,certificationAS:!1,email:"roman.corrales@protekmexico.com.mx"},{id:11,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Maldonado Sistemas, SA de CV",phone:"(871) 712-9960",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"alfredo@maldonado.com.mx"},{id:12,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Effiziente",phone:"(871) 260-2047",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"contacto@effiziente.com.mx"},{id:13,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"MAOZ Computación",phone:"(871) 189-0311",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"manrique.flores@gmail.com"},{id:14,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"MEGA Servicios Tecnológicos",phone:"(871) 267-9261",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"ventas@megast.com.mx"},{id:15,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Asesoria Computacional Integrada",phone:"(871) 226-2997",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"soporte.carlosn@gmail.com"},{id:16,isInPage:!0,office:"Corporativo",state:"Coahuila",city:"Torreón",inPageName:"Avantti Soluciones Computacionales",phone:"(871) 113-6713",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"contacto@avanttisoluciones.com"},{id:17,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Saltillo",inPageName:"Code Quality",phone:"(844) 180-0470",certificationName:"Elite",certificationLevel:5,certificationAS:!1,email:"ventas@norflo.com.mx"},{id:18,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Monclova",inPageName:"Perform Sistemas",phone:"(866) 633-9858",certificationName:"Elite",certificationLevel:5,certificationAS:!0,email:""},{id:19,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Torreón",inPageName:"Centex Centro de Negocios",phone:"(844) 169-3260",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"jorgeeng@centex.com.mx"},{id:20,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Saltillo",inPageName:"Compu Soporte",phone:"(844) 427-6480",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"aldosah@hotmail.com"},{id:21,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Saltillo",inPageName:"MAVA Sistemas y Consultoría",phone:"(844) 138-2810",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"ventas@consultoresmava.com"},{id:22,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Monclova",inPageName:"Tecnología en Sistemas",phone:"(866) 635-7646",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"azapata@tsistemas.com"},{id:23,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Monclova",inPageName:"JL Sistemas",phone:"(866) 648-3030",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"jluish@hotmail.com"},{id:24,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Frontera",inPageName:"Espiral Sistemas",phone:"(866) 635-2815",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"soporte@espiralsistemas.com"},{id:25,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Sabinas",inPageName:"ServiSoft",phone:"(861) 105-0480",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"sergio.morales@hotmail.com"},{id:26,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Saltillo",inPageName:"Quattro Azul",phone:"(844) 159-0481",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:""},{id:27,isInPage:!0,office:"Noreste",state:"Coahuila",city:"Torreón",inPageName:"MANYPCS",phone:"(871) 225-0769",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"manuelpedroza_aconsa@hotmail.com"}];const D={...m,state:"Colima"};let V=[{...D},{id:1,isInPage:!0,office:"Occidente",state:"Colima",city:"Colima",inPageName:"CTI Tecnologías de Información",phone:"(312) 165-1229",certificationName:"Oro",certificationLevel:4,certificationAS:!1,email:"carmen.lorenzo@grupoxs.com"}];const R={...r[0],state:"Durango"};let $=[{...R},{id:1,isInPage:!0,office:"Corporativo",state:"Durango",city:"Durango",inPageName:"SISAP",phone:"(618) 811-4002",certificationName:"Plata",certificationLevel:3,certificationAS:!1,email:"direccion@sisap.com.mx"},{id:2,isInPage:!0,office:"Corporativo",state:"Durango",city:"Lerdo",inPageName:"Compugenius SA de CV",phone:"(871) 723-2763",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"fmontiel@compugenius.com.mx"},{id:3,isInPage:!0,office:"Corporativo",state:"Durango",city:"Lerdo",inPageName:"ASEINFORMATICA / L.I. DAVID RODRIGUEZ AYALA",phone:"(871) 149-2329",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"david.rodriguez@aseinformatica.com.mx"},{id:4,isInPage:!0,office:"Corporativo",state:"Durango",city:"Gómez Palacio",inPageName:"Soporte Leo",phone:"(871) 485-1303",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"soporte.leo@outlook.com"},{id:5,isInPage:!0,office:"Corporativo",state:"Durango",city:"Durango",inPageName:"SEYOSISTEMAS",phone:"(618) 833-9431",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"sergio_gtz@seyosistemas.com.mx"}];const k={...d,state:"Estado de México"};let _=[{...k},{id:1,isInPage:!0,office:"Centro",state:"Estado de México",city:"Texcoco",inPageName:"Programas IT",phone:"(55) 5639-1144",certificationName:"Plata",certificationLevel:3,certificationAS:!1,email:"pedro@programasit.mx"},{id:3,isInPage:!0,office:"Centro",state:"Estado de México",city:"Toluca",inPageName:"Proiectus",phone:"(722) 180-1844",certificationName:"Oro",certificationLevel:4,certificationAS:!1,email:"isaias@proiectus.mx"},{id:4,isInPage:!0,office:"Centro",state:"Estado de México",city:"Chimalhuacán",inPageName:"Consultoría Integral Betanzos S de RL de CV",phone:"(55) 1551-8305",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"ventas@consultoriaintegral.com.mx"}];const J={...f,state:"Guanajuato"};let F=[{...J},{id:1,isInPage:!0,office:"Bajío",state:"Guanajuato",city:"León",inPageName:"Soe Soluciones",phone:"(477) 215-0843",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:"ventas@soesoluciones.com"},{id:2,isInPage:!0,office:"Bajío",state:"Guanajuato",city:"Celaya",inPageName:"Chimés Stock",phone:"(461) 616-0929",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:""},{id:3,isInPage:!0,office:"Bajío",state:"Guanajuato",city:"Irapuato",inPageName:"Arquitectos en Sistemas de Información (ASI)",phone:"(462) 114-0136",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:""}];const Y={...d,state:"Guerrero"};let Q=[{...Y}];const Z={...d,state:"Hidalgo"};let H=[{...Z},{id:1,isInPage:!0,office:"Centro",state:"Hidalgo",city:"Pachuca de Soto",inPageName:"Mangotec",phone:"(771) 713-3336",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"gerardo@aggtecnologia.com"}];const q={...m,state:"Jalisco"};let U=[{...q},{id:2,isInPage:!0,office:"Occidente",state:"Jalisco",city:"Zapopan",inPageName:"Valencia Loera SA de CV",phone:"(333) 816-1855",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"valencia.daniel@icloud.com"},{id:3,isInPage:!0,office:"Occidente",state:"Jalisco",city:"Zapopan",inPageName:"Soluciones de Pesaje Occidente SA de CV",phone:"(332) 262-3612",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"acaceres@solucionescopesa.com"},{id:4,isInPage:!0,office:"Occidente",state:"Jalisco",city:"Zapopan",inPageName:"Tecnologías IOT de Occidente SA de CV",phone:"(331) 723-9294",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"esther.flores@teciot.mx"},{id:5,isInPage:!0,office:"Occidente",state:"Jalisco",city:"Guadalajara",inPageName:"Tecnoesfera Desarrollos y Soluciones",phone:"(33) 3189-7286",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"laldazz@hotmail.com"}];const K={...m,state:"Michoacán"};let X=[{...K},{id:1,isInPage:!0,office:"Occidente",state:"Michoacán",city:"Zamora",inPageName:"Carlos Mario Suárez Carriedo",phone:"(351) 119-4700",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:""},{id:2,isInPage:!0,office:"Occidente",state:"Michoacán",city:"Morelia",inPageName:"ERP Morelia",phone:"(443) 449-8651",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"jorge@erpmorelia.com"}];const W={...d,state:"Morelos"};let ee=[{...W},{id:1,isInPage:!0,office:"Centro",state:"Morelos",city:"Cuernavaca",inPageName:"Delra Consulting",phone:"(777) 244-3157",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"Delrazo@delraconsulting.com"}];const ie={...h,state:"Nuevo León"};let ae=[{...ie},{id:2,isInPage:!0,office:"Noreste",state:"Nuevo León",city:"Guadalupe",inPageName:"SAYCOM",phone:"(81) 1766-7949",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:"contacto@saycom.mx"},{id:3,isInPage:!0,office:"Noreste",state:"Nuevo León",city:"Monterrey",inPageName:"CABVAL Consultores",phone:"(81) 1496-5480",certificationName:"Plata",certificationLevel:3,certificationAS:!1,email:"acabello@cabval.com.mx"},{id:4,isInPage:!0,office:"Noreste",state:"Nuevo León",city:"Monterrey",inPageName:"Sierra Micro Tecnologia",phone:"(81) 1769-0389",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"contacto@sierramicro.com.mx"},{id:5,isInPage:!0,office:"Noreste",state:"Nuevo León",city:"Monterrey",inPageName:"Core Consultores",phone:"(81) 8881-8793",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:""},{id:6,isInPage:!0,office:"Noreste",state:"Nuevo León",city:"Monterrey",inPageName:"Sistem",phone:"(81) 8311-1363",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"julio.tobias@prodigy.net.mx"},{id:7,isInPage:!0,office:"Noreste",state:"Nuevo León",city:"Montemorelos",inPageName:"Kitov",phone:"(82) 6688-1834",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"alexmonte30@hotmail.com"},{id:8,isInPage:!0,office:"Noreste",state:"Nuevo León",city:"Monterrey",inPageName:"Informática Empresarial Integrada",phone:"(81) 8333-0456",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"jsaucedo@informaticaempresarial.mx"},{id:9,isInPage:!0,office:"Noreste",state:"Nuevo León",city:"Monterrey",inPageName:"Ventajas Operativas",phone:"(81) 1880-5743",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"adrian@ventajasoperativas.com"}];const te={...m,state:"Nayarit"};let oe=[{...te},{id:1,isInPage:!0,office:"Occidente",state:"Nayarit",city:"Tepic",inPageName:"Sistemas e Implementaciones SOE, S.A. de C.V.",phone:"(951) 197-9472",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:"jpaez@soesoluciones.com"}];const ce={...g,state:"Oaxaca"};let ne=[{...ce},{id:1,isInPage:!0,office:"Golfo",state:"Oaxaca",city:"Oaxaca",inPageName:"Tecneg Oaxaca SA de CV",phone:"(951) 132-4328",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"soporte@tec-neg.com"},{id:2,isInPage:!0,office:"Golfo",state:"Oaxaca",city:"Oaxaca",inPageName:"Sistemas e Implementaciones SOE SAS",phone:"(951) 327-0767",certificationName:"Oro",certificationLevel:4,certificationAS:!1,email:"Contacto@soesoluciones.com"}];const re={...g,state:"Puebla"};let se=[{...re},{id:2,isInPage:!0,office:"Golfo",state:"Puebla",city:"Puebla",inPageName:"Casa de Software y Soluciones Confiables SA de CV",phone:"(222) 229-0970",certificationName:"Elite",certificationLevel:5,certificationAS:!0,email:"contac_cs_puebla@hotmail.com"},{id:3,isInPage:!0,office:"Golfo",state:"Puebla",city:"Tecamachalco-Tehuacán",inPageName:"Sicaf-Soluciones",phone:"(249) 116-8323",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"ivonneiam@hotmail.com"},{id:4,isInPage:!0,office:"Golfo",state:"Puebla",city:"San Martín Texmelucan",inPageName:"INTEC TI SOLUTIONS",phone:"(248) 112-2996",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"contactointecti@gmail.com"},{id:5,isInPage:!0,office:"Golfo",state:"Puebla",city:"Puebla",inPageName:"Raymundo Espinosa García",phone:"(222) 199-1356",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"ventas@solucioneshs.com.mx"},{id:6,isInPage:!0,office:"Golfo",state:"Puebla",city:"Puebla",inPageName:"Soluciones Administrativas Ef, S.A.S. de C.V.",phone:"(222) 388-7665",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"atellez@saef.com.mx"},{id:7,isInPage:!0,office:"Golfo",state:"Puebla",city:"Puebla",inPageName:"Decapsi",phone:"(222) 164-4010",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"contacto@decapsi.mx"}];const le={...f,state:"Querétaro"};let fe=[{...le},{id:1,isInPage:!0,office:"Bajío",state:"Querétaro",city:"Querétaro",inPageName:"Chimés Stock",phone:"(442) 413-7311",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:""},{id:2,isInPage:!0,office:"Bajío",state:"Querétaro",city:"Querétaro",inPageName:"Soluciones de Pesaje de Occidente",phone:"(442) 223-3828",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"alejandra.rosales@solucionescopesa.com"}];const me={...u,state:"Quintana Roo"};let ue=[{...me},{id:1,isInPage:!0,office:"Sureste",state:"Quintana Roo",city:"Cancún",inPageName:"Mayaccess",phone:"(998) 884-3130",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"ivanl@mayaccess.com.mx"}];const de={...f,state:"San Luis Potosí"};let ge=[{...de},{id:1,isInPage:!0,office:"Bajío",state:"San Luis Potosí",city:"San Luis Potosí",inPageName:"Brenda Karina Mercado Briones",phone:"(444) 142-4491",certificationName:"Plata",certificationLevel:3,certificationAS:!1,email:"karyybren@hotmail.com"}];const pe={...m,state:"Sinaloa"};let Pe=[{...pe},{id:1,isInPage:!0,office:"Occidente",state:"Sinaloa",city:"Culiacán",inPageName:"Jesús Gerardo Ochoa Cárdenas",phone:"(667) 187-0513",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"Gerardo.ochoa@goit.cc"},{id:2,isInPage:!0,office:"Occidente",state:"Sinaloa",city:"Mazatlán",inPageName:"Protek Mexico",phone:"(669) 129-5359",certificationName:"Oro",certificationLevel:4,certificationAS:!1,email:"soporte@protekmexico.com.mx"},{id:4,isInPage:!0,office:"Corporativo",state:"Sinaloa",city:"Mazatlán",inPageName:"DANTO SYSTEMS",phone:"(627) 522-0140",certificationName:"Oro",certificationLevel:4,certificationAS:!0,email:"alberto@danto.mx"}];const he={...r[0],state:"Sonora"};let Ne=[{...he}];const ve={...h,state:"Tamaulipas"};let Se=[{...ve},{id:1,isInPage:!0,office:"Noreste",state:"Tamaulipas",city:"Reynosa",inPageName:"Erps Reynosa",phone:"(899) 204-4137",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:""},{id:2,isInPage:!0,office:"Noreste",state:"Tamaulipas",city:"Nuevo Laredo",inPageName:"ECLICK Soluciones",phone:"(867) 715-1766",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"rvillatoro@eclick.com.mx"},{id:3,isInPage:!0,office:"Noreste",state:"Tamaulipas",city:"Matamoros",inPageName:"Digitec",phone:"(868) 812-1618",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:""},{id:4,isInPage:!0,office:"Noreste",state:"Tamaulipas",city:"Tampico",inPageName:"SERVINTEC",phone:"(833) 216-8578",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"ventas@servintec.com.mx"}];const Ce={...g,state:"Tlaxcala"};let xe=[{...Ce},{id:1,isInPage:!0,office:"Golfo",state:"Tlaxcala",city:"Tlaxcala",inPageName:"INTEC TI SOLUTIONS",phone:"(248) 112-2996",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"contactointecti@gmail.com"}];const ye={...u,state:"Tabasco"};let Ae=[{...ye}];const Le={...g,state:"Veracruz"};let Ie=[{...Le},{id:1,isInPage:!0,office:"Golfo",state:"Veracruz",city:"Xalapa",inPageName:"Luis Alejandro Soto Diez",phone:"(228) 186-3320",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"alex.stdz@si-code.com.mx"},{id:2,isInPage:!0,office:"Golfo",state:"Veracruz",city:"Coatzacoalcos",inPageName:"SISTEC",phone:"(921) 212-2129",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"ventas.erpcoatza@gmail.com"},{id:3,isInPage:!0,office:"Golfo",state:"Veracruz",city:"Córdoba/Orizaba",inPageName:"SISTEC",phone:"(921) 212-6107",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"ventas.erporizaba@gmail.com"},{id:4,isInPage:!0,office:"Golfo",state:"Veracruz",city:"Veracruz",inPageName:"ZAGO Tecnologia Integral",phone:"(229) 202-0539",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"israel.zavala@zagoti.com.mx"}];const be={...u,state:"Yucatán"};let Oe=[{...be},{id:2,isInPage:!0,office:"Sureste",state:"Yucatán",city:"Mérida",inPageName:"Casa de software Mérida",phone:"(999) 926-3228",certificationName:"Elite",certificationLevel:5,certificationAS:!0,email:"pilar@csmerida.com"},{id:3,isInPage:!0,office:"Sureste",state:"Yucatán",city:"Mérida",inPageName:"Adoc 365",phone:"(999) 944-1162",certificationName:"Plata",certificationLevel:3,certificationAS:!0,email:"salim@adoc365.mx"},{id:4,isInPage:!0,office:"Sureste",state:"Yucatán",city:"Mérida",inPageName:"Experta en Pymes",phone:"(999) 242-1451",certificationName:"Bronce",certificationLevel:2,certificationAS:!1,email:"monica@expertaenpymes.com"}];const Me={...f,state:"Zacatecas"};let Be=[{...Me},{id:1,isInPage:!0,office:"Bajío",state:"Zacatecas",city:"Fresnillo",inPageName:"Centro de Computo de Fresnillo",phone:"(493) 932-7362",certificationName:"Bronce",certificationLevel:2,certificationAS:!0,email:"compucen@yahoo.com"}],Te=[...y,...L,...b,...M,...T,...E,...z,...G,...V,...$,..._,...F,...Q,...H,...U,...X,...ee,...ae,...oe,...ne,...se,...fe,...ue,...ge,...Pe,...Ne,...Se,...xe,...Ae,...Ie,...Oe,...Be];const we=Te.filter(t=>t.isInPage===!0),Ee=we.sort((t,o)=>{const s=t.isOffice===!0,c=o.isOffice===!0;return s&&!c?-1:!s&&c?1:t.certificationLevel>o.certificationLevel?-1:t.certificationLevel<o.certificationLevel||t.inPageName>o.inPageName?1:t.inPageName<o.inPageName?-1:0}),je="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/642ca5a5c5844b161ca1a38b_bronce.png",ze="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/642ca5a51534eb75bc038e7d_plata.png",Ge="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/642ca5a62564245222f37657_oro.png",De="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/642ca5a6c77dbb149683ce8c_elite.png",Ve="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/642ca60e5eb8682342d39e0c_as.png",l={Bronce:je,Plata:ze,Oro:Ge,Elite:De,AS:Ve},Re="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/6463b1fbfcd4dbe16225a8c6_Corporativo.png",$e="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/6463b1fc61433a34bcb31087_Sureste.png",ke="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/6463b1fb1b7b669d606f92b4_Noreste.png",_e="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/6463b1fb93ff840c6089ecb5_Occidente.png",Je="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/6463b1fb8e7f33ec4e095591_Golfo.png",Fe="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/6463b1fbaa053f2ab11ae2cc_Centro.png",Ye="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/6463b1fbf6cba9eb00217ec1_Bajio.png",Qe="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/6463b1fbef8d61d2ac68160c_CDMX.png",Ze="https://uploads-ssl.webflow.com/627983ccef617d453b9485ad/63dd2f39e67adc5d814e9ec6_Logo-positivo%201.svg",He={corporativo:Re,sureste:$e,noreste:ke,occidente:_e,golfo:Je,centro:Fe,bajio:Ye,cdmx:Qe,logoMS:Ze};document.querySelector("#app").innerHTML=`
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
              ${S.map(t=>`<option value="${t}">${t}</option>`)}
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
`;const p=()=>{const o=document.getElementById("selectState").value,c=document.getElementById("selectCertification").value,a=document.getElementById("selectCertificationAS").value,n=document.getElementById("partnersContainer"),P=Ee.filter(e=>o==="all"?!e.isOffice:e.state===o).filter(e=>c==="all"?e:e.certificationLevel===Number(c)||e.isOffice).filter(e=>a==="all"?e:e.certificationAS===!0);n.innerHTML="",P.length===0?n.innerHTML=`
      <div class="no-results text-left text-ms-text-gray font-semibold text-xl mt-12 mb-12 w-full">
        <p>No se encontraron partners que coincidan con los criterios seleccionados.</p>
      </div>
    `:P.forEach((e,v)=>{n.innerHTML+=`
        <div class="${e.isOffice?"partner bg-white rounded-3xl  p-5":"partner bg-ms-card-gray rounded-3xl p-5"} h-64
        key-${v}
        ">
          <div class="partnerInfo flex flex-row justify-between gap-5">
            <div class="left-box flex flex-col">
              ${e.isOffice?`<div class='w-28'>
                    <img src="${He.logoMS}"/>
                    <p class="text-xs text-gray-500">${e.office.toUpperCase()}</p>
                  </div>`:""}
              <p class='font-bold text-md text-ms-text-black mb-2'>${e.isOffice?"":e.inPageName.toUpperCase()}</p>
              <div class='flex items-center mb-1 '>
                <div class='mr-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-6" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <p class='text-sm text-gray-500 flex items-center'>${e.city}</p>
                </div>
              </div>

              <div class='flex items-center mb-6'>
                <div class='mr-1'>
                  <a href="tel:${e.phone}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-6" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                  </a>
                </div>
                <div>
                  <a href="tel:${e.phone}">
                    <p class='text-sm text-gray-500 flex items-center'>${e.phone}</p>
                  </a>
                </div>
              </div>

              <div class='social-icons flex items-center'>
                ${e.email?`
                    <div class='mr-1 p-2 rounded-lg ${e.isOffice?"bg-ms-text-black":"bg-white"}'>
                    <a href="mailto:${e.email}" class="${e.isOffice?"text-white":"text-ms-text-black"} hover:text-ms-orange transition duration-300 ease-in-out
                      ">
                      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/>
                      </svg>
                    </a>
                    </div>
                    `:""}
              </div>
            </div>
            <div class="right-box grid grid-rows-[auto, auto] place-items-end h-full">
              <div class='w-24 m-2'>
                <img src="${e.isOffice?"":e.certificationName==="Bronce"?l.Bronce:e.certificationName==="Plata"?l.Plata:e.certificationName==="Oro"?l.Oro:l.Elite}"/>
              </div>
              <div class='w-20 m-1'>
                <img src="${e.certificationAS?l.AS:""}"/>
              </div>
            </div>
          </div>
        </div>
      `})},N=document.getElementById("selectState"),qe=document.getElementById("selectCertification"),Ue=document.getElementById("selectCertificationAS");N.addEventListener("change",p);qe.addEventListener("change",p);Ue.addEventListener("change",p);window.onload=function(){N.value="Ciudad de México",p()};
