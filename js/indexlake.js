angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://www.ayllusuyu.com/gallery/titicaca/titicaca1.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/titicaca/island_ofthe_sun.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/titicaca/moon_island.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/titicaca/moon_island2.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/titicaca/moon_island3.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/titicaca/reed_boat_titicaca.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/titicaca/fran_at_templeofmoon.jpg'
    },
  ];
}