(ns add-one.frontend.frontend
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [ajax.core :refer [GET POST]]))

(defonce app-state (r/atom {:value 0}))

(defn load-counter []
      (GET "http://localhost:3000/api/counter"
           {:handler #(swap! app-state assoc :value (:value %))
            :error-handler #(js/console.error "Error:" %)}))

(defn add-one []
      (POST  "http://localhost:3000/api/increment"
             {:handler #(swap! app-state assoc :value (:value %))
              :error-handler #(js/console.error "Error:" %)}))

(defn app []
      (let [{:keys [value]} @app-state]
           [:div {:style{:text-align "center"
                         :margin-top "50px"}}
            [:h2 "Add one"]
            [:p (str "Current value: " value)]
            [:button {:on-click add-one
                      :style {:padding "10px 20px"
                              :cursor "pointer"}}
             "Add +1"]]))

(defn ^:dev/after-load start []
      (rdom/render [app] (.getElementById js/document "app")))

(defn init []
      (println "App started")
      (load-counter)
      (start))
(init)