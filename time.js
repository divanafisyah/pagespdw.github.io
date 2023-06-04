  const greetingElement = document.getElementById('greeting');
  const currentDateElement = document.getElementById('current-date');
  const currentTimeElement = document.getElementById('current-time');

  function updateDateTime() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let greeting = '';
    if (currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const formattedTime = currentDate.toLocaleTimeString('en-US');

    greetingElement.textContent = greeting;
    currentDateElement.textContent = formattedDate;
    currentTimeElement.textContent = formattedTime;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000); // Update every second
