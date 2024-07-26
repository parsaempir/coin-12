
let inputu = document.getElementById('inputu');
let serch = document.getElementById('serch');
serch.addEventListener('click', function() {
    if (inputu.style.display === 'none') {
        inputu.style.display = 'block';
    } else {
        inputu.style.display = 'none';
    }
});

document.querySelector('.selected-option1').addEventListener('click', function() {
    document.querySelector('.optionsw1').classList.toggle('show');
});

document.querySelectorAll('.option1').forEach(function(option) {
    option.addEventListener('click', function() {
        document.querySelector('.selected-option1').innerText = this.innerText;
        document.querySelector('.optionsw1').classList.remove('show');
    });
});

window.addEventListener('click', function(e) {
    if (!document.querySelector('.selectedw2').contains(e.target)) {
        document.querySelector('.optionsw1').classList.remove('show');
    }
});






document.querySelector('.selected-option').addEventListener('click', function() {
    document.querySelector('.options1').classList.toggle('show');
});

document.querySelectorAll('.option').forEach(function(option) {
    option.addEventListener('click', function() {
        document.querySelector('.selected-option').innerText = this.innerText;
        document.querySelector('.options1').classList.remove('show');
    });
});

window.addEventListener('click', function(e) {
    if (!document.querySelector('.selected2').contains(e.target)) {
        document.querySelector('.options1').classList.remove('show');
    }
});




        const url = 'https://api.coincap.io/v2/assets';
        let allData = [];
        let displayedCount = 0;
        const itemsPerPage = 20;

        function updateData() {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    allData = data.data;
                    displayNextItems();
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        function displayNextItems() {
            const cryptoContainer = document.getElementById('crypto-container');
            const end = Math.min(displayedCount + itemsPerPage, allData.length);

            for (let i = displayedCount; i < end; i++) {
                const crypto = allData[i];
                const price = numeral(crypto.priceUsd).format('0,0.00').toUpperCase();
                const marketCap = numeral(crypto.marketCapUsd).format('0,0.00a').toUpperCase();
                const volume = numeral(crypto.volumeUsd24Hr).format('0,0.00a').toUpperCase();
                const supply = numeral(crypto.supply).format('0,0.00a').toUpperCase();
                const changePercent24Hr = parseFloat(crypto.changePercent24Hr).toFixed(2);
                const vwap24Hr = numeral(crypto.vwap24Hr).format('0,0.00').toUpperCase();

                const cryptoCard = document.createElement('div');
                cryptoCard.className = 'crypto-card';
                cryptoCard.innerHTML = `
                  <p class="api2"> ${parseFloat(crypto.rank).toFixed()}</p>
                    <img src="https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png"  class="coin-icon">
                    <a href=""> <p class="text-name">${crypto.name} <br> <span class="text-coin"> ${crypto.symbol} </span></p> </a>
                    <div class="api1">$${price}</div>
                    <div class="api1"> $${marketCap}</div>
                    <div class="api1"> $${vwap24Hr}</div>
                      <div class="api1"> ${supply}</div>
                    <div class="api1"> $${volume}</div>
                    <div class="api1"> ${changePercent24Hr}%</div>
                `;
                cryptoContainer.appendChild(cryptoCard);

                
            }

            displayedCount += itemsPerPage;

            if (displayedCount >= allData.length) {
                document.getElementById('load-more').style.display = 'none';
            }
        }

        document.getElementById('load-more').addEventListener('click', displayNextItems);

        updateData();


 /*let url = 'https://api.coincap.io/v2/assets';

 fetch(url)
     .then(response => response.json())
     .then(data => {
         let cryptoContainer = document.getElementById('crypto-container');
         data.data.forEach(crypto => { 
           
           
             let cryptoCard = document.createElement('div');
             cryptoCard.className = 'crypto-card';
             cryptoCard.innerHTML = `
                 <h2>${crypto.name} </br>(${crypto.symbol})</h2>
                <p>${parseFloat(crypto.rank).toFixed()}</p>
                 <p class="js1">$${parseFloat(crypto.priceUsd).toFixed(2)}</p>
                  <p class="js1"> $${parseFloat(crypto.marketCapUsd).toFixed(2)}t</p>
               <p class="js1"> %${parseFloat(crypto.vwap24Hr).toFixed(2)}</p>
                <p class="js1">${parseFloat(crypto.supply).toFixed(2)}</p>
              <p class="js1"> $${parseFloat(crypto.volumeUsd24Hr).toFixed(2)}</p>
             <p class="js1"> %${parseFloat(crypto.changePercent24Hr).toFixed(2)}</p>
             `;
             cryptoContainer.appendChild(cryptoCard);
         });
     })
     .catch(error => {
         console.error('Error:', error);
     });
   */
/*let parentImage = document.getElementById("editableDiv")
console.log(parentImage)
let Flage1 = false
function setParentImage () {
    Flage1 = !Flage1
    if(Flage1) {
        parentImage.innerHTML = `<input />  <img onclick="setParentImage()" src="magnifying-glass-solid.svg" class="serch">`


    } else {
        parentImage.innerHTML = '<img onclick="setParentImage()" src="magnifying-glass-solid.svg" class="serch">'
    }

}*/

