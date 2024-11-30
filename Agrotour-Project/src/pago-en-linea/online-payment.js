const currentDate = new Date();
const reserveBeginning = document.getElementById("reserve-beginning");
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2,"0");
const day = currentDate.getDate().toString().padStart(2,"0");
const dateFormat = `${year}-${month}-${day}`;
reserveBeginning.setAttribute("min",dateFormat);

let costumers = document.getElementById("costumers-amount");

let reserveEnd = document.getElementById("reserve-end");
const MiliSecnds = currentDate.getTime() + (7 * 24 * 60 * 60 * 1000);
const inAWeek = new Date(MiliSecnds);
const year2 = inAWeek.getFullYear();
const month2 = (inAWeek.getMonth() + 1).toString().padStart(2,"0");
const day2 = inAWeek.getDate().toString().padStart(2,"0");
const dateFormat2 = `${year2}-${month2}-${day2}`;
reserveEnd.setAttribute("min", dateFormat2);

let horseContainer = document.getElementById("horseContainer");
let butterflyContainer = document.getElementById("butterflyContainer");
let avifaunaContainer = document.getElementById("avifaunaContainer");
let photGuideContainer = document.getElementById("photGuideContainer");
let coffeeHarvContainer = document.getElementById("coffeeHarvContainer");
let foalFeedContainer = document.getElementById("foalFeedContainer");
let thermalWatContainer = document.getElementById("thermalWatContainer");
let fishingContainer = document.getElementById("fishingContainer");

let entryValueH = document.getElementById("entry-value1");
let entryValueB = document.getElementById("entry-value2");
let entryValueBird = document.getElementById("entry-value3");
let entryValuePhoto = document.getElementById("entry-value4");
let entryValueCoffee = document.getElementById("entry-value5");
let entryValueFoalF = document.getElementById("entry-value6");
let entryValueThermalW = document.getElementById("entry-value7");
let entryValueFishing = document.getElementById("entry-value8");

let exitValueH = document.getElementById("exit-value1");
let exitValueB = document.getElementById("exit-value2");
let exitValueBird = document.getElementById("exit-value3");
let exitValuePhoto = document.getElementById("exit-value4");
let exitValueCoffee = document.getElementById("exit-value5");
let exitValueFoalF = document.getElementById("exit-value6");
let exitValueThermalW = document.getElementById("exit-value7");
let exitValueFishing = document.getElementById("exit-value8");

let addAnItem = document.getElementById("add-item");
let addAnItem2 = document.getElementById("add-item2");
let addAnItem3 = document.getElementById("add-item3");
let addAnItem4 = document.getElementById("add-item4");
let addAnItem5 = document.getElementById("add-item5");
let addAnItem6 = document.getElementById("add-item6");
let addAnItem7 = document.getElementById("add-item7");
let addAnItem8 = document.getElementById("add-item8");

let removeItem = document.getElementById("remove-item");
let removeItem2 = document.getElementById("remove-item2");
let removeItem3 = document.getElementById("remove-item3");
let removeItem4 = document.getElementById("remove-item4");
let removeItem5 = document.getElementById("remove-item5");
let removeItem6 = document.getElementById("remove-item6");
let removeItem7 = document.getElementById("remove-item7");
let removeItem8 = document.getElementById("remove-item8");

let calculateHorseRide = entryValueH.addEventListener("change",function(){
    let operation = parseInt(entryValueH.value) * 40000;
    exitValueH.value = operation;
});

let calculateButterflyFarm = entryValueB.addEventListener("change",function(){
    let operation = parseInt(entryValueB.value) * 20000;
    exitValueB.value = operation;
});

let calculateAvifauna = entryValueBird.addEventListener("change",function(){
    let operation = parseInt(entryValueBird.value) * 60000;
    exitValueBird.value = operation;
});

let calculatePhotoGuide = entryValuePhoto.addEventListener("change",function(){
    let operation = parseInt(entryValuePhoto.value) * 8000;
    exitValuePhoto.value = operation;
});

let calculateCoffeeHarvest = entryValueCoffee.addEventListener("change",function(){
    let operation = parseInt(entryValueCoffee.value) * 15000;
    exitValueCoffee.value = operation;
});

let calculateFoalFeed = entryValueFoalF.addEventListener("change",function(){
    let operation = parseInt(entryValueFoalF.value) * 12000;
    exitValueFoalF.value = operation;
});

