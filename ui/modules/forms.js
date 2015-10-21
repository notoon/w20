define([
    '{angular}/angular',
    '{angular-formly}/formly',
    '[text]!{w20-ui}/templates/forms/bootstrap/input-template.html',
    '[text]!{w20-ui}/templates/forms/bootstrap/validation.html',

    '{angular-messages}/angular-messages'

], function (angular, formly, inputTemplate, validationTemplate) {
    'use strict';

    var module = angular.module('w20UIForms', ['formly', 'ngMessages']);

    module.run(['formlyConfig', function (formlyConfig) {

        formlyConfig.setType([
            {
                name: 'input',
                template: inputTemplate
            }
        ]);

        formlyConfig.setWrapper([
            {
                template: validationTemplate
            }
        ]);
    }]);

    return {
        angularModules: ['w20UIForms']
    }
});


