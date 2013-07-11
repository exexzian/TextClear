## TextClear
===========================================================================<br/>
textClear.js v0.0.2<br/>
jQuery Plugin to clear input field text on fly - like as provided in Internet Explorer 10 <br/>
Requires - textClearStyle.css and jquery lib(>1.6)

<hr size="3"/>
**Website:** http://exexzian.github.io/TextClear/ <br/>
**jQuery Plugin Link:**: http://plugins.jquery.com/textClear/ <br/>
**For Demo:** <a href="http://exexzian.github.io/TextClear/demo/TextClearDemo.html"> click here </a><br/>
<hr size="3"/>
**Features**:<br/>
➊ ▏On keyPress it provides ✘ image on the extreme right corner of the input field       to clear out the text <br/>
➋ ▏Handles multiple input fields <br/>
➌ ▏Cross Image changeable via CSS <br/>
➍ ▏Ohhh!! 4th feature provdies 4 fancy cross images for usage under **images** directory <br/>

<img src="http://s20.postimg.org/5rd0o6vtp/demo.png" title="Text Clear Demo" />

<hr size="3"/>

**Note:** It overrides the IE-10's default ✘ image so as to offer the same look and feel on all browsers.

<hr size="3"/>

**Usage**:<br/>

✔ Add <code>noTextClear</code> class in all those **text** input fields in which you want to apply the plugin effect like as follows:<br/>
```
<body>
    ...
    ...
	Name: <input id="txt" class="noTextClear" type="text" /><br/>
	Email: <input id="email" class="noTextClear" type="email" /><br/>
	Telephone No.: <input id="tel" class="noTextClear" type="tel" /><br/>
	Password: <input type="password" class="noTextClear" />
    ...
    ...
</body>

```

✔ Inside HTML Head Tag add path to jquery and <code>textClear.js</code> and supporting stylesheet <code>textClearStyle.css</code>. <br/>
    ■ You may need to change the paths depending on your folder structure.
```
<html>
<head>
	<script type="text/javascript" src="jquery.min.js"></script>
	<script type="text/javascript" src="clearme.min.js"></script>
    <link rel="stylesheet" href="textClearStyle.css" type="text/css"/>
</head>
<body>
...
</body>
</html>
```
✔ Now Call <code>textClear()</code> in your JavaScript file using <code>$('.noTextClear')</code> selector as:<br/>
   <code> $('.noTextClear').textClear(); </code>

<hr>

✔ And to change ✘ image: simply browse inside <code>textClearStyle.css</code> and change its <code>background-image </code> property as follows inside <code> .crossClear </code> class: <br/>
<code> background-image: url('YourImageUrl'); </code> <br/>
 ■ And Of course you can choose other images provided in images directory as well
 






