$(document).ready(function () {
  
    $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
  
    localStorage.setItem(time, value);
    $('.notification').addClass('show');
  
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  });
  
  //used dayjs to creat time function
  function hourUpdater() {
    var currentHour = dayjs().hour();
  
  //applied and removed class from time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
      if (blockHour < currentHour) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
    }
  
    var textArea = $('.description')
  
   
    hourUpdater();
  
    setInterval(hourUpdater, 15000);
  
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
    $('#hour-19 .description').val(localStorage.getItem('hour-19'));
    $('#hour-20 .description').val(localStorage.getItem('hour-20'));
    $('#hour-21 .description').val(localStorage.getItem('hour-21'));
    $('#hour-22 .description').val(localStorage.getItem('hour-22'));
    
    //time and date header 
  var currentDay = dayjs();
  $('#currentDay').text(currentDay, 'MMM D, YYYY');
  
  var currentTime = 
  $('#currentTime').text(currentTime, 'hh a');
  
  });
  
  