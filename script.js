//This is all the List of the are given
const allFlagList =[
    {
        country: "Algeria",
        img: "./picture/algeria.png",
    },
    {
        country: "Angola",
        img: "./picture/Angola.png",
    },
    {
        country: "Benin",
        img: "./picture/Benin.png"
    },
    {
        country: "Botswana",
        img: "./picture/Botswana.png"
    },
    {
        country: "Burkina Faso",
        img: "./picture/Burkina_Faso.png"
    },
    {
        country: "Burundi",
        img: "./picture/Burundi.png"
    },
    {
        country: "Cameroon",
        img: "./picture/Cameroon.png"
    },
    {
        country: "Cape Verde",
        img: "./picture/Cape_Verde.png"
    },
    {
        country: "Central African Republic",
        img: "./picture/Central_African_Republic.png"
    },
    {
        country: "Comoros",
        img: "./picture/Comoros.png"
    },
    {
        country: "Côte D'Ivoire",
        img: "./picture/Côte_d'Ivoire.png"
    },
    {
        country: "Democratic Republic of the Congo",
        img: "./picture/Democratic_Republic_of_the_Congo.png"
    },
    {
        country: "Djibouti",
        img: "./picture/Djibouti.png"
    },
    {
        country: "Egypt",
        img: "./picture/Egypt.png"
    },
    {
        country: "Equatorial Guinea",
        img: "./picture/Equatorial_Guinea.png"
    },
    {
        country: "Eritrea",
        img: "./picture/Eritrea.png"
    },
    {
        country: "Eswatini",
        img: "./picture/Eswatini.png"
    },
    {
        country: "Ethiopia",
        img: "./picture/Ethiopia.png"
    },
    {
        country: "Chad",
        img: "./picture/Chad.png"
    },
    {
        country: "Gabon",
        img: "./picture/Gabon.png"
    },
    {
        country: "Gambia",
        img: "./picture/Gambia.png"
    },
    {
        country: "Ghana",
        img: "./picture/Ghana.png"
    },
    {
        country: "Guinea Bissau",
        img: "./picture/Guinea-Bissau.png"
    },
    {
        country: "Guinea",
        img: "./picture/Guinea.png"
    },
    {
        country: "Kenya",
        img: "./picture/Kenya.png"
    },
    {
        country: "Lesotho",
        img: "./picture/Lesotho.png"
    },
    {
        country: "Liberia",
        img: "./picture/Liberia.png"
    },
    {
        country: "Libya",
        img: "./picture/Libya.png"
    },
    {
        country: "Madagascar",
        img: "./picture/Madagascar.png"
    },
    {
        country: "Malawi",
        img: "./picture/Malawi.png"
    },
    {
        country: "Mali",
        img: "./picture/Mali.png"
    },
    {
        country: "Mauritania",
        img: "./picture/Mauritania.png"
    },
    {
        country: "Mauritius",
        img: "./picture/Mauritius.png"
    },
    {
        country: "Morocco",
        img: "./picture/Morocco.png"
    },
    {
        country: "Mozambique",
        img: "./picture/Mozambique.png"
    },
    {
        country: "Namibia",
        img: "./picture/Namibia.png"
    },
    {
        country: "Niger",
        img: "./picture/Niger.png"
    },
    {
        country: "Nigeria",
        img: "./picture/Nigeria.png"
    },
    {
        country: "Republic of the Congo",
        img: "./picture/Republic_of_the_Congo.png"
    },
    {
        country: "Rwanda",
        img: "./picture/Rwanda.png"
    },
    {
        country: "Senegal",
        img: "./picture/Senegal.png"
    },
    {
        country: "Seychelles",
        img: "./picture/Seychelles.png"
    },
    {
        country: "Sierra Leone",
        img: "./picture/Sierra Leone.png"
    },
    {
        country: "Somalia",
        img: "./picture/Somalia.png"
    },
    {
        country: "South Africa",
        img: "./picture/South Africa.png"
    },
    {
        country: "South Sudan",
        img: "./picture/South Sudan.png"
    },
    {
        country: "Sudan",
        img: "./picture/Sudan.png"
    },
    {
        country: "São Tomé and Príncipe",
        img: "./picture/São Tomé and Príncipe.png"
    },
    {
        country: "Tanzania",
        img: "./picture/Tanzania.png"
    },
    {
        country: "Togo",
        img: "./picture/Togo.png"
    },
    {
        country: "Tunisia",
        img: "./picture/Tunisia.png"
    },
    {
        country: "Uganda",
        img: "./picture/Uganda.png"
    },
    {
        country: "Zambia",
        img: "./picture/Zambia.png"
    },
    {
        country: "Zimbabwe",
        img: "./picture/Zimbabwe.png"
    },
];

//This is where we declear all the class with get document by querySelector tags
const container = document.querySelector(".container")
const searchBox = document.querySelector(".search-box");
const allFlag = document.querySelector(".all-flag")
const filteredFlag = document.querySelector(".filtered-flag")
const showError = document.querySelector(".error")

const filterFlagList = (x)=> allFlagList.filter((flag)=>flag.country.toLowerCase().includes(x.toLowerCase()))

//This is where we declear the event and function that will happen

searchBox.oninput=(e)=>{
 let searchValue = e.target.value        //this will make the targetof any value giving in a search box
 const filteredArray = filterFlagList(searchValue)
 console.log(filteredArray)
 filteredFlag.innerHTML =""       //it filter whatever value given to 
 showError.textContent =""        //whenever error value pass it check before it give it a function 

if(searchValue.length > 0 && filteredArray.length > 0){
    console.log("show the filtered flags");
    // showError.textContent = 'Showing ${filteredArray.length} results for "${searchValue}"'
    showError.textContent = `Showing ${filteredArray.length} results for "${searchValue}"`
    allFlag.classList.remove('all-flag')
    allFlag.classList.add('remove-flag')
    filteredFlag.classList.add('filtered-flag');
    filteredFlag.classList.remove('remove-flag');
    displayFilteredFlag(filteredArray);
}
else if ( searchValue && filteredArray.length ===0){
    console.log("no record found")
    showError.textContent = "No Record Found"
  }
else{
    console.log('show all the flag')
    allFlag.classList.add('all-flag');
    allFlag.classList.remove('remove-flag')
    filteredFlag.classList.remove('filtered-flag')
  }
}

const createFlagElements =(flag, flagCard) =>{
    const flagImg = document.createElement("img");
    flagImg.src = flag.img;

    const flagCountry = document.createElement("h3");
    flagCountry.textContent = flag.country;

    flagCard.appendChild(flagImg)
    flagCard.appendChild(flagCountry);
}

//This is used as a map function that lop all through whenever 
const displayAllFlag = (allFlagList) =>{
    allFlagList.map((flag) => {
        const flagCard = document.createElement("div");
        allFlag.appendChild(flagCard);
        flagCard.setAttribute("class", "flag-card");
        createFlagElements(flag, flagCard)
    });
}

const displayFilteredFlag = (allFlagList) =>{
    allFlagList.map((flag) => {
        const flagCard2 = document.createElement("div");
        filteredFlag.appendChild(flagCard2);
        flagCard2.setAttribute("class", "flag-card");
        createFlagElements(flag, flagCard2)
    });
};


displayAllFlag(allFlagList)