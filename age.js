let calcAge=document.getElementById("clickBtn");
calcAge.addEventListener("click",function(event){
    event.preventDefault()
    let dobInput=document.getElementById("date").value
    if(!dobInput){
        alert("Please enter your DOB")
        return;
    }
    let dob=new Date(dobInput)
    let today=new Date()
    let age=today.getFullYear()-dob.getFullYear()
    let monthDiff=today.getMonth()-dob.getMonth()
    let dayDiff=today.getDate()-dob.getDate()
    if(monthDiff<0 || (monthDiff===0 && dayDiff < 0)){
        age--;
    }
    let resultDiv=document.createElement("div");
    resultDiv.className="resDiv";
    resultDiv.innerHTML=`
    <h4>Your Age</h4>
    <h1>${age} Years</h1>
    <div class="div-class">
    <div class="div1">
    <h4>${monthDiff}</h4>
    <p>Months</p>
    </div>
    <div class="div2">
    <h4>${dayDiff}</h4>
    <p>Days</p>
    </div>
    </div>
    `
    let bottomDiv=document.querySelector(".bottom")
    let oldResult=document.querySelector(".resDiv")
    if (oldResult) oldResult.remove()
        bottomDiv.appendChild(resultDiv)
})