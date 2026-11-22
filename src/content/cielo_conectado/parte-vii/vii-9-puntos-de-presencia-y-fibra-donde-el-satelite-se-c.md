---
titulo: 'Puntos de presencia y fibra: dónde el satélite se conecta a internet'
parte: VII
parte_titulo: ¿Qué hace falta en tierra para que todo esto funcione, y quién lo provee?
orden: 86
---

*El viaje al espacio es la parte corta: un paquete de datos tarda menos en subir y bajar de un satélite a 550 km que en recorrer mil kilómetros de fibra.*

Cuando un usuario de banda ancha satelital abre una página web, su pedido sube al satélite, baja en un gateway y todavía no llegó a ningún lado. Falta que viaje por fibra hasta un **punto de presencia** (PoP), el lugar donde la red del operador se conecta con internet, con la nube o con la red privada de un cliente. Ese último tramo, invisible para el usuario, decide buena parte de la latencia, del costo y de bajo qué ley circula el tráfico.

## La cuenta de la latencia

Nokia hizo los números en un informe de 2025. A 550 km de altura, la ida desde tierra hasta un satélite que está justo encima toma unos 1,8 ms. Una consulta completa recorre ese tramo cuatro veces (usuario-satélite-gateway, ida y vuelta), así que el mínimo absoluto es de unos 7 ms; con el satélite en ángulos realistas, entre 7 y 17 ms. La fibra, en cambio, suma alrededor de 1 ms de ida y vuelta por cada 100 km. Un gateway a 1.000 km de su PoP agrega unos 10 ms, más que todo el viaje espacial en el mejor caso.

Por eso las mediciones reales quedan lejos de la teoría. Con datos de Ookla para diez países europeos y Estados Unidos, Nokia encontró una latencia típica de 61 ms para Starlink frente a 41 ms del acceso fijo inalámbrico 5G, y atribuyó la mayor dispersión de Starlink a la distancia entre usuarios, estaciones terrenas y datacenters en cada país. En África subsahariana, la latencia mediana de Starlink iba de 53 a 251 ms. El informe de Starlink de 2025, con otra metodología, declara una latencia mediana global de unos 26 ms y una meta de 20 ms. Las cifras no coinciden porque miden cosas, lugares y períodos distintos; lo que sí coincide es el diagnóstico: la geografía terrestre manda.

## Cómo lo resuelven los operadores

SES, ya con Intelsat, muestra el modelo clásico a escala. Declara 146 telepuertos propios o de socios, 50 PoP en el mundo y unos 600.000 km de fibra, y una regla de diseño: cada telepuerto y gateway se conecta al menos a dos PoP, para tener redundancia. Los clientes llegan a sus gateways por fibra, por enlaces satelitales de relevo, por internet o desde nubes públicas y privadas.

Telesat diseñó Lightspeed con la misma lógica en tres piezas: estaciones de aterrizaje repartidas por el mundo, PoP regionales que alojan las interfaces con los clientes, y una red global de fibra que une todo, incluidos datacenters. El cambio de fondo está en la responsabilidad. En su negocio geoestacionario, Telesat vendía capacidad y el cliente armaba el resto; con Lightspeed responderá por el servicio "desde el punto de presencia" hasta el terminal del usuario, un oficio nuevo para un operador histórico.

Starlink suma una capa más: más de 24.000 láseres entre satélites, según su informe de 2025. Durante el apagón total de España y Portugal en abril de 2025, la red desvió tráfico por láser hacia estaciones terrenas de otras partes de Europa. En Nome, Alaska, un Community Gateway mantuvo conectada la ciudad cuando se cortó su fibra submarina y el clima impidió repararla durante meses.

## La jurisdicción también viaja

El PoP no es solo un asunto técnico. Determina en qué país sale el tráfico a internet y, por lo tanto, qué autoridad puede pedir datos o exigir bloqueos†. Eutelsat lo reconoce entre sus riesgos: si un gateway falla, puede haber regiones donde no pueda pasar el servicio a otra estación "por restricciones geográficas o impuestas por gobiernos". La entrada sobre soberanía de datos desarrolla esa tensión.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Un operador satelital necesita a quienes tienen fibra por tres razones: los gateways suelen estar en zonas rurales y hay que traer el tráfico hasta las ciudades; los PoP viven en edificios donde se intercambia tráfico con otras redes y con la nube; y la redundancia exige al menos dos caminos. Para un carrier de fibra o un operador de datacenter, cada constelación nueva es un cliente mayorista de largo plazo. Para un país, tener un PoP local significa menos latencia para sus usuarios y más control sobre su tráfico.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


En 2025 Starlink presentó un "Mini Láser" para que satélites de otras empresas se conecten a su malla óptica y, a través de ella, a puntos de presencia en tierra. En una prueba en vuelo de mediados de 2025 superó los 25 Gbps. Para algunos clientes, el PoP puede quedar a una conexión láser de distancia, sin pasar por una estación terrena propia.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): el cálculo de latencia por tramo y las mediciones de Starlink frente al 5G.
- [SES Annual Report 2025](https://www.ses.com/sites/ses_v2/files/investor-files/2026-03/SES_AR25_2MAR26_vs21_web-LR.pdf) — SES, 2026 (S0067): 146 telepuertos, 50 PoP, 600.000 km de fibra y redundancia de doble PoP.
- [Telesat Corporation 20-F 2025](https://www.telesat.com/wp-content/uploads/2025/05/3-Telesat-Corporation_20-F.pdf) — Telesat, 2025 (S0058): estaciones de aterrizaje, PoP y responsabilidad extremo a extremo de Lightspeed.
- [Starlink Progress Report 2025](https://starlink.com/public-files/starlinkProgressReport_2025.pdf) — SpaceX/Starlink, 2025 (S0129): latencia mediana, láseres, apagón ibérico y Mini Láser.
- [Universal Registration Document FY24-25](https://www.companiesmarketcap.com/universal-registration-documents/43436.urd.en.2024-2025.pdf) — Eutelsat, 2025 (S0063): riesgos de gateways, PoP y restricciones gubernamentales.

</aside>

**Puertas:** [Cómo se arma la red: láseres entre satélites, gateways y puntos de presencia](/biblioteca/cielo_conectado/parte-ii/ii-14-como-se-arma-la-red-laseres-entre-satelites-gatewa), [¿Le gana a la fibra? Lo que dicen las mediciones frente al 5G](/biblioteca/cielo_conectado/parte-ii/ii-15-le-gana-a-la-fibra-lo-que-dicen-las-mediciones-fre), [Soberanía de datos y conectividad: por qué Europa quiere su propia red](/biblioteca/cielo_conectado/parte-x/x-7-soberania-de-datos-y-conectividad-por-que-europa-q), [Datacenters y cómputo: del gateway al borde de la nube](/biblioteca/cielo_conectado/parte-vii/vii-10-datacenters-y-computo-del-gateway-al-borde-de-la-n), [Cable Humboldt, datacenters y gateways: Chile como nodo](/biblioteca/cielo_conectado/parte-xiii/xiii-14-cable-humboldt-datacenters-y-gateways-chile-como-n)
