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

## ✅ 7. Accessing the created database

1. Go to the Datomic root folder, in another terminal and run:

       bin/console -p 8080 dev datomic:dev://localhost:4334/

2. The following information will appear:

    Console started on port: 8080
dev = datomic:dev://localhost:4334/
open http://localhost:8080/browse in your browser (Chrome recommended)

3. Copy the http and paste it into your browser. There you will find the console for verifying the created database (DB). In this field, you can check the name and also the increments made after the addition. These fields contain the identifier (?:counter-id/?id) and the value (?:counter-value/?value). Then, press "Run query".
4. Carefully follow the tips presented above to operate the console correctly, following the images below.
