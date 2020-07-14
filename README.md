
DobleFlash-JS
=============

`DobleFlash` is a new web multimedia container, its extension is `.DOF`, it is inspired by [SWF](https://wikipedia.org/wiki/swf), it allows to create animations of frames being the notable improvement of GIF, it also allows to create animated cursors compatible with HTML5, `DobleFlash-JS` is the API for **JavaScript** that allows to reproduce this new format, it is inspired by [Flash Player](https://wikipedia.org/wiki/Adobe_Flash_Player)

---

**License** [GNU GPL v3](http://www.gnu.org/licenses)

---

> How is the Double Flash format different from other alternatives?

Of all the alternatives [GfyCat](http://www.gfycat.com) is the most powerful, even so it does not have an efficient load in all broadband, you have to depend on the online service to continue working, it is not Open-source, with `DobleFlash-JS` that does not happen since it allows you to have the playback engine at all times and to test in OFFLINE ways, being able to make improvements in the code if you wish.

*Format .DOF*
1. less weight and quality than GIF
2. supports structure for frame animations for video and animated cursors
3. supports Codecs Jpeg & PNG
4. has a multi-platform program, which allows you to convert video, PSD, image sequences to the DoubleFlash format

*DobleFlash-JS*
1. effective loading bar to read the frame animation file (video)
2. effective reproduction & good performance
3. Automatic optimizations for a good user experience
4. Support for automatic playback on PC and mobile devices
5. It allows loading animated cursors in CSS3 and animations (video) in HTML5
6. Provides you with a more advanced technique than Sprite-CSS

---

> View DEMOS

[Non-cyclical playback](https://sunfurthanos.github.io/DobleFlash-JS/samples/1.basic.html)

[Auto Play](https://sunfurthanos.github.io/DobleFlash-JS/samples/2.auto-play.html)

[Customize FPS](https://sunfurthanos.github.io/DobleFlash-JS/samples/3.custom_FPS.html)

[Click event](https://sunfurthanos.github.io/DobleFlash-JS/samples/4.event_click.html)

---

> ¿como usar DobleFlash-JS en mi proyecto web?

**PASO 1** copy the folder [./source](source), to the working directory of your web project, if you wish you can rename it.

**PASO 2** import `DobleFlash.js` and define the desired type of player in your HTML ...

```html
<!-- import API (DobleFlash-JS) -->
<script type="text/javascript" src="./DobleFlash-JS/DobleFlash.js"></script>

<!-- defining basic player -->
<source src="./src/animation.DOF" type="FLASH" style="width: 380;height: 200">
```

**STEP 3** run your web project from a `localhost` or `server-online`

**SUMMARY** as you can see the implementation in a web project is very easy, also does not require knowledge in JS, easier impossible! :)

---

> What is the best web browser for DobleFlash-JS?

DobleFlash-JS is designed to get a good acceleration by CPU, GPU and cache in the `Google Chrome` browser, however it is compatible with other browsers, but even so the performance will always be higher in Google Chrome :)

---

# Tools in Development - **PHASE 1**

**paused-instantaneous** the paused is tied to the FPS assigned to the animations, with this new patch the response time for the paused will be instantaneous.

**inherited from functions** automatic inherited from strategic CSS properties and user-defined JS events

**auto-cache** you can manually activate the playback cache system, the cache system allows a good FPS rate without consuming much CPU.

**fullscreen-auto-pause** make animations pause if one of them is in full screen for a better user experience

**controls** playback controls, such as: pause, play, stop, full screen, view or download frame, jump from one frame to another, download animation file (it is downloaded from the cache generated in the browser, to avoid unnecessary requests to the server), extend image by proportion, see animation information (resolution, FPS, creator, date).

**scroll-pause** if the animations are not visible in the scroll they will be paused

**scroll-pause-syncro** if animations are visible in the scroll, but moving the scroll will pause for a better experience

**load-syncro** you can choose if you want to make the animations load one after the other (synchronous loading), something very basic on any website

**Animated Cursor** support to use animated cursors in `HTML5`, this will allow to automatically embed the animated cursors files in CSS3.

**Delos-sprite** `CSS sprites` have been used in HTML5 and CSS3, to avoid the need to load an image more than once, DobleFlash-JS does it much better, you only have to load the image from HTML5 and the API will generate an automatic cache, this way when you want to load the same image instead of requesting the request from the server, the API refactor the original url of the cell involved by that of the local cache, of course in each image you can activate it or not the cache system, allowing professional and effective use.

**Multimedia converter** Simple, aesthetic and intuitive program for `Windows / Linux` that allows you to convert sequences of PNG images to animated cursors, convert video or animations made in Photoshop (PSD) to DoubleFlash animation, you can also privatize the animations if so you want it, that is to say that its reproduction is only compatible from a certain hosting, it also integrates a compact and light viewer to reproduce the DoubleFlash animations and GIFs.

---

# Tools in Development - **PHASE 2 (requires sponsors)**

**Multimedia converter (new version)** MAC support, you can also convert video to other formats and convert all the audio files you want at the same time regardless of the number of CPU cores, it also allows you to lower and increase the speed of Real-time conversion, for video conversions it has GPU acceleration and the `Ultra-Magical` possibility of resuming the conversion even if you turn off the computer, it is also possible to resume it on another computer, it has useful console use for online multimedia services.

**Animation editor** program written in HTML5 and JS, which allows you to make editing cuts and compositions in your already generated animations without having to re-encode the result, the supported editing cuts range from duplicating a group of frames and moving them from one place to another in the timeline, delete them, apply reverse effect, change FPS, change (brightness, contrast and saturation) and create subtitles, this will allow you to do an endless number of parodies and `very hot` environments in your animations, without affecting the weight of the animation file, you only make the changes you want and you can copy the rasterization and playback coordinates to the clipboard, you must paste them in the desired player in your HTML, this avoids re-encoding and re-upload the animation to the server.

```html
<source
	src="src/editable_animation.DOF"
	type="FLASH"
	style="width: 380;height: 200"
	flash-script="iVBORFCFbw0CeOpEOw0KGgoAAABQAihMHhK9j2tNPV10jDjMxlozLCzDIHtdU53htM8MbOFfum3tYSZg9sfCzB1MHPkIHQnnjKPvhngU99xMSOpyxPPubLcp+roJ4FIOiUBgxcznzSYHbQ5ER"
>
```

**Viewer for Android & IOS** Light and adaptive program to view and download DoubleFlash animations in a simple and intuitive way.

**Streaming** support for efficient streaming playback on any type of broadband

**Standardization** Invite the `W3C` and browser manufacturers to return a standard to DobleFlash, in this way this new format can be natively integrated in browsers, which results in greater loading and playback performance in 57.32%, which is more than enough for an efficient, responsible, democratic and massive standardization.

---

## You fell in love with DobleFlash, do you want to help the developer financially?

- If you consider that the Double Flash is worth something for your day to day, you can send me a remittance, with which you will make the project remain FREE & FREE! ...

you are a large, small, Freelance company, do you use this project in your day to day ?, let me know !, this project needs sponsors who want to help the project with advertising, donations and suggestions, they will be included in the project credits like HEROES :)

**developer email**: hormigence123@gmail.com

---

**Sunfur Thanos** If you learn to be open to adapt, you will be invincible!
