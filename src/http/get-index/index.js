const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Sean', // ←  Start by adding your name!
    title: 'My personal site!',
    occupation: 'Sean of all trades',
    location: 'Atlanta, GA',
    bio: 'A Lannister always pays his debts. More pigeon pie, please. Dunc the Lunk, thick as a castle wall. It\'s ten thousand miles between Kings landing and the wall. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    // email: 'sccraig@gmail.com',
    twitter: 'sccraig',
    linkedin: 'seancc',
    instagram: 'bravejhawk',
    facebook: 'seancraig',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
    // image: 'https://photos.google.com/share/AF1QipMFlEZHMF0r__xf19bS-l-FiZ4bHXIAQD3Rbj-h6Q2GkDYYE1XgvQSRSo_FsShiPw/photo/AF1QipOBGOYZly89G92-Z7qP3QmRVhbh6NCo6O_CxHG4?key=VEg4MWJOcTZIZXFjaVVBOFVnZmVpQ0ZhMGl5NHp3'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
