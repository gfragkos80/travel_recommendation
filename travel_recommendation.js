const addResetButton = document.getElementById("btnReset");

const btnSearch = document.getElementById('btnSearch');

const btnSubmit = document.getElementById('submitBtn');

document.getElementById('result').style.visibility = 'hidden';

const countries = [];

/* Reset button function*/
function resetForm() {
    
    document.getElementById('conditionInput').value ='';
    document.getElementById('result').innerHTML='';
    document.getElementById('result').style.visibility = 'hidden';

    
}

function searchCondition() {

    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    document.getElementById('result').style.visibility = 'visible';
 
    fetch('travel_recommendation_api.json')
        .then(response => response.json())

        .then ( data => {
            // Check for each keyword
            if(input === 'beaches' || input === 'beach'){
                // get beach items
                
                console.log('${data.beaches}');
                //for loop
                data.beaches.forEach(element => {
                
                resultDiv.innerHTML += `<img src="images/${element.imageUrl}" >`;
                resultDiv.innerHTML += `<h2>${element.name}</h2>`;
                resultDiv.innerHTML += `<p>Description: ${element.description}</p>`;
                resultDiv.innerHTML += `<button id=book>Book</button>`;
                    
                });

            }
            else if(input === 'country' || input === 'countries'){
                // get countries
                const x = Math.floor((Math.random() * 3) + 1);

                const citiesObj = data.countries[x-1];
                console.log(citiesObj);
                citiesTable = citiesObj.cities;
                citiesTable.forEach(element => {
                    
                    resultDiv.innerHTML += `<img src="images/${element.imageUrl}" >`;
                    resultDiv.innerHTML += `<h2>${element.name}</h2>`;
                    resultDiv.innerHTML += `<p>Description: ${element.description}</p>`;
                    resultDiv.innerHTML += `<button id=book>Book</button>`;
                });

            }
            else if(input === 'temple' || input === 'temples'){
                // get temples
                
                data.temples.forEach(element => {
                    
                resultDiv.innerHTML += `<img src="images/${element.imageUrl}" >`;
                resultDiv.innerHTML += `<h2>${element.name}</h2>`;
                resultDiv.innerHTML += `<p>Description: ${element.description}</p>`;
                resultDiv.innerHTML += `<button id=book>Book</button>`;
                });
            }
            
        })
        .catch(error => {
            console.error('error:', error);
            resultDiv.innerHTML = 'An error occured while fetching data.';
        })
    
}

document.addEventListener('keydown', function(event){
    if(event.key==='Enter'){
        sumbitReport();
    }
});

/* DOES NOT WORKING*/
function sumbitReport(){
    const name = document.getElementById('name').value;
    const details = document.getElementById("details").value;
    alert('Feedback Submited!');
    document.getElementById('name').innerHTML='';
    document.getElementById('details').innerHTML='';
    console.log('Sumbitted');

}



// Add listener to Reset button
addResetButton.addEventListener("click",resetForm);

// btnSubmit.addEventListener('click', sumbitReport);

btnSearch.addEventListener('click', searchCondition);
