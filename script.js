
//KEYBOARD//
const buttons = document.querySelectorAll('.btn');
const textarea = document.querySelector('.search-bar1');
const searchButton = document.getElementById('search-button');
const delete_btn = document.querySelector('.delete');
const shift_btn = document.querySelector('.shift');
const space_btn = document.querySelector('.space');

let chars = [];

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText;
        chars = textarea.value.split('');
    });
});

delete_btn.addEventListener('click', () => {
    chars.pop();
    textarea.value = chars.join('');
});

space_btn.addEventListener('click', () => {
    chars.push(' ');
    textarea.value = chars.join('');
});

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper');
    });
});

searchButton.addEventListener('click', () => {
    const searchTerm = textarea.value.toLowerCase();

    switch (searchTerm) {
        case 'event':
            window.location.href = 'events.html';
            break;
        case 'map':
            window.location.href = 'maps.html';
            break;
        case 'camera':
            window.location.href = 'camera.html';
            break;
        case 'game':
            window.location.href = 'games.html';
            break;
        case 'report':
            window.location.href = 'report.html';
            break;
        case 'contact us':
            window.location.href = 'contactus.html';
            break;
        default:
            console.log('No matching action for search term:', searchTerm);
    }
});



//LOGOS//

var selectedImage = null;

function resizeImage(image) {

    if (selectedImage !== null) {
        selectedImage.classList.remove('selected');
    }

    image.classList.add('selected');

    selectedImage = image;
}

document.body.addEventListener('click', function(event) {
    if (selectedImage !== null && !event.target.classList.contains('resizable-image')) {

        selectedImage.classList.remove('selected');
        selectedImage = null;
    }
});

const tabLogos = document.querySelectorAll('.tab-logo');
const tabContents = document.querySelectorAll('.tab-content');

tabLogos.forEach((tabLogo, index) => {
    tabLogo.addEventListener('click', () => {

        tabContents.forEach(content => content.style.display = 'none');
        
        tabContents[index].style.display = 'block';
    });
});


//HOMEPAGE//



//MAPS//

function showFloor(building) {
  var floorImage = document.getElementById("floor-image");
  var noBuildingMessage = document.getElementById("no-building-message");
  var buildingButtons = document.querySelectorAll('.building-button');

  buildingButtons.forEach(function(button) {
      button.classList.remove('active');
  });

  var activeButton = document.querySelector('.building-button[data-building="' + building + '"]');
  activeButton.classList.add('active');
  switch (building) {
      case 'A':
          floorImage.src = "Blueprints/blueprint-a.jpg";
          noBuildingMessage.style.display = "none";
          floorImage.style.display = "block";
          break;
      case 'B':
          floorImage.src = "Blueprints/blueprint-b.jpg";
          noBuildingMessage.style.display = "none";
          floorImage.style.display = "block";
          break;
      case 'C':
          floorImage.src = "Blueprints/blueprint-c.jpg";
          noBuildingMessage.style.display = "none";
          floorImage.style.display = "block";
          break;
      case 'D':
          floorImage.src = "Blueprints/blueprint-d.jpg";
          noBuildingMessage.style.display = "none";
          floorImage.style.display = "block";
          break;
      case 'E':
            floorImage.src = "Blueprints/blueprint-d.jpg";
            noBuildingMessage.style.display = "none";
            floorImage.style.display = "block";
            break;
      default:
          floorImage.src = "";
          noBuildingMessage.style.display = "block";
          floorImage.style.display = "none";
  }
}



/*GAME*/



//CONTACTS//

function showFeedbackForm() {
    document.getElementById('initialButtons').style.display = 'none';
    document.getElementById('feedbackForm').style.display = 'block';
    document.getElementById('confirmationMessage').style.display = 'none';
  }

  function showReportForm() {
    document.getElementById('initialButtons').style.display = 'none';
    document.getElementById('reportForm').style.display = 'block';
    document.getElementById('confirmationMessage').style.display = 'none';
  }

  function sendFeedback() {
    if (validateFeedbackForm()) {
      showConfirmationMessage('Thanks for giving feedback!');
      showInitialButtons();
      resetForm('feedbackForm');
    }
  }

  function submitReport() {
    if (validateReportForm()) {
      showConfirmationMessage('Thanks for submitting a report!');
      showInitialButtons();
      resetForm('reportForm');
    }
  }

  function validateFeedbackForm() {
    var email = document.getElementById('schoolEmail').value;
    var message = document.getElementById('feedbackMessage').value;

    if (!email || !message) {
      alert('Please fill in all fields.');
      return false;
    }

    return true;
  }

  function validateReportForm() {
    var reportType = document.getElementById('reportType').value;
    var message = document.getElementById('reportMessage').value;

    if (reportType === 'other') {
      var otherReportType = document.getElementById('otherReportType').value;
      if (!otherReportType || !message) {
        alert('Please fill in all fields.');
        return false;
      }
    } else {
      if (!reportType || !message) {
        alert('Please fill in all fields.');
        return false;
      }
    }

    return true;
  }

  function showConfirmationMessage(message) {
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = message;
    confirmationMessage.style.display = 'block';
    setTimeout(function () {
      confirmationMessage.style.display = 'none';
    }, 2000);
  }

  function showInitialButtons() {
    document.getElementById('initialButtons').style.display = 'flex';
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('reportForm').style.display = 'none';
  }

  function resetForm(formId) {
    var form = document.getElementById(formId);
    form.clear();
  }

  function checkOtherOption() {
    var reportTypeDropdown = document.getElementById('reportType');
    var otherOptionDiv = document.getElementById('otherOption');
    var otherReportTypeInput = document.getElementById('otherReportType');

    if (reportTypeDropdown.value == 'other') {
      otherOptionDiv.style.display = 'block';
      otherReportTypeInput.setAttribute('required', 'required');
    } else {
      otherOptionDiv.style.display = 'none';
      otherReportTypeInput.removeAttribute('required');
    }
  }