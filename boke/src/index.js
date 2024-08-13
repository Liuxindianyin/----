import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import GrowthPage from '../pages/GrowthPage.vue';
import GuestBook from '../pages/GuestBook.vue';
import PostPage from '../pages/PostPage.vue';


const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/growth', component: GrowthPage },
    { path: '/guestbook', component: GuestBook },
    { path: '/post/:id', component: PostPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
