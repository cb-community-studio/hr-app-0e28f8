    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'performanceReview';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   employee: { type: String, unique: false, lowercase: false, default: '' },
       being: { type: String, unique: false, lowercase: false, default: '' },
       reviewed: { type: String, unique: false, lowercase: false, default: '' },
       reviewer: { type: String, unique: false, lowercase: false, default: '' },
       review: { type: String, unique: false, lowercase: false, default: '' },
       date: { type: String, unique: false, lowercase: false, default: '' },
       performance: { type: String, unique: false, lowercase: false, default: '' },
       goals: { type: String, unique: false, lowercase: false, default: '' },
       ratingsFeedback: { type: String, unique: false, lowercase: false, default: '' },
       development: { type: String, unique: false, lowercase: false, default: '' },
       plan: { type: String, unique: false, lowercase: false, default: '' },

            
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