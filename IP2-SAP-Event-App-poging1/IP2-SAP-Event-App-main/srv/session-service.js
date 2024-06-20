let sessions = [
    { ID: uuidv4(), title: 'Session 1', date: '2024-04-20', startTime: '10:00', endTime: '11:00', description: 'Description Session 1', event: '1' },
    { ID: uuidv4(), title: 'Session 2', date: '2024-04-21', startTime: '12:00', endTime: '13:00', description: 'Description Session 2', event: '2' },
  ];
  
  srv.on('READ', 'Session', (req) => {
    const { ID } = req.params[0] || {};
    if (ID) {
      const session = sessions.find((session) => session.ID === ID);
      if (!session) req.reject(404, `Session with ID ${ID} not found`);
      return session;
    }
    return sessions;
  });
  
  srv.on('CREATE', 'Session', (req) => {
    const newSession = { ...req.data, ID: uuidv4() };
    sessions.push(newSession);
    return newSession;
  });
  
  srv.on('UPDATE', 'Session', (req) => {
    const { ID } = req.params[0];
    const sessionIndex = sessions.findIndex((session) => session.ID === ID);
    if (sessionIndex === -1) req.reject(404, `Session with ID ${ID} not found`);
    sessions[sessionIndex] = { ...sessions[sessionIndex], ...req.data };
    return sessions[sessionIndex];
  });
  
  srv.on('DELETE', 'Session', (req) => {
    const { ID } = req.params[0];
    const sessionIndex = sessions.findIndex((session) => session.ID === ID);
    if (sessionIndex === -1) req.reject(404, `Session with ID ${ID} not found`);
    sessions.splice(sessionIndex, 1);
    return {};
  });
  