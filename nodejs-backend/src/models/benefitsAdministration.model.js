    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'benefitsAdministration';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   health: { type: String, unique: false, lowercase: false, default: '' },
       insurance: { type: String, unique: false, lowercase: false, default: '' },
       retirement: { type: String, unique: false, lowercase: false, default: '' },
       plans: { type: String, unique: false, lowercase: false, default: '' },
       dental: { type: String, unique: false, lowercase: false, default: '' },
       and: { type: String, unique: false, lowercase: false, default: '' },
       vision: { type: String, unique: false, lowercase: false, default: '' },
       plans1: { type: String, unique: false, lowercase: false, default: '' },
       flexible: { type: String, unique: false, lowercase: false, default: '' },
       spending: { type: String, unique: false, lowercase: false, default: '' },
       accounts: { type: String, unique: false, lowercase: false, default: '' },
       Fsas: { type: String, unique: false, lowercase: false, default: '' },
       life: { type: String, unique: false, lowercase: false, default: '' },
       insurance1: { type: String, unique: false, lowercase: false, default: '' },
       disability: { type: String, unique: false, lowercase: false, default: '' },
       insurance2: { type: String, unique: false, lowercase: false, default: '' },
       benefits: { type: String, unique: false, lowercase: false, default: '' },
       enrollmentChanges: { type: String, unique: false, lowercase: false, default: '' },

            
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