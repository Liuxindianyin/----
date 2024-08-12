import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import PostPage from '../pages/PostPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import CategoryPage from '../pages/CategoryPage.vue';
import GuestBook from '../pages/GuestBook.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/post/:id', component: PostPage },
    { path: '/about', component: AboutPage },
    { path: '/category/:name', component: CategoryPage },
    { path: '/guestbook', component: GuestBook }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
