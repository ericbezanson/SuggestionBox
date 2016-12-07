app.factory('suggestions',[function() {
    var DefaultSuggestions = {
        posts: [
            {
                id: 1,
                title: "Bill Belichick should have to coach in a bikini as punishment for deflategate.",
                upvotes: 0,
                comments: [{
                    comment: ['to me those balls are perfect.'],
                    upvote: 0
                }]
            },
            {
                id: 2,
                title: "Dairy Queen should bring back the Nerds Blizzard.",
                upvotes: 0,
                comments: [{
                    comment: ['SO MUCH YES'],
                    upvote: 0
                }]
            },
            {
                id: 3,
                title: "Mcdonalds should have the option to buy McNuggets one at a time, like Timbits.",
                upvotes: 0,
                comments: [{
                    comment: ['I think they should serve the sweet and sour sauce inside a small cup, there is never enough!'],
                    upvote: 0
                }]
            },
            {
                id: 4,
                title: "All senior citizens should have life alert.",
                upvotes: 0,
                comments: [{
                    comment: ['they should also strongly concider sham wow, oxyclean and a hoveround'],
                    upvote: 0
                }]
            }
        ]
    }
    return DefaultSuggestions;
}]);
