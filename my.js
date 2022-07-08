function testGS(){


     const url = "https://script.google.com/macros/s/AKfycby7bTB-8EUMorSoMHXJpjpmTZ2GyIocX3EviDAJGrhNGHeiBamcFU_SEqRoV3eH5fq90A/exec"
     fetch(url)
        .then(d => d.json())
        .then(d => {
              document.getElementById("app").textContent = d[0].status;             
           });

}

document.getElementById("btn").addEventListener("click",testGS);

function addGS(){


   const url = "";
   fetch(url,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'omit', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({first:"Monoic", phone:"620-960-9347", last:"Zapata"}) // body data type must match "Content-Type" header
    });
   
   

}

document.getElementById("btn2").addEventListener("click",addGS);

document.getElementById("btn").addEventListener("click",testGS);
