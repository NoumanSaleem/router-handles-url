Check if an express router can handle a given url.

```javascript
var handlesUrl = require('router-handles-url'),
	router = require('express').Router();

router.get('/users/:id(\\d+)', ..);

handlesUrl(router, '/users/123') //true
handlesUrl(router, '/users/bob') //false
```