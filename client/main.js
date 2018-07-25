import { Template } from 'meteor/templating';

import '../lib/router.js';
import './result.html';

Template.home.events({
  'submit #myForm'(event) {
    const value = event.target.myText.value;
    BlazeLayout.render('result', {'value': value});
  }
})