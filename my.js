function testGS(){


     const url = "https://script.google.com/macros/s/AKfycbz2mTd7fa2oT-qx8Ti5XvPKtBame62CQY40rxVe8Snu7HE_Gc9j5rODFzgiVngVLinQ/exec"

     fetch(url)
        .then(d => d.json())
        .then(d => {
              document.getElementById("app").textContent = d[0].status;             
           });

}

document.getElementById("btn").addEventListener("click",testGS);