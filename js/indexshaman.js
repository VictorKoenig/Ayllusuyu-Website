angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://www.ayllusuyu.com/gallery/shamans/don_manuel_quispe.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/shamans/dona.gif'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/shamans/don_marianonew.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/images/DonaJuliaandme.JPG'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/shamans/don_marcellino_don_lorenzo.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/shamans/don_ignasio.gif'
    },
  ];
}