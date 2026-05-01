(ns add-one.backend.handler
  (:require [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.util.response :refer [response]]
            [add-one.backend.db :as db]))

(defroutes app-routes
           (GET "/api/counter" []
             (response
               {:value (db/get-counter db/conn)}))
           (POST "/api/increment" []
             (response {:value (db/add-to-the-counter db/conn)}))
           (route/not-found
             (response {:error "Route not found"})))

(def app
  (-> app-routes
      (wrap-json-body {:keywords? true})
      (wrap-json-response)
      (wrap-cors
        :access-control-allow-origin [#"http://localhost:3001*"]
        :access-control-allow-methods [:get :post])))
