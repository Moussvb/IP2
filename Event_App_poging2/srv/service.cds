using { eventapp } from '../db/schema';

service Event {
   entity Events as projection on eventapp.Events;
}

