// definding `cityPop` variable
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

// function adds columns to a table using the inputed variable
function addColumns(cityPop){
    
	// for each row in the table, do the following:
    document.querySelectorAll("tr").forEach(function(row, i){

		// if its the first iteration, set the table header
    	if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} 
		// otherwise, determine if the city size should be small/medium/large
		else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

// function adds events to the table when interacted with
function addEvents(){

	// when a cursor moves over the table, set the color to a random RGB value
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			}
		};

		document.querySelector("table").style.color = color;
	});

	// display an alert that something was clicked
	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};

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


    //FOREACH LOOP WITH OBJECT FOR LOOP...Example 2.4 line 25
    cityPop.forEach(function(cityObject){
        var tr = document.createElement("tr");

        for (var property in cityObject){
            var td = document.createElement("td");
            td.innerHTML = cityObject[property];
            tr.appendChild(td);
        };
		addColumns(cityPop);
        table.appendChild(tr);
    });


    //add the table to the div in index.html
    var mydiv = document.querySelector("#mydiv").appendChild(table);
	addColumns(cityPop);
	addEvents();
    
};

window.onload = initialize();