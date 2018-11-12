import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('creations', function() {
    this.route('start');
    this.route('graphics', function() {
      this.route('textures');
      this.route('vector-graphics');
    });
    this.route('programs', function() {
      this.route('powershell-scripts');
    });
  });

  this.route('tutorials');
  this.route('info');
  this.route('contact');
  this.route('imprint');
  this.route('privacy');
});

export default Router;
