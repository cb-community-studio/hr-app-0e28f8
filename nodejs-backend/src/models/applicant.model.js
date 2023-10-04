    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'applicant';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   first: { type: String, unique: false, lowercase: false, default: '' },
       name: { type: String, unique: false, lowercase: false, default: '' },
       last: { type: String, unique: false, lowercase: false, default: '' },
       name1: { type: String, unique: false, lowercase: false, default: '' },
       contact: { type: String, unique: false, lowercase: false, default: '' },
       information: { type: String, unique: false, lowercase: false, default: '' },
       resumeCv: { type: String, unique: false, lowercase: false, default: '' },
       cover: { type: String, unique: false, lowercase: false, default: '' },
       letter: { type: String, unique: false, lowercase: false, default: '' },
       application: { type: String, unique: false, lowercase: false, default: '' },
       date: { type: String, unique: false, lowercase: false, default: '' },
       application1: { type: String, unique: false, lowercase: false, default: '' },

            
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