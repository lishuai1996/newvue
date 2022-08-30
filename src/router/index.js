import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home';
import Photo from '@/components/photo/photo';
import Videos from '@/components/video/video';
import User from '@/components/user/user';
import Loadlist from '@/components/user/Loadlist';

const router1 = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
];
const router2 = [
  {
    path: '/photo',
    name: 'photo',
    component: Photo
  }
];
const router3 = [
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  }
];
const router4 = [
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/loadlist',
    name: 'loadlist',
    component: Loadlist
  },
];

Vue.use(Router)

export default new Router({
  routes: [...router1,...router2,...router3,...router4]
})
