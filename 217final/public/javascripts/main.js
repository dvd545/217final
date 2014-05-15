// Constructor Patter #4

//Constructor Pattern
//Good for creating multiple objects off of this.
//Simply instanteasiate multiple uses of this laptop object
function Laptop (baseline) {
    //baseline
    this.baseline = baseline;
    this.pCurrent = this.baseline;
    
    this.options = {};
}
Laptop.prototype.endPrices = function() {

    this.pCurrent = this.baseline;
    for (var option in this.options) {
        if (this.options.hasOwnProperty(option)) {

            //update the current price.
            this.pCurrent += parseFloat(this.options[option].price);
        }
    }
    return this.pCurrent;
}
Laptop.prototype.setOption = function (name, value) {
    this.options[name] = value;
    //update price.
}


function optionButton(item) {

    //get description
    var description = $("#" + item.id + "-description").text();
    //get price
    var price = item.value;

);
