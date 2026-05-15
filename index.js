let btnForm = document.querySelector("#comments-form button");
let countComments = 0; 
let idComm = 0;

function delComm(id){
        document.querySelector("#block-"+id).remove();

        countComments--
        document.querySelector(".count-com").innerHTML = countComments
        if (countComments == 0)
        {
            document.querySelector("#comments").innerHTML = "NO COMMENTS"
        }
    }

btnForm.onclick = function() {
    let form = document.querySelector("#comments-form");
    let name = form.name.value;
    let comment = form.comment.value;

    idComm++;

    if (name.length < 4) {
        document.querySelector("#error").innerHTML = "Length for name is too short";
        return false;
    } else if (comment.length < 10) {
        document.querySelector("#error").innerHTML = "Length for comments is too short. Min 10 characters";
        return false;
    }

    document.querySelector("#error").innerHTML = "";
    // Здесь можно добавить логику отправки комментария


    if (countComments == 0) 
        document.querySelector("#comments").innerHTML = ""
    

    countComments++;
    document.querySelector(".count-com").innerHTML = countComments;


    let newComment = "<div class = 'comment' id='block-"+ idComm + "'>" + "<span class='delete' onclick='delComm("+ idComm + ")'>&times;</span>" + "<p class='name'>"
     + name + "</p>" + "<p class = 'mess'>" + comment + "</p>" + "</div>";

    document.querySelector("#comments").insertAdjacentHTML('afterbegin', newComment);

    comment = "";

    



};