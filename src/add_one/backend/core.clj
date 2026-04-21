(ns add-one.backend.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [add-one.backend.handler :refer [app]]))

(defn -main []
  (run-jetty app {:port 3000 :join? false})
  (println "API running on http://localhost:3000"))
