# University Management Dashboard

The University Management Dashboard is a backend solution designed for administrators, faculty, and students. It's user-friendly and capable of managing user records, course schedules, and more. With a fast backend, it ensures smooth operations, reducing server query response time by 15%.

##### [Postman Documentation](https://documenter.getpostman.com/view/25704001/2sA35K21Lc)

## Getting Started

These instructions will help you set up the University Management Dashboard for development and testing.

### Prerequisites

Before initiating the setup process, ensure the following software components are installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

Follow these steps to configure the development environment:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/towhidulislamalif/university-management-backend
   ```

2. Navigate to the project directory:

   ```bash
   cd project-directory
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the MongoDB database:

   - Start the MongoDB service.
   - Create a new database specifically for the Eye Glasses Management Dashboard.

5. Configure the application settings:

   - Rename `.env.example` to `.env`.
   - Update `.env` with your MongoDB connection URI and other pertinent configurations.

6. Start the application:

   ```bash
   npm start
   ```

   The application should now be up and running on your local machine. Access it through a web browser at [http://localhost:8080](http://localhost:5000).

## Built With

- [Node.js](https://nodejs.org/en) - JavaScript runtime environment
- [Express](https://expressjs.com/) - Web application framework for Node.js
- [MongoDB](https://www.mongodb.com/docs/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js

## Authors

- **Touhidul Islam Alif** - _Initial work_ - [GitHub](https://github.com/towhidulislamalif)

Feel free to reach out for any further assistance or queries regarding the University Management Dashboard setup.
