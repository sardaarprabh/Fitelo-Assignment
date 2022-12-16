function EditSaveClicked()
{
    let variable1 = document.getElementById("edit-save");
    let UpdateHeading = document.getElementById("blogTitleNew") ;
    let UpdatePara = document.getElementById("blogBody") ;
    if(variable1.textContent.includes('Edit'))
    {
        variable1.innerHTML = 'Save &#x1f4be;' ;
        UpdateHeading.setAttribute('contenteditable' , "true") ;
        UpdatePara.setAttribute('contenteditable' , 'true') ;
        UpdateHeading.style.border = '1px black solid' ;
        UpdatePara.style.border = '1px black solid' ;
    }
    else if(variable1.textContent.includes('Save'))
    {
        variable1.innerHTML = 'Edit &#x270D;'
        UpdateHeading.setAttribute('contenteditable' , "false") ;
        UpdatePara.setAttribute('contenteditable' , 'false') ;
        UpdateHeading.style.border = '';
        UpdatePara.style.border = '' ;
    }
    
}
let likes = 0 ;
function incLikes()
{   likes = likes + 1 ;
    console.log(likes) ;
    let ContentChange = document.getElementById('like-number-update') ;
   if(likes === 1)
   {
       ContentChange.innerHTML = `${likes} person likes this` ;
   }
   else
   {
    ContentChange.innerHTML =`${likes} people have like this !` ;
   }
}

var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

var btn = document.getElementById("topButtons1");
var btn2 = document.getElementById("topButtons2");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
function AddComment()
{
  let CommentToAdd = document.getElementById("text-area");
  let ShowComment = document.getElementById("addedComments") ;
  // ShowComment.innerHTML = `${CommentToAdd}` ;
  console.log(CommentToAdd);
}