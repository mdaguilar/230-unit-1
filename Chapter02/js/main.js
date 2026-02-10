//initialize function called when script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];
   
    //create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the header row
    table.appendChild(headerRow);

        //define an array of objects for cities and population
   //Example 2.3 line 8...create an empty array
    var cityPop = [];

    //create the first city object
    var madison = {};
    //add each property to the object
    madison.city = 'Madison';
    madison.population = 233209;

    //push the city object into the array
    cityPop.push(madison);

    //repeat...
    var milwaukee = {};
    milwaukee.city = 'Milwaukee';
    milwaukee.population = 594833;
    cityPop.push(milwaukee);

    var greenBay = {};
    greenBay.city = 'Green Bay';
    greenBay.population = 104057;
    cityPop.push(greenBay);

    var superior = {};
    superior.city = 'Superior';
    superior.population = 27244;
    cityPop.push(superior);

    //...

    //FOREACH LOOP WITH OBJECT FOR LOOP...Example 2.4 line 25
    cityPop.forEach(function(cityObject){
        var tr = document.createElement("tr");

        for (var property in cityObject){
            var td = document.createElement("td");
            td.innerHTML = cityObject[property];
            tr.appendChild(td);
        };

        table.appendChild(tr);
    });

    //add the table to the div in index.html
    var mydiv = document.querySelector("#mydiv").appendChild(table);

    //Added at Example 3.5 line 44...
    //get the div id
    var theid = document.querySelector('#mydiv').getAttribute('id');

    //theid is 'mydiv;; add it as text to the div
    document.querySelector('#mydiv').insertAdjacentHTML('beforeend',theid);

    //add the class 'foo' to the div
    document.querySelector('#mydiv').setAttribute('class', 'foo');

    //Check your work with the Inspector!

    //Added below Example 3.7...
    //iterate over each script element and add each one's source url as text to the div
    document.querySelectorAll("script").forEach(function(selectedScript){
        var thesource = selectedScript.src;
        document.querySelector('#mydiv').insertAdjacentHTML('beforeend',thesource);
    });

    //Added below Example 3.8...
    //click listener with anonymous handler function
    document.querySelector("table").addEventListener("click", function(){
        alert('Madison Rocks! Go Badgers!');
    });

    //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
    };

    //add the event listener
    document.querySelector("table").addEventListener('click', clickme);

    //remove the event listener
    document.querySelector("table").removeEventListener('click', clickme);
    
    //change the text color
    document.querySelector('#mydiv').style.color = 'red';

    //Added below Example 3.6...
    //change the text color
    document.querySelector('#mydiv').style.color = 'red';

    //change the text size and alignment
    document.querySelector('#mydiv').style.fontSize = '2em';
    document.querySelector('#mydiv').style.textAlign = 'left';

    //get the text color and add it as text to the div
    var thecolor = document.querySelector('#mydiv').style.color;
    document.querySelector('#mydiv').insertAdjacentHTML('beforeend',thecolor);
};

window.onload = initialize();