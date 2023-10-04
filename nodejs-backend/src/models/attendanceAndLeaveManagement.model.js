    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'attendanceAndLeaveManagement';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   attendance: { type: String, unique: false, lowercase: false, default: '' },
       records: { type: String, unique: false, lowercase: false, default: '' },
       leave: { type: String, unique: false, lowercase: false, default: '' },
       requests: { type: String, unique: false, lowercase: false, default: '' },
       leave1: { type: String, unique: false, lowercase: false, default: '' },
       balances: { type: String, unique: false, lowercase: false, default: '' },
       leave2: { type: String, unique: false, lowercase: false, default: '' },
       approvals: { type: String, unique: false, lowercase: false, default: '' },

            
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