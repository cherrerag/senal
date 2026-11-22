---
titulo: 'Cable Humboldt, datacenters y gateways: Chile como nodo'
parte: XIII
parte_titulo: ¿Qué pasa en Chile y América Latina?
orden: 158
---

*Las rutas de cable submarino de Sudamérica se concentran en Estados Unidos y Panamá; un cable de 14.800 km que sale de Valparaíso quiere cambiar ese mapa, y con él el lugar donde conviene aterrizar los datos del cielo.*

<div class="galeria"><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_776015e92639.jpg" alt="Acceso a la estación terrena de Longovilo, de Entel, en la Región Metropolitana: desde 1968 fue la primera de su tipo en América Latina, y hoy SES y Eutelsat la siguen listando en su red terrestre." loading="lazy" /><figcaption>Acceso a la estación terrena de Longovilo, de Entel, en la Región Metropolitana: desde 1968 fue la primera de su tipo en América Latina, y hoy SES y Eutelsat la siguen listando en su red terrestre. <span class="credito">Fuente: Marco Antonio Correa Flores (Wikimedia Commons, CC BY-SA 4.0)</span></figcaption></figure><figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0116_p012_615f39028066.jpg" alt="Mapa de las estaciones terrenas de la Near Space Network de la NASA: Santiago de Chile figura entre los sitios del hemisferio sur que cierran la cobertura global." loading="lazy" /><figcaption>Mapa de las estaciones terrenas de la Near Space Network de la NASA: Santiago de Chile figura entre los sitios del hemisferio sur que cierran la cobertura global. <span class="credito">Fuente: NASA (dominio público)</span></figcaption></figure><p class="galeria-pie">Chile en la red de tierra. A la izquierda, Longovilo, que lleva más de medio siglo bajando señal de satélites; a la derecha, la estación de Santiago dentro de la red de estaciones terrenas de la NASA. Un país donde el tráfico del cielo aterriza desde antes de Starlink.</p></div>


El proyecto Humboldt es un cable submarino de 14.800 kilómetros que conectará Valparaíso con Australia y, después, con Asia. Nació de la colaboración entre el gobierno de Chile, a través de Desarrollo País, y Google. En septiembre de 2026, según TrendTIC, avanzaba en su implementación; las fuentes de este atlas no precisan su fecha de entrada en operación ni su costo. Su promesa es convertir a Chile en la puerta de entrada de datos entre Asia-Pacífico y gran parte de Sudamérica.

## Por qué importa la ruta

Hoy, las rutas de cable submarino de la región se concentran en dos puntos: Estados Unidos, como centro tecnológico y financiero, y Panamá, por su canal. Humboldt abre un camino directo entre Sudamérica, Oceanía y Asia "sin necesidad de transitar por Norteamérica". Eso suma redundancia, una ruta alternativa si las otras fallan, y menor latencia hacia Asia†. Países como Argentina, Bolivia, Paraguay y Perú podrían usar a Chile como acceso a las redes globales.

El cable trae consigo el otro ingrediente: los centros de datos. Mariano Farré, de Coasin Logicalis, lo resume así: Chile ofrece energías renovables, solar y eólica, y zonas de bajas temperaturas que facilitan operar *datacenters*. Más conectividad internacional atrae más nube, y más nube atrae más tráfico.

## El mapa satelital que ya existe en tierra

Chile no parte de cero en infraestructura satelital terrestre. Las fuentes de este atlas permiten dibujar este mapa, a noviembre de 2026:

| Lugar | Operador | Función |
|---|---|---|
| Cuatro gateways autorizados en 2025 | Starlink | Conexión de la constelación con internet (decreto 234) |
| Cabrero, Pudahuel y Las Condes | SpaceX | Estaciones terrenas de servicio intermedio (decreto 157 de 2026) |
| Santiago y Longovilo | SES-Intelsat | Nodos de su red terrestre global, con enlace hacia Bogotá |
| Longovilo | Eutelsat | Sitio de monitoreo para Sudamérica, junto con São Paulo |
| Punta Arenas | Iridium | Teleporte de telemetría, control y ruteo de servicios comerciales |
| Punta Arenas | KSAT | Antena de 11,5 m en bandas S y X, en la red de NASA |
| Santiago | SSC | Antenas de 9, 12 y 13 m en banda S, en la red de NASA |
| Punta Arenas, Santiago y Antofagasta | Fuerza Aérea (SNSat) | Control de la constelación nacional y bajada de imágenes |

Punta Arenas aparece tres veces, y no es casualidad: un sitio tan austral ve pasar con frecuencia a los satélites de órbitas polares†, igual que Svalbard en el norte (ver [KSAT: 200 antenas en más de 40 sitios, del Ártico a la Antártica](/biblioteca/cielo_conectado/parte-vii/vii-6-ksat-200-antenas-en-mas-de-40-sitios-del-artico-a-)).

## Qué gana un gateway en un país nodo

