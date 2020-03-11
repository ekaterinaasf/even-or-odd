function nanyHandler() {
  debugger;
  // write me!
  const ulEl = document.getElementById("selected");
  ulEl.innerHTML = "";
  for (let i = 0; i < strings.NaNy.length; i++) {
    const elli = document.createElement("li");
    elli.innerText = strings.NaNy[i];
    ulEl.appendChild(elli);
  }
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "NaNy",
    strings: JSON.parse(JSON.stringify(strings))
  });
}
