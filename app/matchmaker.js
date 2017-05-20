module.exports = function (app) {
    var friends = [{
        name: "Tom",
        photo: "https://a3-images.myspacecdn.com/images03/1/240e42b5d9ce48a78983961e7fcb3c39/600x600.jpg",
        age: 46,
        scores: [],

    }];
    function Friend(name, photo, age, scores) {
        this.name = name,
            this.photo = photo,
            this.age = age,
            this.scores = scores
    };

    var ans = req.body.userData;
    var friend = new Friend(ans.name, ans.photo, ans.age, ans.scores);
    friends.push(friend);
    var json = JSON.stringify(friends);
    return json;
};
