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
var ATotal=0;
var AcurrentAmount=0;



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
  AcurrentAmount = parseInt(ArkAmount.value); 
  ATotal = (ArkPrice * AcurrentAmount).toFixed(2);
  document.getElementById("ArkTotal").innerHTML= ATotal; 
  Total();
  Total_Items();
  }

//Minecaft
const MinecraftPrice = 30.00;
var MinecraftAmount = document.getElementById("AmountMinecraft");
const MinecraftTotal = document.getElementById("MinecraftTotal");
MinecraftAmount.value = 0;
var MTotal=0;
var McurrentAmount=0;

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
McurrentAmount = parseInt(MinecraftAmount.value);
  MTotal = (MinecraftPrice * McurrentAmount).toFixed(2);
  document.getElementById("MinecraftTotal").innerHTML = MTotal;
  Total();
  Total_Items();
}

//Rainbow 6 siege
const RainbowPrice = 20.00;
var RainbowAmount = document.getElementById("AmountRainbow");
const RainbowTotal = document.getElementById("RainbowTotal");
RainbowAmount.value = 0;
var RTotal=0;
var RcurrentAmount=0;

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
  RcurrentAmount = parseInt(RainbowAmount.value);
  RTotal = (RainbowPrice * RcurrentAmount).toFixed(2);
  document.getElementById("RainbowTotal").innerHTML = RTotal;
  Total();
  Total_Items();
}

//Total cost
function Total()
{
  const Total=(parseInt(ATotal)+parseInt(MTotal)+parseInt(RTotal)).toFixed(2);
  document.getElementById("Total").innerHTML = Total;
}

//Total items
function Total_Items()
{
  const Total_Items=(parseInt(ArkAmount.value)+parseInt(MinecraftAmount.value)+parseInt(RainbowAmount.value));
  document.getElementById("Total_Items").innerHTML = Total_Items;
}

