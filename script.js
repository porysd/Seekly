
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
        case 'home':
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
          floorImage.src = "Blueprints/inside.png";
          noBuildingMessage.style.display = "none";
          floorImage.style.display = "block";
          break;
      case 'C':
          floorImage.src = "Blueprints/outside.png";
          noBuildingMessage.style.display = "none";
          floorImage.style.display = "block";
          break;
      case 'D':
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


//INSIDE MAP//

function showBooth(booth) {
  var boothImage = document.getElementById("booth-image");
  var noBoothMessage = document.getElementById("no-booth-message");
  var boothInfo = document.getElementById("booth-info");
  var boothText = document.getElementById("booth-text");


  switch (booth) {
    case "entrance":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      //BOOTH IMAGE DITO//
      boothImage.src = "Blueprints/blueprint-a.jpg";
      //BOOTH TITLE DITO//
      boothInfo.innerHTML = "building a";
      //BOOTH TEXT/INFORMATION DITO//
      boothText.innerHTML = "maganda sya";
      break;
    case "stage":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "Blueprints/blueprint-b.jpg";
      boothInfo.innerHTML = "building b";
      boothText.innerHTML = "maganda parin sya";
      break;
    case "office":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-1":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A1toA12/A1.png";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-2":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A1toA12/A2.jpg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-3":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A1toA12/A3.jpg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-4":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A1toA12/A4.jpg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-5":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A1toA12/A5.png";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-6":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A1toA12/A6.png";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-7":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-8":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-9":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A1toA12/A9.jpg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-10":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-11":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-12":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A1toA12/A12.jpeg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-13":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/A13.png";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-14":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/A14.jpg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-15":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/A15.jpg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-16":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-17":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/A17.jpeg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-18":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/A18.png";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-19":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-20":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-21":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-22":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-23":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/A23.png";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-24":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-25":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "CL/PAWZ.png";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-26":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "CL/i.png";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-27":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "CL/LT.jpg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "wow";
      break;
    case "a-28":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "CL/POKEY.png";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-29":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A13toA22/A29.jpg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-30":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-31":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-32":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-33":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-34":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-35":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-36":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-37":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-38":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-39":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-40":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "A30toA38/A40.jpg";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-41":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-42":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-43":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-44":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-45":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
    case "a-46":
      noBoothMessage.style.display = "none";
      boothImage.style.display = "block";
      boothImage.src = "";
            boothInfo.innerHTML = "Booth Info:";
      boothText.innerHTML = "";
      break;
      case "b-1":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "Blueprints/blueprint-a.jpg";
        boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "maganda sya";
        break;
      case "b-2":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B2.png";
        boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "maganda parin sya";
        break;
      case "b-3":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B3.png";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-4":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B4.png";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-5":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B5.jpg";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-6":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B6.png";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-7":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-8":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-9":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-10":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-11":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-12":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B12.JPG";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-13":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-14":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B14.png";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-15":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-16":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B16.jpeg";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-17":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B17.JPG";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-18":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B18.png";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-19":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B19.jpeg";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-20":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-21":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      case "b-22":
        noBoothMessage.style.display = "none";
        boothImage.style.display = "block";
        boothImage.src = "BLogos/B22.jpeg";
              boothInfo.innerHTML = "Booth Info:";
        boothText.innerHTML = "";
        break;
      default:
        boothImage.src = "";
        noBoothMessage.style.display = "block";
        boothImage.style.display = "none";
    }
  }
  




  
/*GAME*/



//CONTACTS//

  function showReportForm() {
    document.getElementById('initialButtons').style.display = 'none';
    document.getElementById('reportForm').style.display = 'block';
    document.getElementById('confirmationMessage').style.display = 'none';
  }

  function submitReport() {
    if (validateReportForm()) {
      alert('Thanks for submitting a report!');
      showInitialButtons();
      resetForm('reportForm');
    }
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