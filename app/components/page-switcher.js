import Component from '@ember/component';

export default Component.extend({
    scrollUp() {
        document.body.scrollTop = 180;
        document.documentElement.scrollTop = 180;
    },

    actions: {
        move(number, numberOfPages) {
            this.setCurrentPage(number, numberOfPages);
            let newStart = number - 5;

            // if shown pages < left bound
            if (newStart < 1) {
                newStart = 1;   // minimum start
            }

            // if shown pages > right bound
            if (newStart + 9 > numberOfPages && numberOfPages-9 >= 1) {
                this.set("startPage", numberOfPages-9);  // maximum start
            } else {  // else the current page should be centered within pagination, that's why start = newStart-5
                this.set("startPage", newStart);
            }

            if (number > 0 && number <= numberOfPages) {
                this.scrollUp();
            }
        }
    }
});
