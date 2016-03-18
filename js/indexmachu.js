angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://www.ayllusuyu.com/gallery/machu_picchu/machu_picchu1.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/images/templeof3world.gif'
    },
    {
      image:  'http://www.ayllusuyu.com/images/machup.gif'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/machu_picchu/temple_3worlds.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/machu_picchu/temple_ofthemoon.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/machu_picchu/hitching_post_ofthesun.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/machu_picchu/the_llama.jpg'
    },
	{
      image: 'http://www.ayllusuyu.com/images/bathingpool.gif'
    },
  ];
}

