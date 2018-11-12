import Component from '@ember/component';

export default Component.extend({
    isResized: false,

    actions: {
        toggleSize() {
            this.toggleProperty("isResized");
        }
    }
});
