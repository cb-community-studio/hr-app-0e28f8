    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'employeeSelfServicePortal';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   employee: { type: String, unique: false, lowercase: false, default: '' },
       profile: { type: String, unique: false, lowercase: false, default: '' },
       updates: { type: String, unique: false, lowercase: false, default: '' },
       benefits: { type: String, unique: false, lowercase: false, default: '' },
       enrollment: { type: String, unique: false, lowercase: false, default: '' },
       payroll: { type: String, unique: false, lowercase: false, default: '' },
       information: { type: String, unique: false, lowercase: false, default: '' },
       access: { type: String, unique: false, lowercase: false, default: '' },

            
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