var a;
function show_hide()
{
    if(a==1)
        {
            document.getElementById("sh-more").style.display="none";
            return a=0;
        }
    else 
        {
            document.getElementById("sh-more").style.display="inline";
            return a=1;
        }
}

function show_hide2()
{
    if(a==1)
        {
            document.getElementById("sh-more2").style.display="none";
            return a=0;
        }
    else 
        {
            document.getElementById("sh-more2").style.display="inline";
            return a=1;
        }
}