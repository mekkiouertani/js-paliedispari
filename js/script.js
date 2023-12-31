//PALINDROMI
palindromi();
function palindromi(){

    const btn = document.querySelector('button');
    const btnReset = document.getElementById('reset');
    const data = document.getElementById('data');
    const boxAlert = document.getElementById('answer');

    let arr = '';
    let arrInverse ='';

    btn.addEventListener('click', function(){
        let dataValue = data.value;
        data.value = '';
        
        //ciclo for per scomporre le lettere della parola e aggiorniamo arr+=
        for(let i = 0; i < dataValue.length ; i++){
            arr += dataValue[i];
        }

        //ciclo for per scomporre le lettere della parola ma in ordine inverso e aggiorniamo arr+=
        for(let x = dataValue.length -1; x >= 0 ; x--){
            arrInverse += dataValue[x];
        } 

        //condizione se arr è uguale o no ad arrInverse
        (arr === arrInverse) ? msgTrue() : msgFalse();
        
    });

    btnReset.addEventListener('click', function(){
        arr = '';
        arrInverse = '';
        console.log(btnReset);
        boxAlert.classList.add('d-none');
        boxAlert.innerHTML = '';
        data.value = '';
    });
    
    function msgTrue(){
        boxAlert.innerHTML = `la parola è palindroma`
        boxAlert.classList.remove('d-none', 'alert-danger');
        boxAlert.classList.add('alert-primary');
    };

    function msgFalse(){
        boxAlert.innerHTML = `la parola non è palindroma`
        boxAlert.classList.remove('d-none','alert-primary');
        boxAlert.classList.add('alert-danger');
    };

};





//NUMERI
numeri();
function numeri(){

    const btn2 = document.getElementById('btn2')
    const btnReset2 = document.getElementById('reset2');
    const boxAlert2 = document.getElementById('answer2');
    const data2 = document.getElementById('data2');
    
    let numData;

    btn2.addEventListener('click', function(){
        let dataValue2 = parseInt(data2.value);
        data2.value = '';
        //console.log(dataValue2);
        numData = (!NaN === dataValue2) ? '' :  msgFalse();
        (numData == isEven()) ? msgTrue() : '';

        //CONSOLELOG
        
        //console.log(btnReset2);
        //console.log(boxAlert2);
        console.log(numData);
    });

    function isEven(){ 
        return (numData % 2 === 0) ? true : false;
    };

    function msgTrue(){
        boxAlert2.innerHTML = `è pari`
        boxAlert2.classList.remove('d-none', 'alert-danger');
        boxAlert2.classList.add('alert-primary');
    };

    function msgFalse(){
        boxAlert2.innerHTML = `inserisci solo numeri`
        boxAlert2.classList.remove('d-none','alert-primary');
        boxAlert2.classList.add('alert-danger');
    };

    btnReset2.addEventListener('click', function(){
        boxAlert2.classList.add('d-none');
        boxAlert2.innerHTML = '';
        data.value2 = '';
    });
    
};