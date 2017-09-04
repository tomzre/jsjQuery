$(document).ready(function() {

    var vm;

    $("#newRental").submit(function(event) {

        vm.customer = $("#customer").value;

        alert("eee" + vm.customer);
        event.preventDefault();
    });
});