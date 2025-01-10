"use strict";
const usersMap = new Map();
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
console.log(usersMap.get('abc123'));
