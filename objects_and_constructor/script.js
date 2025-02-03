
function Plan(name, price, space, transfer, pages, discountMonths) {
    this.name = name;
    this.price = parseFloat(price); 
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;

    Plan.prototype.calcAnnual = function (discountPercentage) {
        let finalPrice = this.price;
        const currentMonth = new Date().getMonth();


    for (let i = 0; i < this.discountMonths.length; i++) {
        const discountMonth = parseInt(this.discountMonths[i]);

          if (discountMonth === currentMonth) {
                    finalPrice = this.price * discountPercentage;
                    break;
                }
            }
        
        return finalPrice * 12;
    };
}


var plan1 = new Plan("Basic", "3.99", "100GB", "1000GB/Mo", 10, [1,6, 7]); 
var plan2 = new Plan("Professional", "5.99", "500GB", "5000GB/Mo", 50, [1, 7, 11]); 
var plan3 = new Plan("Ultimate", "9.99", "2000GB", "20000GB/Mo", 500, [6, 7]); 

document.getElementById('pl1n').textContent = "Name: " + plan1.name;
document.getElementById('pl1pr').textContent = "Price: $" + plan1.price;
document.getElementById('pl1s').textContent = "Space: " + plan1.space;
document.getElementById('pl1t').textContent = "Transfer: " + plan1.transfer;
document.getElementById('pl1p').textContent = "Pages: " + plan1.pages;
document.getElementById('pl1d').textContent = "Discount Months: " + plan1.discountMonths;

document.getElementById('pl2n').textContent = "Name: " + plan3.name;
document.getElementById('pl2pr').textContent = "Price: $" + plan3.price;
document.getElementById('pl2s').textContent = "Space: " + plan3.space;
document.getElementById('pl2t').textContent = "Transfer: " + plan3.transfer;
document.getElementById('pl2p').textContent = "Pages: " + plan3.pages;
document.getElementById('pl2d').textContent = "Discount Months: " + plan3.discountMonths;
        

document.getElementById('pl3n').textContent = "Name: " + plan2.name;
document.getElementById('pl3pr').textContent = "Price: $" + plan2.price;
document.getElementById('pl3s').textContent = "Space: " + plan2.space;
document.getElementById('pl3t').textContent = "Transfer: " + plan2.transfer;
document.getElementById('pl3p').textContent = "Pages: " + plan2.pages;
document.getElementById('pl3d').textContent = "Discount Months: " + plan2.discountMonths;





function submitData() {



    var planNumber = document.getElementById("planNumber").value;
    var planNumber1 = parseInt(planNumber);

    

    let selectedPlan;
    if (planNumber1 === 1) {
        selectedPlan = plan1;
    } 
    else if (planNumber1 === 2) {
        selectedPlan = plan2;
    } 
    else if (planNumber1 === 3) {
        selectedPlan = plan3;
    } else {
        console.log("Invalid Plane Number");
        return; 
    }

    console.log(selectedPlan.name + " plan applied");

    let discountpercentage = 0.8;
    let annualcost = selectedPlan.calcAnnual(discountpercentage);
    console.log(" Annual cost: $ " + annualcost.toFixed(2));

   
    let div1 = document.createElement("div");
    div1.id = "d1";
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    para1.innerHTML ="You selected " +selectedPlan.name + " plan ";
    para2.innerHTML = " Annual cost of this  plan after discount: $ " + annualcost.toFixed(2);
    div1.appendChild(para1);
    div1.appendChild(para2);
    document.body.appendChild(div1);

}




