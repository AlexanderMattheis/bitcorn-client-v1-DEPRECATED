import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('creations', function() {
    this.route('graphics', function() {
      this.route('textures', function() {
        this.route('show', { path: '/:texture_id' });  // the texture id is now passed to the route
      });
      this.route('vector-graphics', function() {});
    });
    this.route('programs', function() {
      this.route('res');
      this.route('cross-dating');
      this.route('bioinformatics');
    });
  });

  this.route('tutorials');
  this.route('contact');
  this.route('imprint');
  this.route('privacy');
  this.route('about-authors');
  this.route('about-page');
});

export default Router;
