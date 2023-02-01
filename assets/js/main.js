function calculateAge() {
    var _day = document.getElementById('day').value;
    var _month = document.getElementById('month').value;
    var _year = document.getElementById('year').value;
  
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    if (y2%4 == 0){
        var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    else{
        var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
  
    if(_day > d2){
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if(_month > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var calculated_day = d2 - _day;
    var calculated_month = m2 - _month;
    var calculated_year = y2 - _year;
  
    document.getElementById('age').innerHTML = 'Your Age is '+calculated_year+' Years '+calculated_month+' Months '+calculated_day+' Days';
  }