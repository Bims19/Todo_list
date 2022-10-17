//jshint esversion:6

exports.getDate =  function() {
const today = new Date();
const Options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

//converts a date to string, retuning the "date" portion using the operating system's locate's conventions.
return today.toLocaleDateString("en-Us", Options);

};

exports.getDay = function() {
    const today = new Date();
    const Options = {
        weekday: "long",
    };
    
    //converts a date to string, retuning the "date" portion using the operating system's locate's conventions.
    return today.toLocaleDateString("en-Us", Options);
    
    };