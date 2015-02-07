var Q = require('q');
var _ = require('lodash');
var request = require("request");

module.exports = function() {
    var exec = function(alert, config, e) {
        var deferred = Q.defer();

        var args = {
            'event': e.repr()
        };

        request.post(config.url, {
            'body': args
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                deferred.resolve();
            } else {
                deferred.reject(error || new Error("Status: "+response.statusCode));
            }
        });

        return deferred.promise;
    };

    return {
        id: "webhook",
        title: "Webhook",
        options: {
            url: {
                type: "text",
                label: "Url"
            }
        },
        execute: exec
    };
};
