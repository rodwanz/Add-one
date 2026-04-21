(ns add-one.backend.db
  (:require [datomic.api :as d]))

(def db-uri "datomic:dev://localhost:4334/counter-data-base")


(def schema
  [{:db/ident       :counter/value
    :db/valueType   :db.type/long
    :db/cardinality :db.cardinality/one
    :db/doc         "Current value of the counter"}
   {:db/ident       :counter/id
    :db/valueType   :db.type/string
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}])

(defn ensure-counter-exists [conn]
  (let [db (d/db conn)
        exists? (d/q '[:find ?e . :where
                       [?e :counter/id "global-counter"]]
                     db)]
    (when-not exists?
      @(d/transact conn
                   [{:counter/id "global-counter"
                     :counter/value 0}]))))

(defn init-db []
  (println "Initializing DB...")
  (let [created? (d/create-database db-uri)
        conn (d/connect db-uri)]
    (when created?
      (println "Applying schema...")
      @(d/transact conn schema))
    (println "Ensuring counter exists...")
    (ensure-counter-exists conn)
    conn))

(defn add-to-the-counter [conn]
  (let [db (d/db conn)
        curr-val (or
                   (d/q '[:find ?v . :where
                          [?e :counter/id "global-counter"]
                          [?e :counter/value ?v]] db)
                   0)
        new-val (inc curr-val)]
    (println "Incrementing from" curr-val "to" new-val)
    @(d/transact conn
                 [[:db/add [:counter/id "global-counter"]
                   :counter/value new-val]])
    new-val))

(defn delete-database []
  (d/delete-database db-uri))
