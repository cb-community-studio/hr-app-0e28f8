    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'timeTracking';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   time: { type: String, unique: false, lowercase: false, default: '' },
       inOut: { type: String, unique: false, lowercase: false, default: '' },
       overtime: { type: String, unique: false, lowercase: false, default: '' },
       time1: { type: String, unique: false, lowercase: false, default: '' },
       off: { type: String, unique: false, lowercase: false, default: '' },
       requests: { type: String, unique: false, lowercase: false, default: '' },
       paid: { type: String, unique: false, lowercase: false, default: '' },
       time2: { type: String, unique: false, lowercase: false, default: '' },
       off1: { type: String, unique: false, lowercase: false, default: '' },
       Pto: { type: String, unique: false, lowercase: false, default: '' },
       balance: { type: String, unique: false, lowercase: false, default: '' },
       timesheets: { type: String, unique: false, lowercase: false, default: '' },
       approvals: { type: String, unique: false, lowercase: false, default: '' },

            
          },
          {
            timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };