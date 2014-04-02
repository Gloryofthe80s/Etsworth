var leftItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'item-container c-left',

    createTemplate: _.template($('#item-template').text()),

    events: {

    },

    initialize: function() {
        $('#main').find($('.etsyItems')).append(this.el);

        this.render();
    },

    render: function() {
        var renderedTemplate = this.createTemplate(this.model.attributes);

        this.$el.html(renderedTemplate);
    }
});