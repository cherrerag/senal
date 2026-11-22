---
titulo: 'KA-SAT, 24 de febrero de 2022: el ciberataque que apagó módems en Europa'
parte: XI
parte_titulo: ¿Qué riesgos amenazan a las redes satelitales?
orden: 131
---

*El satélite siguió funcionando toda la mañana; lo que dejó de funcionar fueron decenas de miles de módems en tierra, a los que alguien les borró la memoria con comandos que la propia red consideraba legítimos.*

<div class="galeria"><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_62d3beaf689b.jpg" alt="Los haces puntuales de KA-SAT sobre Europa y el Mediterráneo; los colores indican la reutilización de frecuencias. El ataque no tocó el satélite ni estos haces: cayeron los módems en tierra." loading="lazy" /><figcaption>Los haces puntuales de KA-SAT sobre Europa y el Mediterráneo; los colores indican la reutilización de frecuencias. El ataque no tocó el satélite ni estos haces: cayeron los módems en tierra. <span class="credito">Fuente: Axlsite / Wikimedia Commons (CC BY-SA 3.0)</span></figcaption></figure><figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_dee8ff9fbc33.jpg" alt="Un kit doméstico de Tooway, la marca con que se vendía el servicio de KA-SAT: plato, bloque de radio y módem. Eran equipos de esta clase los que el atacante dejó sin memoria." loading="lazy" /><figcaption>Un kit doméstico de Tooway, la marca con que se vendía el servicio de KA-SAT: plato, bloque de radio y módem. Eran equipos de esta clase los que el atacante dejó sin memoria. <span class="credito">Fuente: Antoniodibacco / Wikimedia Commons (CC BY-SA 4.0)</span></figcaption></figure><p class="galeria-pie">El ataque ocurrió en tierra, no en el espacio. A la izquierda, la cobertura de KA-SAT sobre Europa; a la derecha, un kit doméstico del tipo cuyos módems quedaron sin memoria.</p></div>


La madrugada del 24 de febrero de 2022, el día en que Rusia invadió Ucrania†, empezó en una red de banda ancha que pocos conocían por su nombre. KA-SAT era un satélite en banda Ka que Eutelsat había puesto en servicio comercial el 31 de mayo de 2011. En abril de 2021, Viasat compró el negocio mayorista de banda ancha asociado, junto con el satélite y su infraestructura terrestre. Pero la operación del segmento terrestre seguía en manos de Skylogic, una filial de Eutelsat, bajo un acuerdo de transición. Los clientes eran sobre todo hogares que compraban el servicio a distribuidores con la marca Tooway.

## La cronología

A las 03:02 UTC, Viasat y Skylogic detectaron grandes volúmenes de tráfico malicioso que salía de varios módems SurfBeam2 y SurfBeam2+ ubicados en Ucrania. Era un ataque de denegación de servicio desde adentro: el tráfico dificultaba que los módems legítimos se mantuvieran en línea. Cada vez que los técnicos sacaban de la red a un módem atacante, aparecían otros. Al mismo tiempo comenzó una caída gradual del número de módems conectados en esa partición de la red, la dedicada a clientes residenciales.

A las 04:15 UTC vino el golpe principal. Durante unos 45 minutos, grandes cantidades de módems en buena parte de Europa salieron de la red y no intentaron volver a entrar. Al final, decenas de miles quedaron fuera de servicio: la mayoría de los módems activos en Ucrania y una cantidad sustancial en el resto de Europa. Los clientes de movilidad y de gobierno que Viasat gestionaba directamente en el mismo satélite no se vieron afectados.

## Cómo entraron

La investigación, hecha con la firma de respuesta a incidentes Mandiant, encontró una intrusión por tierra. El atacante aprovechó una mala configuración en un equipo VPN para entrar de forma remota al segmento de gestión de confianza de la red. Desde ahí se movió hacia el segmento usado para administrar y operar la red, y ejecutó comandos de gestión legítimos sobre una gran cantidad de módems a la vez. Los comandos sobrescribieron datos clave en la memoria flash de los equipos. Los módems no quedaron destruidos: un reinicio de fábrica los recuperaba, y algunos volvieron con actualizaciones por aire. Pero donde eso no alcanzaba para restablecer el servicio a tiempo, Viasat optó por enviar equipos nuevos: casi 30.000 módems despachados a sus distribuidores.

