// tạo hiệu ứng tự du chuyển, công cụ next pre auto
var parents;
var childs;
var img = ["./img/ayaka", "./img/kazuha", "./img/kokomi", "./img/shogun"];
var choice;

window.onload = function () {
  for (let i = 0; i < 4; i++) {
    choice = document.createElement("img");
    choice.id = img[i];
    choice.src = img[i] + ".png";
    choice.addEventListener("click", selects);
    document.getElementById("sanpham-child").append(choice);
  }
};
function selects() {
  parents = this.id;
  document.getElementById("sanpham-parent").src = parents + ".png";
}
var j = 0;
function next() {
  j++;
  if (j >= img.length) {
    j = 0;
  }
  document.getElementById("sanpham-parent").src = img[j] + ".png";
}
function pre() {
  console.log(j);
  j--;
  if (j < 0) {
    j = img.length - 1;
  }
  document.getElementById("sanpham-parent").src = img[j] + ".png";
}
setInterval(next, 5000);

// tạo sale tự đếm ngược 30p từ lúc reload
var countDownDate = new Date().getTime() + 1000 * 60 * 30;
var countDownTimer = setInterval(function () {
  var now = new Date().getTime();
  var khoangcach = countDownDate - now;
  if (khoangcach < 0) {
    clearInterval(countDownTimer);
    document.getElementById("countdown").innerHTML = "Sale has ended";
  }
  var phut = Math.floor((khoangcach % (1000 * 60 * 60)) / (1000 * 60));
  var giay = Math.floor((khoangcach % (1000 * 60)) / 1000);

  var sale = document.getElementById("countdown");
  sale.innerHTML = phut + "m " + giay + "s ";
}, 1000);

console.log(countDownDate);

document.addEventListener("DOMContentLoaded", function () {
  cartItems = document.querySelector(".cart-items"); //
  var cartTotal = document.querySelector(".cart-total"); // tổng
  var addToCartButtons = document.querySelectorAll(".add-to-cart");

  // duyệt từng cái button
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addToCart);
  }
  function addToCart(event) {
    var button = event.target // lấy đối tượng
    var name = button.getAttribute("data-name"); // lấy thuộc tính và lưu
    var price = button.getAttribute("data-price");

    var item = document.createElement("div");
    item.classList.add("cart-item");
    item.innerHTML =
      '<span class="cart-item-name">' +
      name +
      '</span> : <span class="cart-item-price">$ ' +
      price +
      '</span><button class="btn btn-danger btn-sm remove-from-cart">Xóa</button>';

    var removeCartItemButtons = item.querySelectorAll(".remove-from-cart");
    for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i];
      button.addEventListener("click", removeCartItem); // sự kiện click cho mỗi nút "Xóa"
    }
    cartItems.appendChild(item);

    capNhatGiaTien();
  }
  // cập nhật giá tiền cửa hàng
  function capNhatGiaTien() {
    var cartItemPrices = document.querySelectorAll(".cart-item-price");
    var total = 0;
    for (var i = 0; i < cartItemPrices.length; i++) {
      var price = parseFloat(cartItemPrices[i].innerText.replace("$", ""));// parseFloat: chuyển đổi chuỗi thành số có dấu phấy
            // parseInt: chuỗi thành số nguyên
      total += price; 
    }
    
    cartTotal.innerText = "Total: $" + total.toFixed(2);
  }

  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    capNhatGiaTien();
  }
  // làm hiệu ứng khi trỏ vào sản phẩm
  var mouse = document.getElementsByClassName("product");
  for (var i = 0; i < mouse.length; i++) {
    mouse[i].addEventListener("mouseover", mouseOver);
    mouse[i].addEventListener("mouseout", mouseOut);
  }
  function mouseOver() {
    var buttonhover = this.getElementsByClassName("add-to-cart")[0];
    buttonhover.style.display = "block";
  }
  function mouseOut() {
    var buttonhover = this.getElementsByClassName("add-to-cart")[0];
    buttonhover.style.display = "none";
  }

  const thanhToanBtn = document.querySelector('.thanhToan');
thanhToanBtn.addEventListener('click', () => {
  
  if (cartItems.children.length === 0) {
    alert('Giỏ hàng trống');
  } else {
    alert('Bạn đã mua');
  }
});
});

let isLoggedIn = false; 

function checkLogin() {
  if (isLoggedIn) {
    // nothing
  } else {
    document.getElementById("login-modal").style.display = "block"; 
    
  }
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "locpro123" && password === "mypassword") {
    alert("Đăng nhập thành công!");
    isLoggedIn = true; 
    document.getElementById("login-modal").style.display = "none";
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}

function closeLogin() {
  document.getElementById("login-modal").style.display = "none"; // Ẩn modal khi người dùng ấn nút đóng
}





