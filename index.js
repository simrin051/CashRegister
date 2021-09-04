function onLoadFunction()
{
document.getElementById("cashGiven").style.display = "none";
document.getElementById("cashGivenheading").style.display = "none";
document.getElementById("Check").style.display = "none";
document.getElementById("noBalance").style.display = "none";
document.getElementById("returnChangeContainer").style.display = "none";
document.getElementById("cashAmountLessThanBillAmount").style.display = "none";
}

function showBillAmount()
{
    console.log("Inside bill amount");
    document.getElementById("cashregister").style.height = "500px";
    document.getElementById("cashGiven").style.display = "block";
    document.getElementById("cashGivenheading").style.display = "block";
    document.getElementById("Next").style.display = "none";
    document.getElementById("Check").style.display = "block";
 
    
}
function calculateCheck()
{
    console.log("Inside calculate check");
    var balance=0;
    balance=document.getElementById("BillAmount").value-document.getElementById("cashGiven").value; 
    console.log("Balance "+balance);   
    if(balance==0)
    {
        console.log("Balance "+balance);
        document.getElementById("noBalance").style.display= "block";
        document.getElementById("noBalance").style.marginTop= "1rem";
        document.getElementById("cashregister").style.height = "600px";
        
    }
    else if(balance > 0)
    {
        document.getElementById("returnChangeContainer").style.display = "none";
        document.getElementById("cashAmountLessThanBillAmount").style.display= "block";
        document.getElementById("noBalance").style.marginTop= "1rem";
        document.getElementById("cashregister").style.height = "600px";


        
    }
    else
    {
        
        console.log("cash given > bill amount");
        document.getElementById("cashAmountLessThanBillAmount").style.display= "none";
        document.getElementById("noBalance").style.display = "none";
        document.getElementById("returnChangeContainer").style.display = "block";
        document.getElementById("cashregister").style.height = "100vh";
        balance=-balance;
       
        if((balance) >= 2000)
        {
            console.log("Inside balance >=2000");
            document.getElementById('2000notes').innerText=Math.floor(balance/2000);
            console.log("2000 notes"+ document.getElementById('2000notes').innerText);
            balance=balance-(Math.floor(balance/2000)*2000);
            
        }
        if(balance >= 500)
        {
            document.getElementById('500notes').innerText=Math.floor(balance/500);
            balance=balance-(Math.floor(balance/500)*500);
            
        }
        if(balance >= 100)
        {
            document.getElementById('100notes').innerText=Math.floor(balance/100);
            balance=balance-(Math.floor(balance/100)*100);
        }
        if(balance >= 20)
        {
            document.getElementById('20notes').innerText=Math.floor(balance/20);
            balance=balance-(Math.floor(balance/20)*20);
        }
        if(balance >= 10)
        {
            document.getElementById('10notes').innerText=Math.floor(balance/10);
            balance=balance-(Math.floor(balance/10)*10);;
        }
        
        if(balance >= 5)
        {
            document.getElementById('5notes').innerText=Math.floor(balance/5);
            balance=balance-(Math.floor(balance/5)*5);;
        }
        if(balance >= 1)
        {
            document.getElementById('1notes').innerText=Math.floor(balance/1);
            balance=balance-(Math.floor(balance/1)*1);;
        }
    }
}
