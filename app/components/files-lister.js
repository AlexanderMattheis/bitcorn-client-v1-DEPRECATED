import Component from '@ember/component';
import Symbols from '../system/symbols';

export default Component.extend({
    inputValue: "",
    numberOfPages: 1,
    startPage: 1,

    init() {
        this._super(...arguments);  // executes the method from overridden init()-method with some predefined arguments
        this.filter(this.inputValue, this.page).then((resultsStruct) => {
            this.set("results", resultsStruct.results);
            this.set("numberOfPages", resultsStruct.results.firstObject.number);
        });  // in the beginning no filtering
    },

    actions: {
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
        },

        setCurrentPage(page, numberOfPages) {
            if (page >= 1 && page <= numberOfPages) {
                this.setPage(page);
                this.send('handleFilterEntries', page, false);
            }
        }
    }
});
