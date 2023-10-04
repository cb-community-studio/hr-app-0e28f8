    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'hrAnalyticsAndReporting';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   various: { type: String, unique: false, lowercase: false, default: '' },
       hrff: { type: String, unique: false, lowercase: false, default: '' },
       metrics: { type: String, unique: false, lowercase: false, default: '' },
       custom: { type: String, unique: false, lowercase: false, default: '' },
       reports: { type: String, unique: false, lowercase: false, default: '' },
       data: { type: String, unique: false, lowercase: false, default: '' },
       visualization: { type: String, unique: false, lowercase: false, default: '' },

            
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