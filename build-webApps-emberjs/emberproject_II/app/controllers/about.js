import Controller from '@ember/controller';

export default Controller.extend({
  title: 'About Us - Contact Us',
  body: ['address', 'street', 'email', 'other things'],
  isShowBody: true,
  item: null,
  comments: [
    {
      name: 'Mike Smith',
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
  ],

  actions: {
    sayHello(item) {
      alert(item);
    },

    toggleBody() {
      this.toggleProperty('isShowBody');
    },
    choiceOption(id) {
      this.set('item', id)
    },
    showOption() {
      alert(this.get('item'));
    },
    viewPost() {
      alert(`${this.get('name')} ${this.get('comment')}`);
    },
    submitAction() {
      alert('Submitted');
    }
  },
});
