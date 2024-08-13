import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import GrowthPage from '../pages/GrowthPage.vue';
import GuestBook from '../pages/GuestBook.vue';
import PostPage from '../pages/PostPage.vue';
import AlgorithmPage from '../pages/AlgorithmPage.vue'; // 新增

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/growth', component: GrowthPage },
    { path: '/guestbook', component: GuestBook },
    { path: '/post/:id', component: PostPage },
    { path: '/algorithm', component: AlgorithmPage }, // 新增
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
