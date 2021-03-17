export const schema2 = {
 "type": "object",
  "properties": {
    "regions": {
      "type" : "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 7
          },

          "avgAge": {
            "type": "integer",
            "minimum": 0,
            "maximum": 120,
            "faker": "regions.avgAge"
          },
    
          "avgDailyIncomeUSD": {
            "type": "integer",
            "minimum": 1,
            "maximum": 200,
            "faker": "regions.avgDailyIncomeUSD"
          },
    
          "avgDailyIncomePopulation": {
            "type": "integer",
            "minimum": 6000000,
            "maximum": 1000000000,
            "faker": "regions.avgDailyIncomePopulation"
          },
          "periodType": {
            "type": "string",
            "faker": "day.periodType"
          },
          "timeToElapse": {
            "type": "integer",
            "minimum": 50,
            "maximum": 100,
            "faker": "regions.timeToElapse"
          },
          "reportedCases": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10000000,
            "faker": "regions.reportedCases"
          },
          "population": {
            "type": "integer",
            "minimum": 6000000,
            "maximum": 1000000000,
            "faker": "regions.population"
          },
          "totalHospitalBeds": {
            "type": "integer",
            "minimum": 6000000,
            "maximum": 1000000000,
            "faker": "regions.totalHospitalBeds"
          }
    
          },
    
          "required": ["region", "avgAge", "avgDailyIncomeUSD", "avgDailyIncomePopulation","periodType","timeToElapse",
          "reportedCases","population","totalHospitalBeds"]
        }
      }
    }, 
    "required": ["regions"]   
}
    