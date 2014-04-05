var PlayerScoreView = Backbone.View.extend({
    tagName: 'div',
    className: 'current-score-container',

    createTemplate: _.template($('#player-score-template').text()),

    events: {
    },

    initialize: function() {
        $('#current-score').append(this.el);

        //re-render if the model changes
        this.model.on('change', this.render, this);

        this.render();

    },

    render: function() {
        var renderedTemplate = this.createTemplate(this.model.attributes);

        var rendered = this.$el.html(renderedTemplate);
        rendered.hide().fadeIn('slow');
    }
});