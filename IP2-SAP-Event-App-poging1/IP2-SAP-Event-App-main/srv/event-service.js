const { cds } = require('@sap/cds');
const { v4: uuidv4 } = require('uuid'); 


// fake-data
let events = [
  { ID: uuidv4(), title: 'Event 1', date: '2024-04-20', location: 'Location 1', description: 'Description 1' },
  { ID: uuidv4(), title: 'Event 2', date: '2024-04-21', location: 'Location 2', description: 'Description 2' },
];

module.exports = cds.service.impl((srv) => {
  srv.on('READ', 'Event', (req) => {
    const { ID } = req.params[0] || {};
    if (ID) {
      const event = events.find((event) => event.ID === ID);
      if (!event) req.reject(404, `Event with ID ${ID} not found`);
      return event;
    }
    return events;
  });

  srv.on('CREATE', 'Event', (req) => {
    const newEvent = { ...req.data, ID: uuidv4() };
    events.push(newEvent);
    return newEvent;
  });

  srv.on('UPDATE', 'Event', (req) => {
    const { ID } = req.params[0];
    const eventIndex = events.findIndex((event) => event.ID === ID);
    if (eventIndex === -1) req.reject(404, `Event with ID ${ID} not found`);
    events[eventIndex] = { ...events[eventIndex], ...req.data };
    return events[eventIndex];
  });

  srv.on('DELETE', 'Event', (req) => {
    const { ID } = req.params[0];
    const eventIndex = events.findIndex((event) => event.ID === ID);
    if (eventIndex === -1) req.reject(404, `Event with ID ${ID} not found`);
    events.splice(eventIndex, 1);
    return {};
  });
});
