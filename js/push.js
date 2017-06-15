// set time for first push (ms)
var firstpush = 1000;
// set time for second push (ms)
var secondpush = 15000;

// set step for reducing ticket count (ms)
var step = 24*60*60*1000;

//set ticket limiot for first step (items)
var firstlimit = 76;
//set ticket limiot for second step (items)
var secondlimit = 38;
//set ticket limiot for third step (items)
var thirdlimit = 19;

// set list of people and cities
var peopleList = [
  ['Ломаченко Виктор','из Киева','0'],
  ['Татьяна Сытник','из Киева','1'],
  ['Оксана Каминская','из Львова','2'],
  ['Андрей Флорес','из Чернигова','3'],
  ['Богдан Перетятько','из Киева','4'],
  ['Андрей Скочко','из Днепра','5'],
  ['Лариса Сыс','из Одессы','6'],
  ['Юлианна Панёва','из Киева','7']
]


function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareNumeric(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
}

function hideMessage(){
  $('#push1').removeClass('active');
}

$('.push-wrapper .close-button').on('click',function(){
  hideMessage();
});

function pushMessage(){

  if($.cookie("push")){
    var delpeople = $.cookie("push").split(',');
    delpeople.sort(compareNumeric);
    for(var i = 0; i < delpeople.length; i++){
      peopleList.splice(delpeople[i],1);
    }
    var r = getRandomInt(0,peopleList.length-1);
    $.cookie("push", $.cookie("push") + ',' + peopleList[r][2] , {expires: null}); 
  }else{
    var r = getRandomInt(0,peopleList.length-1);
    $.cookie("push", r , {expires: null}); 
  }
  if(peopleList !== []){  
    var snd = new Audio("Bounce_Note.wav");
    snd.play();
    $('#push1').addClass('active');
    $('#push1 span.name').html(peopleList[r][0] + '&nbsp;');
    $('#push1 span.city').html(peopleList[r][1]);
  }
  $('#remain_ticket').html($('#remain_ticket').text() - 1);
   setTimeout(hideMessage,10000);
}


if($.cookie("ticket")){
  var now = new Date().getTime();
  var firstvisit = now - $.cookie("ticket");
  if((firstvisit/step)>=1){
    if((firstvisit/step)>=2){
      if((firstvisit/step)>=3){
        $('#remain_ticket').html(thirdlimit - $.cookie("push").split(',').length);
        if($.cookie("push").split(',').length <= 6){
          setTimeout(pushMessage,firstpush);
          setTimeout(pushMessage,secondpush);
        }else if($.cookie("push").split(',').length == 7){
          setTimeout(pushMessage,firstpush);
        }
      }else{
        $('#remain_ticket').html(thirdlimit - $.cookie("push").split(',').length);
        if($.cookie("push").split(',').length <= 4){
          setTimeout(pushMessage,firstpush);
          setTimeout(pushMessage,secondpush);
        }else if($.cookie("push").split(',').length == 5){
          setTimeout(pushMessage,firstpush);
        }
      }
    }else{
      $('#remain_ticket').html(secondlimit - $.cookie("push").split(',').length);
      if($.cookie("push").split(',').length <= 2){
        setTimeout(pushMessage,firstpush);
        setTimeout(pushMessage,secondpush);
      }else if($.cookie("push").split(',').length == 3){
        setTimeout(pushMessage,firstpush);
      }
    }
  }else{
    $('#remain_ticket').html(firstlimit - $.cookie("push").split(',').length);
  }
 }else{
  var now = new Date().getTime();
  $('#remain_ticket').html(firstlimit);
  $.cookie("ticket", now , {expires: null});
  setTimeout(pushMessage,firstpush);
  setTimeout(pushMessage,secondpush);
 }