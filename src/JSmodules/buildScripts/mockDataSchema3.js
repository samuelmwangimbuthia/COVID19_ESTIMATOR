export const schema3 = {

    "$id": "https://example.com/geographical-location.schema.json",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Longitude and Latitude",
    "description": "A geographical coordinate on a planet (most commonly Earth).",
    "required": [ "latitude", "longitude" ],
    "type": "object",
    "properties": {
      "latitude": {
        "type": "number",
        "minimum": -90,
        "maximum": 90
      },
      "longitude": {
        "type": "number",
        "minimum": -180,
        "maximum": 180
      }
    }
  }