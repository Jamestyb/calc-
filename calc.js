function Calsom(){

    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;

    let multiplicaçao = Number(num2) * Number(num1);

   document.getElementsByName("somado")[0].value = multiplicaçao;
    }
    