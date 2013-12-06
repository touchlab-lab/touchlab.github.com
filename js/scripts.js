$(document).ready(function() {

  /** Clients List **/
  
  var clients = [ 
  	{
		"name" : "1 Second Everyday",
      "icon" : "images/client-1second.png",
      "desc" : "Imagine a movie that includes every day of the rest of your life…FEATURED on Fast Company, MASHABLE, CNN, TED & BBC, 1 Second Everyday allows users to create a video montage of their life. We brought the popular native iPhone app to Android. Editing and producing video on an Android smartphone is a technical challenge but we made it happen.",
      "url"  : "http://1secondeveryday.com/",
      "bg"   : "images/clients-bg-1secondeveryday.jpg"
    },
	{
	  "name" : "Field Lens",
      "icon" : "images/client-icon-fieldlens.png",
  		"desc" : "Field Lens is a management tool for all facets of a construction project. Capture and communicate tasks and issues, with detailed workflow and media sharing.\n\nFieldLens is part of a small but growing set of companies building mobile first, and starting on Android. Very excited to be on the team.",
  		"url"  : "http://fieldlens.com/",
  		"bg"   : "images/clients-bg-fieldlens.jpg"
  	},
  	{
  		"name" : "Associated Press",
  		"icon" : "images/client-ap.png",
  		"desc" : "Taking over from the original vendor. Deep code review and optimization. Full design refresh coming soon.",
  		"url"  : "http://ap.org/",
  		"bg"   : "images/clients-bg-ap.jpg"
  	},
  	{
  		"name" : "Harvest",
  		"icon" : "images/client-harvest.png",
  		"desc" : "Harvest is an online time tracking, timesheet, and invoicing service.\n\nWe built an Android port of their iPhone application. The mobile version allows a subset of features available from their web application, centered around easy time entry.",
  		"url"  : "http://www.getharvest.com/",
  		"bg"   : "images/clients-bg-harvest.jpg"
  	},
    /*,
  	/*,
  	{
  		"name" : "Squarespace",
  		"icon" : "images/client-squarespace.png",
  		"desc" : "Squarespace is a simple and powerful website and blog hosting service.\n\nWe developed the Android version of their iPhone application, from scratch through public beta earlier this year while they prepped internal people to take over the project. The final app was recently put into the market.",
  		"url"  : "http://squarespace.com/",
  		"bg"   : "images/clients-bg-squarespace.jpg"
  	}*/
  ];

  /** End Clients List **/

  $(".icon").click(function() {
    var i = $(this).index(); //get index position of clicked element
    var client = clients[i];
    if (i % 2 == 0) {   //reversed it - JN 073113 - effects for client's spotlights.The 1st and 3rd will have dresciptions to the left. 2nd and 4th will have it on the right  
	  $('div#left-blurb').hide();
      $('div#right-blurb').fadeIn('slow');
    }
    else {
       $('div#right-blurb').hide();
      $('div#left-blurb').fadeIn('slow');
    }
    
    //bringing data from client's objects to the HTML 
    $('img.blurb_img').attr("src", client.icon).attr("alt", client.name +" Logo");  
    $('div.blurb a').attr("href", client.url).attr("title", client.name +" Homepage");
    $('div.blurb p').text(client.desc);
    $('#clients_imgs').css('background-image', 'url(' + client.bg + ')'); 
    
    $('#shadow').removeClass().addClass('grid_4 prefix_' + i*4);
  });


  $("div.product").hover(
  	function () {
  	  $(this).addClass("hover");
  	},
  	function () {
  	  $(this).removeClass("hover");
  });
  
  $("div.product").click(function(){
     window.location=$(this).find("a").attr("href");
     return false;
  });
  
  
    
  /** Team List **/
	
	
  var team = [ 
  	{
  		'name'     : 'Kevin Galligan',
  		'icon'     : 'images/Kevin-av---800.jpg',
  		'position' : 'Lead Developer/President',
  		'desc'     : 'Kevin has a BA in CS from Colgate University. He spent several years managing developers for a financial firm, then left a few years ago to pursue the startup lifestyle. Since then, he has built several products, in both the web and mobile space.',
  		'links'     : [
  			{
  				'name'  :  'OHours',
  				'url'	:  'http://ohours.org/kpgalligan',
  				'desc'  :  'Check out his office hours, Fridays at 2PM EST'
  			},
  			{
  				'name'	  :  '@kpgalligan',
  				'url' :  'https://twitter.com/#!/kpgalligan',
  				'desc'  :  'Follow him on twitter'
  			},
  			{
  				'name'	  :  'Stack Overflow',
  				'url' :  'http://stackoverflow.com/users/227313/kevin-galligan',
  				'desc'  :  '<img src="http://stackoverflow.com/users/flair/227313.png?theme=dark" width="208" height="58" alt="profile for Kevin Galligan at Stack Overflow" title="profile for Kevin Galligan at Stack Overflow" />'
  			}
  		]
  	},
  	{
  		'name'     : 'Brian Plummer',
  		'icon'     : 'images/pic-brian-large.jpg',
  		'position' : 'Software Developer',
  		'desc'     : 'Brian attended Georgia Tech and snagged a degree in CS. He used to be a web developer, but but switched over because he likes Android\'s \"openness.\" Brian is our very own Southern gentleman who enjoys Vietnamese subs and saying, \"Cool.\" Brian used to own a car, but now he scooters home.',
  		'links'     : []
  	},
	{
  		'name'     : 'Dave Redding',
  		'icon'     : 'images/pic-dave-large.jpg',
  		'position' : 'Software Developer',
  		'desc'     : 'Dave has a Master\'s degree in software engineering from the University of Scranton. He has two years teaching experience and three years of Android Development under his belt. He loves all things mathematics and enjoys the outdoors.',
  		'links'     : []
  	},
  	{
  		'name'     : 'Izzy Oji',
  		'icon'     : 'images/pic-izzy-large.jpg',
  		'position' : 'Software Developer',
  		'desc'     : 'Izzy graduated from Stony Brook University in May of 2013 with a Bachelor\'s degree in CS. She started at Touch Lab as an intern in 2011. She currently lives in Brooklyn and she enjoys pilates, basketball, and taking pictures. She aspires to one day have Kevin\'s job!',
  		'links'     : []
  	},  	
	{
  		'name'     : 'Jeff Namnum',
  		'icon'     : 'images/pic-jeff-large.jpg',
  		'position' : 'Growth/VP',
  		'desc'     : 'Jeff met Kevin at New Work City and fell in love with the awesome team of people that is Touch Lab. Most recently he ran NoFancyName and helped founders and entrepreneurs grow their businesses. He speaks and teaches regularly on modern marketing, has been a strategy mentor for multiple organizations, has organized multiple conferences, loves long walks in the rain and is allergic to bullshit.',
  		'links'     : [
  			{
  				'name'  :  'blog',
  				'url'	:  'http://jeffnamnum.com',
  				'desc'  :  'Jeff\'s Random Ramblings'
  			},
  			{
  				'name'	  :  '@namnum',
  				'url' :  'https://twitter.com/#!/namnum',
  				'desc'  :  'Follow him on twitter'
  			}
		]
  	},
  	{
  		'name'     : 'Matthew Davis',
  		'icon'     : 'images/pic-matt-large.jpg',
  		'position' : 'Software Developer',
  		'desc'     : 'Matt is a recent graduate of Georgetown University, where he studied Computer Science and Government.  He was originally attracted to Android because of a deep love of Star Wars and decided to stick with it despite the fact that it does not, in actuality, involve making human-like robots.  In his spare time he enjoys playing board games and reading science fiction novels.',
  		'links'     : []
  	},
	{
  		'name'     : 'Olivia Lin',
  		'icon'     : 'images/pic-olivia-large.jpg',
  		'position' : 'Operations/Organizational Ninja',
  		'desc'     : 'Olivia is a born-and-raised New Yorker from Brooklyn who loves spicy food, hot yoga, traveling and jogging. She graduated from the Macaulay Honors College (at Hunter College) with a degree in Media Studies. With experience in social media, startups/tech and customer support, she joined Touch Lab to run operations and is scarily organized. ',
  		'links'     : []
  	},
	{
  		'name'     : 'Walter Dziemianczyk',
  		'icon'     : 'images/pic-walter-large.jpg',
  		'position' : 'Developer / Designer',
  		'desc'     : 'Walter graduated from The New York Institute of Technology with a bachelors degree in Computer Science. He got into Android as a fun side project with his brother, and currently has a couple of projects in the Google Play Store. He is a tinkerer and likes to take things apart (and does not put them back together correctly).',
  		'links'     : []
  	},
  ];

  /** End Team List **/

 $(".pic").click(function() {

    $('div#pic-team img').remove();
 	$('.pic img').removeClass('selected');
  	$(this).find('img').addClass('selected');

    var i = $(this).index()
      , member = team[i]
      , links = member.links
      , view = ""
      , stack;
    for(var x = 0; x < links.length; x++) {
       var link = links[x];
	   if(link.name != 'Stack Overflow') {
	   	 view += '<p class="link">'+ link.desc +' - <a href="'+ link.url +'">'+ link.name +'</a></p>';
	   } else {
	     view += '<div class="stack"><a href="'+ link.url +'">'+ link.desc +'</div>';
	   }
	}
	
    $('div#pic-team').empty().append(
    	'<img src="'+ member.icon +'" class="grid_5" />'
    	+ '<p class="grid_6 member_name normal">'+ member.name +' <span class="light">- '+ member.position +'</span></p>'
    	+ '<p class="grid_6 member_desc light">'+ member.desc +'</p>'
    	+ '<div class="grid_6 links">'+ view +'</div>'
  	);
  });
  
  
    /** Preload **/

  function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
  }
  
  preload([
  	  'image/nexus-bg-1.png',
  	  'image/nexus-bg-2.png',
      'images/clients-bg-ap.jpg',
      'images/clients-bg-fieldlens.jpg',
      'images/clients-bg-squarespace.jpg',
      'images/clients-bg-harvest.jpg',
      'images/clients-bg-squarespace.jpg',
      'images/pic-brian-large.jpg',
      'images/pic-izzy-large.jpg',
      'images/pic-kevin-large.jpg',
      'images/pic-matt-large.jpg',
      'images/pic-paul-large.jpg',      
      'images/pic-will-large.jpg'    
  ]);
  
  var mobile = (navigator.userAgent.match(/Mobile/i)) || (navigator.userAgent.match(/Android/i));

  if (mobile) {
    $('#contact_us').click(function() {
        return true;
    });
  } else {
	$('#contact_us').openDOMWindow({
			eventType:'click',
			windowSource:'ajax', 
			borderColor: '',
			borderSize: '0',
			windowBGColor: '#EEE',
			windowPadding: '0',
			height: '420',
			width: '600'
    });
  }

    if (mobile) {
    $('#jobs_page').click(function() {
        return true;
    });
  } else {
	$('#jobs_page').openDOMWindow({
			eventType:'click',
			windowSource:'ajax',
			borderColor: '',
			borderSize: '0',
			windowBGColor: '#EEE',
			windowPadding: '0',
			height: '480',
			width: '600'
    });
  }

});
