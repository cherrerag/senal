---
titulo: 'Del 5G NTN al 6G: el calendario del 3GPP hasta 2030'
parte: XII
parte_titulo: ¿Qué viene hasta 2035?
orden: 138
---

*El 5G aprendió a hablar con satélites como un idioma extranjero; el 6G se está escribiendo para que el satélite sea un dialecto más de la misma lengua.*

El 25 de marzo de 2026, la Subsecretaría de Telecomunicaciones de Chile anunció que los clientes de Entel podían usar WhatsApp, Google Maps y otras aplicaciones vía satélite en zonas sin cobertura. Chile quedó como el primer país de América Latina y el quinto del mundo con datos satelitales directo al celular. La letra chica del anuncio cuenta cómo funciona el presente: hace falta cielo despejado, un equipo compatible, la última actualización de software y activar roaming y VoLTE. El satélite entra al teléfono como si fuera una red extranjera de visita.

Esa es la frontera de 2026. Para entender lo que viene hay que seguir al 3GPP (3rd Generation Partnership Project), el consorcio de la industria que escribe las normas técnicas del celular. Trabaja por *releases*, versiones del estándar que se congelan cada uno o dos años, y desde 2017 viene metiendo al satélite en ellas. La sigla clave es NTN (*non-terrestrial networks*, redes no terrestres): el nombre que el estándar le da a satélites y plataformas en altura que funcionan como antenas celulares.

## De la Release 17 a la 21

| Release | Fecha | Qué agrega para el satélite |
|---|---|---|
| Rel-17 | Marzo de 2022 | Primer acceso directo por satélite estandarizado: 5G NR y NB-IoT, con satélites "espejo" (bent pipe) en órbita baja y geoestacionaria |
| Rel-18 | Junio de 2024 | Bandas L y Ka, traspaso entre red terrestre y satelital, ubicación del usuario sin GPS, procesamiento a bordo del tráfico |
| Rel-19 | Cierre previsto a fines de 2025 | Estación base completa a bordo (carga regenerativa), banda Ku, terminales IoT de bajo costo (RedCap) |
| Rel-20 | Meta: marzo de 2027 | Operación resistente a fallas del GPS, voz sobre NB-IoT por satélite, estudio del 6G con NTN |
| Rel-21 | Hacia 2028–2029 | Primeras especificaciones normativas del 6G |

Fuentes: npj Wireless Communications (2026) y CafeTele (2026).

Dos saltos importan para el negocio. El primero está en la Release 19: el satélite deja de ser un espejo que rebota la señal y pasa a llevar la estación base completa a bordo. Eso permite atender teléfonos con menos dependencia de una estación terrena a la vista y abre la puerta al procesamiento en órbita (ver [Cómputo en órbita: satélites que procesan antes de bajar](/biblioteca/cielo_conectado/parte-xii/xii-5-computo-en-orbita-satelites-que-procesan-antes-de-)). El segundo está en la Release 20, que estudia cómo seguir funcionando cuando el GPS del teléfono falla por bloqueo o suplantación, algo que hasta ahí el estándar daba por garantizado (ver [Interferencia, jamming y spoofing: cómo se ataca una señal](/biblioteca/cielo_conectado/parte-xi/xi-7-interferencia-jamming-y-spoofing-como-se-ataca-una)).

<figure class="fig"><img src="/biblioteca/cielo_conectado/img/S0071_p003_13b477c5d15b.jpg" alt="Las dos arquitecturas NTN del 3GPP. Arriba, el satélite solo rebota la señal hasta una estación en tierra que lleva la estación base (gNB); abajo, el satélite la lleva a bordo y puede enlazarse con otros por láser o radio." loading="lazy" /><figcaption>Las dos arquitecturas NTN del 3GPP. Arriba, el satélite solo rebota la señal hasta una estación en tierra que lleva la estación base (gNB); abajo, el satélite la lleva a bordo y puede enlazarse con otros por láser o radio. <span class="credito">Fuente: npj Wireless Communications / arXiv, 2026</span></figcaption></figure>


## El 6G nace con el satélite adentro

Según el calendario que el 3GPP publicó el 10 de junio de 2026, el estudio del 6G arranca en la Release 20 y las primeras especificaciones llegan en la Release 21, hacia 2028 y 2029. Las primeras redes comerciales se esperan alrededor de 2030. La diferencia con el 5G está en el diseño: el marco IMT-2030 de la UIT pone la "conectividad ubicua" entre sus seis escenarios, y el 6G busca una radio armonizada en que la celda terrestre y el satélite sean un solo sistema.

El 6G también busca espectro nuevo en la banda media superior, de 7 a 24 GHz, un rango donde hoy operan satélites, por ejemplo en banda Ku. La Conferencia Mundial de Radiocomunicaciones de 2027 (CMR-27) estudia identificar para el móvil terrestre las bandas de 7.125 a 8.400 MHz y de 14,8 a 15,35 GHz. En paralelo, estudia nuevas atribuciones al servicio móvil por satélite entre 694 MHz y 2,7 GHz para conectar teléfonos comunes (ver [Hacia la CMR-27: lo que se juegan los operadores](/biblioteca/cielo_conectado/parte-x/x-3-hacia-la-cmr-27-lo-que-se-juegan-los-operadores)). Lo que el estándar une en el papel puede separarse en la negociación de frecuencias.

