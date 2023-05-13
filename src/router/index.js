import { createRouter, createWebHistory } from "vue-router";
import SignInView from "@/views/SignInView";
//import checkCookie from "@/models/checkCookie";

const routes = [
  {
    path: "/",
    name: "home",
    component: ()=> import('@/views/HomeView.vue'),
  },
  {
    path: "/signin",
    name: "signin",
    component: SignInView,
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import('@/views/SignUpView.vue'),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/dashboard/home",
    component: () => import('@/views/DashBoardView.vue'),
    children: [
      {
        path: "home",
        name: "main",
        component: () => import("@/views/DashBoardHomeView.vue")
      },
      {
        path: "sub-wallet",
        name: "kids",
        component: () => import("@/views/DashBordKidsView.vue")
      },
      {
        path: "developers",
        name: "developers",
        component: () => import("@/views/DashBoardDevelopersView.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {


  const token = sessionStorage.getItem('token');

  if (token){
    if (to.name == 'signin' || to.name == 'signup')
      router.push('/dashboard')
  }
  else {
    if (to.name == 'dashboard' || to.name == 'main' || to.name == "kids" || to.name == 'developers')
      router.push('/signin')
  }

})

export default router;
