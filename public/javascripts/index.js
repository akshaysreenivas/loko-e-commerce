

// modal opening querys


$(document).on("click", ".opendatamodal", function () {
  const selectionId = $(this).data('email');
  $(".modal-body .selection").val(selectionId);

});

// delete modal  

function deleteProduct(id) {
  $(".delete-modal .proid").html(id);
}



function confirmDeleteProduct() {
  let id = $(".delete-modal .proid").html()
  $.ajax({
    url: '/admin/deleteProduct',
    method: 'post',
    data: {
      Id: id
    },
    success: (response) => {
      if (response.status) {
        location.reload()
      } else {
        alert('cannot delete product')
      }
    }
  })

}

// datatable

$(document).ready(function () {
  $('#userTable').DataTable();
  $('#productsTable').DataTable();
  $('#categoriesTable').DataTable();

});


// ------image preview-----------


//  img preview in add category

function viewImg(event) {
  const addImg = document.getElementById('addedImg')
  $('#uploadIcon').hide()
  $('#addedImg').show();
  addImg.src = URL.createObjectURL(event.target.files[0])
}

//  show new img in edit product


function newImgView(event) {
  document.getElementById('newImg').src = URL.createObjectURL(event.target.files[0])
}



const input = document.getElementById("images");
const preview = document.getElementById("preview");


input.addEventListener("change", updatePreview);

function updatePreview() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const files = input.files;
  const imgs = Array.from(files).map((file) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.width = "300px";
    return img;
  });

  imgs.forEach((img) => {
    preview.appendChild(img);
  });
}

function editImage(){

}


