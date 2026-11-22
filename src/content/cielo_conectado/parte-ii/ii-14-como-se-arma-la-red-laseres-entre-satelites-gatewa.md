---
titulo: 'Cómo se arma la red: láseres entre satélites, gateways y puntos de presencia'
parte: II
parte_titulo: ¿Quién da internet desde órbita baja y cómo lo hace?
orden: 24
---

*Una constelación es tan buena como su peor tramo en tierra; los láseres sirven para que ese tramo pueda estar en otro país.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0071_p003_13b477c5d15b.jpg" alt="Arriba, el «tubo doblado»: el satélite solo devuelve lo que recibe y necesita ver a la vez al usuario y al gateway. Abajo, la red con enlaces entre satélites (ISL), que pueden llevar el tráfico a un gateway lejano antes de bajarlo a internet." loading="lazy" /><figcaption>Arriba, el «tubo doblado»: el satélite solo devuelve lo que recibe y necesita ver a la vez al usuario y al gateway. Abajo, la red con enlaces entre satélites (ISL), que pueden llevar el tráfico a un gateway lejano antes de bajarlo a internet. <span class="credito">Fuente: «5G NR Non-Terrestrial Networks: From Early Results to the Road Ahead» (arquitecturas transparente y regenerativa del 3GPP)</span></figcaption></figure>


El 28 de abril de 2025 se apagó la península ibérica†. A medida que se agotaban las reservas de energía, cayeron casi todas las formas de banda ancha en España y Portugal. Los clientes de Starlink que tenían una batería portátil siguieron conectados, y la demanda se disparó. La explicación está en el cielo: los satélites que pasaban sobre la zona no bajaban el tráfico a la estación más cercana, sino que lo pasaban por láser a otros satélites y lo bajaban en estaciones terrenas de otras partes de Europa, no afectadas por el apagón. Para el usuario no hubo corte; para la red fue un desvío de cientos o miles de kilómetros por el espacio.

## Tres tramos y una puerta

Toda red de órbita baja tiene la misma anatomía. El **enlace de servicio** va de la antena del usuario al satélite; en Starlink y OneWeb usa banda Ku, y en Amazon Leo y Lightspeed, banda Ka. El **enlace de alimentación** (feeder link) va del satélite al **gateway**, la estación terrena donde el tráfico baja a tierra, en bandas más altas y anchas: Ka, E, V y, cada vez más, W. Entre ambos puede haber un tercer tramo, el **enlace entre satélites** (ISL), hoy casi siempre óptico. Del gateway, el tráfico viaja por fibra hasta el **punto de presencia** (PoP), el lugar donde la red satelital se conecta con el resto de internet y con los centros de datos.

Una licencia de gateway muestra el tamaño de ese tramo. En julio de 2025, la FCC autorizó a SpaceX, hasta 2040, una estación en Beekmantown, Nueva York, con una antena de 1,85 metros que transmite en banda Ka y en banda E (71 a 86 GHz), con canales de 1,2 GHz de ancho en la banda E. Es decir, cada canal de alimentación es varias veces más ancho que todo el espectro móvil de un operador celular típico†.

## Con láser o sin láser: dos arquitecturas

Sin enlaces entre satélites, la red es un **tubo doblado** (bent pipe): el satélite devuelve hacia abajo lo que recibe, así que debe ver al mismo tiempo al usuario y a un gateway. Es el caso de la primera generación de OneWeb, que necesita 44 portales en tierra (39 operativos a junio de 2025) y 27 PoP para cubrir el mundo. Cada portal exige terreno, licencia local y fibra. Donde no hay un gateway a la vista, no hay servicio.

Con láseres, la red se vuelve una **malla**. Cada satélite V2 Mini de Starlink lleva tres enlaces ópticos, y la malla suma más de 24.000 láseres que mueven cientos de gigabits por segundo entre satélites; SpaceX anunció actualizaciones para operar a 400 Gbps. Los prototipos de Amazon Leo demostraron 100 Gbps a casi 1.000 km de distancia, y Lightspeed se diseñó desde el inicio con enlaces ópticos y procesamiento a bordo, para enrutar el tráfico sin pasar por gateways intermedios. Iridium, que opera enlaces entre satélites desde hace décadas†, lo resume en su informe anual: su red es menos vulnerable que las que dependen de múltiples gateways terrestres, como las de Globalstar, Orbcomm y OneWeb.

