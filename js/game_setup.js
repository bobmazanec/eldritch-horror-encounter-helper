function choicesForExpansions(choicesByExpansion) {
  return Object.entries(choicesByExpansion)
    .filter(([expansion]) => expansionsUsed.includes(expansion))
    .flatMap(([, choices]) => choices);
}

function renderExpansionSelection() {
  const expansions = [
    { name: Core, image: "eldritchhorror.png", selectable: false },
    { name: ForsakenLore, image: "forsakenlore.png", selectable: true },
    { name: MountainsOfMadness, image: "mountainsofmadness.png", selectable: true },
    { name: StrangeRemnants, image: "strangeremnants.png", selectable: true },
    { name: UnderThePyramids, image: "underthepyramids.png", selectable: true },
    { name: SignsOfCarcosa, image: "signsofcarcossa.png", selectable: true },
    { name: TheDreamlands, image: "dreamlands.png", selectable: true },
    { name: CitiesInRuin, image: "citiesInRuins.png", selectable: true },
    { name: MasksOfNyarlathotep, image: "mon.png", selectable: true }
  ];
  const container = document.getElementById("expansion-choices");

  expansions.forEach(({ name, image: imageName, selectable }) => {
    const tile = document.createElement(selectable ? "label" : "div");
    const controls = document.createElement("span");
    const image = document.createElement("img");
    const nameLabel = document.createElement("span");
    tile.className = selectable
      ? "expansion-choice"
      : "expansion-choice expansion-choice--core";
    controls.className = "expansion-choice__controls";
    nameLabel.className = "expansion-choice__name";

    if (selectable) {
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "expansion";
      input.value = name;
      input.checked = true;
      controls.append(input);
    }

    image.src = `images/expansions/${imageName}`;
    image.alt = `${name} icon`;
    nameLabel.textContent = name;
    controls.append(image);
    tile.append(controls, nameLabel);
    container.append(tile);
  });

  updateLoadGameButton();
}

function renderGameSetupForm() {
  const ancientOneChoices = choicesForExpansions(ancientOneChoicesByExpansion).sort();
  const ancientOneSelect = document.getElementById("ancient-one-choices");
  const startButton = document.getElementById("start-game-button");

  ancientOneSelect.addEventListener("change", () => {
    startButton.disabled = ancientOneSelect.value === "";
  });

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

function selectRandomAncientOne() {
  const ancientOneSelect = document.getElementById("ancient-one-choices");
  const choices = Array.from(ancientOneSelect.options).filter(option => option.value);

  if (choices.length === 0) return;

  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  ancientOneSelect.value = randomChoice.value;
  ancientOneSelect.dispatchEvent(new Event("change"));
}

function startNewGame(event) {
  event.preventDefault();

  const selectedExpansions = Array.from(
    document.querySelectorAll("input[name='expansion']:checked")
  ).map(checkbox => checkbox.value);
  expansionsUsed = [Core, ...selectedExpansions];

  renderGameSetupForm();
  document.getElementById("expansion-selection-section").remove();
  document.getElementById("game-setup-section").hidden = false;
}

function submitGameSetup(event) {
  event.preventDefault();

  ancientOne = document.getElementById("ancient-one-choices").value;
  preludesUsed = Array.from(document.querySelectorAll("input[name='prelude']:checked")).map(checkbox => checkbox.value);

  removeElementWithId("game-setup-section");
  document.getElementById("mainView").style.display = "block";

  initializeGame();
}
