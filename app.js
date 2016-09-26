var app = angular.module('reddit', [])

app.controller('redditController',function($scope){
 $scope.comment_form = {};
 $scope.reddit = {};
 $scope.arrays = [
   {
     title: "Odell Beckham Jr.",
     coach: "Ben McAdoo",
     image: "http://i.huffpost.com/gen/2312972/images/o-ODELL-facebook.jpg",
     description:
     "#13 WR | 5' 11 | 198 lbs | New York Giants",
     date: moment().subtract(3, 'days').subtract(5, 'hours').calendar(),
     votes: 10,
     comments: [
       {
         author: "Vince",
         text: "Odell Beckham Jr., who was given a pregame warning by refs on how they expected he and Redskins CB Josh Norman to behave, thought he'd be tossed after being penalized late for OPI on an INT play."
       }
     ]
   },
   {
     title: "Adrian Peterson",
     coach: "Mike Zimmer",
     image: "http://cdn-s3.si.com/s3fs-public/2016/05/08/mmqb-peterson-adrian-solo.jpg",
     description:
   "#28 RB | 6' 1 | 220 lbs | Minnesota Vikings",
    date: moment().subtract(2, 'days').subtract(3, 'hours').calendar(),
     votes: 7,
     comments: [
     {
       author: "Michael",
       text: "Adrian Peterson had surgery Thursday to repair a torn meniscus in his right knee and is officially out until at least mid-November."
     }
   ]
  },
  {
    title: "Aaron Rodgers",
    coach: "Mike McCarthy",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQULcZnqkkpMV4cxF692ank25aFD56aAehNch7TQ1ytXgJ8UqBj",
    description:
    "#12 QB | 6' 2 | 225 lbs | Green Bay Packers",
    date: moment().subtract(4, 'days').subtract(2, 'hours').calendar(),
    votes: 4,
    comments: [
    {
      author: "Sarah",
      text: "With a head butt and an 'I'm back,' Aaron Rodgers lifts Packers' spirits"
    }
    ]
   },
  {
    title: "Antonio Brown",
    coach: "Mike Tomlin",
    image: "http://cdn0.vox-cdn.com/uploads/chorus_image/image/38155482/20140907_lbm_sj4_091.JPG.0.jpg",
    description:
    "#84 WR | 5' 10'' | 181 lbs | Pittsburgh Steelers",
    date: moment().subtract(5, 'days').subtract(4, 'hours').calendar(),
    votes: 9,
    comments: [
    {
      author: "Jonathan",
      text: "Antonio Brown has no fear, no doubts, no worries about playing the Cincinnati Bengals, the team that knocked him out of an AFC wild-card matchup with a concussion."
    }
  ]
}
]
 $scope.selectedName = 'date';

 $scope.up = function(item){
   item.votes++
 }
 $scope.down = function(post){
   post.votes--
 }
 $scope.addPlayer = function(){
   console.log("****POST***");
   console.log($scope.post);
   // Grab user submitted post and:
    // add a votes property with a value of 0
    // add a comments property with a value of empty array
    // add a date property with value of new Date();
   $scope.post.votes = 0;
   $scope.post.comments = []
   $scope.post.date = moment().subtract(0, 'days').subtract(0, 'hours').calendar();
   $scope.arrays.push($scope.post)
   $scope.post = {};
   $scope.submitNewPost.$setUntouched()
   $scope.submitNewPost.$setPristine()
  }
  $scope.togglePost = function(){
    $scope.postage = !$scope.postage;
  }
  $scope.toggleComments = function(){
    this.comments = !this.comments
  }
  $scope.togglePostComments = function(){
    this.postComments = !this.postComments
  }
  $scope.addComment = function(post){
    // this.post.comments = []

    console.log('******comment post*******');
    console.log('log:',$scope.comment_form);
    post.comments.push(
      {
       author: $scope.comment_form.author,
       text: $scope.comment_form.text
      })
    $scope.comment_form = {}
  }
 });
