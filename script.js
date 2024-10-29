function insert_Row() {
    //Write your code here
	const table = document.getElementById("sampleTable");
	const row = table.insertRow(0);
	const cell1 = table.insertCell(0);
	const cell2 = table.insertCell(1);
	cell1.innerHTML = "New Cell1";
	cell2.innerHTML = "New Cell2";  
}
