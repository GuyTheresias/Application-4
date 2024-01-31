//Haitian Palates
function bayLeaves() {
    document.getElementById('span1').removeAttribute('hidden');
}
function callaloo() {
    document.getElementById('span2').removeAttribute('hidden');
}
function dwarfOrinoco() {
    document.getElementById('span3').removeAttribute('hidden');
}
function epis() {
    document.getElementById('span4').removeAttribute('hidden');
    if (document.getElementById('8oz').checked) {
        document.getElementById('span5').removeAttribute('hidden');
    }
    else if (document.getElementById('12oz').checked) {
        document.getElementById('span5').removeAttribute('hidden');
    }
    else if (document.getElementById('16oz').checked) {
        document.getElementById('span5').removeAttribute('hidden');
    }
}
function malanga() {
    document.getElementById('span6').removeAttribute('hidden');
}

//Italian Palates
function ciabattaBread() {
    document.getElementById('span1').removeAttribute('hidden');
}
function parmigianoReggiano() {
    document.getElementById('span2').removeAttribute('hidden');
}
function italianOliveOil() {
    document.getElementById('span3').removeAttribute('hidden');
    if (document.getElementById('100ml').checked) {
        document.getElementById('span4').removeAttribute('hidden');
    }
    else if (document.getElementById('500ml').checked) {
        document.getElementById('span4').removeAttribute('hidden');
    }
    else if (document.getElementById('1L').checked) {
        document.getElementById('span4').removeAttribute('hidden');
    }
}
function salamiEmiliano() {
    document.getElementById('span5').removeAttribute('hidden');
}
function italianWine() {
    document.getElementById('span6').removeAttribute('hidden');
    if (document.getElementById('quartino').checked) {
        document.getElementById('span7').removeAttribute('hidden');
    }
    else if (document.getElementById('mezzoLitro').checked) {
        document.getElementById('span7').removeAttribute('hidden');
    }
    else if (document.getElementById('bottiglia').checked) {
        document.getElementById('span7').removeAttribute('hidden');
    }
}

//Japanese Palates
function daikon() {
    document.getElementById('span1').removeAttribute('hidden');
}
function eel() {
    document.getElementById('span2').removeAttribute('hidden');
}
function miso() {
    document.getElementById('span3').removeAttribute('hidden');
}
function soySauce() {
    document.getElementById('span4').removeAttribute('hidden');
    if (document.getElementById('50ml').checked) {
        document.getElementById('span5').removeAttribute('hidden');
    }
    else if (document.getElementById('250ml').checked) {
        document.getElementById('span5').removeAttribute('hidden');
    }
    else if (document.getElementById('750ml').checked) {
        document.getElementById('span5').removeAttribute('hidden');
    }
}
function wakame() {
    document.getElementById('span6').removeAttribute('hidden');
}

//Orders
// let order = {}

//Haitian order
function sendHaitiInfo() {
    let order = JSON.parse(localStorage.getItem('order')) || {};

    let Haiti = {}

    let bayLeaves = document.getElementById('bayLeaves').value * 1;
    let callaloo = document.getElementById('callaloo').value * 1;
    let dwarfOrinoco = document.getElementById('dwarfOrinoco').value * 1;
    let small = document.getElementById('8oz').checked;
    let medium = document.getElementById('12oz').checked;
    let large = document.getElementById('16oz').checked;
    let episAmount = document.getElementById('episAmount').value * 1;
    let malanga = document.getElementById('malanga').value * 1;

    order.name = document.getElementById('name').value;
    order.lname = document.getElementById('lname').value;
    order.email = document.getElementById('email').value;
    order.address = document.getElementById('address').value;

    order.payment = document.querySelector('input[name="payment"]:checked').value;

    order.paymentType = document.querySelector('input[name="paymentType"]:checked').value;

    // bayLeavesp = 11.86
    // callaloop = 3.50
    // dwarfOrinocop = 87.95
    // eSmallp = 10.00
    // eMediump = 12.50
    // eLargep = 15.00
    // malangap = 9.99

    // let bayLeavesP = 0;
    // let callalooP = 0;
    // let dwarfOrinocoP = 0;
    // let episP = 0;
    // let malangaP = 0;

    if (bayLeaves >= 0) {
        Haiti.bayLeavesP = {}
        Haiti.bayLeavesP.amount = bayLeaves
        Haiti.bayLeavesP.unitPrice = 11.86
        Haiti.bayLeavesP.subTotal = bayLeaves * 11.86
    }
    if (callaloo >= 0) {
        Haiti.callalooP = {}
        Haiti.callalooP.amount = callaloo
        Haiti.callalooP.unitPrice = 3.50
        Haiti.callalooP.subTotal = callaloo * 3.50
    }
    if (dwarfOrinoco >= 0) {
        Haiti.dwarfOrinocoP = {}
        Haiti.dwarfOrinocoP.amount = dwarfOrinoco
        Haiti.dwarfOrinocoP.unitPrice = 87.95
        Haiti.dwarfOrinocoP.subTotal = dwarfOrinoco * 87.95
    }
    if (episAmount >= 0) {
        if (small) {
            Haiti.episP = {}
            Haiti.episP.amount = episAmount
            Haiti.episP.unitPrice = 10.00
            Haiti.episP.subTotal = episAmount * 10.00
        }
        else if (medium) {
            Haiti.episP = {}
            Haiti.episP.amount = episAmount
            Haiti.episP.unitPrice = 12.50
            Haiti.episP.subTotal = episAmount * 12.50
        }
        else if (large) {
            Haiti.episP = {}
            Haiti.episP.amount = episAmount
            Haiti.episP.unitPrice = 15.00
            Haiti.episP.subTotal = episAmount * 15.00
        }
    }
    if (malanga >= 0) {
        Haiti.malangaP = {}
        Haiti.malangaP.amount = malanga
        Haiti.malangaP.unitPrice = 9.99
        Haiti.malangaP.subTotal = malanga * 9.99
    }

    Haiti.total = Haiti.bayLeavesP.subTotal + Haiti.callalooP.subTotal + Haiti.dwarfOrinocoP.subTotal + Haiti.episP.subTotal + Haiti.malangaP.subTotal

    order.Haiti = Haiti;

    localStorage.setItem('order', JSON.stringify(order));
}

