
DobleFlash-JS
=============

`DobleFlash` es un nuevo contenedor para animaciones web inspirado en [Flash Video](https://es.wikipedia.org/wiki/Flash_Video), soporta los codec JPEG y PNG, `DobleFlash-JS` es la API para *JavaScript* que permite reproducir de manera *Ultra-Magica* este nuevo formato.

---

**Licencia** [GNU GPL v3](http://www.gnu.org/licenses)

---

> ¿Que problemas resuelve DobleFlash?

*Publicidad* puede ser fácilmente usado para anuncios publicitarios

*DOF vs GIF* DobleFlash posee un menor peso y mayor calidad que las animaciones GIF, esto permite usar con mayor eficacia la banda ancha.

*controles* puedes pausar, reanudar, detener, activar modo cíclico, cambiar aspecto radial, activar cache de reproducción, ir de fotograma a fotograma, cambiar los fps, captura de fotograma, high-velocity, descargar animación o inclusive poner la reproducción en pantalla completa.

*descargar* puedes descargar la animación del servidor o del cache de reproducción generado en el navegador, con lo cual los usuarios de tu proyecto web la tendrán BIEN fácil para descargar las animaciones.

*reproducción automática* permite activar la reproducción automática de las animaciones tanto en PC como dispositivos móviles.

*atajos de teclado* con `space` puedes reproducir, pausar o reanudar, con `b` puedes saltar a los fotogramas anteriores, con `n` saltas a los fotogramas siguientes, con `s` puedes detener la reproducción, con `f` puedes entrar y salir de visualización de pantalla completa, para usar los atajos de teclado solo debes colocar el cursor sobre el reproductor y presionar la tecla deseada.

*CACHE de reproducción* cada segunda reproducción de una animación siempre tendrá mayor aceleración que la primera, esto es gracias a un hacheo blanco que permite cachear la animación antes de reproducir o después de la primera reproducción, según la opción activada.

*high-velocity* esta opción permite un menor consumo del CPU, pero a costa de una menor calidad de decodificación en el rasterizado del bitmap, útil para el navegador Firefox.

*performance* DobleFlash es único ya que provee una gran experiencia de usuario, las animaciones se pausan de forma automática si es necesario, por ejemplo cuando haces foco fuera de la pagina o cuando la animación no queda visible en el scroll, esta ultima te permitirá tener infinidad de animaciones según la cantidad de contenido deseado, sin hacer que el navegador se sobre-cargue, en el caso de que dos o más animaciones estén visibles en el scroll y pongas una de ellas en pantalla completa las demás se pausaran hasta que salgas de pantalla completa, DobleFlash más que una alternativa es tu mejor opción para animaciones web.

---

> DEMOS

[reproductor basico](https://sunfurthanos.github.io/servidor-demos/samples/3.%20custom%20FPS.html)

[auto reproducción](https://sunfurthanos.github.io/servidor-demos/samples/2.%20auto-play.html)

[reproducción no ciclica](https://sunfurthanos.github.io/servidor-demos/samples/1.%20basic.html)

[evnto click](https://sunfurthanos.github.io/servidor-demos/samples/4.%20event%20click.html)

*MÁS EJEMPLOS* ¿Te encantaron los `DEMOS` quieres más ejemplos de uso, quieres saber que más hace esta nueva tecnología?, !pues que esperas descarga DobleFlash-JS y lee los ejemplos de la carpeta [samples](samples).

---

> ¿como usar DobleFlash-JS en mi proyecto web?

*PASO 1* copia la carpeta [./source](source), al directorio de trabajo de tu proyecto web, si lo deseas puedes renombrarla.

*PASO 2* importar `DobleFlash.js` y definir el tipo de reproductor deseado en tu HTML...

```html
<!-- importando API (DobleFlash-JS) -->
<script type="text/javascript" src="./DobleFlash-JS/DobleFlash.js"></script>

<!-- definiendo reproductor básico -->
<source src="./src/animation.DOF" type="FLASH" style="width: 380;height: 200">
```

*PASO 3* ejecuta tu proyecto web desde un `localhost` o `servidor-online`

*RESUMEN* como se puede apreciar la implementación en un proyecto web es muy fácil, ademas no requiere conocimientos en JS, !más fácil imposible! :)

---

*INFORMACIÓN PRIVILEGIADA* en Firefox 52 al 57, no hace falta que ejecutes tu proyecto web en un localhost o servidor-online, esto te permitirá hacer testeos rápidos y concretos sin mucho protocolo :)

---

> ¿cual es el mejor Navegador Web para DobleFlash-JS?

DobleFlash-JS esta diseñado para obtener una buena aceleración por CPU, GPU y cache en el navegador `Google Chrome`, sin embargo es compatible con otros navegadores, pero aun así el rendimiento siempre sera mayor en Google Chrome :)

---

## ¿Foro de preguntas?

- Para dirigir sus comentarios, ideas de desarrollo o hablar de Python y un poquito (OFFTOPIC moderado) de HTML5, puede hacerlo por medio del chat para programadores en español.

*sala IRC*: #python-es | #python-es_OFFTOPIC

---

# Herramientas en Desarrollo - **FASE 1**

*heredado de funciones* heredado automaticos de propiedades CSS estrategicas y eventos de JS definidos por el usuario

*pausado-instantáneo* el pausado esta atado a los FPS asignados a la animaciones, con este nuevo parche el tiempo de respuesta para el pausado sera instantáneo.

*key<=Stop* nuevo atajo de teclado para detener la reproducción, salta al primer fotograma y pausa la reproducción.

*auto-cache* podrás activar manualmente el sistema de cache de reproducción

*fullscreen-auto-pause* hacer que las animaciones se pausen si una de ellas esta en pantalla completa para una mayor experiencia de usuario

*controles* podrás activar funciones de reproducción profesionales, de forma gráficas e intuitivas

*scroll-pause* si las animaciones no son visibles en el scroll se pausaran

*scroll-pause-syncro* si las animaciones son visibles en el scroll, pero mueves el scroll se pausaran para una mayor experiencia

*load-syncro* podrás elegir si deseas hacer que las animaciones se carguen una después de otra (carga sincrónica), algo muy elemental en cualquier web

*Cursor animado* soporte para usar cursores animados en `HTML5`, esto permitirá de forma automatica embeber de forma arbitraria los archivos de cursores animados en CSS3 sin mucho protocolo.

*Delos-sprite* los `sprites CSS` se han venido usando en HTML5 y CSS3, para evitar la necesidad de cargar una imagen más de una vez, DobleFlash-JS lo hace mucho mejor, solo debes cargar la imagen que desde HTML5 y la API generara un cache automático, de esta manera cuando se desee cargar la misma imagen en vez de pedir la petición al servidor, la API refactoriza la url original por la del cache local, por-supuesto en cada imagen puedes activarle o no el sistema de cache, permitiendo uso profesional e eficaz.

*Conversor multimedia* Programa multi-plataforma `Windows/Linux` sencillo, estético e intuitivo que permite convertir secuencias de imágenes PNG a cursores animados, convierte video o animaciones hechas en Photoshop (PSD) a animación DobleFlash, ademas podrás privatizar las animaciones si así lo deseas, es decir que su reproducción solo sea compatible desde un determinado hosting, también integra un visor compacto y ligero para reproducir las animaciones DobleFlash y GIFs.

---

# Herramientas en Desarrollo - **FASE 2 (requiere patrocinadores)**

*Conversor multimedia (nueva versión)* soporte para MAC, ademas podrás convertir video a otros formatos y convertir archivos de audio todos los que quieras al mismo tiempo sin importar la cantidad de núcleos del CPU, permite ademas bajar y subir la velocidad de conversión en tiempo real, para conversiones de video tiene aceleración por GPU y la posibilidad `Ultra-Magica` de reanudar la conversión aun si apagas la computadora, también es posible reanudarla en otra computadora, dispone de uso por consola útil para servicios online multimedia.

*Editor de animaciones* programa escrito en HTML5 y JS, que permite hacer cortes de edición y composiciones en tus animaciones ya generadas sin necesidad se re-codificar el resultado, solo haces los cambios que desees y se convertirán a coordenadas de rasterización y reproducción que se guardaran en el archivo de la animación, con esto se evita la re-codificación y te permite hacer cambios de forma instantánea sin mucho protocolo.

*Visor para Android & IOS* programa ligero y adaptativo para visualizar y descargar animaciones DobleFlash de forma sencilla e intuitiva.

*Streaming* soporte para reproducción por Streaming

*Estandarización* invitar a la `W3C` y fabricantes de navegadores a que vuelva un estándar a DobleFlash, de esta manera este nuevo formato podrá estar integrado de forma nativa en los navegadores con lo cual se obtiene mayor performance de carga y reproducción en un `57,32%`, lo cual es más que suficiente para una estandarización eficiente y masiva.

---

## ¿Te enamoraste de DobleFlash, quieres ayudar económicamente al desarrollador?

- Si consideras que el DobleFlash vale algo para tu día a día, puedes enviarme una remesa,
con lo cual harás que el proyecto siga siendo ¡GRATUITO & LIBRE!...

eres una empresa grande, pequeña, Freelance, ¿usas este proyecto en tu día a día?, !házmelo saber!, este proyecto necesita patrocinadores que deseen ayudar al proyecto con publicidad, donativos y sugerencias, los mismos serán incluidos en los créditos del proyecto como los HÉROES :)

*correo del desarrollador*: hormigence123@gmail.com

---

**Sunfur Thanos** Si aprendes a estar abierto para adaptarte ¡seras invencible!
