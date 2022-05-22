//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_1.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_2.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_3.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_4.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_5.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_6.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_7.png)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_10.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_11.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_14.png)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_17.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_19.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_20.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_22.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_23.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img_24.jpg)",
    "url(https://npm.elemecdn.com/ninoneumann-pic-assert/background_img.jpg)"
    // "url(/img/bg2.jpg)",
    // "url(/img/bg3.jpg)",
    // "url(/img/bg4.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * backimg.length);
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
// var bannerimg =[
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_1.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_2.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_3.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_4.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_5.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_6.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_7.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_10.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_11.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_12.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_14.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_17.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_19.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_20.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_22.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_23.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img_24.jpg)",
//     "url(https://npm.elemecdn.com/ninoneumann-assert-pic-board/background_img.jpg)"
// ];
// //获取banner图片总数，生成随机数
// var bannerindex =Math.floor(Math.random() * bannerimg.length);
// //重设banner图片
// document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];


