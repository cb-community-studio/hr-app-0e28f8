    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'trainingAndDevelopment';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   training: { type: String, unique: false, lowercase: false, default: '' },
       courses: { type: String, unique: false, lowercase: false, default: '' },
       training1: { type: String, unique: false, lowercase: false, default: '' },
       attendance: { type: String, unique: false, lowercase: false, default: '' },
       certification: { type: String, unique: false, lowercase: false, default: '' },
       tracking: { type: String, unique: false, lowercase: false, default: '' },
       development: { type: String, unique: false, lowercase: false, default: '' },
       plans: { type: String, unique: false, lowercase: false, default: '' },
       training2: { type: String, unique: false, lowercase: false, default: '' },
       costs: { type: String, unique: false, lowercase: false, default: '' },

            
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