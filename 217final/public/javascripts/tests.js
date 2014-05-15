
test("Adding Items ", function() {
    var tuna = $('#screen-opt15in')[0];
    
    optionButton(tuna);
    console.log(tuna);
    equal($('#endPrice').val(), $.store.myLaptop.endPrices(), "Price Updated by 200");
    
    
    
    var ele = $('#hdd-opt256')[0];
    optionButton(tuna);
    console.log(tuna);
    equal($('#endPrice').val(), $.store.myLaptop.endPrices(), "Price Updated by 200");

});

test("Subtracting Items", function() {
   
    var tuna = $('#screen-opt11in')[0];
    optionButton(tuna);
    console.log(tuna);
    equal($('#endPrice').val(), $.store.myLaptop.endPrices(), "Price Lowered by 200");

});
 