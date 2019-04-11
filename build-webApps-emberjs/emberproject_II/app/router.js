import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('edit', {path: 'about/:edit_id'});
  this.route('services');
  this.route('contact');

  this.route('posts', {path: '/posts'}, function() {
    this.route('new');
    this.route('post', {path: ':post_id'})
  });
});

export default Router;
