function oddsHandler() {
  debugger;
  // write me!
  const ulEl = document.getElementById("selected");
  ulEl.innerHTML = "";
  for (let i = 0; i < strings.odds.length; i++) {
    const elli = document.createElement("li");
    elli.innerText = strings.odds[i];
    ulEl.appendChild(elli);
  }
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "odds",
    strings: JSON.parse(JSON.stringify(strings))
  });
}
