let registrations = [
    { ID: uuidv4(), user: '1', session: '1', registrationDate: '2024-04-20' },
    { ID: uuidv4(), user: '2', session: '2', registrationDate: '2024-04-21' },
  ];
  
  srv.on('READ', 'Registration', (req) => {
    const { ID } = req.params[0] || {};
    if (ID) {
      const registration = registrations.find((registration) => registration.ID === ID);
      if (!registration) req.reject(404, `Registration with ID ${ID} not found`);
      return registration;
    }
    return registrations;
  });
  
  srv.on('CREATE', 'Registration', (req) => {
    const newRegistration = { ...req.data, ID: uuidv4() };
    registrations.push(newRegistration);
    return newRegistration;
  });
  
  srv.on('UPDATE', 'Registration', (req) => {
    const { ID } = req.params[0];
    const registrationIndex = registrations.findIndex((registration) => registration.ID === ID);
    if (registrationIndex === -1) req.reject(404, `Registration with ID ${ID} not found`);
    registrations[registrationIndex] = { ...registrations[registrationIndex], ...req.data };
    return registrations[registrationIndex];
  });
  
  srv.on('DELETE', 'Registration', (req) => {
    const { ID } = req.params[0];
    const registrationIndex = registrations.findIndex((registration) => registration.ID === ID);
    if (registrationIndex === -1) req.reject(404, `Registration with ID ${ID} not found`);
    registrations.splice(registrationIndex, 1);
    return {};
  });
  