var assert = require('assert'),
	handlesUrl = require('../'),
	router = require('express').Router();

describe('test', function () {
	before(function () {
		router.get('/users/:id(\\d+)');
	});

	describe('yes', function () {
		it('should return true when the router can handle the url', function () {
			assert.equal(handlesUrl(router, '/users/12'), true);
		});
	});

	describe('no', function () {
		it('should return false when the router cannot handle the url', function () {
			assert.equal(handlesUrl(router, '/users/mark'), false);
		});
	});
});