//Italian Order
function sendItalyInfo() {
    let order = JSON.parse(localStorage.getItem('order')) || {};
    let Italy = {}

    let bread = document.getElementById('ciabattaBread').value * 1;
    let reggiano = document.getElementById('parmigianoReggiano').value * 1;
    let small = document.getElementById('100ml').checked;
    let medium = document.getElementById('500ml').checked;
    let large = document.getElementById('1L').checked;
    let oilAmount = document.getElementById('oliveOilAmount').value * 1;
    let salami = document.getElementById('salamiEmiliano').value * 1;
    let quartino = document.getElementById('quartino').checked;
    let mezzoLitro = document.getElementById('mezzoLitro').checked;
    let bottiglia = document.getElementById('bottiglia').checked;
    let wineAmount = document.getElementById('italianWine').value * 1;

    order.name = document.getElementById('name').value;
    order.lname = document.getElementById('lname').value;
    order.email = document.getElementById('email').value;
    order.address = document.getElementById('address').value;

    order.payment = document.querySelector('input[name="payment"]:checked').value;

    order.paymentType = document.querySelector('input[name="paymentType"]:checked').value;

    if (bread >= 0) {
        Italy.bread = {}
        Italy.bread.amount = bread
        Italy.bread.unitPrice = 15.99
        Italy.bread.subTotal = bread * 15.99
    }
    if (reggiano >= 0) {
        Italy.reggiano = {}
        Italy.reggiano.amount = reggiano
        Italy.reggiano.unitPrice = 1800.00
        Italy.reggiano.subTotal = reggiano * 1800.00
    }
    if (oilAmount >= 0) {
        if (small) {
            Italy.oilAmount = {}
            Italy.oilAmount.amount = oilAmount
            Italy.oilAmount.unitPrice = 15.00
            Italy.oilAmount.subTotal = oilAmount * 15.00
        }
        else if (medium) {
            Italy.oilAmount = {}
            Italy.oilAmount.amount = oilAmount
            Italy.oilAmount.unitPrice = 20.25
            Italy.oilAmount.subTotal = oilAmount * 20.25
        }
        else if (large) {
            Italy.oilAmount = {}
            Italy.oilAmount.amount = oilAmount
            Italy.oilAmount.unitPrice = 25.50
            Italy.oilAmount.subTotal = oilAmount * 25.50
        }
    }
    if (salami >= 0) {
        Italy.salami = {}
        Italy.salami.amount = salami
        Italy.salami.unitPrice = 35.50
        Italy.salami.subTotal = salami * 35.50
    }
    if (wineAmount >= 0) {
        if (quartino) {
            Italy.wineAmount = {}
            Italy.wineAmount.amount = wineAmount
            Italy.wineAmount.unitPrice = 20.00
            Italy.wineAmount.subTotal = wineAmount * 20.00
        }
        else if (mezzoLitro) {
            Italy.wineAmount = {}
            Italy.wineAmount.amount = wineAmount
            Italy.wineAmount.unitPrice = 35.00
            Italy.wineAmount.subTotal = wineAmount * 35.00
        }
        else if (bottiglia) {
            Italy.wineAmount = {}
            Italy.wineAmount.amount = wineAmount
            Italy.wineAmount.unitPrice = 50.00
            Italy.wineAmount.subTotal = wineAmount * 50.00
        }
    }

    Italy.total = Italy.bread.subTotal + Italy.reggiano.subTotal + Italy.oilAmount.subTotal + Italy.salami.subTotal + Italy.wineAmount.subTotal

    order.Italy = Italy;

    localStorage.setItem('order', JSON.stringify(order));
}

