function daysInAnYear(year) {
    if (year%400==0){
      return 366;
    }
     
     if (year %100===0){
       return 365;
     }
     if (year%4===0){
       return 366;
     }
     return 365;
    }
    