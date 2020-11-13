

const spinner = document.getElementById("spinner");
const tbody1 = document.getElementById('tbody_1');
const tbody2 = document.getElementById('tbody_2');

async function fetchData() {
    // let specials = response.data.items
    
    const rsp = await fetch( "https://script.google.com/macros/s/AKfycby01lKNm94FHYORH3_c-lHK35r4zOoZiF8_tOD-QhfujBglDiE/exec?action=getItems" ),
          data = await rsp.json();
    return data.items
}

async function fetchDataAxios() {
  const rsp = await axios( "https://script.google.com/macros/s/AKfycby01lKNm94FHYORH3_c-lHK35r4zOoZiF8_tOD-QhfujBglDiE/exec?action=getItems" );

  return rsp.data.items;
}

async function SetData(){
  try {
    let result = await fetchDataAxios();
    spinner.setAttribute("hidden", "");

    let htmlelement="";

    tbody1.innerHTML="";
    tbody2.innerHTML="";
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        htmlelement=`
        <tr class="nameandprice">
            <td >
                <span >${element.Title}</span>
            </td>
            <td >
                <span >${element.Price? element.Price: 'S./0'}</span>
            </td>
        </tr>
        <tr class="description">
            <td colspan="1">${element.Description?element.Description:'-'}</td>
        </tr>`;

        if (i%2==0) {
          tbody1.innerHTML+=htmlelement;   
        } else {
          tbody2.innerHTML+=htmlelement;   
        }
    }
    
  } catch( err ) {
    console.error( err );
  }
}



document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  // spinner.classList.add('show');
  // spinner.removeAttribute("hidden");

  SetData();
});
