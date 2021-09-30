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

function tableRefresh()
{

    document.getElementById('2000notes').innerText="";
    document.getElementById('500notes').innerText="";
    document.getElementById('100notes').innerText="";
    document.getElementById('20notes').innerText="";
    document.getElementById('10notes').innerText="";
    document.getElementById('5notes').innerText="";
    document.getElementById('1notes').innerText="";
}

function calculateCheck()
{
    console.log("Inside calculate check");
    var balance=0;
    balance=document.getElementById("BillAmount").value-document.getElementById("cashGiven").value; 
    console.log("Balance "+balance);   
    if(balance==0)
    {
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
        var table = document.getElementById ("returnChangeContainer");
            table.refresh ();
        console.log("table refreshed");
        
    }
    else
    {
        
        tableRefresh();
        console.log("cash given > bill amount");
        document.getElementById("cashAmountLessThanBillAmount").style.display= "none";
        document.getElementById("noBalance").style.display = "none";
        document.getElementById("returnChangeContainer").style.display = "block";
        document.getElementById("cashregister").style.height = "100vh";
        balance=-balance;
        var table = document.getElementById ("returnChangeContainer");
        var count=0;
        while(balance >= 0 && count <= 3)
        {
            ++count;
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
            console.log("inide balance >=10");
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
}
