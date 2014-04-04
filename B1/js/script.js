/**
 * Created by christopher on 3/27/14.
 */


// Open executable wrap here.
(function() {
    var arrUAVs = [
        "Reaper",
        "Predator",
        "Scan Eagle"
    ]



    var myButton = document.getElementById("btn");
        myButton.onclick = function(e) {

            alert('Thank you for looking over my homepage. If you would like to donate to my Paypal account, feel free to email me!');
        e.preventDefault();
        return false;
    };

}());