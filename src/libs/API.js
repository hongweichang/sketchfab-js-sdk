'use strict';

var reqwest = require('reqwest');
var config = require('../config');

var _ = {
    pick: require('lodash/object/pick'),
    defaults: require('lodash/object/defaults'),
    identity: require('lodash/utility/identity')
};

var API = {

    get: function( path, params, headers ) {

        params = _.pick(_.defaults(params, {}), _.identity); // Prune empty params
        headers = _.defaults(headers, {});

        return reqwest({
            method: 'get',
            url: config.BASE_API_URL + path,
            data: params,
            headers: headers,
            crossOrigin: true
        });
    },

};

module.exports = API;
