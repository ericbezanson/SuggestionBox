app.factory('suggestions',[function() {
    var DefaultSuggestions = {
        posts: [
            {
                id: 0,
                title: "Bill Belichick should have to coach in a bikini as punishment for deflategate.",
                upvotes: 0,
                comments: [{
                    body: 'to me those balls are perfect.',
                    upvotes: 0,
                }]
            },
            {
                id: 1,
                title: "Dairy Queen should bring back the Nerds Blizzard.",
                upvotes: 0,
                comments: [{
                    body: 'SO MUCH YES',
                    upvotes: 0,
                }]
            },
            {
                id: 2,
                title: "Mcdonalds should have the option to buy McNuggets one at a time, like Timbits.",
                upvotes: 0,
                comments: [{
                    body: 'I think they should serve the sweet and sour sauce inside a small cup, there is never enough!',
                    upvotes: 0,
                }]
            },
            {
                id: 3,
                title: "All senior citizens should have life alert.",
                upvotes: 0,
                comments: [{
                    body: 'they should also strongly concider sham wow, oxyclean and a hoveround',
                    upvotes: 0,
                }]
            }
        ]
    }
    return DefaultSuggestions;
}]);
