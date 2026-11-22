---
titulo: 'Datacenters y cómputo: del gateway al borde de la nube'
parte: VII
parte_titulo: ¿Qué hace falta en tierra para que todo esto funcione, y quién lo provee?
orden: 87
---

*Entre las direcciones de los gateways de Starlink en Estados Unidos aparecen Ashburn, Santa Clara, San José y Secaucus: el mapa de los datacenters, no el del campo.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_19a08fb59b05.jpg" alt="Vista aérea de centros de datos entre otros edificios comerciales cerca de Ashburn, en el condado de Loudoun (Virginia). Es el paisaje junto al que SpaceX tiene gateways de hasta 40 antenas: el telepuerto se mudó donde está el tráfico." loading="lazy" /><figcaption>Vista aérea de centros de datos entre otros edificios comerciales cerca de Ashburn, en el condado de Loudoun (Virginia). Es el paisaje junto al que SpaceX tiene gateways de hasta 40 antenas: el telepuerto se mudó donde está el tráfico. <span class="credito">Fuente: Theodore Christopher (Wikimedia Commons, CC0)</span></figcaption></figure>


Durante décadas el telepuerto se construía donde convenía a la antena: lejos de interferencias, con buena vista al cielo, en terreno barato. Hoy cada vez más estaciones terrenas se plantan donde conviene al tráfico, es decir, al lado de los centros de datos. La razón es la que se ve en la entrada sobre puntos de presencia: cada 100 km de fibra entre el gateway y el datacenter suman cerca de 1 ms de ida y vuelta, y Nokia atribuye parte de la latencia irregular de Starlink a la distancia entre sus estaciones y los datacenters de cada país. Si el destino del tráfico es la nube, lo más corto es bajar los datos ahí mismo.

## Las pistas en los permisos

Los permisos temporales que la FCC dio a SpaceX en 2025 lo muestran con nombres propios. Hay gateways de 40 antenas en Ashburn y Chantilly, en el norte de Virginia, la mayor concentración de datacenters del mundo†; en Santa Clara y San José, en Silicon Valley; en Secaucus y Edison, en Nueva Jersey, junto a los nodos que sirven a Nueva York†. El de Ashburn opera solo en banda E, la de más capacidad por antena. En el otro extremo, Hughes declara en su informe anual que en Cheyenne, Wyoming, tiene en el mismo lugar datacenter, gateways y operaciones.

La lógica se invierte del todo en AWS Ground Station: la antena es una extensión de la región de nube. Los datos bajan y entran directo a servidores y almacenamiento de Amazon, conectados por su red troncal global. Según la NASA, un cliente que baja terabytes diarios puede pasarlos sin escalas a herramientas de análisis y aprendizaje automático.

## Los datos de observación como carga

Para los satélites de comunicaciones, el datacenter es destino del tráfico de internet. Para los de observación de la Tierra, es la fábrica donde los datos crudos se vuelven producto. NVIDIA vende servidores de procesamiento en tierra para imágenes satelitales y afirma que son hasta 100 veces más rápidos que los sistemas basados en procesadores convencionales para analizar grandes archivos de imágenes. La entrega de datos entre regiones de AWS, que mueve los datos "en segundos" de una región a otra, apunta al mismo objetivo: empezar a procesar antes.

La alternativa que viene es procesar arriba y bajar menos. NVIDIA ya vende módulos para "datacenters orbitales" y menciona como socios a empresas como Starcloud, Axiom Space y Kepler Communications. A noviembre de 2026, esos datacenters espaciales son en su mayoría **propuestos**; la entrada sobre la idea revisa qué hay detrás. Por ahora, casi todo el cómputo sigue en tierra.

## Qué ventaja tiene un país con energía y cables

Un país atrae gateways y datacenters cuando junta cuatro cosas: energía abundante y barata, conexión internacional por cable submarino, clima favorable y reglas claras para instalar antenas. Chile es un caso en curso. El cable Humboldt, impulsado por el gobierno chileno, a través de Desarrollo País, y por Google, tendrá 14.800 km y unirá Valparaíso con Australia y luego con Asia, sin pasar por Norteamérica. Según la prensa especializada, el país ofrece energía solar y eólica y zonas frías que favorecen los datacenters. Y su regulación ya fija dónde pueden ir los gateways de mayor capacidad: los de banda E, desde la Región de Coquimbo al sur.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para quien construye o administra datacenters, cada constelación y cada operador de observación es un cliente potencial de espacio, energía y conexión cruzada. Para un país, juntar en el mismo lugar gateway, datacenter y salida internacional lo convierte en nodo regional: el tráfico de los vecinos puede bajar y procesarse ahí. Para un telepuerto tradicional aislado en el campo, el mensaje es incómodo: si no está conectado con baja latencia a un datacenter, pierde atractivo frente a los sitios que sí lo están.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


El regulador chileno no solo decide dónde van los gateways: el decreto que autorizó cuatro de Starlink en 2025 deja abierta la posibilidad de imponer ángulos mínimos de elevación a sus antenas para no interferir con el radiotelescopio ALMA. En Chile, la ubicación de un gateway también se negocia con la astronomía.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- [Public Notice SES-02744](https://docs.fcc.gov/public/attachments/DOC-409522A1.pdf) — FCC, 2025 (S0114): gateways de SpaceX en Ashburn, Chantilly, Santa Clara, San José, Secaucus y Edison.
- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): latencia y distancia entre estaciones terrenas y datacenters.
- [Space Computing: On-Orbit AI & Accelerated Computing](https://www.nvidia.com/en-us/edge-computing/space-computing/) — NVIDIA, 2026 (S0021): procesamiento en tierra y módulos para datacenters orbitales.
- [Proyecto Humboldt: el cable submarino que transformará el futuro tecnológico de Chile](https://www.trendtic.cl/2026/09/proyecto-humboldt-el-cable-submarino-que-transformara-el-futuro-tecnologico-de-chile/) — TrendTIC, 2026 (S0038): el cable de 14.800 km y las condiciones de Chile para datacenters.
- [EchoStar Corporation 10-K](https://www.sec.gov/Archives/edgar/data/1415404/000110465926108968/sats-20251231xars.pdf) — EchoStar, 2026 (S0062): datacenter y gateways de Hughes en Cheyenne.

</aside>

**Puertas:** [AWS Ground Station y la nube que baja del cielo](/biblioteca/cielo_conectado/parte-vii/vii-7-aws-ground-station-y-la-nube-que-baja-del-cielo), [Puntos de presencia y fibra: dónde el satélite se conecta a internet](/biblioteca/cielo_conectado/parte-vii/vii-9-puntos-de-presencia-y-fibra-donde-el-satelite-se-c), [Cómputo en órbita: satélites que procesan antes de bajar](/biblioteca/cielo_conectado/parte-xii/xii-5-computo-en-orbita-satelites-que-procesan-antes-de-), [¿Datacenters en el espacio? Lo que hay detrás de la idea](/biblioteca/cielo_conectado/parte-xii/xii-6-datacenters-en-el-espacio-lo-que-hay-detras-de-la-), [Cable Humboldt, datacenters y gateways: Chile como nodo](/biblioteca/cielo_conectado/parte-xiii/xiii-14-cable-humboldt-datacenters-y-gateways-chile-como-n)
