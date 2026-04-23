(ns add-one.backend.core-test
  (:require [clojure.test :refer :all]
            [add-one.backend.db :as db]
            [add-one.backend.db-test :refer [setup-db]]))

(deftest add-to-counter-increments
  (let [conn (setup-db "datomic:mem://test-counter-data-base")]

    (is (= 1 (db/add-to-the-counter conn)))
    (is (= 2 (db/add-to-the-counter conn)))
    (is (= 3 (db/add-to-the-counter conn)))))
