var LeftItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'item-container c-left',

    createTemplate: _.template($('#item-template').text()),

    revealPrice: function() {
        var rendered = this.$el.append("<p class='item-price'>$ " + this.model.attributes.price + "</p> <a class='item-url' target= '_blank' href=" + this.model.attributes.url + "> view on Etsy</p>");
        rendered.hide().fadeIn('slow');
    },

    stopClickEvents: function() {
        delete this.events['click'];
        this.delegateEvents();
    },

    checkIfCorrect: function() {
        //emit click event to dispatcher so that prices reveal on both views
        dispatcher.trigger('itemViewClicked');

        // emit event to dispatcher to tell all views to kill click events
        dispatcher.trigger('tellAllStopClickEvents');

        //then actually check if user guessed correctly
        if(currentPriceLeft > currentPriceRight) {
            console.log('You got it right!');
            playerScore.attributes.correct ++;
            console.log("You have guessed "+ playerScore.attributes.correct + " out of " + playerScore.attributes.total() + " correct!")
        } else {
            console.log("You're wrong!")
            playerScore.attributes.incorrect ++;
            console.log("You have guessed "+ playerScore.attributes.correct + " out of " + playerScore.attributes.total() + " correct!")
        }

        //notify dispatcher to call flashAnswer()
        dispatcher.trigger('flashAnswer');
    },

    events: {
        'click' : 'checkIfCorrect'
    },

    initialize: function() {
        //'get back' the click event if it was lost through event delegation
        this.events = {'click' : 'checkIfCorrect'}

        //set up listens on dispatcher
        this.listenTo(dispatcher, 'tellAllStopClickEvents', this.stopClickEvents);
        this.listenTo(dispatcher, 'revealYourPrice', this.revealPrice);

        $('#main').find($('.etsyItems')).append(this.el);

        //assign the items' price to a global to be used for determing if guess is correct on click
        currentPriceLeft = parseFloat(this.model.attributes.price);
        this.render();
    },

    render: function() {
        var renderedTemplate = this.createTemplate(this.model.attributes);

        var rendered = this.$el.html(renderedTemplate);
        rendered.hide().fadeIn('slow');
    }
});