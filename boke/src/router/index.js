import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import GrowthPage from '../pages/GrowthPage.vue';
import GuestBook from '../pages/GuestBook.vue';
import PostPage from '../pages/PostPage.vue';
import AlgorithmPage from '../pages/AlgorithmPage.vue';
import DrugInteractionPage from '../pages/DrugInteractionPage.vue'; // 确保此导入正确

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/growth', component: GrowthPage },
    { path: '/guestbook', component: GuestBook },
    { path: '/post/:id', component: PostPage },
    { path: '/algorithm', component: AlgorithmPage },
    { path: '/drug-interaction', component: DrugInteractionPage }, // 确保此路径正确
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
