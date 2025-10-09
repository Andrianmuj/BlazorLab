window.showToastr = function (type, message) { 

if (type == "success") {
    toastr.success(message);
} else if (type == "error") {
    toastr.error(message);
} else if (type == "info") {
    toastr.info(message);
} else if (type == "warning") {
    toastr.warning(message);
}
}

window.ShowSwal = function (type, message) {
    
    if (type == "success")
    {
        Swal.fire({
            title: "Good job!",
            text: message,
            icon: "success"
        });
    }

    if (type == "error") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    if (type == "info") {
        Swal.fire({
            title: message,
            icon: "success",
            draggable: true
        });
    }

    if (type == "warning") {
        Swal.fire({
            title: message,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

}
