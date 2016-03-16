Koa Graph-Data-Layer Middleware
===

Description
---
This package is an extension of [Graph-Data-Layer](https://github.com/lsunsi/graph-data-layer) which makes it easy to expose **data-layers** from a Koa server.

This makes it possible to **fulfill queries** from http methods.

Installation
---
```
npm install graph-data-layer koa-graphdl-middleware
```

Usage
---
```javascript
/*
* First, initialize your data-layer
* with the schemas you want to expose
*/

import initLayer from 'graph-data-layer';

const layer = initLayer();
layer.register(/* ... */);

/*
* Then, just expose from your app
* with this middleware
*/

import koa from 'koa';
import expose from 'koa-graphdl-middleware';

const app = koa();
app.use(expose(layer));

```

License
---
MIT
