var FlashCorrectView = Backbone.View.extend({
    tagName: 'div',
    className: 'correct center-block',

    events: {

    },

    initialize: function() {
        $('#answer').append(this.el);

        this.render();

    },

    render: function() {
        var rendered= this.$el.html('<span>Right on!</span>');
        rendered.hide().fadeIn(400).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400).delay(1000).fadeOut('slow', function() {
            this.remove();
        });
    }
});