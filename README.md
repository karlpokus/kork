# kork
A crude rate limiter for node. A work in progress. Very experimental. Not suitable for production (or anything really).

# install
```
$ npm i kork
```

# wat?
- Checks a global `ts` on each request
- If `rate` has not passed since last execution - makes current request wait for `rate` ms

# usage
```javascript
// require and set rate in ms
var kork = require('kork')(2500);
// use in express
app.use([path,] kork);
// use in pype stack
pype(null, [klocka, kork, getData, finalhandler])(req, res);
```

# old API
Keeping this for the records
```javascript
kork.init(rate) // sets new ts and applys rate limit in ms
kork.reset() // sets/overwrites ts
kork.limit() // checks ts
```

# todos
- add tests
- probably needs some kind of global queue

# licence
MIT