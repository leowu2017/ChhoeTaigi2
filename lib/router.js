import '../client/main.html';

FlowRouter.route('/', {
    action() {
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/lookup', {
    action: function(params, queryParams) {
        console.log(params);
        console.log(queryParams);
    }
});