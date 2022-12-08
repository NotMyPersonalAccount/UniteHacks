import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// EVIL! PUT THE DB BACK!!!!
// oh my goodness u realy destoyed the sqlite

export const fakeShitJob = [
  {
    id: 1,
    name: "Cafe Trieste",
    address: "601 Vallejo St., San Francisco, CA 94133",
    description:
      "Venerable local icon offering Italian coffee, pastries, plus live music on occasion",
    imgUrl:
      "https://media.cntraveler.com/photos/5a9488dad363c34048b35cc5/16:9/w_2560,c_limit/Caffe-Trieste_SORAYA-MATOS_2018__MG_0094.jpg",
    quiet: 1,
    wifi: 10,
    outlets: 10,
    coffee: 6,
    tea: 5,
  },
  {
    id: 2,
    name: "Cafe International",
    address: "508 Haight St, San Francisco, CA 94117",
    description:
      "Laid-back hangout for cafe eats during the day that also stages jazz music & open-mike nights",
    imgUrl:
      "https://res.cloudinary.com/the-infatuation/image/upload/q_auto,f_auto/images/CafeInternational_Interior_m7vs6k",
    quiet: 6,
    wifi: 7,
    outlets: 7,
    coffee: 9,
    tea: 4,
  },
  {
    id: 3,
    name: "Xochi the Dog, Cafe",
    address: "1038 E 21st St, Oakland, CA 94606",
    description:
      "Beautifully crafted space in the heart of the Bella Vista neighborhood",
    imgUrl:
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_80,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/oakland/188844907_105740385045428_434009984445964115_n_8E935DE5-5056-A36F-230CAFB0EB1AFFA4-8e9356965056a36_8e936ba1-5056-a36f-234c28675458ec34.jpg",
    quiet: 1,
    wifi: 3,
    outlets: 3,
    coffee: 10,
    tea: 2,
  },
  {
    id: 4,
    name: "Guerilla Cafe",
    address: "1620 Shattuck Ave., Berkeley, CA 94709",
    description:
      "Hip cafe lined with local art pairs fair-trade coffee with breakfast fare, panini & baked goods",
    imgUrl: "http://www.gayot.com/images/reviews/guerilla-cafe-sf.jpg",
    quiet: 5,
    wifi: 1,
    outlets: 8,
    coffee: 6,
    tea: 9,
  },
  {
    id: 5,
    name: "Caffe Strada",
    address: "2300 College Ave, Berkeley, CA 94704",
    description:
      "Popular among students, this tree-shaded cafe provides a kick with coffee drinks, teas & pastries",
    imgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/f3/5c/82/cafe-strada-berkeley.jpg",
    quiet: 8,
    wifi: 10,
    outlets: 3,
    coffee: 5,
    tea: 5,
  },
  {
    id: 6,
    name: "Cafe Umami",
    address: "2224 MacArthur Blvd, Oakland, CA 94602",
    description: "Berkeley landmark specializing in delicious espresso drinks",
    imgUrl:
      "https://static.wixstatic.com/media/287294_615a866634034a4e8d362c6b1baaebe7~mv2.jpg/v1/crop/x_67,y_0,w_573,h_608/fill/w_560,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Cafe%20UMAMI%20Uptown%20OPEN%20NOW!%20%20%23cafeumami%20%23cafe%20%23bowl%20%23coffee%20%23drinks%20%23eatoakland%20%23oaklandea.jpg",
    quiet: 9,
    wifi: 2,
    outlets: 7,
    coffee: 7,
    tea: 10,
  },
  {
    id: 7,
    name: "Haddon Hill Cafe",
    address: "504 Wesley Ave, Oakland, CA 94606",
    description:
      "Cute little coffee shop with outdoor seating and tasty treats",
    imgUrl:
      "https://localwiki.org/media/cache/94/7b/947b913a8dc42012719ea25e9b486adb.jpg",
    quiet: 1,
    wifi: 4,
    outlets: 7,
    coffee: 10,
    tea: 2,
  },
  {
    id: 8,
    name: "Hudson Bay Cafe",
    address: "5401 College Ave, Oakland, CA 94618",
    description:
      "Long-standing independent coffee shop offering light meals & comfortable seats in a sunny setting",
    imgUrl:
      "https://cdn.usarestaurants.info/assets/uploads/840048889d705d2e38d2e86292bd544d_-united-states-california-alameda-county-oakland-758750-hudson-bay-cafehtm.jpg",
    quiet: 0,
    wifi: 9,
    outlets: 0,
    coffee: 8,
    tea: 0,
  },
  {
    id: 9,
    name: "Temescal Works",
    address: "490 43rd St, Oakland, CA 94609",
    description:
      "Neighborhood coworking space offering flexible workspace solutions. Feauring multiple skylights, exposed brick and timber, and a 25′ high atrium.",
    imgUrl:
      "https://images.meetingsbooker.com/images/venues/temescalworks-6.jpgs",
    quiet: 5,
    wifi: 8,
    outlets: 3,
    coffee: 4,
    tea: 9,
  },
  {
    id: 10,
    name: "Port Workspaces",
    address: "101 Broadway, Oakland, CA 94607",
    description:
      "The Port is a coworking and office community of tech entrepreneurs, professionals, chefs and makers sharing three historic Oakland buildings.",
    imgUrl:
      "https://coworkingmag.com/wp-content/uploads/2019/02/the-port-workspaces-kaiser-campus-e1550926592411.jpg",
    quiet: 5,
    wifi: 9,
    outlets: 3,
    coffee: 0,
    tea: 9,
  },
];
