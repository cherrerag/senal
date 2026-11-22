---
titulo: 'Compartir el cielo: los límites EPFD y la pelea Viasat contra SpaceX'
parte: X
parte_titulo: ¿Quién pone las reglas del cielo?
orden: 119
---

*Viasat calculó que, frente a una antena en Miami, la segunda generación de Starlink superaría el límite de potencia permitido hasta 18,6 veces; SpaceX respondió que el límite es el problema.*

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/web_0940f6209d62.jpg" alt="Sobre el ayuntamiento de Tubinga, Alemania, una hilera tenue de puntos recorre el cielo nocturno: un tren de satélites Starlink. Cada vez que uno cruza la línea de vista de una antena geoestacionaria, su señal puede colarse en el receptor." loading="lazy" /><figcaption>Sobre el ayuntamiento de Tubinga, Alemania, una hilera tenue de puntos recorre el cielo nocturno: un tren de satélites Starlink. Cada vez que uno cruza la línea de vista de una antena geoestacionaria, su señal puede colarse en el receptor. <span class="credito">Fuente: Dktue (CC0)</span></figcaption></figure>


Un satélite geoestacionario está fijo sobre el ecuador, a casi 36.000 km. Las antenas que lo apuntan, desde una parábola de televisión hasta un telepuerto, miran siempre al mismo punto del cielo. Una constelación en órbita baja usa en buena parte las mismas bandas Ku y Ka. Cada vez que uno de sus satélites cruza la línea de vista entre la antena y el geoestacionario, su señal puede colarse en el receptor. Multiplicado por miles de satélites, el problema deja de ser ocasional.

## La regla: un techo de potencia sumada

Para ordenar esa convivencia, el Reglamento de Radiocomunicaciones de la UIT fija límites de **densidad de flujo de potencia equivalente**, EPFD por su sigla en inglés. La EPFD mide cuánta potencia suman todos los satélites de un sistema no geoestacionario (NGSO) en una antena geoestacionaria (GSO) de referencia, en el peor caso y durante qué porcentaje del tiempo. Los límites están en el Artículo 22 y en la Resolución 76 del Reglamento, y la FCC los incorporó a sus reglas. Se adoptaron en la CMR-2000 †, cuando las grandes constelaciones de entonces todavía eran planes.

En Estados Unidos, un operador de constelación que use la banda de 10,7 a 30 GHz debe certificar que cumplirá esos límites. Antes de iniciar el servicio debe obtener de la UIT un dictamen "favorable" o "favorable con condiciones", verificado con el software oficial de la UIT. Además tiene que poner sus archivos de entrada a disposición de cualquier interesado.

## El expediente más disputado

SpaceX pidió en mayo de 2020, y modificó en agosto de 2021, una licencia para 29.988 satélites de segunda generación. Contra esa solicitud se presentaron, entre otros, SES y O3b, Viasat, DISH, RS Access y EchoStar/Hughes. Kuiper también presentó comentarios. La disputa de potencia tuvo tres frentes.

El primero fue la forma. SpaceX dividió su sistema en 18 presentaciones separadas ante la UIT, y los operadores geoestacionarios acusaron que así cada pedazo pasaba la prueba por separado. El segundo fueron los números. Viasat analizó una estación terrena geoestacionaria en Miami. Con una sola de las presentaciones de SpaceX, los límites se superaban 2,6 veces; con la constelación entera, hasta 18,6 veces. Sumando las 18 presentaciones con el software oficial sin modificar, Viasat calculó excesos de 7,6 a 11,8 dB sobre los límites de un solo sistema. Eso equivale a entre 6 y 15 veces la potencia permitida. Viasat encontró casos en que el límite se violaba el 1%, el 10% y "hasta el 100%" del tiempo. DISH, que vende televisión directa al hogar, calculó excesos de hasta 4,5 dB en antenas de 45 cm en la banda de 12,2 a 12,7 GHz. Es la parábola típica de sus clientes.

El tercero fue el contraataque. SpaceX sostuvo que la metodología vigente "apila una serie de supuestos de peor caso uno sobre otro". Según la empresa, obliga a bajar la potencia en todo el sistema, incluso donde no hay clientes geoestacionarios, y castiga el uso de haces orientables, que son más eficientes. Kuiper le dio la razón a medias. Coincidió en que el software es demasiado conservador, pero también en que un operador podía usar varias presentaciones para esquivar los límites.

## El fallo

El 1 de diciembre de 2022 la FCC publicó su decisión. No entró al fondo técnico: reiteró que la UIT es quien verifica, descartó los estudios hechos con software modificado y consideró "razonable" la división en 18 presentaciones. Pero impuso condiciones. SpaceX debe obtener un dictamen de la UIT que considere de forma explícita el efecto conjunto de todas sus presentaciones. Debe entregar a quien lo pida su archivo consolidado. Y en ciertas bandas no puede usar más de un haz por frecuencia sobre la misma zona a la vez. Sobre el reclamo de SpaceX contra la metodología, dijo que estaba "fuera del alcance" de una licencia. Si había que cambiar la regla, eso debía hacerse en una reglamentación general o en la UIT. Por otras razones, sobre todo de desechos orbitales y seguridad espacial, en esa etapa la FCC autorizó solo 7.500 de los 29.988 satélites pedidos ([Gen2: las 15.000 autorizaciones de la FCC y la letra chica](/biblioteca/cielo_conectado/parte-ii/ii-3-gen2-las-15-000-autorizaciones-de-la-fcc-y-la-letr)).

