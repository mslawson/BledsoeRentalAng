'use strict';
/*global Firebase */

/**
 * @ngdoc function
 * @name angfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angfireApp
 */

 var app = angular.module('angfireApp');

 app.controller('MainCtrl', function ($scope, $location, productsBase, servCategory, $anchorScroll ) {
    // var productsRef = new Firebase('https://bledsoe.firebaseio.com/');

    // var products = $firebaseArray(productsRef);

    // // var products = $firebaseArray(productsRef);


    $scope.gotoTop = function() {
        // set the location.hash to the id of the element you wish to scroll to.
        $location.hash('top');

        // call $anchorScroll()
        $anchorScroll();
      };

  // Logic for dropdown menu

  $scope.currentCategory = servCategory.getName;

  $scope.oneAtATime = true;

  // Navigation on amusement page

  $scope.subview = "main";
  
  $scope.princess = function(){
    $scope.subview = "princess";
  };
  $scope.firestation = function(){
    $scope.subview = "firestation";
  };
  $scope.tigerbelly = function(){
    $scope.subview = "tigerbelly";
  };
  $scope.wackycastle = function(){
    $scope.subview = "wackycastle";
  };
  $scope.wackymini = function(){
    $scope.subview = "wackymini";
  };
  $scope.mainview = function(){
    $scope.subview = "main";
  };

  $scope.partys = [

  {
    title: 'Safety',
    intro: "Even though we pride ourselves on having the most extravagant inflatable bounce houses in the area, safety is still our number one priority. When having any special event or party, the last thing you want to happen is have someone get hurt. <br><br> Every material used in our inflatables was engineered with safety and quality in mind. The materials used to create our inflatables are both lead-safe and flame-retardant. Many of the vinyl's used to create other manufactures bounces houses are made with toxic chemicals and are not resistant to fire.<br><br> Our inflatables also include features such as Finger-Safe Netting and sun shades. These features help to prevent children from flipping and causing injury. This is a must-have in any inflatable. <br><br> One of the most common concerns with inflatables is that the blower used to keep the bounce house inflated will stop working. This can happen due to a power outage, the blower becoming unplugged, or kids tampering with the blower and shutting it off. The last thing you want to happen is for the inflatable to collapse on the participants inside without anyone being alerted. That is why we send out all of our inflatable rentals with the WATCHDOG Blower-Siren free of charge to the customer. In the event that the blower should stop working in ANY event, the WATCHDOG Blower-Siren will sound a 120-decible siren that will let all participants in and outside of the inflatable know that the blower is not operating which should allow participants enough to time to exit the inflatable without harm.",
    text1: "Every material used in our inflatables was engineered with safety and quality in mind. The materials used to create our inflatables are both lead-safe and flame-retardant. Many of the vinyl's used to create other manufactures bounces houses are made with toxic chemicals and are not resistant to fire.",
    text2: "Our inflatables also include features such as Finger-Safe Netting and sun shades. These features help to prevent children from flipping and causing injury. This is a must-have in any inflatable.",
    text3: "One of the most common concerns with inflatables is that the blower used to keep the bounce house inflated will stop working. This can happen due to a power outage, the blower becoming unplugged, or kids tampering with the blower and shutting it off. The last thing you want to happen is for the inflatable to collapse on the participants inside without anyone being alerted. That is why we send out all of our inflatable rentals with the WATCHDOG Blower-Siren free of charge to the customer. In the event that the blower should stop working in ANY event, the WATCHDOG Blower-Siren will sound a 120-decible siren that will let all participants in and outside of the inflatable know that the blower is not operating which should allow participants enough to time to exit the inflatable without harm.",
    pic1: 'images/bounce/wd.jpg',
    picalign: '"alignleft"'
  },
  {
    title: 'Wow Factor',
    intro: 'The whole point of renting an inflatable is to create a memorable and fun experience. So why settle for a dull inflatable that won’t stand out in people’s minds for years to come. Cutting Edge N-Flatables has a dedicated art department to design their inflatables to create this sort of experience, and it shows. Renting one of our unique inflatables will not only make your event or party truly special, but your attendee’s will leave buzzing for days about it.',
    pic1: 'images/bounce/princess-2.jpg'
  },
  {
    title: 'Sanitation',
    intro: 'After each and EVERY rental, we set up our inflatables and fully clean and disinfect them before storing them. Our trained, professional staff uses the proper cleaners in order to ensure that you are receiving a fully cleaned unit. For an item that will rent hundreds of times with thousands of people using it, it is important that it is cleaned each and every rental to prevent disease. Do you want to trust someone who rents these out of their home to put forth this much effort to clean the inflatable you are about to rent?'
  }

  ]

  $scope.groups = [

  {
    title: 'Aerial Work Platforms, Ladders & Scaffolding',
    content: [
    {id:1, name:'Grinders'},
    {id:2, name:'Polishers'},
    {id:3, name:'Tools'}
    ]
  },
  {
    title: 'Air Compressors & Air Tools',
    content: [
    {id:1, name:'Grinders'},
    {id:2, name:'Polishers'},
    {id:3, name:'Tools'}
    ]
  },
  {
    title: 'Amusement & Party Rental',
    content: [
    {id:1, name:'Grinders'},
    {id:2, name:'Polishers'},
    {id:3, name:'Tools'}
    ]
  },
  {
    title: 'Compaction Equipment',
    content: [
    {id:1, name:'Grinders'},
    {id:2, name:'Polishers'},
    {id:3, name:'Tools'}
    ]
  },
  {
    title: 'Concrete & Masonry',
    content: [
    {id:1, name:'Grinders'},
    {id:2, name:'Polishers'},
    {id:3, name:'Tools'}
    ]
  },
  {
    title: 'Drills & Power Tools',
    content: [
    {id:1, name:'Grinders'},
    {id:2, name:'Polishers'},
    {id:3, name:'Tools'}
    ]
  },
  {
    title: 'Earthmoving Equipment',
    content: [
    {id:1, name:'Grinders'},
    {id:2, name:'Polishers'},
    {id:3, name:'Tools'}
    ]
  },
  {
    title: 'Generators & Light Towers',
    content: [
    {id:1, name:'Grinders'},
    {id:2, name:'Polishers'},
    {id:3, name:'Tools'}
    ]
  },
  {
    title: 'Heaters & Propane Equipment',
    content: [
    {id:1, name:'Grinders'},
    {id:2, name:'Polishers'},
    {id:3, name:'Tools'}
    ]
  },
  {
    title: 'Home Remodeling & Floor Care',
    content: [
    {id:1, name:'Drill item #1'},
    {id:2, name:'Drill item #2'},
    {id:3, name:'Drill item #3'}
    ]
  },
  {
    title: 'Jacks & Material Handling',
    content: [
    {id:1, name:'Floor item #1'}
    ]
  },
  {
    title: 'Lawn Equipment',
    content: [
    {id:1, name:'Generator item #1'}
    ]
  },
  {
    title: 'Moving Equipment',
    content: [
    {id:1, name:'Heating item #1'}
    ]
  },
  {
    title: 'Plumbing Tools & Sewer Equipment',
    content: [
    {id:1, name:'Equipment item #1'}
    ]
  },
  {
    title: 'Pressure Washer & Auto Scrubbers',
    content: [
    {id:1, name:'Hoisting item #1'}
    ]
  },
  {
    title: 'Surface Preparation',
    content: [
    {id:1, name:'Ladders item #1'}
    ]
  },
  {
    title: 'Trucks & Trailers',
    content: [
    {id:1, name:'Lawn item #1'}
    ]
  },
  {
    title: 'Vacuums, Blowers & Air Filtration',
    content: [
    {id:1, name:'Plumbing item #1'}
    ]
  },
  {
    title: 'Water Pumps',
    content: [
    {id:1, name:'Saws item #1'}
    ]
  }
  ];
  $scope.query = '';
  // $scope.currentCategory = "";

  $scope.searchEquip = function(equip){
    // $scope.currentCategory = "ladder";
    // $location.path( '/rental');
    // $scope.query = "ladder";
  }

  $scope.clearSearch = function(){
    $scope.searchForm.findEquip.$rollbackViewValue(); 
    $scope.query = '';
  }

  $scope.foo = function(title){
    alert(title);
  };

  $scope.setCurrentCategory = function(cat) {
    $scope.newCat = servCategory.setName(cat);
  };

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: false,
    isFirstDisabled: false
  };


  // logic for products
  $scope.products = productsBase;

  $scope.addProduct = function(){
    var addp = $scope.products.$add({
     productName: $scope.productName,
     cost: $scope.cost
   });

    $scope.productName = '';
    $scope.cost = '';

    if(addp){
     window.alert('saved');
   }else{
     window.alert('failed');
   }
 };



});


   //   };
   // });

