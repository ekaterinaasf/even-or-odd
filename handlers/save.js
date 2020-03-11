function saveHandler() {
  debugger;
  // write me!
  const userInput = document.getElementById("input").value;

  if (isNaN(userInput)) {
    if (!strings.NaNy.includes(userInput)) {
      strings.NaNy.push(userInput);
    }
  } else if (Number(userInput) % 2 === 1) {
    if (!strings.odds.includes(userInput)) {
      strings.odds.push(userInput);
    }
  } else if (!strings.evens.includes(userInput)) {
    strings.evens.push(userInput);
  }

  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save",
    userInput,
    strings: JSON.parse(JSON.stringify(strings))
  });
}
