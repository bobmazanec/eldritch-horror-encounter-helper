function choicesForExpansions(choicesByExpansion) {
  return Object.entries(choicesByExpansion)
    .filter(([expansion]) => expansionsUsed.includes(expansion))
    .flatMap(([, choices]) => choices);
}

function renderGameSetupForm() {
  const ancientOneChoices = choicesForExpansions(ancientOneChoicesByExpansion).sort();
  const ancientOneSelect = document.getElementById("ancient-one-choices");

  ancientOneChoices.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    ancientOneSelect.append(option);
  });

  const preludeChoices = choicesForExpansions(preludeChoicesByExpansion).sort();

  if (preludeChoices.length === 0) {
    removeElementWithId("prelude-section");
    return;
  }

  const preludeContainer = document.getElementById("prelude-choices");

  preludeChoices.forEach((name) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "prelude";
    input.value = name;
    label.append(input, ` ${name}`);
    preludeContainer.append(label, document.createElement("br"));
  });
}

function submitGameSetup(event) {
  event.preventDefault();

  ancientOne = document.getElementById("ancient-one-choices").value;
  preludesUsed = Array.from(document.querySelectorAll("input[name='prelude']:checked")).map(checkbox => checkbox.value);

  removeElementWithId("game-setup-section");
  document.getElementById("mainView").style.display = "block";

  initializeGame();
}
