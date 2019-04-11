import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return [
      {
        name: 'Mike Andreas',
        comment: 'Thanks for the great post!'
      },
      {
        name: 'John Smith',
        comment: 'Thanks for the great post!'
      },
      {
        name: 'Jack Sulivan',
        comment: 'Thanks for the great post!'
      }
    ]
  },
  setupController(controller, model) {
    controller.set('comments', model);
  }
});
