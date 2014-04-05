var FlashIncorrectView = Backbone.View.extend({
    tagName: 'div',
    className: 'incorrect center-block',

    events: {

    },

    initialize: function() {
        console.log('yo');
        $('#answer').append(this.el);

        this.render();

    },

    render: function() {
        var rendered= this.$el.html('<span>You lack wisdom!</span>');
        rendered.hide().fadeIn(400).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400).delay(1000).fadeOut('slow', function() {
            this.remove();
        });
    }
});