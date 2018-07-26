import { Meteor } from 'meteor/meteor';

import '../client/main.html';
import '../client/updateDictionary.html';

FlowRouter.route('/', {
    action() {
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/updateDictionary', {
    action() {
        BlazeLayout.render('updateDictionary');
    }
});