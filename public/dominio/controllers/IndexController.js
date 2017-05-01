var app = angular.module("ProjectManagerDR",['ngAnimate','ngTouch']);// dependencia de Animaciones
app.controller("IndexController",function($scope,$timeout){
  $scope.nombre = "Diego";
  //add some images as an array of Objects
  $scope.slides=[
    {image:"imagenes/naruto.jpg", description:"Naruto Shipuden",text:"naruto"},
    {image:"imagenes/one-piece.jpg", description:"One Piece",text:"one piece"},
    {image:"imagenes/proyecto1.jpg", description:"Yu Gi Oh !!!",text:"								Yu-Gi-Oh! (遊☆戯☆王, Yū☆gi☆ō;?, lit.: «El rey de los juegos»)4 , es un manga creado por Kazuki Takahashi, que ha dado lugar a una franquicia, además de múltiples series de anime, juegos de cartas y numerosos videojuego. La publicación comenzó el 30 de octubre de 1996 y cesó el 8 de marzo de 2004 con treinta y ocho volúmenes. Se trata de uno de los mangas más populares ofrecidos en la revista Weekly Shōnen Jump de Shūeisha. La versión española del anime mantiene el nombre japonés, pero el anime traducido al español peninsular e hispanoamericano usa el nombre estadounidense."}
  ];

  //some functions to handle a index of the slides array
  $scope.courrentIndex = 0;
  $scope.setCourrentIndex = function(index){
    $scope.courrentIndex = index;
  };
  $scope.isCourrentSlideIndex = function(index){
    return $scope.courrentIndex === index;
  };
  $scope.prevSlide = function () {
       $scope.courrentIndex = ($scope.courrentIndex < $scope.slides.length - 1) ? ++$scope.courrentIndex : 0;
   };
  $scope.nextSlide = function () {
       $scope.courrentIndex = ($scope.courrentIndex > 0) ? --$scope.courrentIndex : $scope.slides.length - 1;
   };

   var slidesInSlideshow = 3;
 var slidesTimeIntervalInMs = 3000;

 var slideTimer =
 $timeout(function interval() {
     $scope.nextSlide();
     slideTimer = $timeout(interval, slidesTimeIntervalInMs);
     }, slidesTimeIntervalInMs);


});
