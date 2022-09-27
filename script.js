var container = document.createElement("div");
container.setAttribute("class", "container");
var h1 = document.createElement("h1");
h1.innerHTML = "Harry potter cast Detail";
h1.style = "text-align:center; margin-top:1rem; font-size:3rem;";
var row = document.createElement("div");
row.classList.add("row", "m-1", "p-1");
container.append(h1, row);

var res = fetch("https://hp-api.herokuapp.com/api/characters");
res.then((data) => data.json()).then((value) => foo(value));

function foo(value) {
  console.log(value);
  for (let i = 0; i <=24; i++) {
    row.innerHTML += `
         <div class="col-md-4">
         <div class="card mt-5 p-1" style="height:48rem; width: 23rem; margin:10px; padding:20px; box-shadow:1px 1px 10px; text-align:center;">
           <img src="${value[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
           <p class="card-text">Name: ${value[i].name}</p>
           <p class="card-text">DOB: ${value[i].yearOfBirth}</p>
           <p class="card-text">Actor: ${value[i].actor}</p>
           <p class="card-text">Ancestry: ${value[i].ancestry}</p>
        </div>       </div>       </div>`;
    document.body.append(container);
  }
}
