//-----------------------------------------------------------------------------//
//     Author      : Sunfur Thanos                                             //
//       Mail      : hormigence123@gmail.com                                   //
//        Country  : Venezuela                                                 //
//         License : GPL-3                                           	         //
//                                                                             //
//                   Copyright 2020 Sunfur Thanos. All rights reserved.        //
//-----------------------------------------------------------------------------//


//---------------------------------------------------------------------------
//
// comprobando ejecución en Firefox
//
//---------------------------------------------------------------------------

// comprobando que sea el navegador web Firefox
function isFirefox() {
  var $match = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  var $ver = $match ? parseInt($match[1]) : 0;
  var $version_validate = 25;
  if (navigator.userAgent.match(/firefox/i)) {return true} else {return false}
}

//---------------------------------------------------------------------------
//
// conviertiendo flujo binario en Base64
//
//---------------------------------------------------------------------------

function encodeStream64(filestream, beg, fin) {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  if (!beg  &&  !fin){
    beg = 0;
    fin = filestream.length;
  }

  var output = "";
  var chr1, chr2, chr3 = "";
  var enc1, enc2, enc3, enc4 = "";
  var i = beg;

  do {
    chr1 = filestream.charCodeAt(i++) & 0xff;
    chr2 = filestream.charCodeAt(i++) & 0xff;
    chr3 = filestream.charCodeAt(i++) & 0xff;

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output = output +
      keyStr.charAt(enc1) +
      keyStr.charAt(enc2) +
      keyStr.charAt(enc3) +
      keyStr.charAt(enc4);
    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";
  } while (i < fin);

  return output;
}

//---------------------------------------------------------------------------
//
// FLASH2 <- CLASE
//
//---------------------------------------------------------------------------

// creando clase
function Class_Flash2() {};
var Flash2 = new Class_Flash2();

// PLAY FLASH2
Class_Flash2.prototype.playback = function() {

    var NEXT = function(self, FPS) {
      if (!FPS) {var FPS = Math.round(900 / self.fps)}

      if (self.timeout_playback) {
          window.clearTimeout(self.timeout_playback);
      }

      self.timeout_playback = setTimeout(Flash2.playback.bind(self), FPS)

      return 0x06DB69EB
    }


    if (this.entry.active_stop_play) {
      this.entry.active_stop_play = false
      this.frame_concurrent = 0x0
      this.entry.isPause = false
      this.entry.to_next_frame_active = true
      return NEXT(this, 10)
    }

    if (this.entry.to_next_frame) {
      this.entry.to_next_frame = false
      this.frame_concurrent++
      this.entry.isPause = false
      this.entry.to_next_frame_active = true
      return NEXT(this, 5)
    }

    if (this.entry.to_back_frame) {
      this.entry.to_back_frame = false
      this.frame_concurrent--
      this.entry.isPause = false
      this.entry.to_back_frame_active = true
      return NEXT(this, 10)
    }

    if (this.entry.isPause) {
      return NEXT(this, 10)
    }

    if (this.frame_concurrent > (this.frames.length-1)) {
      this.frame_concurrent = this.frames.length-1
    }

    if (this.frame_concurrent < 0) {
      this.frame_concurrent = 0
    }

    NEO = this.list_chache_frames_ID

    var create_BITMAP = function(self) {
      var imgeObjectTemp              = document.createElement("img");
      imgeObjectTemp.className    = "SDF_BYTES " + " dobleFlash_slave";
      imgeObjectTemp.name         = "SDF_streaming";
      imgeObjectTemp.alt          = "";

      imgeObjectTemp.style.imageRendering = "optimizeSpeed"

      if (isFirefox()) {
        // imgeObjectTemp.style        = "width: 102%;z-index: -1;"
        imgeObjectTemp.style        = "width: 102%;opacity: 0;"
      } else {
        imgeObjectTemp.style        = "width: 102%;opacity: 0;"
      }

      imgeObjectTemp.style.border = "none";
      imgeObjectTemp.num_id       = self.frame_concurrent

      var frame = self.SJPEG_SIGN + self.frames[self.frame_concurrent]
      self.sing = 'data:application/x-DobleFlash;base64,'
      self.imagen_file = self.sing + encodeStream64(frame)
      return imgeObjectTemp
    }

    if (!this.play_cache) {
      var imgeObjectTemp = create_BITMAP(this)

      var valid = true
      if (this.list_chache_frames_ID[imgeObjectTemp.num_id]) {
        valid = false
      }

      if (valid) {
        this.list_chache_frames = this.list_chache_frames.concat([imgeObjectTemp]);
        this.list_chache_frames_ID[imgeObjectTemp.num_id] = imgeObjectTemp;
        imgeObjectTemp.src = this.imagen_file;
        this.containerObject.appendChild(imgeObjectTemp);
      }

      this.main_screen.src = this.imagen_file;

      if (this.frame_concurrent==0) {
        this.chil_progress_MAIN.style.display = "none"
      }

    } else {

      if (this.frame_concurrent==(this.frames.length)) {
        this.frame_concurrent = 0
      }

      this.frame_cache = this.list_chache_frames_ID[this.frame_concurrent]


      if (!this.frame_cache) { // re-cache de frame (soporte para Step<=Frame*)
        var imgeObjectTemp = create_BITMAP(this)
        this.list_chache_frames = this.list_chache_frames.concat([imgeObjectTemp]);
        this.list_chache_frames_ID[imgeObjectTemp.num_id] = imgeObjectTemp;
        imgeObjectTemp.src = this.imagen_file;
        this.containerObject.appendChild(imgeObjectTemp);
        this.frame_cache = this.list_chache_frames_ID[this.frame_concurrent]

        this.is_back_frame = false
        this.main_screen.style.display = "block"
        this.main_screen.src = this.imagen_file;

        return NEXT(this)
      }


      if (!this.is_back_frame) {
        this.main_screen.style.display = "none"
        this.is_back_frame = this.frame_cache
      } else {
        if (isFirefox()) {
          // this.is_back_frame.style = "width: 102%;z-index: -1;"
          this.is_back_frame.style = "width: 102%;opacity: 0;";
        } else {
          this.is_back_frame.style = "width: 102%;opacity: 0;";
        }
        this.is_back_frame = this.frame_cache
      }

      if (isFirefox()) {
        this.frame_cache.style = "width: 102%;z-index: 300;"
        // this.frame_cache.style = "width: 102%;opacity: 0.999;"
      } else {
        this.frame_cache.style = "width: 102%;opacity: 0.999;"
      }
    }

    if (this.entry.to_next_frame_active) {
      this.entry.isPause = true
      this.entry.to_next_frame_active = false
      this.entry.active_step_operation = true
      return NEXT(this, 15)
    }

    if (this.entry.to_back_frame_active) {
      this.entry.isPause = true
      this.entry.to_back_frame_active = false
      this.entry.active_step_operation = true
      return NEXT(this, 15)
    }

    this.frame_concurrent++

    if (this.frame_concurrent==(this.frames.length)) {
      this.frame_concurrent = 0
      this.play_cache = true
    }

    return NEXT(this)

}