let calculateThermalW = entryValueThermalW.addEventListener("change",function(){
    let operation = parseInt(entryValueThermalW.value) * 40000;
    exitValueThermalW.value = operation;
});

let calculateFishing = entryValueFishing.addEventListener("change",function(){
    let operation = parseInt(entryValueFishing.value) * 20000;
    exitValueFishing.value = operation;
});

let sendItem = addAnItem.addEventListener("click",function(){
let infoExist = document.getElementById("saleInfo");
    if(infoExist){
        if(entryValueH.value == 0){
            infoExist.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            infoExist.setAttribute("class","mistake");
            infoExist.style.transition = "0.23s";
        }
        else{
            infoExist.innerHTML = `Número de cabalgatas: ${entryValueH.value}\nValor total a pagar: $${exitValueH.value}`;
            infoExist.setAttribute("class","success");
            entryValueH.setAttribute("readonly","true");
            removeItem.style.display = "inline-block";
        }
    }

    else {
        let newCreatedE = document.createElement("p");
        newCreatedE.id = "saleInfo";
        horseContainer.appendChild(newCreatedE);

        if(entryValueH.value == 0){
            newCreatedE.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            newCreatedE.setAttribute("class","mistake");
        }
        else{
            newCreatedE.innerHTML = `Número de cabalgatas: ${entryValueH.value}\nValor total a pagar: $${exitValueH.value}`;
            newCreatedE.setAttribute("class","success");
            entryValueH.setAttribute("readonly","true");
            removeItem.style.display = "inline-block";
        } 
    }
});

let eliminateItem = removeItem.addEventListener("click",function(){
    let saleInfo = horseContainer.querySelector("#saleInfo");
    entryValueH.removeAttribute("readonly");
    if(saleInfo){
        horseContainer.removeChild(saleInfo);
        removeItem.style.display = "none";
    }
});

let sendItem2 = addAnItem2.addEventListener("click",function(){
let infoExist = document.getElementById("saleInfo2");
    if(infoExist) {
        if(entryValueB.value == 0){
            infoExist.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            infoExist.setAttribute("class","mistake");
        }
        else{
            infoExist.innerHTML = `Número de entradas al mariposario: ${entryValueB.value}\nValor total a pagar: $${exitValueB.value}`;
            infoExist.setAttribute("class","success");
            entryValueB.setAttribute("readonly","true");
            removeItem2.style.display = "inline-block";
        }
    }

    else{
        let newCreatedE = document.createElement("p");
        butterflyContainer.appendChild(newCreatedE);
        newCreatedE.id = "saleInfo2";

        if(entryValueB.value == 0){
            newCreatedE.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            newCreatedE.setAttribute("class","mistake");
        }
        else{
            newCreatedE.innerHTML = `Número de entradas al mariposario: ${entryValueB.value}\nValor total a pagar: $${exitValueB.value}`;
            newCreatedE.setAttribute("class","success");
            entryValueB.setAttribute("readonly","true");
            removeItem2.style.display = "inline-block";
        }
    }
});

let eliminateItem2 = removeItem2.addEventListener("click",function(){
    let saleInfo = butterflyContainer.querySelector("#saleInfo2");
    if(saleInfo){
        butterflyContainer.removeChild(saleInfo);
        removeItem2.style.display = "none";
        entryValueB.removeAttribute("readonly");
    }
});

let sendItem3 = addAnItem3.addEventListener("click",function(){
let infoExist = document.getElementById("saleInfo3");
    if(infoExist){
       if(entryValueBird.value == 0){
           infoExist.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
           infoExist.setAttribute("class","mistake");
         }
       else{
           infoExist.innerHTML = `Número de entradas para la avifauna: ${entryValueBird.value}\nValor total a pagar: $${exitValueBird.value}`;
           infoExist.setAttribute("class","success");
           entryValueBird.setAttribute("readonly","true");
           removeItem3.style.display = "inline-block";
           }
    }

    else{
        let newCreatedE = document.createElement("p");
        avifaunaContainer.appendChild(newCreatedE);
        newCreatedE.id = "saleInfo3";

        if(entryValueBird.value == 0){
            newCreatedE.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            newCreatedE.setAttribute("class","mistake");
            
        }
        else{
            newCreatedE.innerHTML = `Número de entradas para la avifauna: ${entryValueBird.value}\nValor total a pagar: $${exitValueBird.value}`;
            newCreatedE.setAttribute("class","success");
            entryValueBird.setAttribute("readonly","true");
            removeItem3.style.display = "inline-block";
        }

    }
});

