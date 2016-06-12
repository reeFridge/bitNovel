


/**
 * Common torrent-tracker interface.
 * @interface
 */
var ITracker = function() {};


/**
 * Search query.
 * @return {IQueryResponse}
 */
ITracker.prototype.getQuery = function() {};


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
