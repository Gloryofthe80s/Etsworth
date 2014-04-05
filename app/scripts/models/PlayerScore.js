var PlayerScore = Backbone.Model.extend({
    defaults : {
        correct : 0,
        incorrect : 0,
        total : function() {
                    return (this.correct + this.incorrect);
                }
        }
});