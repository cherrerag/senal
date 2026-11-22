---
titulo: 'Gateways comunitarios y backhaul: cuando el satélite alimenta a la red celular'
parte: II
parte_titulo: ¿Quién da internet desde órbita baja y cómo lo hace?
orden: 27
---

*Cuando se cortó la fibra submarina de un pueblo de Alaska, en pleno invierno, la conexión siguió llegando desde el cielo.*

En enero de 2025 se rompió la fibra submarina que conecta a Nome, un pueblo aislado de la costa oeste de Alaska. El clima impidió repararla durante varios meses. En otro tiempo, eso habría significado volver a un enlace geoestacionario lento o quedarse casi sin red†. Pero Nome tenía un Community Gateway de Starlink: una estación terrena instalada en el propio pueblo que recibe desde la constelación una troncal de alta capacidad y la entrega al proveedor local. Según SpaceX, ese enlace mantuvo conectada la infraestructura crítica del pueblo mientras el cable esperaba su reparación.

## Una troncal de fibra que baja del cielo

El Community Gateway no es un plan para hogares. Es una troncal mayorista. El tráfico viaja por la malla láser de Starlink y baja por gateways que operan en una porción dedicada de banda Ka, con 10 Gbps de subida y 10 Gbps de bajada. Desde ahí, el proveedor local reparte la conexión a casas, empresas y oficinas públicas con su propia última milla: fibra, inalámbrico fijo o red móvil. En 2025, SpaceX activó 13 sitios nuevos y llegó a 20 en nueve países y cuatro continentes. Uno de ellos navega: el crucero Star of the Seas, de Royal Caribbean.

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0129_p025_044b23a685a3.jpg" alt="El Community Gateway de Galápagos: tres radomos blancos sobre una azotea de lava volcánica reciben la troncal desde la constelación. Una estación así, sin cable submarino, convierte al operador local en distribuidor." loading="lazy" /><figcaption>El Community Gateway de Galápagos: tres radomos blancos sobre una azotea de lava volcánica reciben la troncal desde la constelación. Una estación así, sin cable submarino, convierte al operador local en distribuidor. <span class="credito">Fuente: SpaceX, Starlink Progress Report 2025</span></figcaption></figure>


¿Para cuánta gente alcanzan 10 Gbps? Nokia estima que un hogar que usa entre 500 y 600 GB al mes necesita unos 4 Mbps promedio en la hora pico. Dividiendo, 10 Gbps cubren la hora pico de unos 2.500 hogares: suficiente para un pueblo o una isla pequeña. Es mucho menos que un cable submarino moderno, pero se instala sin tocar el fondo del mar y sin esperar años de obra†.

## El satélite como troncal celular

El mismo principio se aplica a las antenas celulares. Una estación base en una isla o un valle aislado necesita una troncal (backhaul) que la conecte al núcleo de la red. Durante décadas esa troncal fue un satélite geoestacionario, con poca capacidad y mucha latencia. La japonesa KDDI cambió a Starlink y desplegó más de 200 estaciones base móviles y portátiles, con diez veces más caudal que antes y equipos más pequeños y rápidos de instalar. BT, Liberty Latin America, Africa Mobile Networks y Fastweb lo integraron en sus redes en 2025.

Los rivales venden lo mismo con otra etiqueta. Eutelsat OneWeb entrega a Telstra hasta 25 Gbps de troncal en más de 300 sitios remotos de Australia, con un nivel de servicio comprometido. Telesat diseñó Lightspeed con interfaces estándar para que una operadora conecte la red satelital como si fuera un circuito de fibra más.

## ¿Socio o competidor?

