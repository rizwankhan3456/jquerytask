var products = [];

$(document).ready(function () {
  $(".submit").click(function () {
    var sku = $("#product_sku").val();
    var name = $("#product_name").val();
    var price = $("#product_price").val();
    var quantity = $("#product_quantity").val();

    var product = {};
    product.sku = sku;
    product.name = name;
    product.price = price;
    product.quantity = quantity;

    products.push(product);

    display();
  });
});
// edit the row 
$("#product_list").on("click", ".edit", function () {
  var product_sku = $(this).data("product_sku");
  var product = getproduct(product_sku);

  $("#product_sku").val(product.sku);
  $("#product_name").val(product.name);
  $("#product_price").val(product.price);
  $("#product_quantity").val(product.quantity);

  $(".submit").toggle();
});

function getproduct(product_sku) {
  for (var i = 0; i < products.length; i++) {
    if (product_sku == products[i].sku) {
      return products[i];
    }
  }
}

function display() {
  var html = "";
  html +=
    "<table> <tr><th>sku</th><th>name</th><th>price</th><th>quantity</th><th>action</th></tr>";
  for (var i = 0; i < products.length; i++) {
    html +=
      "<tr> <td>" +
      products[i].sku +
      "</td><td>" +
      products[i].name +
      "</td><td>" +
      products[i].price +
      "</td><td>" +
      products[i].quantity +
      "</td><td> <a href='#' class = 'delete'  data-product_sku ='" +
      products[i].sku +
      "'>DELETE</a> <a href='#' class = 'edit' data-product_sku ='" +
      products[i].sku +
      "' >EDIT</a> </td> </tr>";
  }
  html += "</table";
  $("#product_list").html(html);
}
// delete the row 
$("body").on("click", ".delete", function () {
  $("#add_product_form .update").hide();
  $("#add_product_form .submit").show();
  $("#notification .success").hide();
  var id = $(this).data("pid");
  console.log(id);
  var prod = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId == id) {
      prod = products[i];
    }
  }
  products.splice(products.indexOf(prod), 1);
  display();
});
