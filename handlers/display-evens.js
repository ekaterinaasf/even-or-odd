function evensHandler() {
  debugger;
  // write me!if (rez) {
  //display result
  const ulEl = document.getElementById("selected");
  ulEl.innerHTML = "";
  for (let i = 0; i < strings.evens.length; i++) {
    const elli = document.createElement("li");
    elli.innerText = strings.evens[i];
    ulEl.appendChild(elli);
  }
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "evens",
    strings: JSON.parse(JSON.stringify(strings))
  });
}
