<% if (includeHTML) { %>
/**
 * function setting datetime compatible multiple navigator chrome and firefox
 * @param stringDate 2014-07-28 03:42:23
 */
function _settingDateTime(stringDate) {
    var myDate = new Date();
    //string
    var arrayDate = stringDate.split(' ');
    if (arrayDate.length > 0) {
        var date = arrayDate[0];
        var time = arrayDate[1];

        var dateSplit = date.split('-');
        var timeSplit = time.split(':');
        myDate.setFullYear (dateSplit[0]);
        myDate.setMonth (dateSplit[1]-1);
        myDate.setDate (dateSplit[2]);
        myDate.setHours (timeSplit[0]);
        myDate.setMinutes (timeSplit[1]);
        myDate.setSeconds(timeSplit[2]);
    } else {
        myDate = false;
    }

    return myDate;
}

/**
 * convert to celsius
 */
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}


console.log("test project html");
console.log("=============");
console.log(_settingDateTime('2014-07-28 03:42:23'));
<% } %>
