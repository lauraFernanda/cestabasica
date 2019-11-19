const { Schema, model } = require("mongoose");

const CommerceSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    street_name: {
      type: String,
      required: true
    },
    street_number: {
      type: Number,
      required: true
    },
    neighborhood: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Commerce", CommerceSchema);
