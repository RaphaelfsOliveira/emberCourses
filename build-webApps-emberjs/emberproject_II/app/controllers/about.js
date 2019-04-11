import Controller from '@ember/controller';

export default Controller.extend({
  title: 'About Us - Contact Us',
  // body: ['address', 'street', 'email', 'other things'],
  isShowBody: true,
  choiceComment: null,
  comments: null,

  actions: {
    sayHello(item) {
      alert(item);
    },

    toggleBody() {
      this.toggleProperty('isShowBody');
    },
    choiceOption(option) {
      this.set('choiceComment', option)
    },
    showOption() {
      const comment = this.get('choiceComment');
      if (comment) {
        alert(`Name: ${comment.name}, Comment: ${comment.comment}`);
        // this.transitionToRoute('edit', comment);
        this.transitionToRoute('edit', comment.id);
      } else {
        alert('Escolha um comentário');
      }

    },
    viewPost() {
      alert(`${this.get('name')} ${this.get('comment')}`);
    },
    submitAction() {
      alert('Submitted');
    }
  },
});