// cargando flujo binario de un archivo FLASH2
Class_Flash2.prototype.read_file_FLASH2 = function(url, self) {

  try {
    if (netscape.security.PrivilegeManager) {
      netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
    }
  }
  catch (e) {}

  var http = new XMLHttpRequest();
  http.open("GET", url, true);

  http.containerObject = self.containerObject
  http.entry = self.entry
  http.active_auto_play = self.active_auto_play
  http.child_play_pulsate_MAIN = self.child_play_pulsate_MAIN
  http.cell_button_play_pulsate = self.cell_button_play_pulsate
  http.active_custom_fps = self.active_custom_fps
  http.child_progress_text = self.child_progress_text
  http.chil_progress_MAIN = self.chil_progress_MAIN

  if (http.overrideMimeType)
    http.overrideMimeType('text/plain; charset=x-user-defined');
  else
    http.setRequestHeader('Accept-Charset', 'x-user-defined');


  http.onprogress = function($pe) {
      var $progreso = Math.round($pe.loaded * 100 / $pe.total)
      if ($progreso) {
        this.child_progress_text.innerHTML = Math.min( $progreso, 99 ) + "%"
      }
  }

  http.onload = function (info) {
    // parseando flujo binario (header, frames)
    var bytes = http.responseText

    this.child_progress_text.innerHTML = "99%"

    this.imgeObjectTemp              = document.createElement("img");
    this.imgeObjectTemp.className    = "SDF_BYTES " + " dobleFlash_slave";
    this.imgeObjectTemp.name         = "SDF_streaming";
    this.imgeObjectTemp.alt          = "";
    this.imgeObjectTemp.style        = "width: 102%;height: auto;z-index: 20"
    this.imgeObjectTemp.style.border = "none";
    this.imgeObjectTemp.style.imageRendering = "optimizeSpeed"
    this.containerObject.appendChild(this.imgeObjectTemp);

    this.delimit_frame         = "\u0000\uf7ff\uf7ff\u0000"
    this.chuks                 = bytes.split(this.delimit_frame)
    this.SJPEG_SIGN            = "\xff\xd8\xff\xfe\x00\x0fDobleFlash\x00\x00\x00"
    this.header                = this.chuks[0].split(",")
    this.sign                  = this.header[0]
    this.resolution            = this.header[1]
    this.width                 = Number(this.resolution.split("x")[0])
    this.height                = Number(this.resolution.split("x")[1])
    this.fps                   = Number(this.header[2])
    this.fps_raw               = this.fps
    this.frames                = this.chuks
    this.frame_concurrent      = 0
    this.main_screen           = this.imgeObjectTemp
    this.play_cache            = false
    this.list_chache_frames    = new Array()
    this.list_chache_frames_ID = {}
    this.entry.isPause         = false

    if (this.active_custom_fps) {
      this.fps = this.active_custom_fps
    }

    this.entry.to_next_frame = false
    this.entry.to_next_frame_active = false

    this.entry.to_back_frame = false
    this.entry.to_back_frame_active = false

    this.timeout_playback = false

    this.entry.active_step_operation = false

    this.entry.active_stop_play = false

    // extrayendo mapas de bytes (frames)
    var tmp = new Array()
    for (var pointer in this.frames) {
      item = this.frames[pointer]
      if (pointer>0) {
        tmp = tmp.concat([item])
      }
    }

    this.frames = tmp

    var self = this
    window.addEventListener("blur", event => {
      if (!self.entry.active_step_operation) {
        if (!self.entry.isPause) {self.entry.isPause=true}
      }
    });

    window.addEventListener("focus", event => {
      if (!self.entry.active_step_operation) {
        if (self.entry.isPause) {self.entry.isPause=false}
      }
    });

    if (this.active_auto_play) {
      setTimeout(Flash2.playback.bind(this), 0)
    } else {
      this.child_play_pulsate_MAIN.style.display = "block"
      var frame = this.SJPEG_SIGN + this.frames[this.frame_concurrent]
      var sing = 'data:application/x-DobleFlash;base64,'
      var imagen_file = sing + encodeStream64(frame)
      this.main_screen.src = imagen_file

      var self = this
      this.cell_button_play_pulsate.addEventListener("click", e => {
          self.child_play_pulsate_MAIN.style.display = "none"
          setTimeout(Flash2.playback.bind(this), 0)
      });

      var isFocus = false
      this.child_play_pulsate_MAIN.addEventListener("mouseover", e => {
        isFocus = true
        self.child_play_pulsate_MAIN.focus()
      });

      this.child_play_pulsate_MAIN.addEventListener("mouseleave", e => {
        isFocus = false
      });

      document.addEventListener("keypress", event => {
          if (event.key.toLocaleLowerCase() == " ") {
            if (isFocus) {
              self.child_play_pulsate_MAIN.style.display = "none"
              event.preventDefault();
              event.stopPropagation();
              setTimeout(Flash2.playback.bind(this), 0)
            }
          }
      });

      this.chil_progress_MAIN.style.display = "none"
    }

  }

  http.send(null);

}


