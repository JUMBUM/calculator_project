

var calc = {
    sum: function(a,b) {return a + b;}
    ,minus: function(a,b) {return a - b;}
    ,multi: function(a,b) {return a*b;}
    ,devide: function(a,b) {return a/b;}
}

function calculator() {

    this.currentValue = 0
    this.currentInput = null;

    this.prevValue = 0;
    this.prevInput = null;

    this.currentCal = "";


    this.init = function() {
        this.currentInput = document.querySelector("#inputValue1");
        this.prevInput = document.querySelector("#inputValue0");

        this.registEvent();

    }

    this.registEvent = function() {

        var _this = this;

        var valueBtnList = document.querySelectorAll("#btnCon button.value_btn");
        var i, len = valueBtnList.length;
        for(i=0; i<len; i++){
            valueBtnList[i].addEventListener("click", function(e){
                var btn = e.currentTarget;
                var value = btn.getAttribute("value");
                _this.insertValue( value );
            });
        }

        //연산 버튼들
        var calBtnList = document.querySelectorAll("#btnCon button.cal");

        //기타 수행 버튼들
        var backBtn = document.querySelector("#backBtn");
        var resetBtn = document.querySelector("#resetBtn");
        var resultBtn = document.querySelector("#resultBtn");


    }

    this.insertValue = function ( value ){

        var cValue = this.currentInput.innerText;
        if(cValue == "0") cValue = "";
        cValue = cValue + value;

        this.currentInput.innerText = cValue;
        this.currentValue = parseInt( cValue );
    }

    this.calc = function (value){

    }

    this.reset = function (){


    }

    this.back = function (){


    }

    this.result = function (){


    }

    this.removeEvent = function() {

    }

    this.destroy = function() {

    }
}

window.addEventListener("load", function() {
    var myCalculator = new calculator();
    myCalculator.init();
})
