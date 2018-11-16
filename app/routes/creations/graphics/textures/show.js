import Route from '@ember/routing/route';

import Paths from "../../../../system/paths";
import Regex from "../../../../system/regex";
import Symbols from "../../../../system/symbols";

export default Route.extend({
    //referrerURL: Paths.TEXTURES,
    referrerPage: 1,

    model(params) {
        return this.store.findRecord(Paths.Models.TEXTURE, params.texture_id);
    },

    actions: {
        didTransition() {  // launched before transition to new URL was made
            //this.set("referrerURL", this.get("router.url").replace("&restart=true", ""));

            let url = this.get("router.url");
            let page = parseInt(url.replace(Regex.NON_DIGITS, Symbols.EMPTY));

            if (isNaN(page)) {
                this.set('referrerPage', 1);
            } else {
                this.set('referrerPage', page);
            }
        },

        transitionBack() {
            //window.location.href = this.get('referrerURL');

            this.transitionTo("/creations/graphics/textures" + "?page=" + this.get('referrerPage'));
        }
    }
});