// creando maqueta para reproductor FLASH2
Class_Flash2.prototype.create_canvas_reproductor = function($object) {

    var active_align = false

    // comprobando atributos privados
    if ($object.getAttribute("align")) {
      active_align = true
    }

    this.active_auto_play = false
    if ($object.getAttribute("auto-play")!=null) {
      this.active_auto_play = true
    }

    this.active_custom_fps = false
    if ($object.getAttribute("fps")!=null) {
      if (!isNaN(Number($object.getAttribute("fps")))) {
        this.active_custom_fps = Number($object.getAttribute("fps"))
      }
    }


    var cursor_theme_custom = "default"
    if ($object.style.cursor) {
      cursor_theme_custom = $object.style.cursor
    }

    if ($object.className) {
      for (var x of document.styleSheets) {
        try {
          var clase_push = x.cssRules[0]
          if (clase_push.selectorText, "."+$object.className) {
            cursor_theme_custom = clase_push.style.cursor
          }
        }
        catch (e) {}
      }
    }

    // pintando lienzo
    this.MAIN = document.createElement("div");
    this.MAIN.className = $object.className
    this.MAIN.style = $object.style.cssText

    this.MAIN_0 = document.createElement("div");
    this.MAIN_0.style = "margin-bottom: 1.5em;margin-top: 1em;display: inline-block;"
    this.MAIN_0.appendChild(this.MAIN)
    $object.parentNode.insertBefore(this.MAIN_0, $object);
    $object.parentNode.removeChild($object);

    if (active_align) {
      ALIGN = $object.getAttribute("align")
      this.MAIN_0.setAttribute("align", ALIGN);
    }

    // lienzo de BITMAP
    this.packing_crop = document.createElement("div");
    this.packing_crop.className = "cropSDF_ "
    this.MAIN.appendChild(this.packing_crop)

    this.containerObject = document.createElement("div");
    this.packing_crop.appendChild(this.containerObject);
    this.containerObject.style = "position: relative;background: black;overflow: hidden;";
    this.containerObject.className = "class_cotenedorSDF_ ";


    // celda de PLAY-PULSATE
    this.child_play_pulsate_MAIN = document.createElement("div");
    this.child_play_pulsate_MAIN.style = "z-index: 30;width: 100%;height: 100%;background-color: transparent;position: absolute;"
    this.containerObject.appendChild(this.child_play_pulsate_MAIN)
    this.child_play_pulsate_MAIN.style.display = "none"

    this.child_play_pulsate = document.createElement("div");
    this.child_play_pulsate.style = "z-index: 30;width: 100%;height: 100%;background-color: #0094c6;position: absolute;opacity: 0.22;"
    this.child_play_pulsate_MAIN.appendChild(this.child_play_pulsate)

    var button_play_pulsate = document.createElement("div");
    button_play_pulsate.style="z-index: 1000; z-index: 40;width: 100%;height: 100%;background: #transparent;position: absolute;cursor: pointer;";
    this.child_play_pulsate_MAIN.appendChild(button_play_pulsate);

    var imagen_button = document.createElement("img")
    imagen_button.className = "class_centrarSDF_ class_button_opacity";

    if (this.MAIN.offsetHeight<=100) {
      imagen_button.setAttribute("width", 80)
    }
    if (this.MAIN.offsetWidth<=100) {
      imagen_button.setAttribute("width", 80)
    }

    imagen_button.name = "FLASH_button_leave"
    imagen_button.src = DOBLEFLASH_ICON_PLAY
    button_play_pulsate.appendChild(imagen_button)

    button_play_pulsate.addEventListener("mouseover", e => {
        imagen_button.name = "FLASH_button_hover"
    });

    button_play_pulsate.addEventListener("mouseleave", e => {
        imagen_button.name = "FLASH_button_leave"
    });

    this.cell_button_play_pulsate = button_play_pulsate

    // celda para evento de mouse + keypress
    this.entry = document.createElement("textarea")
    this.entry.style = ";background: transparent;position: relative;z-index: 2;border: none;resize: none;background: transparent;overflow: hidden;resize: none;color: transparent;outline: none;width: 100%;height: 100%;opacity: 0.1;"
    this.entry.style.cursor = cursor_theme_custom
    this.containerObject.appendChild(this.entry)

    if ($object.getAttribute("onclick")) {
      this.entry.setAttribute("onclick", $object.getAttribute("onclick"))
    }

    // variables de entorno
    var isFocus = false
    var entry = this.entry
    var containerObject = this.containerObject

    // auto hide cursor
    var mouseTimer = null, cursorVisible = true;

    function disappearCursor() {
        mouseTimer = null;
        entry.style.cursor = "none";
        cursorVisible = false;
    }

    entry.addEventListener("click", e => {
        if (mouseTimer) {
            window.clearTimeout(mouseTimer);
        }
        if (!cursorVisible) {
            entry.style.cursor = cursor_theme_custom;
            cursorVisible = true;
        }
        mouseTimer = setTimeout(disappearCursor, 1500);
    });

    entry.onmousemove = function() {
        if (mouseTimer) {
            window.clearTimeout(mouseTimer);
        }
        if (!cursorVisible) {
            entry.style.cursor = cursor_theme_custom;
            cursorVisible = true;
        }
        mouseTimer = setTimeout(disappearCursor, 1000);
    };

    // bloqueando -> right-click menu popup
    this.MAIN.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);

    // evento mouse<=Hover*
    this.entry.addEventListener("mouseover", e => {
        isFocus = true
        entry.focus()
    });

    this.entry.addEventListener("mouseleave", e => {
        isFocus = false
    });

    // evento (fullScreen) + PRESS<=*
    function comprobar_fullscreen() {
      if ( document.fullscreen ) {return true} else {return false}
    }

    entry.isPause = false
    entry.to_next_frame = false
    entry.to_back_frame = false


    document.addEventListener("keypress", event => {

      if (document.activeElement==entry) {

        event.preventDefault();
        event.stopPropagation();

        if (event.key.toLocaleLowerCase() == "n") {
            if (isFocus) {
              entry.to_next_frame = true
            }
        }

        if (event.key.toLocaleLowerCase() == "b") {
            if (isFocus) {
              entry.to_back_frame = true
            }
        }

        if (event.key.toLocaleLowerCase() == "s") {
          if (isFocus) {
              entry.active_stop_play = true
          }
        }


        if (event.key.toLocaleLowerCase() == " ") {
          if (isFocus) {
            if (entry.isPause) {
              entry.active_step_operation = false
              entry.isPause=false
            } else {
              entry.active_step_operation = true
              entry.isPause=true
            }
          }
        }

        if (document.fullscreen||document.mozFullScreen) {
            if (event.key == "f") {
                if (!document.exitFullscreen) {
                  document.mozCancelFullScreen()
                } else {
                  document.exitFullscreen()
                }
                var neco = function() {
                  isFocus = true
                }
                return setTimeout(neco, 300)

            }
        }

        if (isFocus) {
          // fullScreen
          if (event.key.toLocaleLowerCase() == "f") {
              if (!containerObject.webkitRequestFullScreen) {
                containerObject.mozRequestFullScreen()
              } else {
                containerObject.webkitRequestFullScreen()
              }
          }
        }
      }
    });


    // celda de progreso
    this.chil_progress_MAIN = document.createElement("div")

    var cell_PP_MAIN = document.createElement("div")
    cell_PP_MAIN.className = "contenedor_overlay_FLASH"
    cell_PP_MAIN.style="z-index: 50;position: absolute;"
    this.chil_progress_MAIN.appendChild(cell_PP_MAIN)

    var cell_PP_2 = document.createElement("div")
    cell_PP_2.className = "class_centrarSDF_"
    cell_PP_2.style="z-index: 50;position: absolute;"
    this.child_progress_text = document.createElement("span")
    this.child_progress_text.className = "text_gradiant_FLASH"
    this.child_progress_text.innerHTML = "0%"

    this.child_progress_text.style = "font-size: " + (
      (this.MAIN.offsetHeight + this.MAIN.offsetWidth) / 14)

    this.chil_progress_MAIN.appendChild(cell_PP_2)
    cell_PP_2.appendChild(this.child_progress_text)

    this.containerObject.appendChild(this.chil_progress_MAIN)


    return this
}

