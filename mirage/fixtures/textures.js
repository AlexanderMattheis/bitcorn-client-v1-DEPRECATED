// create array of objects [{...}, {...}, ..., {...}]
export default [{
    type: 'creations/graphics/textures',  // this leads to a search for a model "creations/graphics/vector-texture"
    id: 'space',
    attributes: {
        author: 'Alexander Mattheis',
        date: '2018-11-11',
        description: 'Coppers? No, dude! Planets are the new currency!',
        image: '/assets/images/textures/planets.png',
        licence: '<a href="https://creativecommons.org/publicdomain/zero/1.0/deed" target="_blank">CC0 1.0 Universal</a>',
        path: '/assets/downloads/textures/planets.zip',
        tags: ['planets', 'space', 'universe'],
        title: 'Space'
    }
}, {
    type: 'creations/graphics/textures',  // this leads to a search for a model "creations/graphics/vector-texture"
    id: 'surfaces',
    attributes: {
        author: 'Alexander Mattheis',
        date: '2018-11-11',
        description: '39 textures created/taken for Blender.',
        image: '/assets/images/textures/surfaces.png',
        licence: '<a href="https://creativecommons.org/publicdomain/zero/1.0/deed" target="_blank">CC0 1.0 Universal</a>',
        path: '/assets/downloads/textures/surfaces.zip',
        tags: ['grounds', 'surfaces', 'walls'],
        title: 'Surfaces'
    }
}, {
    type: 'creations/graphics/textures',  // this leads to a search for a model "creations/graphics/vector-texture"
    id: 'synthetics',
    attributes: {
        author: 'Alexander Mattheis',
        date: '2018-11-11',
        description: 'Abstract textures like color-splashes.',
        image: '/assets/images/textures/synthetics.png',
        licence: '<a href="https://creativecommons.org/publicdomain/zero/1.0/deed" target="_blank">CC0 1.0 Universal</a>',
        path: '/assets/downloads/textures/synthetics.zip',
        tags: ['artificial', 'synthetics', 'splash'],
        title: 'Synthetics'
    }
}];