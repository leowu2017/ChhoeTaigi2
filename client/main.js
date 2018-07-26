import { Template } from 'meteor/templating';
import '../lib/methods.js';

import '../lib/router.js';
import './result.html';
import './updateDictionary.html'

Template.home.events({
  'submit #myForm'(event) {
    const value = event.target.myText.value;
    BlazeLayout.render('result', {'value': value});
  }
})

Template.updateDictionary.events({
  'click button'(event) {
      Meteor.call('parseDictionary');
  },
});