## ¿Cuánto del negocio geoestacionario cuelga de esa regla?

Bastante. El video sigue siendo el mayor segmento de ingresos del satélite, según Novaspace en octubre de 2026. Una parte de ese video llega a parábolas pequeñas, como las de 45 cm de los clientes de DISH, que no pueden "esquivar" a una constelación. En sus escritos de 2022, Viasat advirtió que violaciones de esa magnitud podrían degradar el servicio de televisión directa y de otras redes GSO con las que SpaceX "busca competir". El límite protege una inversión ya hecha en el cielo y en los techos de los clientes. Relajarlo daría más capacidad a las constelaciones. Mantenerlo las obliga a gastar parte de su capacidad en convivir.

La pelea sigue abierta en dos frentes. En la UIT, el punto 1.4 de la CMR-27 propone nuevos límites EPFD en 17,3 a 17,7 GHz, y la radioastronomía ya pide llevar la lógica de la EPFD al caso de varias constelaciones sumadas ([Hacia la CMR-27: lo que se juegan los operadores](/biblioteca/cielo_conectado/parte-x/x-3-hacia-la-cmr-27-lo-que-se-juegan-los-operadores)). En Estados Unidos, la FCC abrió en 2025 una revisión de "reglas técnicas anticuadas" que frenan la banda ancha en órbita baja. En la industria se leyó como una señal de que los límites EPFD están en discusión †.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Y eso qué significa para el negocio?</p>


Para un operador geoestacionario, los límites EPFD son parte del valor de su flota: aseguran que sus clientes no tendrán que cambiar antenas por culpa de un vecino. Para una constelación, son un impuesto a la capacidad. Cualquier cambio en esa regla, en la UIT o en la FCC, mueve valor de un lado al otro. Quien evalúe un contrato de largo plazo sobre un satélite GEO en banda Ku o Ka debería preguntar qué supuestos de convivencia con las constelaciones trae el plan de negocio.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">Desde América Latina: el dictamen viaja a Brasil</p>


La disputa no se quedó en Washington. El 19 de noviembre de 2026, al ampliar las bandas Ku, Ka y Q/V de Starlink en Brasil, Anatel le exigió presentar, "cuando esté disponible", el dictamen definitivo de la UIT sobre el cumplimiento de los límites de interferencia de una de sus redes. Un requisito nacido en un expediente de la FCC terminó como condición en otro país.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Solicitud Gen2:** 29.988 satélites (presentada en mayo de 2020, modificada en agosto de 2021); 7.500 autorizados el 1 de diciembre de 2022 (FCC 22-91).
- **Cálculo de Viasat en Miami:** de 2,6 a 18,6 veces los límites EPFD; de 7,6 a 11,8 dB sobre los límites de un solo sistema.
- **Cálculo de DISH:** hasta 4,5 dB en antenas de 45 cm, banda de 12,2 a 12,7 GHz.
- [Autorización de Starlink Gen2 y condiciones](https://docs.fcc.gov/public/attachments/FCC-22-91A1.pdf) — FCC, 2022 (S0055): los argumentos de cada parte y las condiciones impuestas, párrafos 26 a 31.
- [Despliegue de Gen2 a 340-360 km](https://docs.fcc.gov/public/attachments/DA-24-1193A1.docx) — FCC, 2024 (S0057): la condición vigente de entregar el archivo consolidado de EPFD.
- [Starlink recebe autorização para operar em novas faixas de frequência no Brasil](https://teletime.com.br/19/11/2026/starlink-faixas-brasil/) — Teletime, 2026 (S0041): la exigencia de Anatel sobre el dictamen de la UIT.
- [Global Satcom Services Revenues to Reach $145 Billion by 2035](https://nova.space/press-release/global-satcom-services-revenues-to-reach-145-billion-by-2035/) — Novaspace, 2026 (S0043): el peso del video en los ingresos del sector.

</aside>

**Puertas:** [La FCC como regulador del mundo: la Parte 25 y la reforma de la Parte 100](/biblioteca/cielo_conectado/parte-x/x-4-la-fcc-como-regulador-del-mundo-la-parte-25-y-la-r), [Gen2: las 15.000 autorizaciones de la FCC y la letra chica](/biblioteca/cielo_conectado/parte-ii/ii-3-gen2-las-15-000-autorizaciones-de-la-fcc-y-la-letr), [Los históricos: fusionarse, especializarse o desaparecer](/biblioteca/cielo_conectado/parte-iii/iii-1-los-historicos-fusionarse-especializarse-o-desapar), [TV directa: el negocio que todavía paga las cuentas](/biblioteca/cielo_conectado/parte-iii/iii-9-tv-directa-el-negocio-que-todavia-paga-las-cuentas), [Baja, media o geoestacionaria: latencia, cobertura y costo por bit](/biblioteca/cielo_conectado/parte-i/i-2-baja-media-o-geoestacionaria-latencia-cobertura-y-)
