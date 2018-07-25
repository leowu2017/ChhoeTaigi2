import '../client/main.html';

FlowRouter.route('/', {
    action() {
        BlazeLayout.render('home');
    }
});
