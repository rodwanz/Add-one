# 📘 Project Introduction

## 🎯 Objective

This project aims to demonstrate the construction of a simple counter application using:

- Clojure in the backend
- ClojureScript in the frontend
- Datomic as the database

The main focus is to explore concepts such as:

- Immutability
- Safe concurrency
- Separation between read and write operations
- Functional architecture

---

## 🏗️ Architecture

The application is divided into three main parts:

### 🔹 Backend
- Built with Ring + Compojure
- Responsible for exposing HTTP endpoints
- Performs operations on Datomic

### 🔹 Database (Datomic)
- Immutable database
- Based on facts (datoms)
- Native history support

### 🔹 Frontend
- Built with Reagent (React wrapper)
- Responsible for interacting with the user
- Consumes the Backend API

---

## 🔄 Data Flow

1. The user clicks the "increment" button
2. The frontend makes an HTTP request
3. The backend processes the request
4. Datomic stores a new value
5. The backend returns the updated value
6. The frontend updates the interface

---

## ⚙️ Design Decisions

### 🧩 Datomic Usage

Datomic was chosen because:

- Immutable model (avoids race conditions)
- Support for automatic history
- Separation between reading (`d/db`) and writing (`conn`)

### 🔁 Counter Increment

The increment is done through:

- Reading the last value from the database
- Creating a new transaction with the incremented value

---

## ⚠️ Potential Problems

### Concurrency

If multiple requests occur simultaneously, there may be:

- Race conditions when reading/modifying the value

---

## 📚 Important Concepts

- `conn`: connection for writing to Datomic
- `d/db`: immutable snapshot of the database

- Transactions: changes are always added, never altered

---

## 🧪 Tests

The project contains tests to validate:

- Correct counter increment

---

## 🧭 Conclusion

This project demonstrates how to build a simple yet robust application using functional concepts and an immutable database, serving as a basis for more complex systems.
