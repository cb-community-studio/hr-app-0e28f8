    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'employee';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   first: { type: String, unique: false, lowercase: false, default: '' },
       name: { type: String, unique: false, lowercase: false, default: '' },
       last: { type: String, unique: false, lowercase: false, default: '' },
       name1: { type: String, unique: false, lowercase: false, default: '' },
       employee: { type: String, unique: false, lowercase: false, default: '' },
       date: { type: String, unique: false, lowercase: false, default: '' },
       offf: { type: String, unique: false, lowercase: false, default: '' },
       birth: { type: String, unique: false, lowercase: false, default: '' },
       gender: { type: String, unique: false, lowercase: false, default: '' },
       phone: { type: String, unique: false, lowercase: false, default: '' },
       email: { type: String, unique: false, lowercase: false, default: '' },
       address: { type: String, unique: false, lowercase: false, default: '' },
       employment: { type: String, unique: false, lowercase: false, default: '' },
       status: { type: String, unique: false, lowercase: false, default: '' },
       hire: { type: String, unique: false, lowercase: false, default: '' },
       termination: { type: String, unique: false, lowercase: false, default: '' },
       date1: { type: String, unique: false, lowercase: false, default: '' },
       job: { type: String, unique: false, lowercase: false, default: '' },
       title: { type: String, unique: false, lowercase: false, default: '' },
       department: { type: String, unique: false, lowercase: false, default: '' },
       managerSupervisor: { type: String, unique: false, lowercase: false, default: '' },
       salary: { type: String, unique: false, lowercase: false, default: '' },
       information: { type: String, unique: false, lowercase: false, default: '' },
       benefits: { type: String, unique: false, lowercase: false, default: '' },
       information1: { type: String, unique: false, lowercase: false, default: '' },
       emergency: { type: String, unique: false, lowercase: false, default: '' },
       contact: { type: String, unique: false, lowercase: false, default: '' },
       details: { type: String, unique: false, lowercase: false, default: '' },
       work: { type: String, unique: false, lowercase: false, default: '' },
       location: { type: String, unique: false, lowercase: false, default: '' },
       work1: { type: String, unique: false, lowercase: false, default: '' },
       schedule: { type: String, unique: false, lowercase: false, default: '' },

            
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