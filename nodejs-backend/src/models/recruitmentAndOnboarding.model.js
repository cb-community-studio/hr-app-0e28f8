    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'recruitmentAndOnboarding';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   job: { type: String, unique: false, lowercase: false, default: '' },
       requisitions: { type: String, unique: false, lowercase: false, default: '' },
       interview: { type: String, unique: false, lowercase: false, default: '' },
       feedback: { type: String, unique: false, lowercase: false, default: '' },
       onboarding: { type: String, unique: false, lowercase: false, default: '' },
       checklists: { type: String, unique: false, lowercase: false, default: '' },
       background: { type: String, unique: false, lowercase: false, default: '' },
       checks: { type: String, unique: false, lowercase: false, default: '' },
       offer: { type: String, unique: false, lowercase: false, default: '' },
       letters: { type: String, unique: false, lowercase: false, default: '' },

            
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