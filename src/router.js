// import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// import coachDetail from './pages/coaches/coachDetail.vue';
import coachesList from './pages/coaches/coachesList.vue';
// import coachRegistration from './pages/coaches/coachRegistration.vue';
// import contactCoach from './pages/requests/contactCoach.vue';
// import requestReceived from './pages/requests/requestReceived.vue';
import notFound from './pages/notFound.vue';
// import userAuth from './pages/auth/userAuth.vue';
import store from './store/index.js';

// const coachDetail = defineAsyncComponent(() => import('./pages/coaches/coachDetail.vue'));
const coachDetail = () => import('./pages/coaches/coachDetail.vue');

// const coachRegistration = defineAsyncComponent(() => import('./pages/coaches/coachRegistration.vue'));
const coachRegistration = () => import('./pages/coaches/coachRegistration.vue');

// const contactCoach = defineAsyncComponent(() => import('./pages/requests/contactCoach.vue'));
const contactCoach = () => import('./pages/requests/contactCoach.vue');

// const requestReceived = defineAsyncComponent(() => import('./pages/requests/requestReceived.vue'));
const requestReceived = () => import('./pages/requests/requestReceived.vue');

// const userAuth = defineAsyncComponent(() => import('./pages/auth/userAuth.vue'));
const userAuth = () => import('./pages/auth/userAuth.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: coachesList },
        { path: '/coaches/:id', 
            component: coachDetail,
            props: true, 
            children: [
            { path: 'contact', component: contactCoach }, //coaches/c1/contact
        ] },
        { path: '/register', component:coachRegistration, meta: { requiresAuth: true } },
        { path: '/requests', component:requestReceived, meta: { requiresAuth: true } },
        { path: '/auth', component: userAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component:notFound },
    ]
});

router.beforeEach(function(to, from, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches');
    } else {
        next();
    }
});

export default router;