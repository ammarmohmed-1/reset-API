
const mode = document.getElementById('mode');
const body = document.querySelector("body")
const arr_mode = [`<h4 id="mode" ><i class="fas fa-moon"></i> Dark Mode</h4>`,`<h4 id="mode"><i class="fa-solid fa-sun"></i> light Mode</h4>`]

let i = 0;
// Dark & light mode

mode.addEventListener("click", ()=>{
    mode.innerHTML = arr_mode[i];
    i++
    if(i > arr_mode.length -1){ i = 0 }

    body.classList.toggle("light");
    up_Fliter.classList.toggle("light");
    Filter.classList.toggle("light");
    sersh_her.classList.toggle("light");
    information_coun.classList.toggle("light")
})




// this API

const sec_API = document.querySelector("#sec_API");
const API = "https://restcountries.com/v2/all";



ammar();
async function ammar(){
    const faattch = await fetch(API);
    data = await faattch.json();
    data.forEach(ele => showCountry(ele));
    console.log(data);

}    
    
function showCountry(Data){
        const country = document.createElement('div');
        country.classList.add('contery');
        
    country.innerHTML = 
        `
        <img class="img_coun" src="${Data.flag}" alt="">
        <div class="infromation">
            <h2 class="ser_name"> ${Data.name} </h2>
            <h5><strong>populaation: </strong> ${Data.population} </h5>
            <h5 class="name_coun"><strong>Region: </strong> ${Data.region} </h5>
            <h5><strong>Capital: </strong> ${Data.capital} </h5>
        </div>
        `;
        
        sec_API.appendChild(country);
        country.addEventListener("click", ()=>{
            information_countery(Data)
        })
}

// make a dropdown

const Filter = document.getElementById("Filter");
const up_Fliter = document.querySelector(".up_Fliter");


Filter.addEventListener("click", ()=>{
    if(up_Fliter.style.display == "block"){
        up_Fliter.style.display = "none"
    }else{up_Fliter.style.display = "block"}
})

// programing dropdown filter

const option = document.querySelectorAll(".option");
const name_coun = document.getElementsByClassName("name_coun");


option.forEach(nam_coun =>{
    nam_coun.addEventListener("click", ()=>{
        Array.from(name_coun).forEach(val_coun =>{
            if(val_coun.innerText.includes(nam_coun.innerText) || nam_coun.innerText == "All"){
                val_coun.parentElement.parentElement.style.display = "block"
            }else{val_coun.parentElement.parentElement.style.display = "none"}
        });
    });
})


// start style programing the search

const ser_name = document.getElementsByClassName("ser_name");
const sersh_her = document.getElementById("sersh_her");

sersh_her.addEventListener("keyup", (e)=>{
        const mem_mem = e.target.value;
        Array.from(ser_name).forEach(val_coun =>{
            if(val_coun.innerText.toLowerCase().includes(mem_mem.toLowerCase())){
                val_coun.parentElement.parentElement.style.display = "block"
            }else{val_coun.parentElement.parentElement.style.display = "none"}
        });
    });
    
// infromation countery

    const information_coun = document.querySelector(".information_coun");

    function information_countery(Data){
        information_coun.classList.toggle("show");
        information_coun.innerHTML =`
        <div class="call_infronation">
                    <div class="infronation_coun_img">
                        <button class="back"><i class="fa-solid fa-arrow-left-long"></i>back</button>
                        <img src=${Data.flag} alt="">
                    </div>
                    
                    <div class="infronation_coun_2">
                        <h1>${Data.name}</h1>
                        <div class="up_mob">
                            <div class="modile_right">
                                <h5><strong>Native Name: </strong> ${Data.nativeName} </h5>
                                <h5><strong>populaation: </strong> ${Data.population} </h5>
                                <h5><strong>Region: </strong> ${Data.region} </h5>
                                <h5><strong>sub Region: </strong> ${Data.subregion} </h5>
                                <h5><strong>Capital: </strong> ${Data.capital} </h5>
                            </div>
                            <div>
                                <h5><strong>Top Level Domain: </strong> ${Data.topLevelDomain} </h5>
                                <h5><strong>Currencies: </strong> ${Data.population} </h5>
                                <h5><strong>langush: </strong> ${Data.langush} </h5>
                            </div>
                        </div>
                    </div>
                </div>
        `
    const back = document.querySelector(".back");
    back.addEventListener("click", ()=>{
        information_coun.classList.toggle("show");
        sec_API.style.display = "flex"
    })
    sec_API.style.display = "none"
    }