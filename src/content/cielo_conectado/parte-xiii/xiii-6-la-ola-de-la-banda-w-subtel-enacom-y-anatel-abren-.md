---
titulo: 'La ola de la banda W: Subtel, ENACOM y Anatel abren espectro'
parte: XIII
parte_titulo: ¿Qué pasa en Chile y América Latina?
orden: 150
---

*En 2026, tres reguladores sudamericanos abrieron frecuencias por encima de los 90 GHz casi al mismo tiempo, y el primero en usarlas tiene nombre y apellido.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_50b58f1caddf.jpg" alt="Antenas de 12 metros de ALMA en el llano de Chajnantor, a 5.000 metros en el desierto de Atacama. Escuchan las mismas ondas milimétricas que ahora usan los gateways satelitales, y por eso Chile limita dónde pueden instalarse." loading="lazy" /><figcaption>Antenas de 12 metros de ALMA en el llano de Chajnantor, a 5.000 metros en el desierto de Atacama. Escuchan las mismas ondas milimétricas que ahora usan los gateways satelitales, y por eso Chile limita dónde pueden instalarse. <span class="credito">Fuente: ESO/C. Malin (CC BY 4.0)</span></figcaption></figure>


Durante décadas, el satélite comercial de la región vivió en las bandas Ku y Ka, entre unos 12 y 30 GHz†. En 2026 el techo subió. El 2 de julio, Subtel publicó en el Diario Oficial una modificación a la norma técnica del servicio fijo por satélite que incorpora la banda W y anunció que en los días siguientes sumaría la banda V. En Argentina, el Ente Nacional de Comunicaciones (ENACOM) autorizó a Starlink Argentina a operar en la banda W, entre 92 y 114,25 GHz. Y el 19 de noviembre, la Agencia Nacional de Telecomunicações de Brasil (Anatel) formalizó nuevas frecuencias en Ku, Ka y Q/V para Starlink, más banda S para el servicio directo al celular.

## Para qué sirve la banda W

La banda W no es para la antena del cliente: es para los *gateways*, las estaciones terrenas que conectan la constelación con internet. ENACOM lo dice con precisión: las frecuencias son para "Gateways Versión 5" (ver [Los gateways de Starlink: banda Ka, banda W y la versión 5](/biblioteca/cielo_conectado/parte-vii/vii-4-los-gateways-de-starlink-banda-ka-banda-w-y-la-ver)). Según lo que la empresa informó al regulador argentino, el cambio permite triplicar la capacidad de la red, reutilizar más el espectro, atender más usuarios por zona y reducir el riesgo de interferencias. Si el enlace entre gateway y satélite transporta más, cada sitio en tierra sirve a más clientes.

Hay una condición argentina que vale la pena leer dos veces: la autorización usa segmentos de frecuencia "aún no atribuidos al servicio satelital en el país". El regulador abrió espectro nuevo a pedido de un operador, con la obligación de no interferir, respetar los límites de radiaciones no ionizantes y adecuarse a normas futuras.

## Tres caminos distintos

| | Chile (Subtel) | Argentina (ENACOM) | Brasil (Anatel) |
|---|---|---|---|
| Instrumento | Norma técnica general del servicio fijo por satélite | Autorización a Starlink Argentina | Modificación del derecho de explotación de Starlink |
| Bandas | W ahora; V anunciada | W (92–114,25 GHz) | Ku, Ka y Q/V (5 subbandas de subida, 4 de bajada) y banda S |
| A quién aplica | Todos los operadores, incluidos Starlink, HughesNet y nuevos entrantes | Starlink | Starlink (la banda S también para AST SpaceMobile) |
| Fecha | 2 de julio de 2026 | 2026 | 19 de noviembre de 2026 |

El proceso brasileño muestra el ritmo de un regulador grande. Starlink pidió las frecuencias en enero de 2026, hubo consulta pública en febrero y el Consejo Directivo de Anatel aprobó el pedido el 2 de octubre. La publicación llegó el 19 de noviembre: unos diez meses en total. Las bandas se usan en todo el territorio, sin exclusividad, por el plazo que le queda a la autorización de abril de 2025. Y hay una condición técnica: Starlink deberá presentar el dictamen definitivo de la Unión Internacional de Telecomunicaciones (UIT) sobre el cumplimiento de los límites de interferencia de una de sus redes (ver [Compartir el cielo: los límites EPFD y la pelea Viasat contra SpaceX](/biblioteca/cielo_conectado/parte-x/x-5-compartir-el-cielo-los-limites-epfd-y-la-pelea-via)).

## Chile ya tenía una frontera: ALMA

Antes de la banda W, Chile ya había autorizado gateways en banda E (71–76 y 81–86 GHz) para Starlink, con una restricción geográfica que solo tiene sentido en este país. Según el decreto 234 de 2025, esos gateways solo pueden instalarse desde la Región de Coquimbo al sur, para evitar interferencias al radiotelescopio ALMA. Las ondas milimétricas que sirven para transportar datos entre la Tierra y el satélite son vecinas de las que la radioastronomía usa para mirar el universo† (ver [Radioastronomía en la CMR-27: las zonas silenciosas](/biblioteca/cielo_conectado/parte-xi/xi-12-radioastronomia-en-la-cmr-27-las-zonas-silenciosas)).

