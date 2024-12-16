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

//Ark
const ArkPrice=44.99;
var ArkAmount= document.getElementById("AmountArk");
const ArkTotal= document.getElementById("ArkTotal");
ArkAmount.value = 0;



  function AddArk()
  {
    ArkAmount.value = parseInt(ArkAmount.value) +1;
    TotalArk();
  }

  function SubArk()
  {
    if(parseInt(ArkAmount.value)>0)
    {
      ArkAmount.value = parseInt(ArkAmount.value) -1;
    }
    TotalArk();
  }

  function TotalArk()
  {
  const currentAmount = parseInt(ArkAmount.value); 
  const ATotal = (ArkPrice * currentAmount).toFixed(2);
  document.getElementById("ArkTotal").innerHTML= ATotal; 
  }

//Minecaft
const MinecraftPrice = 30.00;
var MinecraftAmount = document.getElementById("AmountMinecraft");
const MinecraftTotal = document.getElementById("MinecraftTotal");
MinecraftAmount.value = 0;

function AddMinecraft() {
  MinecraftAmount.value = parseInt(MinecraftAmount.value) + 1;
  TotalMinecraft();
}

function SubMinecraft() {
  if (parseInt(MinecraftAmount.value) > 0) {
    MinecraftAmount.value = parseInt(MinecraftAmount.value) - 1;
  }
  TotalMinecraft();
}

function TotalMinecraft() {
  const currentAmount = parseInt(MinecraftAmount.value);
  const MTotal = (MinecraftPrice * currentAmount).toFixed(2);
  document.getElementById("MinecraftTotal").innerHTML = MTotal;
}

//Rainbow 6 siege
const RainbowPrice = 20.00;
var RainbowAmount = document.getElementById("AmountRainbow");
const RainbowTotal = document.getElementById("RainbowTotal");
RainbowAmount.value = 0;

function AddRainbow() {
  RainbowAmount.value = parseInt(RainbowAmount.value) + 1;
  TotalRainbow();
}

function SubRainbow() {
  if (parseInt(RainbowAmount.value) > 0) {
    RainbowAmount.value = parseInt(RainbowAmount.value) - 1;
  }
  TotalRainbow();
}

function TotalRainbow() {
  const currentAmount = parseInt(RainbowAmount.value);
  const RTotal = (RainbowPrice * currentAmount).toFixed(2);
  document.getElementById("RainbowTotal").innerHTML = RTotal;
}

//Total