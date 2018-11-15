import Route from '@ember/routing/route';
import Paths from "../../../../system/paths";

export default Route.extend({
    model(params) {
        return this.store.findRecord(Paths.Models.TEXTURE, params.texture_id);
    },

    actions: {
        transitionBack() {
            history.back();
        }
    }
});
