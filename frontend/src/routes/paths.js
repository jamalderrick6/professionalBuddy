export default {
  // Roots
  // auth: "/auth",
  // login: "/auth/sign-in",
  // signup: "/auth/sign-up",
  // forgot_password: "/auth/forgot-password",
  // reset_password: "/auth/reset-password/:reset_token",
  //Navigation Routes
  // home: "/",
  // schedules: "/schedules",
  // accounts: "/accounts",
  // profile: "/profile",
  // dashboard: "",
  dashboard_home: "/home",
  professionals: "/professionals",
  professional_details: "/professionals/:professional_name",
  favorites: "/favorites",
  histories: "/histories",
  single_cluster: "/clusters/view/:cluster_id",
  // Nested cluster pages
  all_runs: "/runs",
  single_run: "/runs/view/:run_id",
  rundetail: "/clusters/:cluster_id/runs/:runid",
  tasks: "/clusters/:cluster_id/tasks",
  settings: "/clusters/:cluster_id/settings",
  //nested cluster pages
  createcluster: "/clusters/create/:crawler_id/:crawler_name",
  updatecluster: "/clusters/update/:cluster_id",
  // Nested account pages
  createaccount: "/accounts/create",
  //linkedin account
  accountcreatelink: "/accounts/create/:account_name",
  //lobstr main lucrative app
  main: "/app",
  store: "/store",
  store_product_view: "/store/:crawler_id/:crawler_slug",
  pricing: "/pricing",
  blog: "/blog",
  development: "/blog/development",
  feature: "/blog/feature",
  company: "/blog/company",
  product_updates: "/blog/product_updates",
};
