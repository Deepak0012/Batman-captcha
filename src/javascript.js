function changeVal() {
    function randomNumber() {
      return Math.floor(Math.random() * 5);
    }

    const arrObj = [
      {
        imgSrc:
          "https://media.vanityfair.com/photos/5f36ca61f51ed31274cdfb62/1:1/w_1079,h_1079,c_limit/batman-ben-affleck.jpg",
        className: "img1"
      },
      {
        imgSrc:
          "https://cdn.vox-cdn.com/thumbor/oFb6BH2cRj3Lf-uZksMk7cCHO2o=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/21809379/Screen_Shot_2020_08_22_at_8.57.22_PM.png",
        className: "img2"
      },
      {
        imgSrc:
          "https://i.guim.co.uk/img/media/d561f480a83e4cd422286b0b46205d6c45dd6cdf/0_51_3504_2104/master/3504.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3805a109d4de68669dddaa21b76ed1e6",
        className: "img3"
      },
      {
        imgSrc:
          "https://i.cdn.newsbytesapp.com/images/l100_2201565636393.jpg",
        className: "img4"
      },
      {
        imgSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIvko2lSFgR6IsIp1iVkUnR1BNhsmkBNfSzQ&usqp=CAU",
        className: "img5"
      }
    ];

    const randomNo = randomNumber();
    arrObj.push(arrObj[randomNo]);

    const shuffledArray = shuffleArray(arrObj);

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
    shuffledArray.forEach((elem, idx) => {
      const imgTag = document.createElement("img");
      imgTag.setAttribute("data-ns-test", elem.className);
      imgTag.setAttribute("id", idx);
      imgTag.setAttribute("src", elem.imgSrc);
      imgTag.setAttribute("onClick", "makeDis(this)");
      document.getElementById("main").appendChild(imgTag);
    });
  }

  let count = 0;
  let prevClass = "";
  let currClass = "";
  let prevId = -1;
  let currId = -1;

  function makeDis(val) {
    const id = val.id;
    const classN = document.getElementById(id).getAttribute("data-ns-test");

    if (count === 0) {
      prevId = id;
      prevClass = classN;
      count++;
      const button = document.createElement("button");
      button.setAttribute("id", "reset");
      button.setAttribute("onClick", "rstBtn()");
      button.innerText = "Reset";
      document.getElementById("buttons").appendChild(button);
    } else if (count === 1 && id !== prevId) {
      const button = document.createElement("button");
      button.setAttribute("id", "btn");
      button.setAttribute("onClick", "vrfBtn()");
      button.innerText = "Verify";
      document.getElementById("buttons").appendChild(button);

      currId = id;
      currClass = classN;
      count++;
    } else if (count !== 1 && id !== currId && id !== prevId) {
      const item = document.getElementById("buttons");
      item.removeChild(item.childNodes[1]);
    }

    const element = document.getElementById(id);
    element.classList.add("opac");
  }
  function vrfBtn() {
    if (prevClass === currClass && prevId !== currId) {
      document.getElementById("para").innerText =
        "Thanks mate! This city needs me";
    } else {
      document.getElementById("para").innerText =
        "Damn it! You selected the wrong Batman.";
    }
  }
  function rstBtn() {
    count = 0;
    prevClass = "";
    currClass = "";
    prevId = -1;
    currId = -1;

    document.getElementById("para").innerText = "";
    const list = document.getElementById("main");
    const btnlist = document.getElementById("buttons");

    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
    while (btnlist.hasChildNodes()) {
      btnlist.removeChild(btnlist.firstChild);
    }
    changeVal();
  }