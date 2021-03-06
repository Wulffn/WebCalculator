/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



document.getElementById("outer").addEventListener("click", getId);

function getId(e) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    switch (e.target.id) {
        case "btnAdd":
            apiCallText("operation=add&n1=" + num1 + "&n2=" + num2 + "");
            apiCallJson("operation=add&n1=" + num1 + "&n2=" + num2 + "");
            break;
        case "btnSub":
            apiCallText("operation=sub&n1=" + num1 + "&n2=" + num2 + "");
            apiCallJson("operation=sub&n1=" + num1 + "&n2=" + num2 + "");
            break;
        case "btnMul":
            apiCallText("operation=mul&n1=" + num1 + "&n2=" + num2 + "");
            apiCallJson("operation=mul&n1=" + num1 + "&n2=" + num2 + "");
            break;
        case "btnDiv":
            apiCallText("operation=div&n1=" + num1 + "&n2=" + num2 + "");
            apiCallJson("operation=div&n1=" + num1 + "&n2=" + num2 + "");
            break;
        case "btnClear":
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("textResult").innerHTML = "";
            document.getElementById("jsonResult").innerHTML = "";
            break;
    }

}

function apiCallText(parameters) {
    var domain = "/Webcalculator/calculator?";
    var result = document.getElementById("textResult");
    fetch(domain + parameters)
            .then(res => res.text())
            .then(text => result.innerHTML = text);
}

function apiCallJson(parameters) {
    var domain = "/Webcalculator/calculatorjson?";
    var result = document.getElementById("jsonResult");
    fetch(domain + parameters)
            .then(res => res.json())
            .then(obj => result.innerHTML = obj.n1 + " " + converter(obj.operation) + " " + obj.n2 + " = " + obj.res);

}

function converter(param) {
    switch (param) {
        case "add":
            return "+";
            break;
        case "sub":
            return "-";
            break;
        case "mul":
            return "*";
            break;
        case "div":
            return "/";
            break;
    }
}