Viasat afirmó que no hubo evidencia de acceso a datos de usuarios, ni de que el satélite o su infraestructura terrestre de apoyo hubieran sido comprometidos, ni de manipulación del firmware o de la cadena de suministro. En agosto de 2023, según el CSIS, líderes de Viasat y de la Agencia de Seguridad Nacional de Estados Unidos (NSA) presentaron un análisis según el cual a los atacantes rusos les bastaron 45 minutos para desplegar el código malicioso que dejó fuera de línea a 45.000 módems.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Cuál es el eslabón más débil de una red satelital?</p>


El plano de gestión en tierra. Para tumbar el servicio no hizo falta un arma antisatélite, ni bloquear la señal, ni siquiera tocar la radiofrecuencia. Bastó una VPN mal configurada y una red de gestión que confiaba en sí misma. El caso deja tres lecciones para quien diseña o compra un segmento terrestre. La red de gestión debe estar segmentada y vigilada como si el atacante ya estuviera adentro. Los comandos masivos sobre terminales necesitan controles adicionales, aunque sean "legítimos". Y los acuerdos de transición, cuando un tercero opera la tierra de otro, son momentos de máxima exposición. También hay una lección comercial: en un modelo mayorista, el operador no conoce al cliente final, y la recuperación depende de distribuidores que sí lo conocen.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


KA-SAT no fue un caso aislado. En junio de 2023, hackers que decían estar ligados al grupo Wagner afirmaron haber interrumpido redes satelitales rusas, y el proveedor Dozor-Teleport, que da servicio a militares y a la seguridad estatal rusa, mostró caídas de conectividad ese mismo mes, según el CSIS. En Estados Unidos, la comisión de Comercio del Senado informó favorablemente el 14 de septiembre de 2026 un proyecto de Ley de Ciberseguridad Satelital, que pide un informe sobre el apoyo federal a la ciberseguridad de los sistemas comerciales. Es un proyecto propuesto, todavía no es ley.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Inicio del ataque:** 24 de febrero de 2022, 03:02 UTC; caída masiva desde las 04:15 UTC durante unos 45 minutos.
- **Vía de entrada:** mala configuración de un equipo VPN; acceso al segmento de gestión y movimiento lateral.
- **Módems de reemplazo:** casi 30.000 enviados a distribuidores.
- **Cifra del análisis Viasat-NSA (2023):** 45.000 módems fuera de línea.
- [KA-SAT Network cyber attack overview](https://www.viasat.com/perspectives/corporate/2022/ka-sat-network-cyber-attack-overview/) — Viasat, 2022 (S0011): el relato oficial con horas, partición afectada y lecciones.
- [Space Threat Assessment 2024](https://aerospace.csis.org/wp-content/uploads/2024/04/240417_Swope_SpaceThreatAssessment_2024.pdf) — CSIS, 2024 (S0099): el análisis Viasat-NSA y otros ciberataques a redes satelitales.
- [S. Rept. 119-141, Satellite Cybersecurity Act of 2025](https://www.govinfo.gov/app/details/CRPT-119srpt141/CRPT-119srpt141) — Senado de Estados Unidos, 2026 (S0098): el estado del proyecto de ley.

</aside>

**Puertas:** [Lo que puede apagar una red satelital](/biblioteca/cielo_conectado/parte-xi/xi-1-lo-que-puede-apagar-una-red-satelital), [Armas contra satélites y amenazas de contraespacio](/biblioteca/cielo_conectado/parte-xi/xi-10-armas-contra-satelites-y-amenazas-de-contraespacio), [Lo que no se ve: gateways, telepuertos, fibra y nube](/biblioteca/cielo_conectado/parte-vii/vii-1-lo-que-no-se-ve-gateways-telepuertos-fibra-y-nube), [Terminales de usuario: de la parábola a la antena plana electrónica](/biblioteca/cielo_conectado/parte-vii/vii-11-terminales-de-usuario-de-la-parabola-a-la-antena-p), [Eutelsat: geoestacionario, OneWeb y un Estado como socio](/biblioteca/cielo_conectado/parte-iii/iii-6-eutelsat-geoestacionario-oneweb-y-un-estado-como-s)
