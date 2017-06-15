# Adding stylesheet for message
Before <code>\</head></code> set the code:<br>
```html
<link rel="stylesheet" href="css/push.css">
```
or use https link from our server:
```html
<link rel="stylesheet" href="https://gmsummit.me/push-message/css/push.css">
```
# Adding push-part:
In tag <code>\<body>\</body></code> set the code:<br><br>
```html
<div id='push1' class="push-wrapper">
  <div class="push-content">
    <a class="close-button">
      <span class="one"></span>
      <span class="two"></span>
    </a>
    <p class="push-text">
      Только что было забронировано место:<br>
      <span class='name'></span><span class='city'></span>
    </p>
  </div>
</div>
```
# Adding counter-part
In place where you want to place your counter, set the code:
```html
<span id='remain_ticket'></span>
```
# Adding scripts
Before <code>\</body></code> set the code:
```html
<script src='js/jquery.min.js'></script>
<script src='js/jquery.cookie.js'></script>
<script src='js/push.js'></script>
```
or use https link from our server:
```html
<script src='https://gmsummit.me/push-message/js/jquery.min.js'></script>
<script src='https://gmsummit.me/push-message/js/jquery.cookie.js'></script>
<script src='https://gmsummit.me/push-message/js/push.js'></script>
```
