//Search feature
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");


    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  function OpenSearch()
  {
    document.getElementById("Search").style.display="block";
  }

  function closeSearch()
  {
    document.getElementById("Search").style.display="none";
  }

//Cart feature
var ark,minecraft,rainbow,total;
ark=0;
minecraft=0;
rainbow=0;
total=0;

  function AddArk()
  {
    ark=+1;
  }

  function AddMinecraft()
  {
    minecraft+=1;
  }

  function AddRainbow()
  {
    rainbow+=1;
  }