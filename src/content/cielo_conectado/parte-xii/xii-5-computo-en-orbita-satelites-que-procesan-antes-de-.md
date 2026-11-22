---
titulo: 'Cómputo en órbita: satélites que procesan antes de bajar'
parte: XII
parte_titulo: ¿Qué viene hasta 2035?
orden: 139
---

*Un satélite que ve un incendio no necesita mandar cien terabytes de fotos; le basta mandar una línea: "fuego en estas coordenadas".*

En 2026, NVIDIA tiene una página entera dedicada al "cómputo espacial". Ahí cuenta que SpaceX diseñó con ella Starmind AI1, una carga de cómputo para satélites basada en Vera Rubin NVL72, la misma arquitectura de sus servidores de inteligencia artificial en tierra. Kepler Communications usa módulos Jetson Orin para montar lo que llama "la primera infraestructura de nube en el espacio", procesando datos a lo largo de su constelación óptica. Planet, Axiom Space, Starcloud y otros figuran como socios. La empresa que domina los chips de IA en tierra decidió que el próximo datacenter también puede estar en órbita.

La idea es sencilla. Los sensores en órbita generan más datos de los que conviene bajar. Si el satélite procesa a bordo, baja solo el resultado, y según NVIDIA la demora entre captar y entregar la información pasa "de horas a minutos". El ejemplo que usa es el de imágenes ópticas e infrarrojas: detectar incendios o daños en infraestructura en órbita, en vez de bajar "cientos de terabytes de datos crudos".

## La cuenta que explica el interés

Un satélite de órbita baja ve una estación terrena unos 10 minutos por pasada, según la Oficina de Rendición de Cuentas de EE.UU. (GAO). Con un enlace de 2,5 Gbps, la tasa del estándar óptico militar de la SDA, cada pasada baja unos 190 gigabytes: 600 segundos por 2,5 gigabits, dividido por ocho. Cien terabytes exigirían más de 500 pasadas. Un mensaje con coordenadas y una imagen recortada cabe en una sola, con espacio de sobra.

Esa es la razón de negocio. Bajar datos cuesta tiempo de antena, espectro y capacidad de enlace, y el cómputo a bordo cambia qué se baja, no si se baja. NVIDIA ofrece tres niveles de hardware: Jetson Orin para tareas de visión y navegación en satélites chicos, IGX Thor para sistemas críticos con arranque seguro y el módulo Space-1 Vera Rubin, que según la empresa da hasta 25 veces más cómputo de IA por GPU para "datacenters orbitales". Son cifras del fabricante, no mediciones independientes.

## No solo imágenes: también la red

El cómputo a bordo no es exclusivo de la observación de la Tierra. En comunicaciones llega por dos vías. La primera es el satélite definido por software: sus haces, frecuencias y potencias se cambian desde tierra porque el satélite tiene procesadores reprogramables (ver [Satélites definidos por software: la promesa y los retrasos](/biblioteca/cielo_conectado/parte-iii/iii-11-satelites-definidos-por-software-la-promesa-y-los-)). Lockheed Martin ofrece su plataforma SmartSat con procesamiento de datos en el borde y actualizaciones de ciberdefensa después del lanzamiento, según Woodrow Scientific.

La segunda vía viene del estándar celular. La Release 18 del 3GPP incorporó funciones de plano de usuario a bordo: el satélite procesa el tráfico de los teléfonos localmente, sin mandarlo a un núcleo de red lejano en tierra, para bajar la latencia. La Release 19 sube la estación base completa al satélite (ver [Del 5G NTN al 6G: el calendario del 3GPP hasta 2030](/biblioteca/cielo_conectado/parte-xii/xii-4-del-5g-ntn-al-6g-el-calendario-del-3gpp-hasta-2030)). Funciones que hoy viven en el datacenter del operador móvil empiezan a tener una versión en órbita.

## El riesgo de reprogramar en el cielo

