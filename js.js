
import { scooring } from "./scooring.js"
import {groups} from "./formingGroups.js"
import {drawAndResult} from "./drawAndResult.js"
import {scrores} from "./scoresFirstPhase.js"

let teams16 = []
var teams8 = []
let teams4 = []
let FinalTeams = []


document.getElementById("displayResult").addEventListener("click",displayResult)
document.getElementById("button16").addEventListener("click",display16Teams)
document.getElementById("button8").addEventListener("click",quarterFinal)
document.getElementById("button4").addEventListener("click",semiFinal)
document.getElementById("buttonF").addEventListener("click",final)


let groupNr = 1
displayGroups()
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

//let object = document.getElementById("groups")

function displayGroups()
{

    document.getElementById("displayResult").style.display = "block"

    document.getElementsByTagName("table")[0].style.display = "none"


    document.getElementById("info").innerHTML =  groups[groupNr-1][0]+  "<br>" + 
    groups[groupNr-1][1] +  "<br>" + groups[groupNr-1][2]  + "<br>" + groups[groupNr-1][3] + "<br>" 




        displayGames()
}
let next =document.getElementById("next")
let previous =document.getElementById("previous")
previous.addEventListener("click",previousGroupShowing)
next.addEventListener("click",nextGroupShowing)







//display Games Phase A

