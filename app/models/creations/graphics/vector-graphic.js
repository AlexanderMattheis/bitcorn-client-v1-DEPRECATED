import DS from 'ember-data';

export default DS.Model.extend({  // this model have to be in the same namespace as the file which want have access on that model
    author: DS.attr('string'),
    date: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    licence: DS.attr('string'),
    path: DS.attr('string'),
    tags: DS.attr('array'),
    title: DS.attr('string')
});

