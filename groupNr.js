

let groupNr = 1
function displayGroupNr()
{
    return groupNr
}


function nextGroupShowing()
{
    if(groupNr!==8)
    {
        groupNr+=1
    }
    displayGroups()
    document.getElementById("groupLabel").innerHTML = "Group " + groupNr
}
function previousGroupShowing()
{
    if(groupNr!==1)
    {
        groupNr-=1
    }
    displayGroups()
    document.getElementById("groupLabel").innerHTML = "Group " + groupNr

}
