    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'employeeSurveysAndFeedback';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   employee: { type: String, unique: false, lowercase: false, default: '' },
       surveys: { type: String, unique: false, lowercase: false, default: '' },
       feedback: { type: String, unique: false, lowercase: false, default: '' },
       forms: { type: String, unique: false, lowercase: false, default: '' },
       survey: { type: String, unique: false, lowercase: false, default: '' },
       results: { type: String, unique: false, lowercase: false, default: '' },

            
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