## ¿Cuánta tierra necesita una red con láseres?

Menos de la que parece, pero no poca. SpaceX tenía más de 100 sitios de gateway solo en Estados Unidos, con más de 1.500 antenas fabricadas en Redmond. Nokia estima unos 150 sitios en todo el mundo, la mitad en Estados Unidos, porque SpaceX no publica el total. Hagamos la cuenta: 9 millones de clientes divididos por unos 150 sitios dan del orden de 60.000 clientes por sitio. Una red celular necesita, en cambio, miles de estaciones base para cubrir un solo país; Nokia habla de una diferencia de «órdenes de magnitud».

Los láseres no eliminan los gateways: los vuelven intercambiables. El tráfico igual tiene que bajar a tierra en algún lugar, y la distancia se paga: por fibra, cada 100 km suman alrededor de 1 ms de latencia de ida y vuelta. Nokia encontró que la latencia de Starlink varía mucho entre países europeos según la cercanía de sus estaciones a los centros de datos; en el Reino Unido llegó a ser más baja que la del 5G fijo inalámbrico (41 contra 45 ms). Mejorar la malla también rinde: en 2025, SpaceX informó de mejoras de latencia de 30 a 40 ms en Asia y África gracias a un enrutamiento láser más rápido.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para un operador, los láseres cambian la geografía del negocio. Con ellos, una red puede servir barcos, aviones y zonas sin gateway propio, y sobrevivir a cortes de energía o de cables submarinos. Sin ellos, cada mercado nuevo exige construir y licenciar estaciones en tierra. Para quien vende infraestructura terrestre, el mensaje es mixto: hacen falta menos gateways por cliente, pero cada uno debe estar cerca de fibra de alta capacidad y de los puntos de intercambio de tráfico. Para los reguladores, la malla abre una pregunta incómoda: si el tráfico de un país puede bajar en otro, ¿dónde se aplican sus reglas?

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


SpaceX empezó a vender su láser a terceros. El Mini Laser es un terminal óptico que otros fabricantes pueden montar en sus satélites para conectarse a la malla de Starlink y bajar sus datos por los PoP de SpaceX. En una prueba de mediados de 2025, dos unidades superaron los 25 Gbps hacia la red existente.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [Starlink Progress Report 2025](https://starlink.com/public-files/starlinkProgressReport_2025.pdf) — SpaceX, 2025 (S0129): el apagón ibérico, la malla de 24.000 láseres, los gateways en Estados Unidos y el Mini Laser.
- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): enlaces de servicio y de alimentación, latencia por tramo y estimación de 150 estaciones terrenas.
- [FCC Public Notice SES-02784](https://docs.fcc.gov/public/attachments/DOC-412658A2.pdf) — FCC, 2025 (S0112): la licencia del gateway de Beekmantown con sus bandas Ka y E.
- [Investor Presentation, July 2025](https://www.eutelsat.com/system/files/2025-08/DOC_Investors_Investor-Presentation-Materials_EN_100725.pdf) — Eutelsat, 2025 (S0066): los 44 portales y 27 PoP de OneWeb.
- [Telesat Corporation 20-F 2024](https://www.telesat.com/wp-content/uploads/2025/05/3-Telesat-Corporation_20-F.pdf) — Telesat, 2025 (S0058): la malla óptica, las estaciones de aterrizaje y los PoP de Lightspeed.

</aside>

**Puertas:** [Lo que no se ve: gateways, telepuertos, fibra y nube](/biblioteca/cielo_conectado/parte-vii/vii-1-lo-que-no-se-ve-gateways-telepuertos-fibra-y-nube), [Los gateways de Starlink: banda Ka, banda W y la versión 5](/biblioteca/cielo_conectado/parte-vii/vii-4-los-gateways-de-starlink-banda-ka-banda-w-y-la-ver), [Puntos de presencia y fibra: dónde el satélite se conecta a internet](/biblioteca/cielo_conectado/parte-vii/vii-9-puntos-de-presencia-y-fibra-donde-el-satelite-se-c), [Láser en todas partes: la red óptica como columna vertebral](/biblioteca/cielo_conectado/parte-xii/xii-7-laser-en-todas-partes-la-red-optica-como-columna-v), [Derechos de aterrizaje: el permiso país por país](/biblioteca/cielo_conectado/parte-x/x-6-derechos-de-aterrizaje-el-permiso-pais-por-pais)
