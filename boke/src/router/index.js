import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import GrowthPage from '../pages/GrowthPage.vue';
import GuestBook from '../pages/GuestBook.vue';
import PostPage from '../pages/PostPage.vue'; // 文章详情页面
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/growth', component: GrowthPage },
    { path: '/guestbook', component: GuestBook },
    { path: '/post/:id', component: PostPage },
    // 移除 MarkdownPage 路由
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
