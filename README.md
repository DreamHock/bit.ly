# 🔗 Scalable URL Shortener

A high-performance URL shortener application built using a microservices architecture. The system separates read and write responsibilities using the **CQRS (Command Query Responsibility Segregation)** pattern to optimize throughput, ensure scalability, and handle high traffic volumes efficiently.

## 🏗️ Architecture

The project is broken down into highly specialized, isolated services:

- **Write Service**: Handles the creation of shortened URLs and writes them to the database.
- **Read Service**: Highly optimized for speed. Handles redirection from short URLs to back to the original URLs, utilizing caching for sub-millisecond responses.
- **API Gateway (Caddy)**: Serves as the central entry point routing HTTP/HTTPS traffic to the appropriate microservice. 
- **PostgreSQL**: The primary relational database for persistent URL storage.
- **Redis**: An in-memory data store used by the read-service to cache frequently accessed URLs for ultra-fast redirection.
- **Prometheus**: Integrated for scraping metrics and monitoring the health/performance of the application.

## 🚀 Tech Stack

- **Backend**: PHP (Symfony)
- **Infrastructure**: Docker & Docker Compose
- **Database**: PostgreSQL 15
- **Cache**: Redis 7
- **Web Server/Gateway**: Caddy
- **Monitoring**: Prometheus
- **Load Testing**: k6

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your machine.

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DreamHock/bit.ly.git
   cd bit.ly
   ```

2. **Start the containers:**
   Run the following command to build the images and start the services in the background:
   ```bash
   docker compose up -d --build
   ```

3. **Verify running services:**
   Ensure all containers are up and running:
   ```bash
   docker ps
   ```

### 📡 Ports & Services Navigation

Once everything is up, the services will be running on your local machine at the following ports:

- **Caddy Gateway**: `localhost:80` / `localhost:443`
- **Read Service**: `localhost:8080` (Internal Web Server)
- **Write Service**: `localhost:8081` (Internal Web Server)
- **PostgreSQL**: `localhost:5432`

## 📈 Load Testing

This repository comes with pre-configured load testing scripts using [k6](https://k6.io/) to ensure the application reaches performance expectations under heavy load.

To run the load tests:
```bash
k6 run loadTesting/loadtest.js
```
