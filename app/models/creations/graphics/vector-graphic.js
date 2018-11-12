import DS from 'ember-data';

export default DS.Model.extend({  // this model have to be in the same namespace as the file which want have access on that model
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

