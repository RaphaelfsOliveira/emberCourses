import Route from '@ember/routing/route';

export default Route.extend({
  model(params, model) {
    console.log('############# edit route', params);
    console.log(model);

    const data = [
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
    return data[parseInt(params.edit_id)];
  },

  setupController(controller, model) {
    controller.set('selectedOption', model);
  },
});
