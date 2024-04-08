
dataItems = (baseUrl) => {
    fetch(baseUrl)
    
    .then((response) => {  return response.json(); })
     
    .then((data) => {
        
        const tableBody = document.querySelector("#todos-table tbody"); 

        data.map((todo) => {

            const tableRow = document.createElement("tr");
            
            tableRow.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.userId}</td>
            <td>${todo.title}</td>
            <td>${todo.completed}</td> `;
        
            tableBody.appendChild(tableRow);
        });
    })  

    .catch((error) => {
        console.error("PROBLEM HAPPENED", error);
    })
}//function

dataItems("https://jsonplaceholder.typicode.com/todos");