Nada de esto es gratis. El hardware debe resistir radiación y cambios extremos de temperatura, y reprogramar un circuito en órbita es la operación más riesgosa del software espacial: una carga corrupta puede dejar un subsistema inutilizado sin posibilidad de repararlo, advierte Woodrow Scientific. La misión OPS-SAT de la Agencia Espacial Europea (ESA) lo probó a fondo: en cuatro años y medio corrió 284 experimentos, reprogramó su chip en vuelo y actualizó redes neuronales hasta terminar en mayo de 2024.

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_6795b15a15af.jpg" alt="Banco de pruebas en tierra de OPS-SAT, con el sello de la ESA. Esta electrónica reprogramable tenía una réplica en órbita: allí corrió 284 experimentos de software." loading="lazy" /><figcaption>Banco de pruebas en tierra de OPS-SAT, con el sello de la ESA. Esta electrónica reprogramable tenía una réplica en órbita: allí corrió 284 experimentos de software. <span class="credito">Fuente: ESA (CC BY-SA 3.0 IGO)</span></figcaption></figure>



<aside class="recuadro sirve">
<p class="recuadro-t">¿Qué parte del negocio de tierra se traslada al espacio?</p>


Se traslada el primer filtro: decidir qué dato vale la pena bajar. Eso le quita volumen al enlace de bajada por misión, pero no le quita trabajo a la tierra. La NASA advierte lo contrario: más procesamiento y almacenamiento a bordo exigirán más capacidad para bajar datos, porque habrá más satélites y más productos. NVIDIA, de hecho, vende en ambos lados: módulos para órbita y servidores que procesan imágenes en tierra hasta 100 veces más rápido que los sistemas con CPU. Para un operador de estaciones o de nube, el cómputo en órbita cambia qué vende (respuestas en vez de bytes), no si vende.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Firefly Aerospace integra módulos Jetson de NVIDIA en su nave Elytra para procesar imágenes de la Luna en órbita y venderlas como servicio. El cómputo en el borde ya no se queda en la Tierra: llega hasta el espacio cislunar.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Space-1 Vera Rubin:** hasta 25 veces más cómputo de IA por GPU (dato de NVIDIA).
- **Procesamiento en tierra con RTX PRO 6000:** hasta 100 veces más rápido que sistemas con CPU (dato de NVIDIA).
- **Pasada típica sobre una estación en órbita baja:** unos 10 minutos (GAO).
- **OPS-SAT (ESA):** 284 experimentos en 4,5 años; fin de misión en mayo de 2024.
- [Space Computing: On-Orbit AI & Accelerated Computing](https://www.nvidia.com/en-us/edge-computing/space-computing/) — NVIDIA, 2026 (S0021): productos, socios y casos de uso del cómputo en órbita.
- [Software Defined Satellites: Architecture & Challenges (2026)](https://woodrowscientific.com/blog/satellites-reconfigurable-via-software-updates) — Woodrow Scientific, 2026 (S0020): cómo funciona el procesamiento a bordo y sus riesgos.
- [5G NR Non-Terrestrial Networks](https://arxiv.org/pdf/2601.04882) — arXiv / npj Wireless Communications, 2026 (S0071): funciones de red a bordo en las releases 18 y 19.
- [SOA: Ground Data Systems and Mission Operations](https://www.nasa.gov/wp-content/uploads/2026/05/11-soa-ground-data-systems-2026-final.pdf) — NASA, 2026 (S0116): por qué el procesamiento a bordo exigirá más a la tierra.
- [GAO-25-106838, Laser Communications](https://files.gao.gov/reports/GAO-25-106838/index.html) — GAO, 2025 (S0092): ventanas de contacto y tasas del estándar óptico de la SDA.

</aside>

**Puertas:** [Satélites definidos por software: la promesa y los retrasos](/biblioteca/cielo_conectado/parte-iii/iii-11-satelites-definidos-por-software-la-promesa-y-los-), [Datacenters y cómputo: del gateway al borde de la nube](/biblioteca/cielo_conectado/parte-vii/vii-10-datacenters-y-computo-del-gateway-al-borde-de-la-n), [Estaciones como servicio: el mercado de alquilar antenas](/biblioteca/cielo_conectado/parte-vii/vii-5-estaciones-como-servicio-el-mercado-de-alquilar-an), [¿Datacenters en el espacio? Lo que hay detrás de la idea](/biblioteca/cielo_conectado/parte-xii/xii-6-datacenters-en-el-espacio-lo-que-hay-detras-de-la-), [Del 5G NTN al 6G: el calendario del 3GPP hasta 2030](/biblioteca/cielo_conectado/parte-xii/xii-4-del-5g-ntn-al-6g-el-calendario-del-3gpp-hasta-2030)
