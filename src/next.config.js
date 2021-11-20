// import subjects from './components/getQuestion'
const grades = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
const subjects = ["math", "science", "english", "socialstudies"]
const sections = ["1.1", "1.2", "1.3", "1.4"]

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,

  async exportPathMap() {
    const staticRoutes = {
      '/': { page: '/' }, // Index page
    };

    const gradeRoutes = {
      '/K': { page: '/[grade]' },
      '/1': { page: '/[grade]' },
      '/2': { page: '/[grade]' },
      '/3': { page: '/[grade]' },
      '/4': { page: '/[grade]' },
      '/4/math': { page: '/[grade]/[subject]' },
      '/4/math/1.1': { page: '/[grade]/[subject]/[section]' },
      '/5': { page: '/[grade]' },
      '/6': { page: '/[grade]' },
      '/7': { page: '/[grade]' },
      '/8': { page: '/[grade]' },
      '/9': { page: '/[grade]' },
      '/10': { page: '/[grade]' },
      '/11': { page: '/[grade]' },
      '/12': { page: '/[grade]' },
    }

    // Attempt to dynamically create the gradeRoutes
    // const gradeRoutes = grades.forEach((grade) => {
    //   {
    //     '/': { page: '/' },
    //     // `/${grade}`: { page: '/[grade]' };
    //   }
    // });

    const routes = Object.assign({}, staticRoutes, gradeRoutes );

    return routes;
  }
}
