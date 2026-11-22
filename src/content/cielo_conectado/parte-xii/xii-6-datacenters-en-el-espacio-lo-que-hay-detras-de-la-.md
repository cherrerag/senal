---
titulo: ¿Datacenters en el espacio? Lo que hay detrás de la idea
parte: XII
parte_titulo: ¿Qué viene hasta 2035?
orden: 140
---

*Hay más de 300.000 "datacenters orbitales" anunciados y ninguno publicado con planos, costos y fecha: es la idea con más prensa y menos ingeniería del sector.*

En noviembre de 2026, un informe de Novaspace escrito con el fabricante suizo SWISSto12 pone en una misma lámina las cuatro tecnologías que definirán las comunicaciones satelitales. Tres tienen cifras razonables: miles de satélites directo al celular, miles de millones de dispositivos IoT, decenas de miles de terminales láser. La cuarta dice: "más de 300.000 datacenters orbitales anunciados". La cifra no es un pronóstico de Novaspace; es la suma de lo que distintas empresas dicen que van a lanzar.

Para dimensionarla basta una cuenta. En 2025, el año récord de la historia, se desplegaron 4.434 satélites, según la Asociación de la Industria Satelital (SIA). A ese ritmo, poner 300.000 objetos en órbita tomaría unos 68 años, sin lanzar ningún otro satélite. El anuncio describe una ambición, no un plan industrial.

## Lo que está demostrado

Hay que separar dos cosas que la prensa mezcla. La primera es el cómputo a bordo para datos que nacen en el espacio: imágenes, radar, señales de radio. Eso ya funciona y tiene clientes (ver [Cómputo en órbita: satélites que procesan antes de bajar](/biblioteca/cielo_conectado/parte-xii/xii-5-computo-en-orbita-satelites-que-procesan-antes-de-)). Kepler procesa datos en su constelación óptica con módulos Jetson Orin de NVIDIA, Planet usa GPU para convertir imágenes en información y la misión OPS-SAT de la ESA corrió 284 experimentos de software en órbita.

La segunda es el datacenter orbital propiamente tal: satélites con hardware de clase servidor para correr cargas de inteligencia artificial que hoy viven en tierra. NVIDIA lo ofrece con su módulo Space-1 Vera Rubin y nombra como socios a Axiom Space, Cowboy Space (antes Aetherflux), Sophia Space, Starcloud, Vast y Muon Space. SpaceX diseñó con NVIDIA la carga de cómputo Starmind AI1. En las fuentes de este atlas no hay fecha de lanzamiento, costo por satélite ni contrato de cliente publicado para ninguno de estos proyectos.

## La física que nadie publica

Las razones habituales a favor son la energía solar abundante y el espacio libre†. El problema contrario es el calor: en el vacío no hay aire ni agua que se lleven el calor de los chips, y todo debe irradiarse con radiadores grandes†. Un datacenter terrestre de IA gasta una parte importante de su energía en enfriarse†; en órbita, ese problema cambia de forma pero no desaparece†. Ninguna de las fuentes del corpus publica un balance de energía, masa y costo de un datacenter orbital, y esa ausencia es en sí misma un dato.

Queda además la conexión. Un datacenter en órbita que atiende clientes en tierra necesita enlaces enormes de bajada o una red láser que lo una con gateways. SES ya lo ve como mercado: en su informe anual de 2025 dice que la capacidad óptica de su red de órbita media de próxima generación, meoSphere, servirá a la demanda de "datacenters espaciales emergentes". Si el datacenter orbital despega, el negocio de transporte para los operadores de satélites viene con él.

## Financiado frente a propuesto

Con lo publicado a noviembre de 2026, el cuadro es este. **Aprobado y financiado:** productos de cómputo para satélites (NVIDIA, EnduroSat, que preintegra esos módulos en sus plataformas) y procesamiento a bordo en misiones de observación y comunicaciones. **Propuesto:** constelaciones de datacenters orbitales para cargas terrestres, sin calendario ni costos públicos en el corpus.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Hay algún caso de negocio que cierre antes de 2035?</p>


Uno sí: procesar en órbita los datos que ya están en órbita, porque ahorra bajada y gana tiempo. Ese caso tiene clientes de defensa, de emergencias y de observación. El otro, mudar al espacio la nube de IA que hoy corre en tierra, no muestra en las fuentes ni costos ni contratos. Para un proveedor de comunicaciones, la oportunidad concreta antes de 2035 no es construir datacenters orbitales, sino transportar sus datos: láser entre satélites, relay y estaciones en tierra.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


Lunar Outpost planea usar módulos Jetson y el software CUDA de NVIDIA para navegar y mapear el terreno de forma autónoma en la superficie de la Luna, empezando con su misión Lunar Voyage 2. El primer "borde de la nube" fuera de la Tierra podría estar sobre ruedas.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Datacenters orbitales anunciados:** más de 300.000 (Novaspace, 2026).
- **Satélites desplegados en 2025:** 4.434, récord histórico (SIA).
- **Socios de NVIDIA en datacenters orbitales:** Axiom Space, Cowboy Space, Firefly Aerospace, Kepler, Muon Space, Sophia Space, Starcloud y Vast.
- [The Next Chapter of Satellite Communications](https://nova.space/wp-content/uploads/2026/11/White-Paper_SWISSto12_The-Next-Chapter-of-Satellite-Communications_Novaspace.pdf) — SWISSto12 y Novaspace, 2026 (S0048): la cifra de datacenters anunciados junto a las otras tecnologías clave.
- [Space Computing: On-Orbit AI & Accelerated Computing](https://www.nvidia.com/en-us/edge-computing/space-computing/) — NVIDIA, 2026 (S0021): productos y socios del cómputo orbital.
- [SES Annual Report 2025](https://www.ses.com/sites/ses_v2/files/investor-files/2026-03/SES_AR25_2MAR26_vs21_web-LR.pdf) — SES, 2026 (S0067): meoSphere y la demanda de transporte óptico para datacenters espaciales.
- [State of the Satellite Industry Report 2026](https://sia.org/affordability-productivity-drive-historic-satellite-industry-growth-satellite-industry-association-releases-29th-annual-state-of-the-satellite-industry-report/) — SIA, 2026 (S0130): cuántos satélites se lanzan de verdad cada año.

</aside>

**Puertas:** [Cómputo en órbita: satélites que procesan antes de bajar](/biblioteca/cielo_conectado/parte-xii/xii-5-computo-en-orbita-satelites-que-procesan-antes-de-), [Lo solo anunciado: proyectos con papeles ante la UIT pero sin plata](/biblioteca/cielo_conectado/parte-xii/xii-3-lo-solo-anunciado-proyectos-con-papeles-ante-la-ui), [Datacenters y cómputo: del gateway al borde de la nube](/biblioteca/cielo_conectado/parte-vii/vii-10-datacenters-y-computo-del-gateway-al-borde-de-la-n), [Láser a 100 Gbps: el relay óptico de próxima generación](/biblioteca/cielo_conectado/parte-vi/vi-6-laser-a-100-gbps-el-relay-optico-de-proxima-genera), [Láser en todas partes: la red óptica como columna vertebral](/biblioteca/cielo_conectado/parte-xii/xii-7-laser-en-todas-partes-la-red-optica-como-columna-v)
