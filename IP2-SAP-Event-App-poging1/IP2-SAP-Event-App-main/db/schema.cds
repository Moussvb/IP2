namespace eventtapp;

entity Events /*@cds.persistence.name: "eventt_app_Events"*/{
    key ID       : UUID;
    title       : String(100);
    date        : Date;
    location    : String(100);
    description : String(500);
    sessions    : Composition of many Sessions on sessions.event = $self; 
}

entity Sessions /*@cds.persistence.name: "eventt_app_Sessions"*/ {
    key ID       : UUID;
    key event    : Association to Events; 
    title       : String(100);
    date        : Date;
    startTime   : Time;
    endTime     : Time;
    description : String(500);
    registrations : Composition of many Registrations on registrations.session = $self;
    feedbacks   : Composition of many Feedbacks on feedbacks.session = $self;
}

entity Registrations /*@cds.persistence.name: "eventt_app_Registrations"*/{
    key ID               : UUID;
    key user             : Association to Users; 
    key session          : Association to Sessions; 
    registrationDate     : Date;
}

entity Feedbacks /*@cds.persistence.name: "eventt_app_Feedbacks"*/{
    key ID       : UUID;
    session      : Association to Sessions; 
    user         : Association to Users; 
    rating       : Integer;
    comment      : String(500);
}

entity Users /*@cds.persistence.name: "eventt_app_Users"*/{
    key ID       : UUID;
    username     : String(100);
    email        : String(100);
    role         : String(50); // 'admin' or 'user'
    registrations: Composition of many Registrations on registrations.user = $self;
    feedbacks    : Composition of many Feedbacks on feedbacks.user = $self;
}