let eliminateItem3 = removeItem3.addEventListener("click",function(){
    let saleInfo = avifaunaContainer.querySelector("#saleInfo3");
    if(saleInfo){
        avifaunaContainer.removeChild(saleInfo);
        removeItem3.style.display = "none";
        entryValueBird.removeAttribute("readonly")
    }
});

let sendItem4 = addAnItem4.addEventListener("click",function(){
let infoExist = document.getElementById("saleInfo4");
    if(infoExist){
        if(entryValuePhoto.value == 0){
            infoExist.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            infoExist.setAttribute("class","mistake")
        }
        else{
            infoExist.innerHTML = `Número de guías fotográficas: ${entryValuePhoto.value}\nValor total a pagar: $${exitValuePhoto.value}`;
            infoExist.setAttribute("class","success");
            entryValuePhoto.setAttribute("readonly","true");
            removeItem4.style.display = "inline-block";
        }
    }

    else{
        let newCreatedE = document.createElement("p");
        photGuideContainer.appendChild(newCreatedE);
        newCreatedE.id = "saleInfo4";

        if(entryValuePhoto.value == 0){
            newCreatedE.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            newCreatedE.setAttribute("class","mistake")
        }
        else{
            newCreatedE.innerHTML = `Número de guías fotográficas: ${entryValuePhoto.value}\nValor total a pagar: $${exitValuePhoto.value}`;
            newCreatedE.setAttribute("class","success");
            entryValuePhoto.setAttribute("readonly","true");
            removeItem4.style.display = "inline-block";
        }
    }
});

let elimanteItem4 = removeItem4.addEventListener("click",function(){
    let saleInfo = photGuideContainer.querySelector("#saleInfo4");
    if(saleInfo){
       photGuideContainer.removeChild(saleInfo);
       removeItem4.style.display = "none";
       entryValuePhoto.removeAttribute("readonly");
    }
});

let sendItem5 = addAnItem5.addEventListener("click",function(){
let infoExist = document.getElementById("saleInfo5");
    if(infoExist){
        if(entryValueCoffee.value == 0){
            infoExist.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            infoExist.setAttribute("class","mistake");   
        }
        else{
            infoExist.innerHTML = `Número de entradas a cosecha de café: ${entryValueCoffee .value}\nValor total a pagar: $${exitValueCoffee .value}`;
            infoExist.setAttribute("class","success");
            entryValueCoffee.setAttribute("readonly","true");
            removeItem5.style.display = "inline-block";
        }
    }

    else{
        let newCreatedE = document.createElement("p");
        coffeeHarvContainer.appendChild(newCreatedE);
        newCreatedE.id = "saleInfo5";

        if(entryValueCoffee.value == 0){
            newCreatedE.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            newCreatedE.setAttribute("class","mistake")  
        }
        else{
            newCreatedE.innerHTML = `Número de entradas a cosecha de café: ${entryValueCoffee .value}\nValor total a pagar: $${exitValueCoffee .value}`;
            newCreatedE.setAttribute("class","success");
            entryValueCoffee.setAttribute("readonly","true");
            removeItem5.style.display = "inline-block";
        }
    }
});

let eliminateItem5 = removeItem5.addEventListener("click",function(){
    let saleInfo = coffeeHarvContainer.querySelector("#saleInfo5");
    if(saleInfo){
       coffeeHarvContainer.removeChild(saleInfo);
       removeItem5.style.display = "none";
       entryValueCoffee.removeAttribute("readonly");
    }
});

