angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://www.ayllusuyu.com/gallery/children/peru_child1.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/children/peru_child2.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/children/peru_child3.jpg'
    },
    {
      image:  'http://www.ayllusuyu.com/gallery/children/peru_child4.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/children/peru_child5.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/children/peru_child6.jpg'
    },
	  {
      image: 'http://www.ayllusuyu.com/gallery/children/peru_child7.jpg'
    },
  ];
}