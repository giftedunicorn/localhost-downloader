# Localhost Downloader

A simple and efficient Node.js server application that facilitates file downloads from localhost. This project provides a secure way to serve and download files through a local server.

## 🚀 Features

- Easy file downloading through HTTP endpoints
- CORS enabled for cross-origin requests
- Static file serving
- Health check endpoint
- Error handling for file downloads

## 📋 Prerequisites

- Node.js (v12.0.0 or higher)
- npm (Node Package Manager)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/localhost-downloader.git
```

2. Navigate to the project directory:

```bash
cd localhost-downloader
```

3. Install dependencies:

```bash
npm install
```

## 💻 Usage

1. Start the server:

```bash
npm start
```

2. The server will run at `http://localhost:3001`

### API Endpoints

- `GET /download/:filename` - Download a file from the public directory
- `GET /health` - Check server health status

### Example

To download a file:

```
http://localhost:3001/download/example.pdf
```

## 📁 Project Structure

```
localhost-downloader/
├── index.js         # Main server file
├── public/          # Static files directory
├── package.json     # Project configuration
└── README.md        # Documentation
```

## ⚙️ Configuration

The server runs on port 3001 by default. You can modify this in the `index.js` file.

## 🔒 Security

- Files can only be downloaded from the `public` directory
- Basic error handling implemented
- CORS enabled for controlled access

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👤 Author

Feng Liu

## 🔍 Keywords

- file downloader
- localhost server
- Node.js
- Express
- file serving
- download manager
- local file server

---

⭐️ If you find this project useful, please consider giving it a star!
