// Shopping List Check Off Module 2 solution js file
(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])
.controller('ToBuyShoppingController',ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
    var itemToBuy = this;

    itemToBuy.items = ShoppingListCheckOffService.fetchItemsToBuy();
    itemToBuy.giveItem = function (itemIndex){
        ShoppingListCheckOffService.giveItem(itemIndex);
    };
    itemToBuy.message = function () {
        return itemToBuy.items.length === 0;
    };
}

AlreadyBoughtShoppingController.$inject['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var itemBought = this;

    itemBought.items = ShoppingListCheckOffService.fetchItemsBought();
    itemBought.message = function () {
        return itemBought.items.length === 0;
    };
}

function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var items = [
      {name: "dish soap", quantity: 1},
      {name: "water",     quantity: 1},
      {name: "berries",   quantity: 1},
      {name: "peanuts",   quantity: 1},
      {name: "butter",    quantity: 1},
      {name: "oranges",   quantity: 4},
      {name: "apples",    quantity: 4},
      {name: "bread",     quantity: 1},
      {name: "beer",      quantity: 1}
    ];
    var itemsToBuy = items;
    var itemsBought = [];

    service.giveItem = function (itemsIndex) {
        itemsBought.push(itemsToBuy[itemsIndex]);
        itemsToBuy.splice(itemsIndex, 1);
    };

    service.fetchItemsToBuy = function () {
        return itemsToBuy;
    };

    service.fetchItemsBought = function () {
        return itemsBought;
    };

    service.hasNoItemBuy = function (listOfItems) {
        if (listOfItems.length == 0) {
        console.log("hasNoItemBuy is true");
        return true;
    }
    else {
        console.log("hasNoItemBuy is false");
        return false;
    }
  };
}

})();
