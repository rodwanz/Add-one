(defproject add-one "0.1.0-SNAPSHOT"
  :description "Add One Fullstack App (Clojure + Datomic + Reagent)"
  :url "https://github.com/rodwanz/Add-one"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.12.2"]
                 [ring "1.10.0"]
                 [ring/ring-json "0.5.1"]
                 [ring-cors "0.1.13"]
                 [compojure "1.7.0"]
                 [com.datomic/peer "1.0.7394"]
                 [org.slf4j/slf4j-simple "2.0.9"]]

  :plugins [[thheller/shadow-cljs "2.28.18"]]

  :repl-options {:init-ns add-one.core}
  :main add-one.backend.core
  :profiles
  {:dev {:dependencies [[ring/ring-mock "0.4.0"]]}
   :uberjar {:aot :all}})