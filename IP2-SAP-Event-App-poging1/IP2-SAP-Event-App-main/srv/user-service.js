let users = [
    { ID: uuidv4(), username: 'user1', email: 'user1@example.com' },
    { ID: uuidv4(), username: 'user2', email: 'user2@example.com' },
  ];
  
  srv.on('READ', 'User', (req) => {
    const { ID } = req.params[0] || {};
    if (ID) {
      const user = users.find((user) => user.ID === ID);
      if (!user) req.reject(404, `User with ID ${ID} not found`);
      return user;
    }
    return users;
  });
  
  srv.on('CREATE', 'User', (req) => {
    const newUser = { ...req.data, ID: uuidv4() };
    users.push(newUser);
    return newUser;
  });
  
  srv.on('UPDATE', 'User', (req) => {
    const { ID } = req.params[0];
    const userIndex = users.findIndex((user) => user.ID === ID);
    if (userIndex === -1) req.reject(404, `User with ID ${ID} not found`);
    users[userIndex] = { ...users[userIndex], ...req.data };
    return users[userIndex];
  });
  
  srv.on('DELETE', 'User', (req) => {
    const { ID } = req.params[0];
    const userIndex = users.findIndex((user) => user.ID === ID);
    if (userIndex === -1) req.reject(404, `User with ID ${ID} not found`);
    users.splice(userIndex, 1);
    return {};
  });
  