Un *gateway* satelital es solo la mitad del camino. Desde la antena, el tráfico tiene que llegar por fibra a un punto de presencia (PoP), el lugar donde la red del operador se conecta con internet, y ese punto suele estar dentro de un datacenter (ver [Puntos de presencia y fibra: dónde el satélite se conecta a internet](/biblioteca/cielo_conectado/parte-vii/vii-9-puntos-de-presencia-y-fibra-donde-el-satelite-se-c)). Un gateway sirve más cuanto mejor conectado esté el lugar donde aterriza: fibra abundante, rutas internacionales diversas y nube cerca.

Con los enlaces láser entre satélites, el tráfico de una constelación ya no tiene que bajar en el mismo país donde está el usuario: puede viajar por el espacio y aterrizar donde convenga† (ver [Cómo se arma la red: láseres entre satélites, gateways y puntos de presencia](/biblioteca/cielo_conectado/parte-ii/ii-14-como-se-arma-la-red-laseres-entre-satelites-gatewa)). Un país que ofrece un cable directo a Asia, datacenters con energía renovable y reglas claras para instalar gateways se vuelve candidato natural para aterrizar tráfico regional. La geografía chilena agrega una condición: las bandas E para gateways solo se autorizan de Coquimbo al sur, por la protección de ALMA, lo que empuja esa infraestructura hacia el centro y el sur.

El volumen local ya justifica la discusión. A junio de 2026, Subtel reporta 37,1 exabytes de tráfico de internet fija, con un promedio de más de 699 GB al mes por hogar.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Qué papel pueden tener los gateways satelitales en un país que se vuelve nodo de fibra?</p>


Pueden pasar de ser una antena que atiende clientes locales a ser un punto de aterrizaje regional. Si Chile suma un cable directo a Asia y datacenters con energía renovable, el lugar donde baja el tráfico satelital se vuelve tan estratégico como el satélite. La oportunidad para empresas locales está en el terreno, la fibra hasta el gateway, el espacio en datacenter y los servicios de operación; la condición es que el país mantenga trámites predecibles para instalar estaciones terrenas.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Longovilo, en la provincia de Melipilla, fue en 1968 la primera estación terrena de comunicaciones satelitales de América Latina. En 2026, dos de los mayores operadores del mundo, SES y Eutelsat, todavía lo listan como sitio de su red terrestre.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Cable Humboldt:** 14.800 km, Valparaíso–Australia y luego Asia; Desarrollo País y Google; en implementación (septiembre de 2026)
- **Tráfico fijo en Chile:** 37,1 EB y más de 699 GB al mes por hogar (Subtel, junio de 2026)
- **Teleporte de Iridium en Punta Arenas:** edificio propio en terreno arrendado
- [Proyecto Humboldt: el cable submarino que transformará el futuro tecnológico de Chile](https://www.trendtic.cl/2026/09/proyecto-humboldt-el-cable-submarino-que-transformara-el-futuro-tecnologico-de-chile/) — TrendTIC, 2026 (S0038): la ruta, los socios y la apuesta por los datacenters.
- [Decreto 234 exento, Transportes (2025)](https://bcn.cl/q59Quw) — Ministerio de Transportes y Telecomunicaciones de Chile, 2025 (S0027): los gateways de Starlink en Chile.
- [SES Annual Report 2025](https://www.ses.com/sites/ses_v2/files/investor-files/2026-03/SES_AR25_2MAR26_vs21_web-LR.pdf) — SES, 2026 (S0067): el mapa de su red terrestre, con Santiago y Longovilo.
- [SOA: Ground Data Systems and Mission Operations](https://www.nasa.gov/wp-content/uploads/2026/05/11-soa-ground-data-systems-2026-final.pdf) — NASA, 2026 (S0116): las antenas de KSAT y SSC en Chile.
- [Iridium 10-K 2025](https://www.sec.gov/Archives/edgar/data/1418819/000141881926000009/irdm-20251231.htm) — Iridium Communications, 2026 (S0079): el teleporte de Punta Arenas.

</aside>

**Puertas:** [Cómo se arma la red: láseres entre satélites, gateways y puntos de presencia](/biblioteca/cielo_conectado/parte-ii/ii-14-como-se-arma-la-red-laseres-entre-satelites-gatewa), [Lo que no se ve: gateways, telepuertos, fibra y nube](/biblioteca/cielo_conectado/parte-vii/vii-1-lo-que-no-se-ve-gateways-telepuertos-fibra-y-nube), [KSAT: 200 antenas en más de 40 sitios, del Ártico a la Antártica](/biblioteca/cielo_conectado/parte-vii/vii-6-ksat-200-antenas-en-mas-de-40-sitios-del-artico-a-), [Puntos de presencia y fibra: dónde el satélite se conecta a internet](/biblioteca/cielo_conectado/parte-vii/vii-9-puntos-de-presencia-y-fibra-donde-el-satelite-se-c), [Datacenters y cómputo: del gateway al borde de la nube](/biblioteca/cielo_conectado/parte-vii/vii-10-datacenters-y-computo-del-gateway-al-borde-de-la-n)
