(ns add-one.backend.core-test
  (:require [clojure.test :refer :all]
            [datomic.api :as d]
            [add-one.backend.db :as db]
            [add-one.backend.db-test :refer [setup-db]]))

(deftest add-to-counter-increments
  (let [uri (str "datomic:mem://test-" (java.util.UUID/randomUUID))
        conn (setup-db uri)]

    (is (= 1 (db/add-to-the-counter conn)))
    (is (= 2 (db/add-to-the-counter conn)))
    (is (= 3 (db/add-to-the-counter conn)))

    (let [value (d/q '[:find ?v .
                       :where
                       [?e :counter/value ?v]
                       [?e :counter/id "global-counter"]]
                     (d/db conn))]
      (is (= 3 value)))))
