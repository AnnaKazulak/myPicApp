import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faPlus);

Vue.component("fa-icon", FontAwesomeIcon);
