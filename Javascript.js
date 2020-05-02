
function calculate (fund, interest, years){
    if (interest == "") {
        interest = 3.5
	}
    else {
        interest = parseFloat(interest);
	}
    months = years * 12;
    fund = parseFloat(fund); // for example "4.5" -> 4.5

    let sum = fund * (1 + interest) / months
    return sum;
}

function checkInputs (event){
    let value = event.target.value
    let type = event.type

    if(value == '') {
        // event.target.style.border = '1px solid red'
        event.target.classList.add('invalid')
    } else {
        // event.target.style.border = '1px solid black'
        event.target.classList.remove('invalid')
    }
}


let inputs = document.querySelectorAll('.text-input');

for (let i=0; i <inputs.length; i++) {
    inputs[i].addEventListener(
        'keyup',
        checkInputs);

    inputs[i].addEventListener(
        'change',
        checkInputs);
}

document.querySelector(".submit").addEventListener('click', function (){
    
    fundVal = document.querySelector("input[name='fund']").value;
    interestVal = document.querySelector("input[name='interest']").value;
    yearsVal = document.querySelector("input[name='years']").value;

    res = calculate(fundVal, interestVal, yearsVal); // res = sum;
    document.getElementById("show_sum").innerHTML = res;
    
    let str = "הסכום נמוך, הינך יכול לשלם אותו"
    if (res < fundVal) {
        str = "סכום גבוה, תנסה להקטין את הקרן או תגדיל את התקופה";
    }
    document.getElementById("can_take").innerHTML = str;
});
