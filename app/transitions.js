export default function(){
    /* application */
    this.transition(
        this.toRoute('home'),
        this.use('toDown')
    );

    this.transition(
      this.toRoute('creations'),
      this.use('toDown')
    );

    this.transition(
        this.toRoute('tutorials'),
        this.use('toDown')
    );

    this.transition(
        this.toRoute('info'),
        this.use('toDown')
    );

    /* liabilities */
    this.transition(
        this.toRoute('contact'),
        this.use('toRight')
    );

    this.transition(
        this.toRoute('imprint'),
        this.use('toRight')
    );

    this.transition(
        this.toRoute('privacy'),
        this.use('toRight')
    );

    /* creations.graphics */
    this.transition(
        this.toRoute('creations.graphics'),
        this.use('toRight')
    );

    this.transition(
        this.toRoute('creations.graphics.textures'),
        this.use('toRight')
    );

    this.transition(
        this.toRoute('creations.graphics.vector-graphics'),
        this.use('toRight')
    );

    /* creations.graphics.textures */
    this.transition(
        this.toRoute('creations.graphics.textures.show'),
        this.use('toRight', { duration: 1000 }),
        this.reverse('toLeft'),
    );

    /* creations.programs */
    this.transition(
        this.toRoute('creations.programs'),
        this.use('toRight')
    );

    this.transition(
        this.toRoute('creations.programs.bioinformatics'),
        this.use('toRight')
    );

    this.transition(
        this.toRoute('creations.programs.cross-dating'),
        this.use('toRight')
    );

    this.transition(
        this.toRoute('creations.programs.res'),
        this.use('toRight')
    );
}
