var util = require('util');
var EventEmitter = require('events');
var probe = require('tcp-ping').probe;
var Promise = require('promise');



/**
 * Abstract Tracker class realization
 * @constructor
 * @extends {EventEmitter}
 * @implements {ITracker}
 */
function Tracker() {
	EventEmitter.call(this);
}
util.inherits(Tracker, EventEmitter);


/**
 * @inheritDoc
 */
Tracker.prototype.getQuery = function(opt_params) {
	var params = {};
	params.query = opt_params.query || 'test';
	params.category = opt_params.category || 'Video';
	params.maxItems = opt_params.maxItems || 10;
	params.order = opt_params.order || '';
	params.desc = opt_params.desc || false;

	return new Promise(function(resolve, reject) {
		this._searchQueryRequest(params, function(err, queryResponse) {
			if (err) {
				reject(err);
			} else {
				resolve(queryResponse);
			}
		});
	}.bind(this));
};


/**
 * @inheritDoc
 */
Tracker.prototype.getUrl = function() {
	return this._url;
};


/**
 * @inheritDoc
 */
Tracker.prototype.isAvailable = function() {
	return new Promise(function(resolve, reject) {
		probe(this._url, 80, function(err, avail) {
			if (err) {
				reject(err);
			} else {
				if (avail) {
					resolve();
				} else {
					reject();
				}
			}
		});
	}.bind(this));
};


/**
 * @protected
 */
Tracker.prototype._searchQueryRequest = function(params, callback) {
	throw new Error('Method is not implemented');
};


/**
 * Tracker web-site url
 * @type {string}
 * @protected
 */
Tracker.prototype._url = '';


/**
 * @type {Tracker}
 */
module.exports = Tracker;
