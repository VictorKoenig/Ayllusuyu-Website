angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://www.ayllusuyu.com/images/sunrise.gif'
    },
    {
      image:  'http://www.ayllusuyu.com/images/islandofmonkeys.gif'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/amazon/macaw.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/amazon/capuchin_monkey.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/amazon/lake_apu_victor.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/amazon/jungle_bird.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/amazon/walking_tree.jpg'
    },
	{
      image: 'http://www.ayllusuyu.com/images/jaguar.gif'
    },
	  {
      image: 'http://www.ayllusuyu.com/images/amazonparrot.gif'
    },
	  {
      image: 'http://www.ayllusuyu.com/images/monkey.gif'
    },
  ];
}