Las dos cosas a la vez, y esa es la tensión. En el Community Gateway y en el backhaul, Starlink es proveedor mayorista: la operadora conserva el cliente, la marca y la última milla. Pero en el mismo pueblo, Starlink puede venderle directamente una antena al vecino, sin pasar por la operadora. Y con el servicio directo al celular usa el espectro de la operadora para cubrir donde ella no llega. Nokia, que vende redes a esas mismas operadoras, les recomienda llevar 5G fijo a pueblos y localidades antes de que llegue el satélite, porque un cliente con buena conexión terrestre y más barata no tiene motivos para cambiarse.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para una operadora con zonas aisladas, el satélite de órbita baja ya no es solo un competidor: es la forma más rápida de llevar capacidad a una isla, un campamento minero o un pueblo sin fibra, y un respaldo si se corta el cable. La decisión estratégica es dónde comprarle troncal y dónde dejar que le venda al cliente final. Para Starlink, cada gateway comunitario convierte a una operadora local en distribuidor, en lugar de rival.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">América Latina: Galápagos y Entel Perú</p>


En 2025, Starlink puso en marcha su primer Community Gateway en las islas Galápagos, con la operadora pública ecuatoriana CNT EP†. La solución evitó tender un cable submarino y redujo el impacto sobre la biodiversidad única del archipiélago. «Junto con Starlink, estamos convirtiendo a Galápagos en una referencia regional de conectividad remota», dijo Ronald Spina, gerente general de CNT EP. En Perú, Entel y Starlink lanzaron el servicio directo al celular dentro de un «espacio controlado de experimentación» de 24 meses aprobado por el Ministerio de Transportes y Comunicaciones: SMS y datos para aplicaciones como WhatsApp y Google Maps en zonas sin cobertura terrestre, incluidas las 200 millas marítimas, desde planes de 29,90 soles. Entel Perú se presenta como la primera de América Latina y la séptima del mundo en ofrecerlo; en Chile, la Subtel informó el 25 de marzo de 2026 que el país fue el primero de la región y el quinto del mundo en habilitar datos satelitales directo al celular, también con Entel.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [Starlink Progress Report 2025](https://starlink.com/public-files/starlinkProgressReport_2025.pdf) — SpaceX, 2025 (S0129): Community Gateway, Nome, Galápagos, Star of the Seas y el backhaul de KDDI.
- [Starlink con Entel Perú](https://www.entel.pe/starlink) — Entel Perú, 2026 (S0040): condiciones, planes y alcance del servicio directo al celular en Perú.
- [Chile se posiciona como primer país de la región y quinto del mundo](https://www.subtel.gob.cl/chile-se-posiciona-como-primer-pais-de-la-region-y-quinto-del-mundo-entel-y-starlink-d2c-amplian-sus-servicios-incluyendo-aplicaciones-como-whatsapp-y-google-maps/) — Subtel, 2026 (S0024): la segunda etapa de la alianza Entel-Starlink en Chile.
- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): el consumo por hogar en hora pico y la recomendación a las operadoras.
- [Investor Presentation, July 2025](https://www.eutelsat.com/system/files/2025-08/DOC_Investors_Investor-Presentation-Materials_EN_100725.pdf) — Eutelsat, 2025 (S0066): el backhaul de OneWeb para Telstra.

</aside>

**Puertas:** [Cómo se arma la red: láseres entre satélites, gateways y puntos de presencia](/biblioteca/cielo_conectado/parte-ii/ii-14-como-se-arma-la-red-laseres-entre-satelites-gatewa), [Del hogar al crucero: clientes, planes y precios de la órbita baja](/biblioteca/cielo_conectado/parte-ii/ii-16-del-hogar-al-crucero-clientes-planes-y-precios-de-), [Starlink y las operadoras latinoamericanas: Claro, GTD, IFX, TIM y Telefónica](/biblioteca/cielo_conectado/parte-xiii/xiii-3-starlink-y-las-operadoras-latinoamericanas-claro-g), [Entel y Starlink: Chile, primer país de la región con datos directo al celular](/biblioteca/cielo_conectado/parte-xiii/xiii-5-entel-y-starlink-chile-primer-pais-de-la-region-co), [Los gateways de Starlink: banda Ka, banda W y la versión 5](/biblioteca/cielo_conectado/parte-vii/vii-4-los-gateways-de-starlink-banda-ka-banda-w-y-la-ver)
