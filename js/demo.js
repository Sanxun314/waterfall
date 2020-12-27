$(window).on('load', function() {
  waterFall();
})

function waterFall() {
  let box = $(".box")
  // console.log(box);
  let boxWidth = box.outerWidth(); //当前图片的宽度
  let screenWidth = $(window).width(); //屏幕的宽度
  // console.log(screenWidth);


  // 求出列数
  let clos = parseInt(screenWidth/boxWidth);
  // console.log(clos); 4
  let heightArr = [];
  // 图片循环遍历 除第一排不用定位， 取高度 其他排 定位
  $.each(box,function(index, item) {
    let boxHeight = $(item).outerHeight();
    if(index < clos) {
      heightArr[index] = boxHeight
    }else {
      let minBoxHeight = Math.min(...heightArr); //得到第一排最小高度的值
      let minBoxIndex = $.inArray(minBoxHeight, heightArr); //得到第一排最小高度的下标
      // console.log(minBoxIndex);
      $(item).css({
        position: "absolute",
        left: minBoxIndex * boxWidth + 'px',
        top: minBoxHeight + 'px'
      });
      heightArr[minBoxIndex] += boxHeight
    }
  })
}

