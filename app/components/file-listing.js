import Component from '@ember/component';

export default Component.extend({
    actions: {
        toggleSize(reference) {
            let viewElements = reference.element;
            let backgroundImage = viewElements.getElementsByClassName("image-background")[0];
            let resizingIcon = viewElements.getElementsByClassName("toggleImage")[0];

            if (backgroundImage.style.height === "430px") {
                backgroundImage.style.height = "120px";
                backgroundImage.style.width = "120px";
            } else {
                backgroundImage.style.height = "430px";
                backgroundImage.style.width = "430px";
                window.navigator.imageHasBeenEnlarged = true;  // can also be set below [@ref]
            }

            if (resizingIcon.classList.contains("sprite-reduce")) {
                resizingIcon.classList.add("sprite-enlarge");
                resizingIcon.classList.remove("sprite-reduce");
            } else {
                resizingIcon.classList.add("sprite-reduce");
                resizingIcon.classList.remove("sprite-enlarge");
                // [ref]
            }
        }
    }
});
