
DobleFlash-JS
=============

`DobleFlash` es un nuevo contenedor multimedia web, su extensión es `.DOF`, esta inspirado en [SWF](https://wikipedia.org/wiki/swf), e siendo la mejora notable del GIF, ademas permite crear cursores animados compatible con HTML5, `DobleFlash-JS` es la API para **JavaScript** que permite reproducir este nuevo formato, esta inspirado en [Flash Player](https://wikipedia.org/wiki/Adobe_Flash_Player)

---

**Licencia** [GNU GPL v3](http://www.gnu.org/licenses)

---

> ¿en que se diferencia el formato DobleFlash de otras alternativas?

De todas las alternativas [GfyCat](http://www.gfycat.com) es el más potente, aun asi no posee una carga eficaz en todas las bandas anchas, no se auto reproduce en dispositivos moviles de forma eficiente, tienes que depender de que el servicio online siga funcionando, no es Open-source, con `DobleFlash-JS` no sucede eso ya que te permite que tengas el motor de reproducción en todo momento y hacer pruebas de maneras OFFLINE, pudiendo hacer mejoras en el código si asi lo deseas.

*Formato .DOF*
1. menor peso y calidad que el GIF
2. soporta estructura para animaciones de fotograma para video y cursores animados
3. soporta los Codec Jpeg & PNG
4. posee un programa multi-plataforma, que permite convertir video, PSD, secuencias de imágenes al formato de DobleFlash

*DobleFlash-JS*
1. barra de carga efectiva para leer el archivo de animaciones de fotograma (video)
2. reproducción efectiva & con buen performance
3. Optimizaciones automáticas para una buena experiencia de usuario
4. Soporte para reproducción automática en PC y dispositivos móviles
5. permite cargar cursores animados en CSS3 y animaciones (video) en HTML5
6. te proporciona una técnica más avanzada que los Sprite-CSS

---

> visualizar DEMOS

[Reproducción no cíclica](https://sunfurthanos.github.io/DobleFlash-JS/samples/1.basic.html)

[Auto reproducción](https://sunfurthanos.github.io/DobleFlash-JS/samples/2.auto-play.html)

[Personalizar FPS](https://sunfurthanos.github.io/DobleFlash-JS/samples/3.custom_FPS.html)

[Evento clic](https://sunfurthanos.github.io/DobleFlash-JS/samples/4.event_click.html)

---

> ¿como usar DobleFlash-JS en mi proyecto web?

**PASO 1** copia la carpeta [./source](source), al directorio de trabajo de tu proyecto web, si lo deseas puedes re-nombrarla.

**PASO 2** importar `DobleFlash.js` y definir el tipo de reproductor deseado en tu HTML...

```html
<!-- importando API (DobleFlash-JS) -->
<script type="text/javascript" src="./DobleFlash-JS/DobleFlash.js"></script>

<!-- definiendo reproductor básico -->
<source src="./src/animation.DOF" type="FLASH" style="width: 380;height: 200">
```

**PASO 3** ejecuta tu proyecto web desde un `localhost` o `servidor-online`

**RESUMEN** como se puede apreciar la implementación en un proyecto web es muy fácil, ademas no requiere conocimientos en JS, !más fácil imposible! :)

---

> ¿cual es el mejor Navegador Web para DobleFlash-JS?

DobleFlash-JS esta diseñado para obtener una buena aceleración por CPU, GPU y cache en el navegador `Google Chrome`, sin embargo es compatible con otros navegadores, pero aun así el rendimiento siempre sera mayor en Google Chrome :)

---

# Herramientas en Desarrollo - **FASE 1**


**boton de cancelar carga** boton para cancelar carga

**boton de recargar** en caso de que la carga del archivo falle, debe existir un boton para poder recargar

**pausado-instantáneo** el pausado esta atado a los FPS asignados a la animaciones, con este nuevo parche el tiempo de respuesta para el pausado sera instantáneo.

**heredado de funciones** heredado automáticos de propiedades CSS estratégicas y eventos de JS definidos por el usuario

**load-syncro** podrás elegir si deseas hacer que las animaciones se carguen una después de otra (carga sincrónica), algo muy elemental en cualquier web

**efecto** efecto de retrocezo

**reproducción de galeria** debes colocar cualquier video.DOF en pantalla completa, luego pulsar las teclas direccionales, para reproducir o visualizar los siguientes videos que hayas insertado en tu HTML

**mouse hover** reproducción de .DOF al posicionar el cursor

**fullscreen-auto-pause** hacer que las animaciones se pausen si una de ellas esta en pantalla completa para una mayor experiencia de usuario

**scroll-pause** si las animaciones no son visibles en el scroll se pausaran

**scroll-pause-syncro** si las animaciones son visibles en el scroll, pero mueves el scroll se pausaran para una mayor experiencia

**controles** controles de reproducción, tales como : pausar, reproducir, detener, pantalla completa, ver o descargar fotograma, saltar de un fotograma a otro, descargar archivo de la animación (se descarga del cache generado en el navegador, para evitar peticiones innecesarias al servidor), extender imagen por proporción, ver información (resolución, FPS, creador, fecha) de la animación.

**Cursor animado** soporte para usar cursores animados en `HTML5`, esto permitirá de forma automatica embeber de forma arbitraria los archivos de cursores animados en CSS3.

**Delos-sprite** los `sprites CSS` se han venido usando en HTML5 y CSS3, para evitar la necesidad de cargar una imagen más de una vez, DobleFlash-JS lo hace mucho mejor, solo debes cargar la imagen desde HTML5 y la API generara un cache automático, de esta manera cuando se desee cargar la misma imagen en vez de pedir la petición al servidor, la API refactoriza la url original de la celda involucrada por la del cache local, por-supuesto en cada imagen puedes activarle o no el sistema de cache, permitiendo uso profesional e eficaz.

**auto-cache** podrás activar manualmente el sistema de cache de reproducción, el sistema de cache permite una buena tasa de FPS sin consumir mucho CPU.

**Conversor multimedia** Programa para `Windows/Linux` sencillo, estético e intuitivo que permite convertir secuencias de imágenes PNG a cursores animados, convierte video o animaciones hechas en Photoshop (PSD) a animación DobleFlash, ademas podrás privatizar las animaciones si así lo deseas, es decir que su reproducción solo sea compatible desde un determinado hosting, también integra un visor compacto y ligero para reproducir las animaciones DobleFlash y GIFs.

---

# Herramientas en Desarrollo - **FASE 2 (requiere patrocinadores)**

**Conversor multimedia (nueva versión)** soporte para MAC, ademas podrás convertir video a otros formatos y convertir todos los archivos de audio que quieras al mismo tiempo sin importar la cantidad de núcleos del CPU, permite ademas bajar y subir la velocidad de conversión en tiempo real, para conversiones de video tiene aceleración por GPU y la posibilidad `Ultra-Magica` de reanudar la conversión aun si apagas la computadora, también es posible reanudarla en otra computadora, dispone de uso por consola útil para servicios online multimedia.

**Editor de animaciones** programa escrito en HTML5 y JS, que permite hacer cortes de edición y composiciones en tus animaciones ya generadas sin necesidad se re-codificar el resultado, los cortes de edición soportados van desde duplicar un grupo de fotogramas y moverlos de un lugar a otro en la linea de tiempo, eliminarlos, aplicar efecto de retroceso, cambiar FPS, cambiar (brillo, contraste y saturación) y crear subtítulos, esto te permitirá hacer un sin fin de parodias y ambientes `muy candentes` en tus animaciones, sin afectar el peso del archivo de la animación, solo haces los cambios que quieras y podrás copiar al portapapeles las coordenadas de rasterización y reproducción, las mismas deberás pegarlas en el reproductor deseado en tu HTML, con esto se evita la re-codificación y re-subida de la animación al servidor.

```html
<source
	src="src/animacion_editable.DOF"
	type="FLASH"
	style="width: 380;height: 200"
	flash-script="iVBORFCFbw0CeOpEOw0KGgoAAABQAihMHhK9j2tNPV10jDjMxlozLCzDIHtdU53htM8MbOFfum3tYSZg9sfCzB1MHPkIHQnnjKPvhngU99xMSOpyxPPubLcp+roJ4FIOiUBgxcznzSYHbQ5ER"
>
```

**Visor para Android & IOS** programa ligero y adaptativo para visualizar y descargar animaciones DobleFlash de forma sencilla e intuitiva.

**Streaming** soporte para reproducción eficiente por Streaming, en cualquier tipo de banda ancha

**Estandarización** invitar a la `W3C` y fabricantes de navegadores a que vuelva un estándar a DobleFlash, de esta manera este nuevo formato podrá estar integrado de forma nativa en los navegadores con lo cual se obtiene mayor performance de carga y reproducción en un `57,32%`, lo cual es más que suficiente para una estandarización eficiente, responsable, democrática y masiva.

---

## ¿Te enamoraste de DobleFlash, quieres ayudar económicamente al desarrollador?

- Si consideras que el DobleFlash vale algo para tu día a día, puedes enviarme una remesa,
con lo cual harás que el proyecto siga siendo ¡GRATUITO & LIBRE!...

eres una empresa grande, pequeña, Freelance, ¿usas este proyecto en tu día a día?, !házmelo saber!, este proyecto necesita patrocinadores que deseen ayudar al proyecto con publicidad, donativos y sugerencias, los mismos serán incluidos en los créditos del proyecto como los HÉROES :)

**correo del desarrollador**: hormigence123@gmail.com

---

**Sunfur Thanos** Si aprendes a estar abierto para adaptarte ¡seras invencible!
