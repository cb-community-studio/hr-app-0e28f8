    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'jobPosting';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   job: { type: String, unique: false, lowercase: false, default: '' },
       title: { type: String, unique: false, lowercase: false, default: '' },
       job1: { type: String, unique: false, lowercase: false, default: '' },
       description: { type: String, unique: false, lowercase: false, default: '' },
       department: { type: String, unique: false, lowercase: false, default: '' },
       location: { type: String, unique: false, lowercase: false, default: '' },
       salary: { type: String, unique: false, lowercase: false, default: '' },
       range: { type: String, unique: false, lowercase: false, default: '' },
       requiredfield: { type: String, unique: false, lowercase: false, default: '' },
       qualifications: { type: String, unique: false, lowercase: false, default: '' },
       application: { type: String, unique: false, lowercase: false, default: '' },
       deadline: { type: String, unique: false, lowercase: false, default: '' },

            
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