angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://www.ayllusuyu.com/gallery/sacred_valley/ollantaytambo3.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_valley/gateway_sun.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_valley/moray.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_valley/rachqui.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/sacred_valley/ollantaytambo.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/sacred_valley/ollantaytambo2.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/sacred_valley/sacsaqhuaman.jpg'
    },
	{
      image: 'http://www.ayllusuyu.com/gallery/sacred_valley/winay_winay.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_valley/sillustani2.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_valley/Killarumiyoq.gif'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/sacred_valley/temple_ofthewaters.jpg'
    },
  ];
}