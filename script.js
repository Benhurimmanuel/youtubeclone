let apiKey = "AIzaSyD5_WImw5OwgSp52cnUc8OtcGBmSbx0xwo";

// mainpage video
function homepage() {
  let mainPageVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${apiKey}`;
  let mainPageVideodata = fetch(mainPageVideoUrl);
  mainPageVideodata
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      // console.log(response.items[0]);

      for (i = 0; i < response.items.length; i++) {
        let videoId = response.items[i].id;
        let videowidth = response.items[i].snippet.thumbnails.medium.width;
        let videoheight = response.items[i].snippet.thumbnails.medium.height;
        console.log(response.items[i].snippet.thumbnails);
        let mainsection = document.getElementById("mainsection");
        let videoSection = document.createElement("section");
        videoSection.innerHTML = `<iframe width=${videowidth} height=${videoheight} 
        src=https://www.youtube.com/embed/${videoId} frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
         picture-in-picture"allowfullscreen></iframe>`;
        mainsection.append(videoSection);
      }
    });
}
homepage();

// let channel_logo, logo_width, logo_height;
// // channel info start
function channel() {
  let mainsection = document.getElementById("mainsection");
  mainsection.style.display="none"
  let div = document.createElement("div");
  div.setAttribute("id", "content");
  let img = document.createElement("img");
  let logo_title = document.createElement("h2");
  let subbtn = document.createElement("button");
  let mains = document.getElementById("channelsection");
  let page_description=document.createElement("div")
  let page_views=document.createElement("div")
  let page_country=document.createElement("div")
  mains.append(div);
  div.append(img);
  div.append(logo_title);
  div.append(page_description);
  div.append(page_views);
  div.append(page_country);
  let btndiv = document.createElement("div");
  div.append(btndiv);
  btndiv.append(subbtn);


  let channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UClmN_GEF81wpFXdSJ5rFxTw&key=${apiKey}`;
  let channeldata = fetch(channelUrl);
  channeldata
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      // console.log(response);
      channel_logo = response.items[0].snippet.thumbnails.default.url;
      logo_width = response.items[0].snippet.thumbnails.default.width;
      logo_height = response.items[0].snippet.thumbnails.default.height;
      channel_title = response.items[0].snippet.title;
      page_views.innerHTML =response.items[0].statistics.viewCount+" views";
      page_description.innerHTML = response.items[0].snippet.description ;
      page_country.innerHTML = "Country: "+response.items[0].snippet.country ;
      // console.log(channel_logo);
      img.setAttribute("src", channel_logo);
      img.setAttribute("width", logo_width);
      img.setAttribute("height", logo_height);
      img.setAttribute("id", "channel_logo");
      logo_title.innerHTML = channel_title;
      logo_title.setAttribute("id", "channel_title");
      subbtn.innerText = "Subscribe";
      subbtn.setAttribute("id", "subbtn");
      subbtn.setAttribute("class", "btn btn-danger");
   


      // console.log(response.items[0].snippet.description);
      // console.log(response.items[0].snippet.country);
      // console.log("joined "+response.items[0].snippet.publishedAt);
      // console.log(response.items[0].statistics.viewCount+" views");

      channel_playlist();
    });
}
// channel();

function channel_playlist() {
  let channeluploads = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UClmN_GEF81wpFXdSJ5rFxTw&maxResults=25&key=${apiKey}`;
  channelUploadData = fetch(channeluploads);
  let imgthumb;
  channelUploadData
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let channeldiv = document.createElement("div");
      channeldiv.setAttribute("id", "channeldiv");
      channeldiv.setAttribute("class", "row");

      for (i = 0; i < response.items.length; i++) {
        imgthumb = response.items[i].snippet.thumbnails.default.url;
        let imgtitle = response.items[i].snippet.title;
        let img = document.createElement("img");
        img.setAttribute("class", "playlistimg col");
        img.setAttribute("src", imgthumb);
        channeldiv.append(img);
        let playlistImgTitle = document.createElement("span");
        playlistImgTitle.setAttribute("class", "col");
        channeldiv.append(playlistImgTitle);
        let p = document.createElement("p");
        p.innerHTML = imgtitle;
        playlistImgTitle.append(p);
        playlistImgTitle.innerHTML = imgtitle;
      }
      document.body.append(channeldiv);
    });
}

// // channel info end

// // channel uploaded videos and system generated playlist start
// let videosUrl=`https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&channelId=UClmN_GEF81wpFXdSJ5rFxTw&key=${apiKey}`// let channelvideos = fetch(videosUrl);
// let channelvideos=fetch(videosUrl)
// channelvideos
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//       console.log(response);

//   })
// // channel uploaded videos and system generated playlist end

// // search starts

// let searchUrl=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UClmN_GEF81wpFXdSJ5rFxTw&key=${apiKey}`
// let searchdata=fetch(searchUrl);
// searchdata
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//       console.log(response);
//   })
// // search ends

// // let subscriptionUrl=
// // `https://youtube.googleapis.com/youtube/v3/subscriptions?channelId=UClmN_GEF81wpFXdSJ5rFxTw&key=${apiKey}`
// // let subscriptiondata=fetch(subscriptionUrl);
// // subscriptiondata
// // .then(function (response) {
// //     return response.json();
// //   })
// //   .then(function (response) {
// //       console.log(response.items[0]);
// //   })
