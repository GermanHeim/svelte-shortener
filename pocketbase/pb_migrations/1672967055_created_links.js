migrate((db) => {
  const collection = new Collection({
    "id": "b34feb3559zcnxc",
    "created": "2023-01-06 01:04:15.043Z",
    "updated": "2023-01-06 01:04:15.043Z",
    "name": "links",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kqxzdonw",
        "name": "slug",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 2,
          "max": 32,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "aw3kniph",
        "name": "redirect",
        "type": "url",
        "required": true,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b34feb3559zcnxc");

  return dao.deleteCollection(collection);
})
