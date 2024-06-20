BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Users" (
	"ID"	TEXT,
	"username"	TEXT,
	"email"	TEXT,
	"role"	INTEGER,
	FOREIGN KEY("ID") REFERENCES "Registrations"("user_id"),
	FOREIGN KEY("ID") REFERENCES "Feedbacks"("user_id"),
	PRIMARY KEY("ID")
);
CREATE TABLE IF NOT EXISTS "Registrations" (
	"ID"	TEXT,
	"user_id"	TEXT,
	"session_id"	TEXT,
	"registrationDate"	DATE,
	FOREIGN KEY("session_id") REFERENCES "Sessions"("ID"),
	FOREIGN KEY("user_id") REFERENCES "Users"("ID"),
	PRIMARY KEY("ID")
);
CREATE TABLE IF NOT EXISTS "Feedbacks" (
	"ID"	TEXT,
	"session_id"	TEXT,
	"user_id"	TEXT,
	"rating"	INTEGER,
	"comment"	TEXT,
	PRIMARY KEY("ID"),
	FOREIGN KEY("user_id") REFERENCES "Users"("ID"),
	FOREIGN KEY("session_id") REFERENCES "Sessions"("ID")
);
CREATE TABLE IF NOT EXISTS "Sessions" (
	"ID"	TEXT,
	"title"	TEXT,
	"date"	DATE,
	"startTime"	TIME,
	"endTime"	TIME,
	"description"	TEXT,
	"event_id"	TEXT,
	PRIMARY KEY("ID"),
	FOREIGN KEY("event_id") REFERENCES "Events"("ID")
);
CREATE TABLE IF NOT EXISTS "Events" (
	"ID"	TEXT,
	"title"	TEXT,
	"date"	DATE,
	"location"	TEXT,
	"description"	TEXT,
	PRIMARY KEY("ID")
);
COMMIT;
