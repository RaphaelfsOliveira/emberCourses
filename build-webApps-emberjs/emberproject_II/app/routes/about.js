import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return [
      {
        id: 0,
        name: 'Mike Andreas',
        comment: 'Thanks for the great post!'
      },
      {
        id: 1,
        name: 'John Smith',
        comment: 'Thanks for the great post!'
      },
      {
        id: 2,
        name: 'Jack Sulivan',
        comment: 'Thanks for the great post!'
      }
    ]
  },
  setupController(controller, model) {
    controller.set('comments', model);
  }
});
