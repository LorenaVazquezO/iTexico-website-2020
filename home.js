const deliveryPhases = {
  "design-sprint-phase": { circleColor: "red", description: "Phase description 1" },
  "software-architecture-phase": { circleColor: "blue", description: "Phase description 2" },
  "design-phase": { circleColor: "yellow", description: "Phase description 3" },
  "software-engineering-phase": { circleColor: "red", description: "Phase description 4" },
  "devOps-phase": { circleColor: "purple", description: "Phase description 5" },
  "support-phase": { circleColor: "gray", description: "Phase description 6" }
};

const resetElements = () => {
  const allElements = document.getElementsByClassName("oval");
  for (i = 0; i < allElements.length; i++) {
    allElements[i]["style"]["border"] = "solid 4px black";
  }
};

const setCurrentElement = target => {
  const elementID = target.getAttribute("id");
  const defaultPhase = {circleColor: "black", description: "Default description"};
  const phase = deliveryPhases[elementID] || defaultPhase;
  const phaseDescriptionTitle = document.getElementById("phase-description-title");
  const phaseDescription = document.getElementById("phase-description");

  target.style.border = `solid 4px ${phase.circleColor}`;
  phaseDescriptionTitle.innerText = target.getAttribute("data-label");
  phaseDescription.innerText = phase.description;
};

document.addEventListener(
  "click",
  event => {
    if (!event.target.matches(".oval")) return;
    event.preventDefault();

    const target = event.target;

    resetElements();
    setCurrentElement(target);
  },
  false
);
