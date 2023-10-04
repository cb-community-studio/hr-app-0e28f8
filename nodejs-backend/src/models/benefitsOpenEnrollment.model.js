    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'benefitsOpenEnrollment';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   open: { type: String, unique: false, lowercase: false, default: '' },
       enrollment: { type: String, unique: false, lowercase: false, default: '' },
       periods: { type: String, unique: false, lowercase: false, default: '' },
       benefit: { type: String, unique: false, lowercase: false, default: '' },
       plan: { type: String, unique: false, lowercase: false, default: '' },
       selections: { type: String, unique: false, lowercase: false, default: '' },

            
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