//select elements
//rating component
const ratingComponent = document.getElementById("rating-component");

//rating form
const ratingForm = document.getElementById("rating-form");

//rating imputs
const ratingInput1 = document.getElementById("rating-1");
const ratingInput2 = document.getElementById("rating-2");
const ratingInput3 = document.getElementById("rating-3");
const ratingInput4 = document.getElementById("rating-4");
const ratingInput5 = document.getElementById("rating-5");

//thanks component
const thanksComponent = document.getElementById("thanks-component");

//rating result p
const ratingResultElement = document.getElementById("rating-result");

//app state
const state = {
  errorMessage: "",
  currentRating: 0,
  ratingResult: 0,
};

//event listeners
//final form submi
ratingForm.addEventListener("submit", onSubmit);

//click on the inputs with event delegation
ratingForm.addEventListener("click", onRatingChange);

//event listeners callback functions

/**
 * saves the rating result
 * hides the rating component
 * displays the thanks component
 * @param event - form submit event
 */
function onSubmit(event) {
  //prevent page reload
  event.preventDefault();

  //if user submits without rating
  if (!state.currentRating) {
    state.errorMessage = "Please select a rating!";

    throw new Error(state.errorMessage);
  }

  //update the rating result
  state.ratingResult = state.currentRating;

  //update the thanks text
  ratingResultElement.innerText = `You selected ${state.ratingResult} out of 5`;

  //hide the rating component
  ratingComponent.classList.add("hidden");

  //display the thanks component
  thanksComponent.classList.remove("hidden");
}

/**
 * updates the currentRating on every click - change
 * @param event - click event on the form
 */
function onRatingChange(event) {
  const targetId = event.target.id;

  //make sure click is on the label - connected to the id
  if (targetId.startsWith("rating")) {
    switch (targetId) {
      case "rating-1": {
        state.currentRating = 1;
        break;
      }

      case "rating-2": {
        state.currentRating = 2;
        break;
      }

      case "rating-3": {
        state.currentRating = 3;
        break;
      }

      case "rating-4": {
        state.currentRating = 4;
        break;
      }

      case "rating-5": {
        state.currentRating = 5;
        break;
      }
    }
  }
}