// introspección para maquetas <source> de tipo Flash
Class_Flash2.prototype.find_sourcesFlash = function() {

  var $lista = document.querySelectorAll('source[type="FLASH"]')
  var easySDF_list = new Array()

  var $find_object = function(object) {
    for (var pointer in easySDF_list) {
      var $compared = easySDF_list[pointer];
      if ($compared==object) {
        return true;
      }
    }
    return false
  }

  for (var $pointer in $lista) {
    var $object = $lista[$pointer];
    if (typeof $object == "object") {
      if (!$find_object($object)) {
        if ($object.src!="") {
            easySDF_list = easySDF_list.concat([$object]);

            // creando canvas
            var self = Flash2.create_canvas_reproductor($object)

            // leyendo flujo binario
            Flash2.read_file_FLASH2($object.src, self)
        }
      }
    }
  }
}

//---------------------------------------------------------------------------
//
// cargando introspección de celdas
//
//---------------------------------------------------------------------------

var PATH_DOBLEFLASH = new String()

addEventListener('load', () => {

  // cargando hoja de estilo para DobleFlash
  var $lista = document.querySelectorAll('script')

  for (var $pointer in $lista) {
    var $object = $lista[$pointer];
    if (typeof $object == "object") {
      if ($object.src!="") {
        PATH_DOBLEFLASH = $object.src.split("DobleFlash.js")[0]
        file = PATH_DOBLEFLASH + "DobleFlash.css"
        $styleTmp      = document.createElement("link");
        $styleTmp.href = file;
        $styleTmp.rel  = "stylesheet"
        $styleTmp.type = "text/css";
        document.head.appendChild($styleTmp);
      }
    }
  }

  // cargando iconos
  DOBLEFLASH_ICON_PLAY = PATH_DOBLEFLASH + "logo.png"

  // creando evento de auto carga de animaciones FLASH2
  Flash2.find_sourcesFlash(false)
});


//---------------------------------------------------------------------------
//
// BANNER de bienbenida para la consola
//
//---------------------------------------------------------------------------

function show_DobleFlash_banner() {
    (0,window.setTimeout)(window.console.log.bind(window.console,
    "%c Doble%cFlash",
    "margin-top: 7px;color: #50E68A; background: #1A1A1A; font-size: 24px;",
    "margin-top: 7px;color: white;background: #FF4040;font-size: 24px;margin-left: -6px;padding-right: 0.5em;"));
}

setTimeout(show_DobleFlash_banner, 128)
