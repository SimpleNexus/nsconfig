'use strict';

module.exports = [{ name: 'email', required: true }, { name: 'password', required: true, base64: true }, { name: 'account', required: true }, { name: 'realm', def: 'netsuite.com' }, { name: 'role' }, { name: 'conffile', required: false }]; //ps: default is reserved word