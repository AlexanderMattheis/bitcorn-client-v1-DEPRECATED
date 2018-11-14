import Component from '@ember/component';

export default Component.extend({
    isResized: false,

    actions: {
        toggleSize(reference) {
            let viewElements = reference.element;
            let image = viewElements.getElementsByClassName("image-background")[0];

            if (image.style.height === "430px") {
                image.style.height = "120px";
                image.style.width = "120px";
            } else {
                image.style.height = "430px";
                image.style.width = "430px";
            }
        }
    }
});
