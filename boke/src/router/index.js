import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import GrowthPage from '../pages/GrowthPage.vue';  // 新增的成长经历页面
import GuestBook from '../pages/GuestBook.vue';  // 新增的留言板页面
import PostPage from '../pages/PostPage.vue';  // 新增的文章详情页面
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/growth', component: GrowthPage },  // 添加成长经历页面路由
    { path: '/guestbook', component: GuestBook },  // 添加留言板页面路由
    { path: '/post/:id', component: PostPage },  // 添加文章详情页面路由，支持动态ID
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