let sendItem6 = addAnItem6.addEventListener("click",function(){
let infoExist = document.getElementById("saleInfo6");
    if(infoExist){
        if(entryValueFoalF.value == 0){
            infoExist.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            infoExist.setAttribute("class","mistake")
        }
        else{
            infoExist.innerHTML = `Número de entradas para alimentación de potros: ${entryValueFoalF.value}\nValor total a pagar: $${exitValueFoalF.value}`;
            infoExist.setAttribute("class","success");
            entryValueFoalF.setAttribute("readonly","true");
            removeItem6.style.display = "inline-block";
        }
    }

    else{
        let newCreatedE = document.createElement("p");
        foalFeedContainer.appendChild(newCreatedE);
        newCreatedE.id = "saleInfo6";

        if(entryValueFoalF.value == 0){
            newCreatedE.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            newCreatedE.setAttribute("class","mistake")
        }
        else{
            newCreatedE.innerHTML = `Número de entradas para alimentación de potros: ${entryValueFoalF.value}\nValor total a pagar: $${exitValueFoalF.value}`;
            newCreatedE.setAttribute("class","success");
            entryValueFoalF.setAttribute("readonly","true");
            removeItem6.style.display = "inline-block";
        }
    }
});

let eliminateItem6 = removeItem6.addEventListener("click",function(){
    let saleInfo = foalFeedContainer.querySelector("#saleInfo6");
    if(saleInfo){
       foalFeedContainer.removeChild(saleInfo);
       removeItem6.style.display = "none";
       entryValueFoalF.removeAttribute("readonly");
    }
});

let sendItem7 = addAnItem7.addEventListener("click",function(){
let infoExist = document.getElementById("saleInfo7");
    if(infoExist){
        if(entryValueThermalW.value == 0){
            infoExist.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            infoExist.setAttribute("class","mistake")
        }
        else{
            infoExist.innerHTML = `Número de entradas a agua termales: ${entryValueThermalW.value}\nValor total a pagar: $${exitValueThermalW.value}`;
            infoExist.setAttribute("class","success");
            entryValueThermalW.setAttribute("readonly","true");
            removeItem7.style.display = "inline-block";
        }
    }

    else{
        let newCreatedE = document.createElement("p");
        thermalWatContainer.appendChild(newCreatedE);
        newCreatedE.id = "saleInfo7";

        if(entryValueThermalW.value == 0){
            newCreatedE.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            newCreatedE.setAttribute("class","mistake")
        }
        else{
            newCreatedE.innerHTML = `Número de entradas a agua termales: ${entryValueThermalW.value}\nValor total a pagar: $${exitValueThermalW.value}`;
            newCreatedE.setAttribute("class","success");
            entryValueThermalW.setAttribute("readonly","true");
            removeItem7.style.display = "inline-block";
        }
    }

});

let eliminateItem7 = removeItem7.addEventListener("click",function(){
    let saleInfo = thermalWatContainer.querySelector("#saleInfo7");
    if(saleInfo){
       thermalWatContainer.removeChild(saleInfo);
       removeItem7.style.display = "none";
       entryValueThermalW.removeAttribute("readonly");
    }
});

let sendItem8 = addAnItem8.addEventListener("click",function(){
let infoExist = document.getElementById("saleInfo8");
    if(infoExist){
        if(entryValueFishing.value == 0){
            infoExist.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            infoExist.setAttribute("class","mistake")
        }
        else{
            infoExist.innerHTML = `Número de entradas de pesca: ${entryValueFishing.value}\nValor total a pagar: $${exitValueFishing.value}`;
            infoExist.setAttribute("class","success");
            entryValueFishing.setAttribute("readonly","true");
            removeItem8.style.display = "inline-block";
        }
    }

    else{
        let newCreatedE = document.createElement("p");
        fishingContainer.appendChild(newCreatedE);
        newCreatedE.id = "saleInfo8";

        if(entryValueFishing.value == 0){
            newCreatedE.innerHTML = "Por favor, asigne el valor de la cantidad de su compra ";
            newCreatedE.setAttribute("class","mistake")
        }
        else{
            newCreatedE.innerHTML = `Número de entradas de pesca: ${entryValueFishing.value}\nValor total a pagar: $${exitValueFishing.value}`;
            newCreatedE.setAttribute("class","success");
            entryValueFishing.setAttribute("readonly","true");
            removeItem8.style.display = "inline-block";
        }
    }
});

let eliminateItem8 = removeItem8.addEventListener("click",function(){
    let saleInfo = fishingContainer.querySelector("#saleInfo8");
    if(saleInfo){
       fishingContainer.removeChild(saleInfo);
       removeItem8.style.display = "none";
       entryValueFishing.removeAttribute("readonly");
    }
});

let sendButton = document.getElementById("save-reserve-info");

