app.factory('suggestions',[function() {
    var DefaultSuggestions = {
        posts: [
            {
                id: 1,
                title: "Bill Belichick should have to coach in a bikini as punishment for deflategate.",
                upvotes: 0,
                comments: []
            },
            {
                id: 2,
                title: "Dairy Queen should bring back the Nerds Blizzard.",
                upvotes: 0,
                comments: []
            },
            {
                id: 3,
                title: "Mcdonalds should have the option to buy McNuggets one at a time, like Timbits.",
                upvotes: 0,
                comments: []
            },
            {
                id: 4,
                title: "All senior citizens should have life alert.",
                upvotes: 0,
                comments: []
            }
        ]
    }
    return DefaultSuggestions;
}]);
