(ns add-one.backend.db-test
  (:require [clojure.test :refer :all]
            [datomic.api :as d]
            [add-one.backend.db :as db]))

(def test-uri "datomic:mem://test-counter-data-base")

(defn setup-db [uri]
  (d/create-database uri)
  (let [conn (d/connect uri)]
    @(d/transact conn db/schema)
    (db/ensure-counter-exists conn)
    conn))
