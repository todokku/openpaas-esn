'use strict';

const express = require('express');

module.exports = (dependencies, moduleName) => {
  const authorizationMW = dependencies('authorizationMW'),
        moduleMW = dependencies('moduleMW'),
        tokenMiddleware = dependencies('tokenMW'),
        davMiddleware = dependencies('davserver').davMiddleware,
        controller = require('./controller')(dependencies),
        router = express.Router();

  router.all('/*',
    authorizationMW.requiresAPILogin,
    moduleMW.requiresModuleIsEnabledInCurrentDomain(moduleName)
  );

  /**
   * @swagger
   * /contact/api/contacts/{addressBookId}/{addressbookName}/{contactId}/avatar:
   *   get:
   *     tags:
   *       - Contact
   *     description: Gets avatar of a contact
   *     parameters:
   *       - $ref: "#/parameters/contact_address_book_id"
   *       - $ref: "#/parameters/contact_address_book_name"
   *       - $ref: "#/parameters/contact_id"
   *       - $ref: "#/parameters/contact_size"
   *     responses:
   *       200:
   *         $ref: "#/responses/cm_200"
   *       401:
   *         $ref: "#/responses/cm_401"
   *       404:
   *         $ref: "#/responses/cm_404"
   *       500:
   *         $ref: "#/responses/cm_500"
   */
  router.get('/:addressBookId/:addressbookName/:contactId/avatar',
    davMiddleware.getDavEndpoint,
    tokenMiddleware.generateNewToken(),
    controller.getAvatar);

  /**
   * @swagger
   * /contacts/search:
   *   get:
   *     tags:
   *       - Contact
   *     description: Searchs contact
   *     parameters:
   *       - $ref: "#/parameters/cm_search"
   *       - $ref: "#/parameters/cm_limit"
   *       - $ref: "#/parameters/contact_user_id"
   *     responses:
   *       200:
   *         $ref: "#/responses/cm_200"
   *       204:
   *         $ref: "#/responses/cm_204"
   *       401:
   *         $ref: "#/responses/cm_401"
   *       500:
   *         $ref: "#/responses/cm_500"
   */
  router.get('/search', controller.searchContacts);

  return router;
};
