const reviews = [
  {
    id: 1,
    name: "Sonia Giri",
    job: "MERN Stack Developer | Graphic Designer",
    text: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    gender: "F",
  },
  {
    id: 2,
    name: "Odetta Bodiam",
    job: "Senior Editor",
    text: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    gender: "M",
  },
  {
    id: 3,
    name: "Afton Derye-Barrett",
    job: "Web Designer IV",
    text: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    gender: "M",
  },
  {
    id: 4,
    name: "Cathy Lurner",
    job: "Programmer Analyst II",
    text: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    gender: "F",
  },
  {
    id: 5,
    name: "Isa Kellar",
    job: "Budget/Accounting Analyst II",
    text: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    gender: "M",
  },
  {
    id: 6,
    name: "Benson Blunn",
    job: "Pharmacist",
    text: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    gender: "M",
  },
  {
    id: 7,
    name: "Lauralee Croney",
    job: "Systems Administrator II",
    text: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    gender: "M",
  },
  {
    id: 8,
    name: "Deva Sleit",
    job: "Environmental Specialist",
    text: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    gender: "F",
  },
  {
    id: 9,
    name: "Brynna Warkup",
    job: "Help Desk Operator",
    text: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    gender: "F",
  },
  {
    id: 10,
    name: "Rab Slimme",
    job: "Teacher",
    text: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    gender: "M",
  },
  {
    id: 11,
    name: "Obidiah Cruce",
    job: "Accountant IV",
    text: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    gender: "F",
  },
  {
    id: 12,
    name: "Jazmin Server",
    job: "Editor",
    text: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    gender: "M",
  },
  {
    id: 13,
    name: "Frasier Hayne",
    job: "Paralegal",
    text: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    gender: "F",
  },
  {
    id: 14,
    name: "Roscoe Jauncey",
    job: "Pharmacist",
    text: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    gender: "M",
  },
  {
    id: 15,
    name: "Junia Percifer",
    job: "Nuclear Power Engineer",
    text: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    gender: "M",
  },
  {
    id: 16,
    name: "Dorella Liff",
    job: "Research Nurse",
    text: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    gender: "M",
  },
  {
    id: 17,
    name: "Yvon Newiss",
    job: "Design Engineer",
    text: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    gender: "F",
  },
  {
    id: 18,
    name: "Rebecca Flatman",
    job: "Account Representative II",
    text: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    gender: "F",
  },
  {
    id: 19,
    name: "Michele Surman-Wells",
    job: "Senior Cost Accountant",
    text: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    gender: "F",
  },
  {
    id: 20,
    name: "Guendolen Attree",
    job: "Nuclear Power Engineer",
    text: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    gender: "M",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

// show person
const showPerson = () => {
  const item = reviews[currentItem];
  if (item.gender === "F") {
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0pHtVBVeyi8OjaGf1tw1IY8ctQfkAedvt8cIZb5kEQtxmp-jtxFrDp0jGETAeohYn5k&usqp=CAU";
  } else if (item.gender === "M") {
    img.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
  }
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
// show prev person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
// surprise Button
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