## ¿Más competencia o más concentración?

Subtel presentó su norma como una medida para "ampliar la competencia": aplica de manera general a todos los operadores y a los que lleguen. Es cierto en el papel. En la práctica, la banda W hoy la pide y la usa un solo operador, que es el que tiene gateways diseñados para ella. Argentina y Brasil lo hicieron explícito con autorizaciones a nombre de Starlink.

Brasil agrega otra capa. Desde el 1 de noviembre de 2021 rige una regla de "prioridad nacional" por orden de llegada: los operadores extranjeros que pidieron derechos de aterrizaje antes tienen preferencia. Telesat advierte en su informe anual que su constelación Lightspeed deberá operar sin causar interferencia ni reclamar protección frente a sistemas no geoestacionarios que pidieron antes. En espectro, llegar primero vale (ver [Derechos de aterrizaje: el permiso país por país](/biblioteca/cielo_conectado/parte-x/x-6-derechos-de-aterrizaje-el-permiso-pais-por-pais)).


<aside class="recuadro sirve">
<p class="recuadro-t">¿Abre la puerta a nuevos competidores o consolida al que ya está?</p>


Las dos cosas, en orden. Hoy consolida: el único con equipos listos para la banda W es Starlink, y en Brasil las reglas premian a quien llegó antes. Mañana puede abrir: la norma chilena es general y quien traiga gateways de nueva generación encontrará el espectro disponible sin pedir una excepción. Para un proveedor de tierra, la señal es clara: los próximos gateways de la región se construirán para bandas cada vez más altas.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


La autorización de Anatel de noviembre de 2026 permite usar las nuevas frecuencias para servicios fijos por satélite y, "cuando la regulación lo permita", también para servicios móviles. El regulador dejó la puerta entreabierta para un uso que todavía no reglamentó.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Chile:** norma técnica del servicio fijo por satélite actualizada el 2 de julio de 2026 (W; V anunciada)
- **Argentina:** banda W, 92–114,25 GHz, para gateways V5; capacidad ×3 según la empresa
- **Brasil:** pedido en enero de 2026, aprobación el 2 de octubre, publicación el 19 de noviembre
- **Chile, banda E:** gateways solo desde Coquimbo al sur, por ALMA (decreto 234 de 2025)
- [Subtel amplía la competencia en los servicios satelitales en Chile](https://www.subtel.gob.cl/subtel-amplia-la-competencia-en-los-servicios-satelitales-en-chile-e-incorpora-nuevas-bandas-para-mejorar-la-conectividad/) — Subtel, 2026 (S0042): la nueva norma y a quién aplica.
- [ENACOM autoriza a Starlink Argentina a operar en nuevas bandas](https://www.enacom.gob.ar/institucional/enacom-autoriza-a-starlink-argentina-a-operar-en-nuevas-bandas-de-frecuencia-satelital_n4841) — ENACOM, 2026 (S0033): la banda W para gateways V5 y sus condiciones.
- [Starlink recebe autorização para operar em novas faixas de frequência no Brasil](https://teletime.com.br/19/11/2026/starlink-faixas-brasil/) — Teletime, 2026 (S0041): el proceso de Anatel paso a paso.
- [Decreto 234 exento, Transportes (2025)](https://bcn.cl/q59Quw) — Ministerio de Transportes y Telecomunicaciones de Chile, 2025 (S0027): las condiciones técnicas de los gateways de Starlink en Chile.
- [Telesat Corporation 20-F 2025](https://www.telesat.com/wp-content/uploads/2025/05/3-Telesat-Corporation_20-F.pdf) — Telesat, 2025 (S0058): la regla brasileña de prioridad por orden de llegada.

</aside>

**Puertas:** [Los gateways de Starlink: banda Ka, banda W y la versión 5](/biblioteca/cielo_conectado/parte-vii/vii-4-los-gateways-de-starlink-banda-ka-banda-w-y-la-ver), [Compartir el cielo: los límites EPFD y la pelea Viasat contra SpaceX](/biblioteca/cielo_conectado/parte-x/x-5-compartir-el-cielo-los-limites-epfd-y-la-pelea-via), [Derechos de aterrizaje: el permiso país por país](/biblioteca/cielo_conectado/parte-x/x-6-derechos-de-aterrizaje-el-permiso-pais-por-pais), [Radioastronomía en la CMR-27: las zonas silenciosas](/biblioteca/cielo_conectado/parte-xi/xi-12-radioastronomia-en-la-cmr-27-las-zonas-silenciosas), [Cómo se habilita un operador satelital en Chile: concesiones y decretos](/biblioteca/cielo_conectado/parte-xiii/xiii-7-como-se-habilita-un-operador-satelital-en-chile-co)
