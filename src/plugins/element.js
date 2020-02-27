import Vue from "vue";
import { PageHeader } from "element-ui";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import "element-ui/lib/theme-chalk/reset.css";

locale.use(lang);

Vue.use(PageHeader);
