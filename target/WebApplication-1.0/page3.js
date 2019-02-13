var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = [].concat(boys, girls)
var reverseCheck = false


var showBoys = document.getElementById("boys")
var boysHTML = boys.map(boy => ("<li>" + boy + "</li>"))

var showGirls = document.getElementById("girls")
var girlsHTML = girls.map(girl => "<li>" + girl + "</li>")

var showAll = document.getElementById("all")
var allHTML = all.map(single => "<li>" + single + "</li>")

showBoys.innerHTML = addUI(boysHTML)
showGirls.innerHTML = addUI(girlsHTML)
showAll.innerHTML = addUI(allHTML)

function updateBoys() {
    boysHTML = boys.map(boy => "<li>"+boy+"</li>")
    showBoys.innerHTML = addUI(boysHTML)
    updateAll(true)
}

function updateGirls() {
    girlsHTML = girls.map(girl => "<li>" + girl + "</li>")
    showGirls.innerHTML = addUI(girlsHTML)
    updateAll(true)
}

function updateAll(update) {
    if (update) {
        all = [].concat(boys, girls)
    }
    allHTML = all.map(single => "<li>" + single + "</li>")
    showAll.innerHTML = addUI(allHTML)
}

function addUI(html) {
    return "<ul>" + html.join("") + "</ul>"
}


var btnAddboy = document.getElementById("addboy")
var newboy = document.getElementById("newboy")
btnAddboy.onclick = insertBoyName

function insertBoyName() {
    boys.push(newboy.value)
    updateBoys()
}

var btnAddGirl = document.getElementById("addgirl")
var newGirl = document.getElementById("newgirl")
btnAddGirl.onclick = insertGirlName

function insertGirlName() {
    girls.push(newGirl.value)
    updateGirls()
}

var btnRemoveBoy = document.getElementById("removeboy")
btnRemoveBoy.onclick = removeBoy

function removeBoy() {
    checkRadio(boys)
    updateBoys()
}
var btnRemoveGirl = document.getElementById("removegirl")
btnRemoveGirl.onclick = removeGirl

function removeGirl() {
    checkRadio(girls)
    updateGirls()
}

var radioRemoveFirst = document.getElementById("first")
var radioRemoveLast = document.getElementById("last")

function checkRadio(lst) {
    if (radioRemoveFirst.checked == true) {
        lst.shift()
    }
    else if (radioRemoveLast.checked == true) {
        lst.pop()
    }
}

var btnReverse = document.getElementById("reverse")
btnReverse.onclick = reverseAll
var btnSort = document.getElementById("sort")
btnSort.onclick = sortAll

function reverseAll() {
    all.reverse()
    updateAll(false)
}

function sortAll() {
    all.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    updateAll(false)
    if (reverseCheck) {
        reverseAll()
        reverseCheck = false
    }
    else {
        
        reverseCheck = true
    }
}
