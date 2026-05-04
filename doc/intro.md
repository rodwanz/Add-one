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
- Does not directly access Datomic
- Delegates operations to the `db` layer

### 🔹 Database (Datomic)
- Immutable database
- Based on facts (datoms)
- Native support for history
- Access encapsulated in the `db` namespace

### 🔹 Frontend
- Built with Reagent (React wrapper)

- Responsible for interacting with the user
- Consumes the backend API

---

## 🔄 Data Flow

1. The user clicks the "increment" button
2. The frontend makes an HTTP request
3. The backend receives the request
4. The handler delegates the logic to the `db` module
5. Datomic stores a new (immutable) value
6. The backend returns the updated value
7. The frontend updates the interface

---

## ⚙️ Design Decisions

### 🧩 Use of Datomic

Datomic was chosen because of:

- Immutable model (based on facts)
- Support for automatic history
- Separation between reading (`d/db`) and writing (`conn`)

---

### 🧱 Separation of responsibilities

The project was structured to Decoupling Layers:

- `handler` → responsible only for HTTP
- `db` → responsible for Datomic access

Before refactoring, the handler accessed the database directly:

(d/q ... (d/db conn))

After refactoring:

(db/get-counter conn)

Benefits:

- Reduced coupling

- Improved testability

- Centralization of persistence logic

---

### 🔌 Connection Management

The connection to Datomic is initialized in the db namespace:

(defonce conn (init-db))

And explicitly passed to the functions:


(db/get-counter conn)


Motivation:

Avoid implicit dependencies

Facilitate testing with different connections

---

### 🔁 Counter Increment

The increment is done through:

Reading the current value from the database
Calculating the new value
Persistence via Transaction:

[:db/add [:counter/id "global-counter"]

:counter/value new-val]

---

### 📚 Important Concepts

- conn: connection used for writing to Datomic

- d/db: immutable snapshot of the database

- Transactions: changes are always added, never altered

- Lookup refs: allow identifying entities without knowing the internal ID

---

### 🧪 Tests
The project may contain tests to validate:

- Correct counter increment

- Data persistence

- Database isolation in tests (datomic:mem)

- Behavior under concurrency

---

### 🧭 Conclusion

This project demonstrates how to build a simple yet robust application using functional concepts and an immutable database.

The separation between layers and the use of Datomic allow the application to evolve safely, serving as a basis for more complex systems.