function displayGames()
{

    // lets remove the previous displayed result on the divs if they were displayed
    if (document.contains(document.getElementById("div1")))
    {
        document.getElementById("div1").remove()
    }
    if (document.contains(document.getElementById("div2")))
    {
        document.getElementById("div2").remove()
    }
    if (document.contains(document.getElementById("div3")))
    {
        document.getElementById("div3").remove()
    }
 

    let divTeam1 = document.createElement("div")
    divTeam1.setAttribute("id","div1")
    let divResult = document.createElement("div")
    divResult.setAttribute("id","div2")
    let divTeam2 = document.createElement("div")
    divTeam2.setAttribute("id","div3")

    //console.log("ckicked")
    //console.log(object.value)
        let p1=0, p2=0, p3 =0, p4 = 0 
        let g1 =0, g2=0 ,g3=0, g4=0

        //console.log("group"+ Number(i+1))

            divTeam1.innerHTML = 
            groups[groupNr-1][0] + "<br>" +
            groups[groupNr-1][2] + "<br>" + "<br>" +
            groups[groupNr-1][0] + "<br>" +
            groups[groupNr-1][1] + "<br>" + "<br>" +
            groups[groupNr-1][0] + "<br>" + 
            groups[groupNr-1][1] 
            document.getElementById("result").appendChild(divTeam1)

            // div result games

            divResult.innerHTML = 
            scrores[groupNr-1][0].toString().replace(",", " - ") + "<br>" +
            scrores[groupNr-1][1].toString().replace(",", " - ") + "<br>" + "<br>" +
            scrores[groupNr-1][2].toString().replace(",", " - ") + "<br>" +
            scrores[groupNr-1][3].toString().replace(",", " - ") + "<br>" + "<br>" +
            scrores[groupNr-1][4].toString().replace(",", " - ") + "<br>" +
            scrores[groupNr-1][5].toString().replace(",", " - ")

            document.getElementById("result").appendChild(divResult)
            //div teams 2
            divTeam2.innerHTML = 
            groups[groupNr-1][1] + "<br>" +
            groups[groupNr-1][3] + "<br>" + "<br>" +
            groups[groupNr-1][3] + "<br>" +
            groups[groupNr-1][2] + "<br>" + "<br>" +
            groups[groupNr-1][2] + "<br>" +
            groups[groupNr-1][3] 
            document.getElementById("result").appendChild(divTeam2)
            divResult.style.display = "none"
            

            //points Game1
            g1+= scrores[groupNr-1][0][0]
            g2+= scrores[groupNr-1][0][1]
            if(scrores[groupNr-1][0][0] > scrores[groupNr-1][0][1])
            {
                p1+=3
            }
            else if(scrores[groupNr-1][0][0] < scrores[groupNr-1][0][1])
            {
                p2+=3
            }
            else{
                p1+=1
                p2+=1
            }
            //points & goals Game2
            g3+= scrores[groupNr-1][1][0]
            g4+= scrores[groupNr-1][1][1]
            if(scrores[groupNr-1][1][0] > scrores[groupNr-1][1][1])
            {
                p3+=3
            }
            else if(scrores[groupNr-1][1][0] < scrores[groupNr-1][1][1])
            {
                p4+=3
            }
            else{
                p3+=1
                p4+=1
            }
            //points & goals Game3
            g1+=scrores[groupNr-1][2][0]
            g4+=scrores[groupNr-1][2][1]
            if(scrores[groupNr-1][2][0] > scrores[groupNr-1][2][1])
            {
                p1+=3
            }
            else if(scrores[groupNr-1][2][0] < scrores[groupNr-1][2][1])
            {
                p4+=3
            }
            else{
                p1+=1
                p4+=1
            }
            //points & goals Game4

            g2+=scrores[groupNr-1][3][0]
            g3+=scrores[groupNr-1][3][1]
            if(scrores[groupNr-1][3][0] > scrores[groupNr-1][3][1])
            {
                p2+=3
            }
            else if(scrores[groupNr-1][3][0] < scrores[groupNr-1][3][1])
            {
                p3+=3
            }
            else{
                p2+=1
                p3+=1
            }
            //points & goals Game5
            g1+=scrores[groupNr-1][4][0] 
            g3+=scrores[groupNr-1][4][1]
            if(scrores[groupNr-1][4][0] > scrores[groupNr-1][4][1])
            {
                p1+=3
            }
            else if(scrores[groupNr-1][4][0] < scrores[groupNr-1][4][1])
            {
                p3+=3
            }
            else{
                p3+=1
                p1+=1
            }
            //points & goals Game6

            g2+=scrores[groupNr-1][5][0]
            g4+=scrores[groupNr-1][5][1]
            if(scrores[groupNr-1][5][0] > scrores[groupNr-1][5][1])
            {
                p2+=3
            }
            else if(scrores[groupNr-1][5][0] < scrores[groupNr-1][5][1])
            {
                p4+=3
            }
            else{
                p4+=1
                p2+=1
            }
            // table classifications 
            let teamAndPoint = [[p1,g1,groups[groupNr-1][0]],[p2,g2,groups[groupNr-1][1]],[p3,g3,groups[groupNr-1][2]],[p4,g4,groups[groupNr-1][3]]]
            //console.log(teamAndPoint)
            document.getElementById("team1").innerHTML = teamAndPoint.sort().reverse()[0][2]
            document.getElementById("team2").innerHTML = teamAndPoint.sort().reverse()[1][2]
            document.getElementById("team3").innerHTML = teamAndPoint.sort().reverse()[2][2]
            document.getElementById("team4").innerHTML = teamAndPoint.sort().reverse()[3][2]
            document.getElementById("team1P").innerHTML = teamAndPoint.sort().reverse()[0][0]
            document.getElementById("team2P").innerHTML =teamAndPoint.sort().reverse()[1][0]
            document.getElementById("team3P").innerHTML =teamAndPoint.sort().reverse()[2][0]
            document.getElementById("team4P").innerHTML = teamAndPoint.sort().reverse()[3][0]
            document.getElementById("team1G").innerHTML = teamAndPoint.sort().reverse()[0][1]
            document.getElementById("team2G").innerHTML =teamAndPoint.sort().reverse()[1][1]
            document.getElementById("team3G").innerHTML =teamAndPoint.sort().reverse()[2][1]
            document.getElementById("team4G").innerHTML = teamAndPoint.sort().reverse()[3][1]

            //passing the qualifying team to the teams16 array

            console.log(teamAndPoint.sort().reverse())
            if (teams16.includes(teamAndPoint.sort().reverse()[0][2]) == false)
            {
                teams16.push(teamAndPoint.sort().reverse()[0][2])
            }
            if (teams16.includes(teamAndPoint.sort().reverse()[1][2]) == false)
            {
                teams16.push(teamAndPoint.sort().reverse()[1][2])
            }


        //console.log(teams16)
    }
    



function displayResult()   // Phase A
{
    document.getElementById("div2").style.display = "block"

    setTimeout(()=>{document.getElementsByTagName("table")[0].style.display = "block"},5000)
}



// phase 16 teams
function display16Teams()
{
    if(teams16.length == 16)
    {
        teams8 = drawAndResult(teams16,16,document.getElementById("button16"))
        deleteFirstPhase()
    }
}

function deleteFirstPhase() /*..............................................*/
{
    document.getElementById("firstPhase").style.display="none"
}

function quarterFinal()
{
    console.log(teams8.length)
    if (teams8.length == 8)
    {
        teams4 = drawAndResult(teams8,8,document.getElementById("button8"))
    }  
}


function semiFinal()
{
    console.log("hallooooo")
    if (teams4.length == 4)
    {
        FinalTeams = drawAndResult(teams4,4,document.getElementById("button4"))
    }
}

function final()

    {

        if (FinalTeams.length == 2)
        {
            let winner = drawAndResult(FinalTeams,2,document.getElementById("buttonF"))
            console.log(winner)
        }
    }



