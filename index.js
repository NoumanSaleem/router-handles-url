function routerHandlesUrl(router, url) {
	return router.stack.some(function (layer) {
		return layer.regexp.test(url) ? layer.handle.stack ? checkRouter(layer.handle, url) : true : false;
	});
}

module.exports = routerHandlesUrl;