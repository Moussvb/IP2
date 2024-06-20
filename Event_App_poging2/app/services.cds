
using from './eventfiori/annotations';

service EventManagementService {
  // Define an action that can create an Event
  action CreateEvent(data: Events) returns Events;
}
