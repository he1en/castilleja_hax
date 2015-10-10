castiHax.initTeam('Charlotte', function(){

var numreminders = 0
  $('#submit').on('click', function(){
    numreminders += 1
    var input = $('#reminder').val()
    console.log(input);
    castiHax.set({reminder: input});

    var reminderFromDatabase = "";
    castiHax.get("reminder", function (output) { $('#label' + numreminders).text(output); });
//label').text(reminderFromDatabase);

  // $('#reminder').on('click', function(){
  //  console.log($('#reminder').val());
  });

});
