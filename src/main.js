// 判断是否为手机
var scale = document.documentElement.clientWidth / document.documentElement.clientHeight
if ((scale) < 1) {
  document.body.classList.add('phone')
} else {
  document.body.classList.add('pc')
}

$(function () {
  $('.content-1 .right')[0].innerHTML = $('.label-box .item .data')[0].innerHTML
  function removeAll () {
    $('.content-1 .label-box .item').each(function (ind, item) {
      item.classList.remove('active')
    })
  }
  $('.content-1 .label-box .item').each(function (ind, item) {
    item.onclick = function (e) {
      removeAll()
      this.classList.add('active')
      $('.content-1 .right')[0].innerHTML = $('.label-box .item .data')[ind].innerHTML
    }
  })
})