let tryButton = sendButton.addEventListener("click", function(){

    const mandatoryInfo = document.querySelectorAll("input[required]");
    let warning = document.getElementById("error-messege");
    let allFine = true;

    mandatoryInfo.forEach((input) => {
        input.style.backgroundColor = "";
        input.style.borderColor = "";
        input.style.color = "";
        warning.style.display = "none"
    });


    mandatoryInfo.forEach((input) => {
      if(!input.value){
        input.style.backgroundColor = "rgb(231, 186, 186)";
        input.style.borderColor = "red";
        input.style.color = "rgb(161, 31, 31)";
        warning.style.justifyItems = "center";
        allFine = false
        setTimeout(()=>{
        input.style.backgroundColor = "";
        input.style.borderColor = "";
        input.style.color = "";
        },3000)
      }
    })
    if (!allFine){
        warning.style.display = "inline-block"
        setTimeout(() =>{ warning.style.display = "none";
        },6000)
    }
    else{
        window.location.href = "online_payment2.html"
    }
});

let calculateButton = document.getElementById("calculate-reserve-price");
let costContainer = document.getElementById("totalCost");
let dateStartData = document.getElementById("dateStartData");
let dateEndData = document.getElementById("dateEndData");
let amountCostumsData = document.getElementById("amountCostumsData");
let horseRideData = document.getElementById("horseRideData");
let butterflyData = document.getElementById("butterflyData");
let avifaunaData = document.getElementById("avifaunaData");
let photoData = document.getElementById("photoData");
let coffeeData = document.getElementById("coffeeData");
let foalData = document.getElementById("foalData");
let thermalData = document.getElementById("thermalData");
let fishData = document.getElementById("fishData");
let modal = document.getElementById("purchase-info");

let calculateTotalAmount = calculateButton.addEventListener("click",function(){
   
   modal.style.display = "inline-block";

        let total = parseInt(exitValueH.value) + parseInt(exitValueB.value) + parseInt(exitValueBird.value) + parseInt(exitValuePhoto.value) + parseInt(exitValueCoffee.value) + parseInt(exitValueFoalF.value) + parseInt(exitValueThermalW.value) + parseInt(exitValueFishing.value) + 120000;

        let printDate1 = document.createElement("span");
        dateStartData.appendChild(printDate1);
        printDate1.className = "info"
        printDate1.innerHTML = reserveBeginning.value;

        let printDate2 = document.createElement("span");
        dateEndData.appendChild(printDate2);
        printDate2.className = "info";
        printDate2.innerHTML = reserveEnd.value;

        let printC = document.createElement("span")
        amountCostumsData.appendChild(printC);
        printC.className = "info";
        printC.innerHTML = costumers.value;

        let printHorse = document.createElement("span");
        horseRideData.appendChild(printHorse);
        printHorse.className = "info";
        printHorse.innerHTML = entryValueH.value;

        let printButterfly = document.createElement("span");
        butterflyData.appendChild(printButterfly);
        printButterfly.className = "info";
        printButterfly.innerHTML = entryValueB.value;

        let printAvifauna = document.createElement("span");
        avifaunaData.appendChild(printAvifauna);
        printAvifauna.className = "info";
        printAvifauna.innerHTML = entryValueBird.value;

        let printPhoto = document.createElement("span");
        photoData.appendChild(printPhoto);
        printPhoto.className = "info";
        printPhoto.innerHTML = entryValuePhoto.value;

        let printCoffee = document.createElement("span");
        coffeeData.appendChild(printCoffee);
        printCoffee.className = "info";
        printCoffee.innerHTML = entryValueCoffee.value;

        let printFoal = document.createElement("span");
        foalData.appendChild(printFoal);
        printFoal.className = "info";
        printFoal.innerHTML = entryValueFoalF.value;

        let printThermal = document.createElement("span");
        thermalData.appendChild(printThermal);
        printThermal.className = "info";
        printThermal.innerHTML = entryValueThermalW.value;

        let printFish = document.createElement("span");
        fishData.appendChild(printFish);
        printFish.className = "info";
        printFish.innerHTML = entryValueFishing.value;

        let uploadInfo = document.createElement("h1");
        modal.style.display = "inline-block";
        costContainer.appendChild(uploadInfo);
        uploadInfo.innerHTML = `$ ${total}`;
    })

    let closeModal = document.getElementById("close-modal").addEventListener("click",()=>{
        modal.style.display = "none";
    });




