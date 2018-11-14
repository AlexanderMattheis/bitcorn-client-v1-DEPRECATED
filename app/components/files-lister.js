import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
    inputValue: "",
    numberOfPages: 1,
    startPage: 1,

    init() {
        this._super(...arguments);
        this.send('handleFilterEntries', 1, true);
    },

    actions: {  // special functions that can be called in templates
        handleFilterEntries(page, resetStartPage) {
            let inputValue = this.inputValue;
            let filterAction = this.filter;
            // filters given the typed in stuff from the input field
            // and sets then the filtered results as the returned results "results"
            filterAction(inputValue, page).then((resultsStruct) => {
                if (resultsStruct.query === this.inputValue) {  // only if the results are for the current input
                    this.set("results", resultsStruct.results);
                    this.set("numberOfPages", resultsStruct.meta.pages);

                    // whenever the input has changed, show numbers right from the beginning on and reset selected page
                    if (resetStartPage) {
                        this.set("startPage", 1);
                        this.set("page", 1);
                    }
                }
            });

            this.resetImageSize();
        },

        setCurrentPage(page, numberOfPages) {
            if (page >= 1 && page <= numberOfPages) {
                this.setPage(page);
                this.send('handleFilterEntries', page, false);
            }
        }
    },

    resetImageSize() {
        if (this.$(".subcontainer a") !== undefined && this.$(".subcontainer a").length > 0) {
            let elements = this.$(".subcontainer a");

            elements.each(function (index, element) {
                if (index %2 === 0) {
                    element.className = "image-background";
                } else {
                    element.className = "sprite sprite-enlarge";
                }
            });

        } else {
            // properly waiting in modern browsers until element is rendered (timeouts are not used anymore)
            window.requestAnimationFrame(this.resetImageSize.bind(this));
        }
    }
});
