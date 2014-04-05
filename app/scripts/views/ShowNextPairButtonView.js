var ShowNextPairButtonView = Backbone.View.extend({
    tagName: 'div',
    className: 'show-next-pair-btn-container center-block scroll',
    attributes: {href : '#scrollToTop'},


    renderNewPair: function() {
        $('#main').find('.etsyItems').html('');

        new LeftItemView({model: newData[currentIndex][0]});
        new RightItemView({model: newData[currentIndex][1]});

        currentIndex++;

        //clean up any residual notifiers in the answer section
        $('#answer').html('');

        //reset smooth scrolling for new elements
        setSmoothScroll();

        this.remove();
    },

    events: {
        'click' : 'renderNewPair'
    },

    initialize: function() {
        $('#show-next-pair').append(this.el);

        this.render();

    },

    render: function() {
        var rendered= this.$el.html('<span>NEXT</span>');
        rendered.hide().delay(400).fadeIn('slow');
    }
});