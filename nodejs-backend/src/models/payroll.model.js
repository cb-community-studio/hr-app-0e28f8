    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'payroll';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   salary: { type: String, unique: false, lowercase: false, default: '' },
       tax: { type: String, unique: false, lowercase: false, default: '' },
       information: { type: String, unique: false, lowercase: false, default: '' },
       deductions: { type: String, unique: false, lowercase: false, default: '' },
       direct: { type: String, unique: false, lowercase: false, default: '' },
       deposit: { type: String, unique: false, lowercase: false, default: '' },
       details: { type: String, unique: false, lowercase: false, default: '' },
       pay: { type: String, unique: false, lowercase: false, default: '' },
       stubs: { type: String, unique: false, lowercase: false, default: '' },
       benefits: { type: String, unique: false, lowercase: false, default: '' },
       enrollment: { type: String, unique: false, lowercase: false, default: '' },

            
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