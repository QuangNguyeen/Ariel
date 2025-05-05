# Ariel App (NestJS + TypeScript + MySQL)

A simple e-commerce application (MVC server-side rendering)

[![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TypeORM](https://img.shields.io/badge/typeorm-%23167BFF.svg?style=for-the-badge&logo=typeorm&logoColor=white)](https://typeorm.io/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Handlebars.js](https://img.shields.io/badge/handlebars.js-%23f0772b.svg?style=for-the-badge&logo=handlebars.js&logoColor=white)](https://handlebarsjs.com/)

---

## Project Structure
```bash
store-app/
├── public/ # Static assets
├── src/
│ ├── account/ # Account views/controller
│ ├── admin/ # Admin module
│ ├── auth/ # Authentication logic
│ ├── cart/ # Cart handling
│ ├── models/ # Domain models & services
│ │ ├── item/
│ │ ├── order/
│ │ ├── product/
│ │ └── user/
│ ├── product/ # Product controller logic
│ ├── validators/ # Request validation
│ ├── app.controller.ts # Main controller
│ ├── app.module.ts # App root module
│ └── main.ts # Application bootstrap
├── test/ # Unit/integration tests
├── views/ # Handlebars view templates
│ ├── account/
│ ├── admin/
│ ├── auth/
│ ├── cart/
│ ├── layouts/
│ └── products/
│ ├── about.hbs
│ └── index.hbs
├── .env # Environment configuration
├── ormconfig.json # TypeORM configuration
├── package.json
└── README.md # This file
```
## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/QuangNguyeen/Ariel.git
cd store-app
npm install
```
### 2. Configure Environment
#### a. Create Database use name: ariel
```bash
create database ariel;
```
#### b. Setup Database
```bash
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_NAME=ariel
```
### 3. Run Development Server
```bash
npm run start:dev
```
## Features
- Authentication & Authorization
- Account dashboard with orders
- Admin product management
- Cart functionality
- Handlebars view rendering
- Modular architecture with TypeORM entities

