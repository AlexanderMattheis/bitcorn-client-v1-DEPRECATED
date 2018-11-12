import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: "api" // to make request to "/api"
});