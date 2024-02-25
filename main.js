$(document).ready(function() {
    $("#numberForm").submit(function(event) {
        event.preventDefault(); //prevents reload

        var salary = parseInt($("#salary").val());
        var rent = parseInt($("#rent").val());
        var food = parseInt($("#food").val());
        var utilities = parseInt($("#utilities").val());
        var transportation = parseInt($("#transportation").val());
        var fun = parseInt($("#fun").val());
        var debt = parseInt($("#debt").val());
        var health = parseInt($("#health").val());
        var remaining = salary-(rent+food+utilities+transportation+fun+debt+health);
        // console.log(remaining)
        $("#remaining").html(remaining);


        var t = 10; // Years
        console.log(t);
        var c = remaining * 12; // Annual contribution
        console.log(c);
        var fv = c * (Math.pow(1.1, t) - 1) / 0.1;
        console.log(fv);
        $("#future_val").html(fv.toFixed(0));
        
    })
});
