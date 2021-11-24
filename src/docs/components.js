module.exports = {
  components: {
    schemas: {
      id: {
        type: "string",
        description: "An id of a todo",
        example: "tyVgf",
      },

      Todo: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Todo identification number",
            example: "ytyVgh",
          },
          title: {
            type: "string",
            description: "Todo's title",
            example: "Coding in JavaScript",
          },
          completed: {
            type: "boolean",
            description: "The status of the todo",
            example: false,
          },
        },
      },
      // Todo input model
      TodoInput: {
        type: "object", // data type
        properties: {
          title: {
            type: "string", // data type
            description: "Todo's title", // desc
            example: "Coding in JavaScript", // example of a title
          },
          completed: {
            type: "boolean", // data type
            description: "The status of the todo", // desc
            example: false, // example of a completed value
          },
        },
      },
      // error model
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },
};
