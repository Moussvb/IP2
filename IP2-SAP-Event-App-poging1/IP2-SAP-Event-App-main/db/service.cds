using { eventtapp } from './schema.cds';

service EventManagementService {
  entity Events as projection on eventtapp.Events;
  entity Sessions as projection on eventtapp.Sessions;
  entity Registrations as projection on eventtapp.Registrations;
  entity Feedbacks as projection on eventtapp.Feedbacks;
  entity Users as projection on eventtapp.Users;
}