//Japan Order
function sendJapanInfo() {
    let order = JSON.parse(localStorage.getItem('order')) || {};
    let Japan = {}

    let daikon = document.getElementById('daikon').value * 1;
    let eel = document.getElementById('eel').value * 1;
    let miso = document.getElementById('miso').value * 1;
    let small = document.getElementById('50ml').checked;
    let medium = document.getElementById('250ml').checked;
    let large = document.getElementById('750ml').checked;
    let soySauceAmount = document.getElementById('soySauceAmount').value * 1;
    let Seaweed = document.getElementById('wakameSeaweed').value * 1;

    order.name = document.getElementById('name').value;
    order.lname = document.getElementById('lname').value;
    order.email = document.getElementById('email').value;
    order.address = document.getElementById('address').value;

    order.payment = document.querySelector('input[name="payment"]:checked').value;

    order.paymentType = document.querySelector('input[name="paymentType"]:checked').value;

    if (daikon >= 0) {
        Japan.daikon = {}
        Japan.daikon.amount = daikon
        Japan.daikon.unitPrice = 5.99
        Japan.daikon.subTotal = daikon * 5.99
    }
    if (eel >= 0) {
        Japan.eel = {}
        Japan.eel.amount = eel
        Japan.eel.unitPrice = 8.99
        Japan.eel.subTotal = eel * 8.99
    }
    if (miso >= 0) {
        Japan.miso = {}
        Japan.miso.amount = miso
        Japan.miso.unitPrice = 12.99
        Japan.miso.subTotal = miso * 12.99
    }
    if (soySauceAmount >= 0) {
        if (small) {
            Japan.soySauceAmount = {}
            Japan.soySauceAmount.amount = soySauceAmount
            Japan.soySauceAmount.unitPrice = 5.99
            Japan.soySauceAmount.subTotal = soySauceAmount * 5.99
        }
        else if (medium) {
            Japan.soySauceAmount = {}
            Japan.soySauceAmount.amount = soySauceAmount
            Japan.soySauceAmount.unitPrice = 6.99
            Japan.soySauceAmount.subTotal = soySauceAmount * 6.99
        }
        else if (large) {
            Japan.soySauceAmount = {}
            Japan.soySauceAmount.amount = soySauceAmount
            Japan.soySauceAmount.unitPrice = 9.99
            Japan.soySauceAmount.subTotal = soySauceAmount * 9.99
        }
    }
    if (Seaweed >= 0) {
        Japan.Seaweed = {}
        Japan.Seaweed.amount = Seaweed
        Japan.Seaweed.unitPrice = 16.00
        Japan.Seaweed.subTotal = Seaweed * 16.00
    }

    Japan.total = Japan.daikon.subTotal + Japan.eel.subTotal + Japan.miso.subTotal + Japan.soySauceAmount.subTotal + Japan.Seaweed.subTotal

    order.Japan = Japan

    localStorage.setItem('order', JSON.stringify(order))
}

//Payment Info

//Reset
function reset() {
    localStorage.clear();
}

