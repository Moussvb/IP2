document.addEventListener('DOMContentLoaded', function() {
  fetchEvents();
});

function fetchEvents() {
  fetch('/event-management/Events')
      .then(response => response.json())
      .then(events => {
          console.log('Fetched events:', events);
          const container = document.getElementById('eventsContainer');
          container.innerHTML = ''; // clear existing entries
          events.forEach(event => {
              container.appendChild(createEventCard(event));
          });
      })
      .catch(error => console.error('Error loading events:', error));
}

function createEventCard(event) {
  const article = document.createElement('article');
  article.className = 'event-card';

  const eventInfo = document.createElement('div');
  eventInfo.className = 'event-info';

  const eventHeader = document.createElement('div');
  eventHeader.className = 'event-header';

  const price = document.createElement('h3');
  price.textContent = `€${event.price}`;

  const title = document.createElement('h4');
  title.textContent = event.title;

  const location = document.createElement('p');
  location.textContent = event.location;

  const category = document.createElement('p');
  category.textContent = event.category;

  const participants = document.createElement('p');
  participants.textContent = `Deelnemers: ${event.participants}`;

  const date = document.createElement('p');
  date.textContent = `Datum: ${new Date(event.date).toLocaleDateString('nl-NL')}`;

  const description = document.createElement('textarea');
  description.readOnly = true;
  description.textContent = event.description;

  eventHeader.appendChild(price);
  eventHeader.appendChild(title);
  eventInfo.appendChild(eventHeader);
  eventInfo.appendChild(location);
  eventInfo.appendChild(category);
  eventInfo.appendChild(participants);
  eventInfo.appendChild(date);
  eventInfo.appendChild(description);
  article.appendChild(eventInfo);

  return article;
}
