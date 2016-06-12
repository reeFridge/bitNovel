


/**
 * Common torrent-tracker interface.
 * @interface
 */
var ITracker = function() {};


/**
 * Search query.
 * @return {Array.<ITorrent>}
 */
ITracker.prototype.query = function() {};


/**
 * Tracker availability check.
 * @return {boolean}
 */
ITracker.prototype.isAvailable = function() {};


/**
 * Get tracker url.
 * @return {string}
 */
ITracker.prototype.getUrl = function() {};