//Receipt
function loadReceipt() {
    let order = JSON.parse(localStorage.getItem('order')) || {};




    //Haiti
    if (order.Haiti) {
        document.getElementById('bayLeavesA').innerHTML = order.Haiti.bayLeavesP.amount;
        document.getElementById('callalooA').innerHTML = order.Haiti.callalooP.amount;
        document.getElementById('dwarfOrinocoA').innerHTML = order.Haiti.dwarfOrinocoP.amount;
        document.getElementById('episA').innerHTML = order.Haiti.episP.amount;
        document.getElementById('malangaA').innerHTML = order.Haiti.malangaP.amount;

        document.getElementById('bayLeavesC').innerHTML = order.Haiti.bayLeavesP.unitPrice;
        document.getElementById('callalooC').innerHTML = order.Haiti.callalooP.unitPrice;
        document.getElementById('dwarfOrinocoC').innerHTML = order.Haiti.dwarfOrinocoP.unitPrice;
        document.getElementById('episC').innerHTML = order.Haiti.episP.unitPrice;
        document.getElementById('malangaC').innerHTML = order.Haiti.malangaP.unitPrice;

        document.getElementById('bayLeavesT').innerHTML = order.Haiti.bayLeavesP.subTotal;
        document.getElementById('callalooT').innerHTML = order.Haiti.callalooP.subTotal;
        document.getElementById('dwarfOrinocoT').innerHTML = order.Haiti.dwarfOrinocoP.subTotal;
        document.getElementById('episT').innerHTML = order.Haiti.episP.subTotal;
        document.getElementById('malangaT').innerHTML = order.Haiti.malangaP.subTotal;

        document.getElementById('haitiTotal').innerHTML = order.Haiti.total;
    }
    if (!order.Haiti) {
        document.getElementById('haitiTotal').innerHTML = 0;
    }

    //Italy
    if (order.Italy) {
        document.getElementById('breadA').innerHTML = order.Italy.bread.amount;
        document.getElementById('parmigianoReggianoA').innerHTML = order.Italy.reggiano.amount;
        document.getElementById('oliveOilA').innerHTML = order.Italy.oilAmount.amount;
        document.getElementById('salamiA').innerHTML = order.Italy.salami.amount;
        document.getElementById('wineA').innerHTML = order.Italy.wineAmount.amount;

        document.getElementById('breadC').innerHTML = order.Italy.bread.unitPrice;
        document.getElementById('parmigianoReggianoC').innerHTML = order.Italy.reggiano.unitPrice;
        document.getElementById('oliveOilC').innerHTML = order.Italy.oilAmount.unitPrice;
        document.getElementById('salamiC').innerHTML = order.Italy.salami.unitPrice;
        document.getElementById('wineC').innerHTML = order.Italy.wineAmount.unitPrice;

        document.getElementById('breadT').innerHTML = order.Italy.bread.subTotal;
        document.getElementById('parmigianoReggianoT').innerHTML = order.Italy.reggiano.subTotal;
        document.getElementById('oliveOilT').innerHTML = order.Italy.oilAmount.subTotal;
        document.getElementById('salamiT').innerHTML = order.Italy.salami.subTotal;
        document.getElementById('wineT').innerHTML = order.Italy.wineAmount.subTotal;

        document.getElementById('italyTotal').innerHTML = order.Italy.total;

    }
    if (!order.Italy) {
        document.getElementById('italyTotal').innerHTML = 0;
    }
    //Japan
    if (order.Japan) {

        document.getElementById('daikonA').innerHTML = order.Japan.daikon.amount;
        document.getElementById('eelA').innerHTML = order.Japan.eel.amount;
        document.getElementById('misoA').innerHTML = order.Japan.miso.amount;
        document.getElementById('soySauceA').innerHTML = order.Japan.soySauceAmount.amount;
        document.getElementById('seaweedA').innerHTML = order.Japan.Seaweed.amount;

        document.getElementById('daikonC').innerHTML = order.Japan.daikon.unitPrice;
        document.getElementById('eelC').innerHTML = order.Japan.eel.unitPrice;
        document.getElementById('misoC').innerHTML = order.Japan.miso.unitPrice;
        document.getElementById('soySauceC').innerHTML = order.Japan.soySauceAmount.unitPrice;
        document.getElementById('seaweedC').innerHTML = order.Japan.Seaweed.unitPrice;

        document.getElementById('daikonT').innerHTML = order.Japan.daikon.subTotal;
        document.getElementById('eelT').innerHTML = order.Japan.eel.subTotal;
        document.getElementById('misoT').innerHTML = order.Japan.miso.subTotal;
        document.getElementById('soySauceT').innerHTML = order.Japan.soySauceAmount.subTotal;
        document.getElementById('seaweedT').innerHTML = order.Japan.Seaweed.subTotal;

        document.getElementById('japanTotal').innerHTML = order.Japan.total;
    }
    if (!order.Japan) {
        document.getElementById('japanTotal').innerHTML = 0;
    }
    //Reciept
    if (order.name && order.lname && order.email && order.address && order.payment && order.paymentType) {
        document.getElementById('reciept').removeAttribute('hidden');
        document.getElementById('name').innerHTML = order.name;
        document.getElementById('lastName').innerHTML = order.lname;
        document.getElementById('email').innerHTML = order.email;
        document.getElementById('address').innerHTML = order.address;
        document.getElementById('formOfPayment').innerHTML = order.payment;
        document.getElementById('paymentMethod').innerHTML = order.paymentType;
        document.getElementById('totalCost').innerHTML = `$${document.getElementById('haitiTotal').innerHTML * 1 + document.getElementById('italyTotal').innerHTML * 1 + document.getElementById('japanTotal').innerHTML * 1}`;
    }
    if(!order.name || !order.lname || !order.email || !order.address || !order.payment || !order.paymentType){
        alert('Please fill out the form');
    }
}
