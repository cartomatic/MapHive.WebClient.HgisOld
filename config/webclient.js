(function(){
    if(typeof(__mhcfg__) === 'undefined'){
        __mhcfg__ = {};
    }

    var debug = window.location.href.indexOf('debug=true') >= 0,
        getUrl = function(endPoint){
            return (debug ? __mhcfg__.apiEndPoints[endPoint].dev : __mhcfg__.apiEndPoints[endPoint].production)
        };

    //customise and add endpoints as required
    __mhcfg__.apiEndPoints = {
        getUrl: getUrl,
        authApi: {
            dev: 'https://localhost:44358/',
            production: 'https://core-api.maphive.net/'
            //token: ''
        },
        coreApi: {
            dev: 'https://localhost:44358/',
            production: 'https://core-api.maphive.net/'
        },
        appLocalizationApi: {
            dev: 'https://localhost:44358/applocalization/',
            production: 'https://core-api.maphive.net/'
        }
    };

    //namespaces to get the localization for
    __mhcfg__.namespacesToLocalize = [
        'mh'
    ];

    //total header to extract total dataset counts when reading lists
    __mhcfg__.headerTotal = 'x-total-count';
}());
