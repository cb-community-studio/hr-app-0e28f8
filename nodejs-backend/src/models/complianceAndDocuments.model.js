    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'complianceAndDocuments';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   employee: { type: String, unique: false, lowercase: false, default: '' },
       contracts: { type: String, unique: false, lowercase: false, default: '' },
       hrff: { type: String, unique: false, lowercase: false, default: '' },
       policies: { type: String, unique: false, lowercase: false, default: '' },
       and: { type: String, unique: false, lowercase: false, default: '' },
       procedures: { type: String, unique: false, lowercase: false, default: '' },
       compliance: { type: String, unique: false, lowercase: false, default: '' },
       documentation: { type: String, unique: false, lowercase: false, default: '' },
       employee1: { type: String, unique: false, lowercase: false, default: '' },
       handbooks: { type: String, unique: false, lowercase: false, default: '' },

            
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