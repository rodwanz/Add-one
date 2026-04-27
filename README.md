# 🚀 Add-one Project with Datomic + Clojure + ClojureScript

This project is a simple example of a counter using:

- Backend in **Clojure** (Ring + Compojure)
- **Datomic** database
- Frontend in **ClojureScript** with **Reagent**
- Build tool: **Leiningen**
- Frontend build: **shadow-cljs**

---

## 📦 Prerequisites

Before starting, you need to have installed:

- Java (JDK 8 or higher), i´m use JDK 25

- Leiningen
- Node.js + npm
- Datomic (Peer or Dev Local)

---

## 🗄️ 1. Starting Datomic

### 🔹 For Datomic Dev (local)

1. Go to the Datomic folder:

``terminal

    cd /datomic-pro

2. Start the transactor:

       bin/transactor config/samples/dev-transactor-template.properties

3. Verify that the following appears:

       System started

## ⚙️ 2. Running the Backend
In the project's root folder::

    lein run

## 💻 3. Running the Frontend
 1. In another terminal, access the project root folder:

         npx shadow-cljs watch app
2. The frontend runs at:

         http://localhost:3001

## 🌐 4. Accessing the application
Open in your browser:

     http://localhost:3000

## ✅ 5. Verify if the counter is receiving the increment:

     http://localhost:3000/api/counter

## 🧪 6. Critical test!

   1. After starting the backend, run:

      In the bash shell, in the project's root folder:

          bash: curl http://localhost:3000/api/counter

      You will see that it is zero (0)
 

2. Click the "Add +1" button several times

3. Then verify that the addition was successful, then run:

       bash: curl -X POST http://localhost:3000/api/increment
