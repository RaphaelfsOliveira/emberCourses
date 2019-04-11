import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.log('contact route', params);
    return params;
  },

  setupController(controller, model) {
    controller.set('selectedOption', model);
  },
});
