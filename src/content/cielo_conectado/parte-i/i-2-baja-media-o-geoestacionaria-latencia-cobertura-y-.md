---
titulo: 'Baja, media o geoestacionaria: latencia, cobertura y costo por bit'
parte: I
parte_titulo: ¿Cómo se ordena el mundo de las comunicaciones satelitales?
orden: 3
---

*Un satélite geoestacionario gana 17 veces más por cada megabit que uno de Starlink, y aun así es Starlink el que le quita clientes.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_e3ccd21b13ad.jpg" alt="Las órbitas a escala con la Tierra: Iridium, el Hubble y la Estación Espacial pegados al planeta (órbita baja), los satélites de navegación en órbita media y, mucho más lejos, el anillo geoestacionario. Esa distancia es la que se traduce en milisegundos de latencia." loading="lazy" /><figcaption>Las órbitas a escala con la Tierra: Iridium, el Hubble y la Estación Espacial pegados al planeta (órbita baja), los satélites de navegación en órbita media y, mucho más lejos, el anillo geoestacionario. Esa distancia es la que se traduce en milisegundos de latencia. <span class="credito">Fuente: Cmglee (CC BY-SA 3.0)</span></figcaption></figure>


La física cabe en una frase: cuanto más lejos está el satélite, más terreno ve y más tarda la señal en ir y volver (la mecánica orbital la explica SATELITAL, *Más allá de nuestra altura*). Lo que importa aquí es el efecto comercial: la órbita decide qué cliente puedes atender.

## La latencia elige al cliente

Un satélite geoestacionario (GEO) está a 35.786 km. La señal tarda al menos 120 milisegundos (ms) en un solo tramo entre tierra y satélite, según un análisis del MIT. Una consulta a internet hace cuatro tramos: sube y baja la pregunta, sube y baja la respuesta. Eso da unos 480 ms antes de sumar cualquier procesamiento, y Nokia usa 680 ms como referencia para esa altura. La órbita media (MEO) de O3b, a unos 8.000 km, supera los 200 ms, según Eutelsat. OneWeb, a 1.200 km, promedia 70 ms. Starlink declaró una latencia mediana global de unos 26 ms en 2025, con la meta de bajarla a 20 ms estables.

¿Y eso qué significa? Para la televisión, nada: la imagen viaja en un solo sentido y nadie nota medio segundo. Para una videollamada, un juego en línea o una aplicación en la nube, 600 ms se sienten como una conversación con eco. Por eso la banda ancha de consumo migró a la órbita baja (LEO), y por eso Telesat vende Lightspeed como una red "unas 20 veces" más rápida en latencia que el GEO.

## La cobertura se paga en cantidad de satélites

Tres satélites geoestacionarios bien ubicados ven casi todo el planeta habitado†. O3b, la primera red de SES en órbita media, cubre con 20 satélites, pero solo entre las latitudes 45° norte y 45° sur, y sus antenas de usuario son más caras. En órbita baja, cada satélite ve una franja pequeña y pasa rápido: hacen falta miles. Starlink tenía 11.150 en órbita en octubre de 2026, según KeepTrack.

## El costo por bit: volumen contra rendimiento

Novaspace compara cuánto ingreso deja cada megabit por segundo (Mbps) de capacidad vendible durante toda la vida del activo:

| Arquitectura | Capacidad vendible | Vida útil | Ingreso anual típico | Ingreso por Mbps en su vida |
|---|---|---|---|---|
| Megaconstelación LEO | 100.000 Gbps | 5 años | 8.000 M US$ | 400 US$ |
| Constelación LEO pequeña para empresas | 1.000 Gbps | 7 años | 180 M US$ | 1.260 US$ |
| GEO de alto rendimiento clásico | 75 Gbps | 15 años | 35 M US$ | 7.000 US$ |
| GEO pequeño y flexible | 40 Gbps | 15 años | 30 M US$ | 11.250 US$ |

La cuenta para el GEO clásico: 35 millones al año por 15 años son 525 millones, divididos por 75.000 Mbps, dan 7.000 dólares por Mbps. La megaconstelación vende cada megabit 17 veces más barato, pero tiene mil veces más megabits. Novaspace agrega un matiz a favor del GEO: no desperdicia capacidad sobre océanos y desiertos vacíos, porque apunta sus haces adonde están los clientes.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Por qué la latencia de 30 ms o de 600 ms define quién puede ser tu cliente?</p>


Porque separa dos negocios. Con 600 ms se vende bien la difusión de video, la troncal hacia zonas remotas y el respaldo. Con 30 ms se compite contra la fibra y el 5G por el hogar, el avión y la oficina. Un operador GEO que quiera esos clientes necesita socio o capa propia en otra órbita, y eso explica buena parte de las alianzas y fusiones del sector.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Iridium, con 66 satélites en órbita baja, destaca que su banda L permite antenas pequeñas y resiste mejor el mal tiempo que las bandas K. Cada órbita y cada banda compran una ventaja y pagan con otra.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [The Next Chapter of Satellite Communications](https://nova.space/wp-content/uploads/2026/11/White-Paper_SWISSto12_The-Next-Chapter-of-Satellite-Communications_Novaspace.pdf) — SWISSto12 / Novaspace, 2026 (S0048): tabla de ingreso por Mbps según arquitectura.
- [Unit 1: Technological Success and Economic Failure](https://www.mit.edu/~deweck/research_files/comsats_2004_001_v10/Unit1%20Success%20and%20Failure/unit1_summary.htm) — MIT, de Weck, 2004 (S0134): retardo mínimo de 120 ms por tramo en GEO.
- [Starlink Progress Report 2025](https://starlink.com/public-files/starlinkProgressReport_2025.pdf) — SpaceX, 2025 (S0129): latencia mediana de 26 ms y meta de 20 ms.
- [Universal Registration Document FY24-25](https://www.companiesmarketcap.com/universal-registration-documents/43436.urd.en.2024-2025.pdf) — Eutelsat, 2025 (S0063): latencia de OneWeb (70 ms) y límites de la órbita media.
- [5G New Radio for spectrum allocations below 5 MHz](https://www.nokia.com/asset/i/212761) — Nokia, 2025 (S0081): latencias de referencia por altura de la plataforma.

</aside>

**Puertas:** [El cielo repartido: quién vende qué, y desde qué órbita, en 2026](/biblioteca/cielo_conectado/parte-i/i-1-el-cielo-repartido-quien-vende-que-y-desde-que-orb), [Por qué la misma empresa vuela en tres órbitas](/biblioteca/cielo_conectado/parte-i/i-5-por-que-la-misma-empresa-vuela-en-tres-orbitas), [¿Le gana a la fibra? Lo que dicen las mediciones frente al 5G](/biblioteca/cielo_conectado/parte-ii/ii-15-le-gana-a-la-fibra-lo-que-dicen-las-mediciones-fre), [O3b mPOWER y la órbita media: el nicho de SES](/biblioteca/cielo_conectado/parte-iii/iii-4-o3b-mpower-y-la-orbita-media-el-nicho-de-ses), [GEO pequeño: Astranis, SWISSto12 y el satélite a medida](/biblioteca/cielo_conectado/parte-iii/iii-12-geo-pequeno-astranis-swissto12-y-el-satelite-a-med)
