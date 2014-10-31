Pubsub.js
=========

I simple implementation of the publish/subscribe javascript pattern

Example
=========

```
  var div = document.getElementById('myDiv');
  var div2 = document.getElementById('myDiv2');

  var subscriber = subscribe('inDiv', function(topic, data) {
    var p = document.createElement('p');
    p.innerHTML = data.message;
    div.appendChild(p);
  });
  
  var subscriber2 = subscribe('inDiv', function(topic, data) {
    var p = document.createElement('p');
    p.innerHTML = data.message;
    p.innerHTML += 'from subscriber2';
    div2.appendChild(p);
  });
  
  publish('inDiv', [{message: 'Hello'}, {message: 'World!'}]);
  
```
