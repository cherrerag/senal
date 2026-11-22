---
titulo: 'Satélites definidos por software: la promesa y los retrasos'
parte: III
parte_titulo: ¿Qué pasa con los operadores geoestacionarios y de órbita media?
orden: 38
---

*Cuando Intelsat encargó a Airbus sus dos primeros satélites definidos por software, su director ejecutivo lo llamó "el comienzo de una evolución radical"; casi seis años después, ya bajo bandera de SES, siguen en tierra con lanzamiento previsto para 2027.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0020_h_e1f75f0f2c43.jpg" alt="Dos filosofías de satélite: a la izquierda, el hardware fija lo que puede hacer la carga útil; a la derecha, una plataforma estándar y un software que reconfigura haces, frecuencias y zonas de cobertura ya en órbita." loading="lazy" /><figcaption>Dos filosofías de satélite: a la izquierda, el hardware fija lo que puede hacer la carga útil; a la derecha, una plataforma estándar y un software que reconfigura haces, frecuencias y zonas de cobertura ya en órbita. <span class="credito">Fuente: Woodrow Scientific, Software Defined Satellites: Architecture & Challenges (2026)</span></figcaption></figure>


Un satélite geoestacionario tradicional sale de fábrica con su misión fija: dónde apunta cada haz, qué frecuencias usa y cuánta potencia recibe cada zona quedan grabados en el hardware por 15 años. Un satélite definido por software (SDS) invierte esa lógica. Desde tierra, por comando, se pueden cambiar la forma y la dirección de los haces, el plan de frecuencias, el reparto de potencia y hasta el tipo de servicio, por ejemplo pasar capacidad de banda ancha comercial a comunicaciones de gobierno. No es una categoría binaria: hay satélites totalmente reconfigurables y otros que solo permiten mover algunos haces o redistribuir canales con un procesador digital.

## Por qué los fabricantes apostaron

Según Analysys Mason, Airbus, Boeing, Lockheed Martin y Thales Alenia Space empezaron a desarrollar estas plataformas en 2019 para que el geoestacionario siguiera siendo competitivo frente a las constelaciones. El argumento comercial es poderoso: un operador que compra un satélite hoy debe adivinar la demanda de los próximos 15 años, y con un SDS puede corregir el pronóstico en órbita. Analysys Mason prevé que entre 2023 y 2033 los satélites definidos por software sean el 75 % de los pedidos geoestacionarios de comunicaciones y más del 85 % de los ingresos de fabricación y lanzamiento del sector, un acumulado de 121.600 millones de dólares.

La referencia es el Eutelsat Quantum, lanzado el 30 de julio de 2021 en un Ariane 5 y construido por Airbus sobre una plataforma de Surrey Satellite Technology, dentro de un programa de asociación con la Agencia Espacial Europea. Según la ESA, fue el primer satélite comercial totalmente flexible del mundo. Entró en servicio en noviembre de 2021 y, según Eutelsat, vendió toda su capacidad en 18 meses. Además puede detectar emisiones extrañas y reaccionar ante interferencias o bloqueos intencionales.

Detrás vinieron las plataformas en serie. Airbus vende OneSat; Intelsat le encargó los IS-42 e IS-43 y planeaba más de diez satélites de este tipo. Thales Alenia Space vende Space Inspire, que según el propio fabricante se reconfigura por completo en menos de 24 horas, y reportaba seis satélites contratados a fines de 2022; entre sus clientes figuran Eutelsat con FLEXSAT Americas, SES con ASTRA 1Q y Arabsat con el Arabsat-7A. Boeing aplicó su carga 702X, capaz de formar más de 5.000 haces, en O3b mPOWER y en el militar WGS-11.

## Lo que llegó tarde o a medias

La promesa chocó con el calendario. Los IS-42 e IS-43, encargados entre diciembre de 2020 y enero de 2021 según cómo lo cuente la misma fuente, aparecen en el plan de SES de diciembre de 2025 con lanzamiento en 2027, igual que ASTRA 1Q y los IS-41 e IS-44 de Thales. Para FLEXSAT Americas, una fuente de 2026 todavía daba entrega en 2026, mientras el documento de registro de Eutelsat la fija en 2028. Analysys Mason lo resumió en enero de 2025: algunas plataformas se retrasaron y otras quedaron subutilizadas, "vendidas como totalmente flexibles pero implementadas solo de forma parcial", porque los operadores dudaron de usar todo su potencial. Maxime Puteaux, de Novaspace, agrega que el despliegue "se tradujo en aumentos de costo y retrasos" y que el precio más alto de lo previsto frena a los compradores que no son pioneros.

