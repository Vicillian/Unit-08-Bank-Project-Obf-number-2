var deposit = 0;
var name;
var transactions = [];
var lorg = [];

$(".newDeposit").click(function() {

    deposit = parseInt($(".accountDeposit").val());
    name = $(".accountName").val();
    $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");
    lorg.push(name);
    transactions.push(deposit);
    console.log(transactions);
    var deposited = transactions.length;
    var mones = 0;
    transactions.forEach(function(totes){
       mones = mones + totes;
    $(".number").text("Number of Transactions:"+deposited);
    $(".total").text("Total Amount Deposited:"+mones);
    });  
    
});