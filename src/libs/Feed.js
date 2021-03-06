'use strict';

var _ = {
    pick: require('lodash/object/pick'),
    extend: require('lodash/object/extend'),
    keys: require('lodash/object/keys')
};
var API = require('./API');
var config = require('../config');

var defaults = {
    'count': 20,
    'offset': null,
};

/**
 * @namespace
 * @memberof SketchfabSDK
 */
function Feed(sdk) {
    this.sdk = sdk;
};

Feed.prototype = {

    /**
     * Get feed stories
     * @memberof SketchfabSDK.Feed#
     * @param {object} token - OAuth2 access token
     * @param {object} [params] - Pagination parameters
     * @param {int} [params.count=20] - Number of results
     * @param {int} [params.offset] - Offset for pagination
     *
     * @return Promise
     */
    all: function(token, params) {

        console.warn('Feed.all is not a public API. It might break in the future.');

        var headers = {};
        if (token) {
            headers['Authorization'] = 'Bearer ' + token;
        } else {
            throw new Error('OAuth2 access token is missing');
        }

        // Fill in default values, remove unknown params
        var queryParams = _.extend({}, defaults, params);
        queryParams = _.pick(queryParams, _.keys(defaults));

        return API.get(config.FEED_ENDPOINT, queryParams, headers);
    },
};

module.exports = Feed;
