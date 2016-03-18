angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {  
      image: 'http://www.ayllusuyu.com/gallery/sacred_valley/azul_cocha.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_mountains/ausungate_lagoon.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_mountains/jaguarinmountain.gif'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_mountains/ausungate.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/sacred_mountains/salkantay.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/sacred_mountains/farm_salkantay.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/sacred_mountains/wayna_picchu.jpg'
    },
	 {
      image: 'http://www.ayllusuyu.com/gallery/sacred_mountains/puta_kusay.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_mountains/chiqon.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_mountains/wanay_wilku.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_mountains/illimanay.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/sacred_mountains/illimanay2.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/sacred_mountains/journey_to_illimnay1.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/sacred_mountains/apucheta_illimanay.jpg'
    },
  ];
}