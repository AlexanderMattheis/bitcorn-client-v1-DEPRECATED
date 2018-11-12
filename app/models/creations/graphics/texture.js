import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    date: DS.attr(),
    description: DS.attr(),
    image: DS.attr(),
    licence: DS.attr(),
    number: DS.attr('number'),
    path: DS.attr(),
    tags: DS.attr('array'),
    title: DS.attr()
});
