var currentDateElement = document.getElementById('current-date');
var currentDate = new Date();
currentDateElement.textContent = currentDate.toDateString();

    var currentHour = currentDate.getHours();
    var rows = document.querySelectorAll('div[id^="row-"]');
    rows.forEach(function(row) {
      var hour = parseInt(row.id.split('-')[1]);
      var hourElement = row.querySelector('.hour');
      if (hour < currentHour) {
        row.classList.add('past');
      } else if (hour === currentHour) {
        row.classList.add('present');
      } else {
        row.classList.add('future');
      }
    });

    var saveButton = row.querySelector('.save-button');
      saveButton.addEventListener('click', function() {
        var input = row.querySelector('textarea');
        var activityId = input.id;
        var activityText = input.value;
        localStorage.setItem(activityId, activityText);
      });

        var input = row.querySelector('textarea');
        var activityId = input.id;
        var savedActivityText = localStorage.getItem(activityId);
        if (savedActivityText) {
          input.value = savedActivityText;
        }