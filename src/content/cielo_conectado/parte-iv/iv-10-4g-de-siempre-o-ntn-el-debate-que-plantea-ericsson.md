---
titulo: ¿4G de siempre o NTN? El debate que plantea Ericsson
parte: IV
parte_titulo: ¿Cómo llega el satélite directo al celular y a las cosas?
orden: 51
---

*Hay dos maneras de que un satélite le hable a un teléfono: hacerse pasar por una antena 4G cualquiera o esperar a que el teléfono aprenda a hablar con satélites; la primera llega hoy a miles de millones de equipos, la segunda funciona mejor.*

En diciembre de 2025, seis investigadores de Ericsson publicaron en la revista técnica de la empresa una comparación que ordena el debate. Ericsson vende equipos de red a las operadoras y trabaja en el estándar, así que su mirada es la de quien tiene que integrar el satélite a una red móvil real. Su conclusión cabe en una tabla: el **4G sin modificar** es la solución pragmática de corto plazo; el **NTN** del 3GPP es la apuesta de largo plazo, "a prueba de futuro".

## El atajo: que el teléfono no se entere

El primer camino es el de Starlink, AST y Lynk. El satélite emite una señal 4G LTE normal en una banda de la operadora socia, y el teléfono la trata como una antena más. Su enorme ventaja es la base instalada: Ericsson proyectaba 8.800 millones de suscripciones móviles en el mundo a fines de 2025, y buena parte de esos equipos ya sirven.

El costo está en la física. Para que un teléfono que no sabe nada de satélites funcione, la red tiene que corregir el Doppler y la demora antes de transmitir. Pero esa corrección solo puede ser perfecta en un punto de referencia de cada haz. A medida que el usuario se aleja de ese punto, el error residual crece, y en los bordes puede superar las tolerancias del LTE. El primer paso que falla es el acceso inicial: el teléfono manda su señal de entrada, la estación base no la reconoce y el intento se repite una y otra vez.

Las soluciones existen, pero cuestan. Haces más chicos reducen el error, pero exigen antenas más grandes, más haces y más satélites. Limitar los ángulos de apuntamiento también funciona, pero achica la zona que cubre cada satélite. Hay más límites: la demora de ida y vuelta debe caber en los tiempos de retransmisión del LTE, lo que restringe la altura de la órbita, y los traspasos entre celdas fallan más porque, vista desde el espacio, la señal tiene casi la misma fuerza en toda la celda.

## El camino largo: un teléfono que sabe que habla con el cielo

En el NTN, el teléfono usa su GPS y la posición del satélite para corregirse solo. Eso libera el diseño: sirve en órbita baja, media o geoestacionaria, y permite reutilizar satélites existentes para mensajes y voz. El problema es el ecosistema. Hace falta un chip del Release 17 o posterior, y hoy pocos equipos lo traen.

El espectro agrega otra diferencia. El 4G sin modificar usa bandas móviles sin atribución satelital, bajo la regla de no interferir y no reclamar protección, con zonas de exclusión del tamaño de un haz en las fronteras. El NTN usa las bandas del servicio móvil por satélite, con un marco internacional ya establecido.

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0073_p006_1abdc34edbf0.jpg" alt="La red vista desde el satélite: celdas fijas proyectadas sobre la Tierra, cada una con su área de seguimiento, y una estación en tierra que las une al núcleo. En una frontera, como la de EE.UU. y Canadá, hay que cortar la celda." loading="lazy" /><figcaption>La red vista desde el satélite: celdas fijas proyectadas sobre la Tierra, cada una con su área de seguimiento, y una estación en tierra que las une al núcleo. En una frontera, como la de EE.UU. y Canadá, hay que cortar la celda. <span class="credito">Fuente: Cisco, white paper de redes no terrestres, 2025</span></figcaption></figure>


## ¿Qué le conviene a una operadora con clientes de gama baja?

La GSMA da una pista importante: el servicio en bandas móviles funciona con los equipos más baratos, usados y reacondicionados, mientras que el espectro satelital exige hardware presente solo en modelos de gama alta. Para una operadora cuya base está en teléfonos económicos, el 4G sin modificar es hoy la única forma de llegar a la mayoría de sus clientes.

Pero "sin modificar" no significa "cualquier teléfono". En Perú, Entel aclara que la compatibilidad depende del modelo y de que el fabricante habilite el software; algunos equipos solo reciben SMS y otros también datos. En Chile, Subtel exige equipo compatible y la última actualización. La decisión práctica, entonces, no es elegir un camino para siempre: es usar el 4G para el parque actual y asegurarse de que los contratos satelitales no cierren la puerta al NTN cuando los teléfonos se renueven.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso para qué sirve?</p>


Para una operadora, entender este debate permite negociar mejor. Un socio con 4G sin modificar da cobertura inmediata pero con rendimiento limitado y diseño rígido; un socio con NTN rinde más pero depende de que los clientes cambien de teléfono. Ericsson anticipa que el 6G incorporará el satélite desde el inicio, así que el NTN es el destino; el 4G sin modificar es el puente.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


La señal satelital llega casi con la misma fuerza a todo el interior de una celda, porque la distancia al satélite es mucho mayor que el ancho de la celda. Para un teléfono acostumbrado a cambiar de antena cuando una se debilita y otra se fortalece, eso es desorientador: no encuentra la diferencia que le indica cuándo saltar.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Publicación:** Ericsson Technology Review n.º 10, diciembre de 2025
- **Suscripciones móviles proyectadas a fines de 2025:** 8.800 millones (Ericsson)
- **Procesos de retransmisión en NTN:** de 16 a 32
- [Satellite direct-to-device: 4G or 3GPP NTN?](https://www.ericsson.com/4aed3b/assets/local/reports-papers/ericsson-technology-review/docs/2025/satellite-direct-to-device-communication.pdf) — Ericsson, 2025 (S0075): la comparación completa, con la tabla de ventajas y desventajas.
- [Harnessing Spectrum Diversity (Spectrum for D2D)](https://www.gsma.com/connectivity-for-good/spectrum/wp-content/uploads/2025/09/Spectrum-for-D2D-Public-Policy-Paper.pdf) — GSMA, 2025 (S0077): por qué el espectro móvil sirve a los teléfonos baratos.
- [Starlink con Entel Perú](https://www.entel.pe/starlink) — Entel Perú, 2026 (S0040): la compatibilidad real de los equipos.
- [Satellite communication benchmarking with terrestrial 5G networks](https://www.nokia.com/asset/i/215031) — Nokia, 2025 (S0080): los dos enfoques vistos por otro proveedor de redes.

</aside>

**Puertas:** [3GPP NTN: qué cambia cuando el satélite entra al estándar](/biblioteca/cielo_conectado/parte-iv/iv-9-3gpp-ntn-que-cambia-cuando-el-satelite-entra-al-es), [Starlink Direct to Cell: del SMS a WhatsApp](/biblioteca/cielo_conectado/parte-iv/iv-2-starlink-direct-to-cell-del-sms-a-whatsapp), [Los límites del directo al celular según la GSMA](/biblioteca/cielo_conectado/parte-iv/iv-11-los-limites-del-directo-al-celular-segun-la-gsma), [Del 5G NTN al 6G: el calendario del 3GPP hasta 2030](/biblioteca/cielo_conectado/parte-xii/xii-4-del-5g-ntn-al-6g-el-calendario-del-3gpp-hasta-2030)
