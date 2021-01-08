// graduates-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
require("mongoose-type-email");

module.exports = function (app) {
  const modelName = "graduates";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      fullname: {
        type: String,
        required: [true, "First Name is required"],
        maxLength: 30,
      },
      headline: {
        type: String,
        required: [true, "Headline is required"],
        maxLength: 100,
      },
      current_location: {
        type: String,
        required: [true, "Location is required"],
        maxLength: 20,
      },
      languages: [
        {
          type: String,
          maxLength: 30,
        },
      ],
      willing_relocate: {
        type: String,
      },
      email: {
        type: mongooseClient.SchemaTypes.Email,
        required: [true, "Email is required"],
      },
      mobile: {
        type: Number,
      },
      cv_upload: {
        type: Buffer,
      },
      full_time: {
        type: String,
      },
      part_time: {
        type: String,
      },
      contract: {
        type: String,
      },
      willing_remote: {
        type: String,
      },
      internship: {
        type: String,
      },
      temp: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      website: {
        type: String,
      },
      github_username: {
        type: String,
      },
      resume_text: {
        type: String,
        maxLength: 2000,
      },
    },

    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
