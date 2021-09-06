
<?php
//index.php




?>
<!DOCTYPE html>
<html>
 <head>
  <title>Fullcalandar</title>
  <link rel="stylesheet" href="fullcalendar.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.js"></script>
  <script>
   
  $(document).ready(function() {
   var calendar = $('#calendar').fullCalendar({
    editable:true,
    header:{
     left:'prev,next today',
     center:'title',
     right:'addEventButton,month,agendaWeek,agendaDay,listWeek'
    },
    
    firstHour: 8,
    events: 'load.php',
    defaultView: 'agendaWeek',
    selectable:true,
    selectHelper:true,
    eventConstraint : {//限制拖拽拖放的位置（即限制有些地方拖不進去）：an event ID, "businessHours", object
    start: '08:00', // a start time (10am in this example)
    end: '20:00', // an end time (6pm in this example)
                dow: [ 1, 2, 3, 4,5,6,0 ] // days of week. an array of zero-based day of week integers (0=Sunday) (Monday-Thursday in this example)
            },
    defaultEventMinutes:240,
    minTime:"08:00:00",
    maxTime:"20:00:00",
    slotDuration:'04:00:00',
    allDaySlot : false,
    eventDurationEditable:true,
    displayEventEnd:true,
//     businessHours: {
//   // days of week. an array of zero-based day of week integers (0=Sunday)
//   daysOfWeek: [ 1 ], // Monday - Thursday

//   startTime: '08:00', // a start time (10am in this example)
//   endTime: '20:00', // an end time (6pm in this example)
// },
    eventRender: function (event, element, view) {
    element.find('.fc-title').append('<div class="hr-line-solid-no-margin"></div><span style="font-size: 10px">' + event.price+ '</span></div>');
  
},

    select: function(start, end)
    {
    var title = prompt("Enter Event Title"); 
     var price=prompt("Enter Event price");
     if(title,price)
     {
      var start = $.fullCalendar.formatDate(start,"Y-MM-DD  HH:mm:ss" );
      var end = $.fullCalendar.formatDate(end,"Y-MM-DD HH:mm:ss" );

    
      $.ajax({
       url:"insert.php",
       type:"POST",
       data:{title:title, price:price, start:start, end:end},
       success:function()
       {
        calendar.fullCalendar('refetchEvents');
        alert("Added Successfully");
       }
      })
     }
    },
  
    editable:true,
    eventResize:function(event)
    {
     var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
     var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
     var title = event.title;
     var price = event.price;
     var id = event.id;
     $.ajax({
      url:"update.php",
      type:"POST",
      data:{title:title, price:price, start:start, end:end,id:id},
      success:function(){
       calendar.fullCalendar('refetchEvents');
       alert('Event Update');
      }
     })
    },

    eventDrop:function(event)
    {
     var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
     var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
     var price = event.price;
     var title = event.title;
     var id = event.id;
     $.ajax({
      url:"update.php",
      type:"POST",
      data:{title:title,  price:price,start:start, end:end, id:id},
      success:function()
      {
       calendar.fullCalendar('refetchEvents');
       alert("Event Updated");
      }
     });
    },

    eventClick:function(event)
    {
     if(confirm("Are you sure you want to remove it?"))
     {
      var id = event.id;
      $.ajax({
       url:"delete.php",
       type:"POST",
       data:{id:id},
       success:function()
       {
        calendar.fullCalendar('refetchEvents');
        alert("Event Removed");
       }
      })
     }
    },

   });
  });
 
  </script>
  <style>
#calendar {
    max-width: 2400px;
    margin: 0 auto;
};


</style>
 </head>
 <body>
  <br />
  <h2 align="center"><a href="#">預約時間</a></h2>
  <br />
  <div class="container">
   <div id="calendar"></div>
  </div>
 </body>
</html>