Hay también problemas menos visibles. La calificación espacial se basa en que el sistema verificado no cambia después del lanzamiento, y un SDS cambia con cada actualización; reprogramar sus chips en órbita es la operación más riesgosa, porque una carga corrupta puede dejar un subsistema inutilizable sin posibilidad de reparación. Y la flexibilidad abre una superficie de ataque: un satélite comprometido podría redirigir haces o cambiar frecuencias solo por software. Todos los ataques cibernéticos a satélites documentados, más de 200 incidentes públicos entre 1962 y 2026 según un estudio citado por Woodrow Scientific, empezaron en tierra.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Qué compra realmente un operador cuando paga por flexibilidad?</p>


Compra una opción: el derecho a mover capacidad hacia donde aparezca la demanda, sea otra región, un corredor marítimo o un cliente de gobierno, sin lanzar otro satélite. Esa opción vale mucho en un mercado donde los pronósticos a 15 años fallan, y vale todavía más si el satélite puede esquivar interferencias. Pero se paga por adelantado, en precio y en riesgo de calendario, y exige operar el satélite como un sistema de software, con su ciberseguridad y sus procesos de prueba. Muchos operadores terminaron comprando flexibilidad parcial, como el procesador digital del Amazonas Nexus de Hispasat, que mueve capacidad sin rehacer toda la misión.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


En 2024, Lockheed Martin subió un nuevo programa de misión a un satélite que ya estaba en órbita con su arquitectura SmartSat. La empresa lo compara con instalar una aplicación en un teléfono: el satélite cambia lo que hace sin que nadie toque su hardware.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [GEO satellite communications market players must pivot or perish](https://www.analysysmason.com/research/content/articles/geo-pivot-perish-nsi121-nsi141/) — Analysys Mason, 2025 (S0131): el 75 % de los pedidos GEO y los retrasos y usos parciales.
- [Software Defined Satellites: Architecture & Challenges](https://woodrowscientific.com/blog/satellites-reconfigurable-via-software-updates) — Woodrow Scientific, 2026 (S0020): plataformas, casos, calificación y ciberseguridad.
- [Satellite Manufacturers Embrace Innovation Amidst Market Challenges](https://www.kratosspace.com/constellations/articles/satellite-manufacturers-embrace-innovation-amidst-market-challenges) — Kratos, 2025 (S0124): costos y retrasos del despliegue según Novaspace.
- [SES Annual Report 2025](https://www.ses.com/sites/ses_v2/files/investor-files/2026-03/SES_AR25_2MAR26_vs21_web-LR.pdf) — SES, 2026 (S0067): calendario de lanzamiento de IS-41 a IS-44 y ASTRA 1Q.
- [Universal Registration Document FY24-25](https://www.companiesmarketcap.com/universal-registration-documents/43436.urd.en.2024-2025.pdf) — Eutelsat, 2025 (S0063): Eutelsat Quantum y la fecha de entrega de FLEXSAT Americas.

</aside>

**Puertas:** [HTS: cómo los haces puntuales bajaron el precio del megabit](/biblioteca/cielo_conectado/parte-iii/iii-10-hts-como-los-haces-puntuales-bajaron-el-precio-del), [GEO pequeño: Astranis, SWISSto12 y el satélite a medida](/biblioteca/cielo_conectado/parte-iii/iii-12-geo-pequeno-astranis-swissto12-y-el-satelite-a-med), [Los fabricantes tradicionales bajo presión: Airbus, Thales, Boeing y Lockheed](/biblioteca/cielo_conectado/parte-viii/viii-3-los-fabricantes-tradicionales-bajo-presion-airbus-), [Cómputo en órbita: satélites que procesan antes de bajar](/biblioteca/cielo_conectado/parte-xii/xii-5-computo-en-orbita-satelites-que-procesan-antes-de-), [KA-SAT, 24 de febrero de 2022: el ciberataque que apagó módems en Europa](/biblioteca/cielo_conectado/parte-xi/xi-9-ka-sat-24-de-febrero-de-2022-el-ciberataque-que-ap)
