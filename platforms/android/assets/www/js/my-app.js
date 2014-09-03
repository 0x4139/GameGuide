document.addEventListener("deviceready", function () {
    inappbilling.init(function (result) {
        console.log('billing initialized');
        inappbilling.getAvailableProducts(function (result) {
            console.log(result);
        }, function (result) {
            console.log('failed to get products')
        });
    }, function (result) {
        console.log('billing failed to initialize');
        console.log(result);
    }, {showLog: true});
}, false);

 window.purchaseItem=function(){
     inappbilling.buy(function(result){
        console.log('Purchase success ');
        window.location('m1.html');
     }, function(result){
        console.log('not purchased');
     },"justtest");
 };

window.purchaseAll=function(){
    inappbilling.buy(function(result){
        console.log('Purchase success ');
        alert('Everything has been purchased');
    }, function(result){
        console.log('not purchased');
    },"justtest");
};