## Mitad tierra, mitad cielo

Mientras tanto, conviven dos caminos. Ericsson describe en 2025 el "4G sin modificar", que llega a los teléfonos de hoy, y el NTN del 3GPP, más eficiente pero que exige equipos nuevos (ver [¿4G de siempre o NTN? El debate que plantea Ericsson](/biblioteca/cielo_conectado/parte-iv/iv-10-4g-de-siempre-o-ntn-el-debate-que-plantea-ericsson)). Según Ericsson, desde la Release 17 ya se lanzaron comercialmente teléfonos y relojes con NTN para IoT, sobre todo para mensajes de emergencia. El Foro Económico Mundial es cauto con el negocio: estima que en 2035 el directo al celular moverá unos 2.000 millones de dólares al año, sobre todo en mensajes y llamadas en zonas remotas, porque los chips no alcanzarán para internet de alta velocidad.


<aside class="recuadro sirve">
<p class="recuadro-t">¿Qué significa para fabricantes y operadores?</p>


Un fabricante de teléfonos que diseña hoy un chip para 2029 tiene que elegir cuánto NTN incluir sin saber qué red satelital tendrá cada mercado; quien llegue tarde quedará fuera de los contratos con operadores. Para un operador móvil, el satélite deja de ser un acuerdo de roaming especial y pasa a ser una capa más de su red, con su núcleo, su espectro y su tarificación. La pregunta de negocio ya no es si sumar satélite, sino con qué socio y en qué banda, porque esa decisión condiciona qué teléfonos funcionarán en 2030.

</aside>

<aside class="recuadro sabias">
<p class="recuadro-t">¿Sabías que…?</p>


En las simulaciones publicadas en 2026 en *npj Wireless Communications*, un satélite de órbita baja a 600 km rinde unos 390 Mbps de capacidad de canal en banda Ka y unos 125 Mbps en banda S. La banda S llega a teléfonos comunes; la Ka necesita antenas dirigidas. Esa diferencia, de tres veces, explica por qué el celular satelital es para mensajes y apps livianas, no para video.

</aside>

<aside class="recuadro hondo">
<p class="recuadro-t">Para ir más hondo</p>


- **Rel-17:** marzo de 2022. **Rel-18:** junio de 2024. **Rel-20:** meta de marzo de 2027.
- **6G:** estudio en Rel-20 (2026–2027); especificaciones en Rel-21 (2028–2029); redes comerciales hacia 2030.
- **CMR-27:** punto 1.7 (móvil en 4.400–4.800 MHz, 7.125–8.400 MHz y 14,8–15,35 GHz) y punto 1.13 (satélite directo al teléfono entre 694 MHz y 2,7 GHz).
- **Directo al celular en 2035:** unos 2.000 millones de dólares al año (Foro Económico Mundial y McKinsey).
- [5G NR Non-Terrestrial Networks: From Early Results to the Road Ahead](https://arxiv.org/pdf/2601.04882) — arXiv / npj Wireless Communications, 2026 (S0071): qué trae cada release para el satélite y simulaciones por banda y órbita.
- [What Is 6G? 3GPP Release 20 & 21 Timeline to 2030](https://www.cafetele.com/articles/article-what-is-6g-3gpp-release-20.html) — CafeTele, 2026 (S0023): el calendario del 6G y sus novedades.
- [Satellite direct to device: 4G or 3GPP NTN?](https://www.ericsson.com/4aed3b/assets/local/reports-papers/ericsson-technology-review/docs/2025/satellite-direct-to-device-communication.pdf) — Ericsson, 2025 (S0075): los dos caminos técnicos y sus costos.
- [ITU-R Preparatory Studies for WRC-27](https://www.itu.int/en/ITU-R/study-groups/rcpm/Pages/wrc-27-studies.aspx) — UIT-R, 2026 (S0004): los puntos de agenda que tocan al móvil y al satélite.
- [Chile se posiciona como primer país de la región y quinto del mundo](https://www.subtel.gob.cl/chile-se-posiciona-como-primer-pais-de-la-region-y-quinto-del-mundo-entel-y-starlink-d2c-amplian-sus-servicios-incluyendo-aplicaciones-como-whatsapp-y-google-maps/) — Subtel, 2026 (S0024): el caso Entel y Starlink.

</aside>

**Puertas:** [3GPP NTN: qué cambia cuando el satélite entra al estándar](/biblioteca/cielo_conectado/parte-iv/iv-9-3gpp-ntn-que-cambia-cuando-el-satelite-entra-al-es), [¿4G de siempre o NTN? El debate que plantea Ericsson](/biblioteca/cielo_conectado/parte-iv/iv-10-4g-de-siempre-o-ntn-el-debate-que-plantea-ericsson), [Entel y Starlink: Chile, primer país de la región con datos directo al celular](/biblioteca/cielo_conectado/parte-xiii/xiii-5-entel-y-starlink-chile-primer-pais-de-la-region-co), [Cómputo en órbita: satélites que procesan antes de bajar](/biblioteca/cielo_conectado/parte-xii/xii-5-computo-en-orbita-satelites-que-procesan-antes-de-), [Hacia la CMR-27: lo que se juegan los operadores](/biblioteca/cielo_conectado/parte-x/x-3-hacia-la-cmr-27-lo-que-se-juegan-los-operadores)
