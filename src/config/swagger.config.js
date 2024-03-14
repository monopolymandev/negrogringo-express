export default {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Negro Gringo API',
      version: '1.0.0',
      description: "Negro Gringo's RESTful APIs using Node.js, Express, and Mongoose.",
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/',
      },
      contact: {
        name: 'Negro Gringo',
        url: 'https://github.com/NegroGringo',
        email: 'negrogringo@proton.me',
      },
    },
    basePath: '/api',
    servers: [
      {
        url: 'http://localhost:3000/api/',
      },
    ],
  },
  tags: [
    {
      "name": "User",
      "description": "API for users"
    }
  ],
  apis: [
    "src/models/*.js",
    "src/utils/helpers/*.js",
    "src/api/controllers/user/*.js",
    "src/api/controllers/user/edit/*.js",
    "src/api/controllers/user/auth/*.js"
  ]
};