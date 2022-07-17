import { scooring } from "./scooring.js"
import {groups} from "./formingGroups.js"
//import {drawAndResult} from "./drawAndResult.js"
import {scrores} from "./scoresFirstPhase.js"

let teams16 = []
var teams8 = []
let teams4 = []
let FinalTeams = []
let groupNr = 1
var timeouts=[] //to store all the timeoiut we are creating from a for loops so we can clear them 

let resultAlreadyClicked = []

function printDatainTable()
{



    document.getElementById("t1").innerHTML = groups[groupNr-1][0] 
    document.getElementById("t3").innerHTML = groups[groupNr-1][2] 
    document.getElementById("t5").innerHTML = groups[groupNr-1][0]
    document.getElementById("t7").innerHTML = groups[groupNr-1][1] 
    document.getElementById("t9").innerHTML = groups[groupNr-1][0] 
    document.getElementById("t11").innerHTML = groups[groupNr-1][1] 

    document.getElementById("t2").innerHTML = groups[groupNr-1][1] 
    document.getElementById("t4").innerHTML = groups[groupNr-1][3] 
    document.getElementById("t6").innerHTML = groups[groupNr-1][3] 
    document.getElementById("t8").innerHTML = groups[groupNr-1][2] 
    document.getElementById("t10").innerHTML = groups[groupNr-1][2]
    document.getElementById("t12").innerHTML = groups[groupNr-1][3] 

    for(let i=1;i<7;i++)
    {

        let id="r"+ i
        let idTimer = "timer"+i
        let btn =document.getElementById(id)
        let lbl =document.getElementById(idTimer)
        if(resultAlreadyClicked.includes(groupNr+id) == false)
        {
            btn.innerHTML="Result";
            lbl.innerHTML = "0 Mins"

        }
        else
        {btn.innerHTML = scrores[groupNr-1][i-1].toString().replace(",", " - ")
        lbl.innerHTML = "90 Mins";
        
        }

        console.log(scrores[groupNr-1][i-1].toString().replace(",", " - "))
        
        btn.addEventListener("click",
        function(){
            resultThroughTime(scrores[groupNr-1][i-1][0],scrores[groupNr-1][i-1][1],btn,idTimer)

        /*scrores[groupNr-1][i-1].toString().replace(",", " - ");*/
        resultAlreadyClicked.push(groupNr+id) })
    }
}

printDatainTable()

function resultThroughTime(nr1,nr2,buttonClicked,id)
{

    for(let i=0;i<timeouts.length;i++)
    {
        clearTimeout(timeouts[i])
    }

    let goal1=0;let goal2 =0;
    buttonClicked.innerHTML = goal1 + "-" + goal2 ;

     
    for(let g=0;g<nr1;g++)
        {
            timeouts.push(setTimeout(()=>{goal1+=1;
            buttonClicked.innerHTML = goal1 + "-" + goal2 ;console.log(goal1)},Math.floor(Math.random()*45000)))
        }

    for(let g=0;g<nr2;g++)
        {
            timeouts.push(setTimeout(()=>{goal2+=1
                buttonClicked.innerHTML = goal1 + "-" + goal2},Math.floor(Math.random()*45000)))
        }
    var timer=0
    var thisInterval = 
    setInterval(()=>{
        timer+=1
        document.getElementById(id).innerHTML = timer + " mins"
        if(timer==90)
          {clearInterval(thisInterval);
        }},500)



}



document.getElementById("button16").addEventListener("click",display16Teams)
document.getElementById("button8").addEventListener("click",quarterFinal)
document.getElementById("button4").addEventListener("click",semiFinal)
document.getElementById("buttonF").addEventListener("click",final)



displayGroups()


function nextGroupShowing()
{
    if(groupNr!==8)
    {
        groupNr+=1
    }
    printDatainTable()
    displayGroups()
    getGoalsAndQualification()
    document.getElementById("groupLabel").innerHTML = "Group " + groupNr
}


function previousGroupShowing()
{
    if(groupNr!==1)
    {
        groupNr-=1
    }
    printDatainTable()
    displayGroups()
    getGoalsAndQualification()
    document.getElementById("groupLabel").innerHTML = "Group " + groupNr

}

//let object = document.getElementById("groups")

function displayGroups()
{



    document.getElementById("info").innerHTML =  groups[groupNr-1][0]+  "<br>" + 
    groups[groupNr-1][1] +  "<br>" + groups[groupNr-1][2]  + "<br>" + groups[groupNr-1][3] + "<br>" 




        getGoalsAndQualification()
}
let next =document.getElementById("next")
let previous =document.getElementById("previous")
previous.addEventListener("click",previousGroupShowing)
next.addEventListener("click",nextGroupShowing)







//display Games Phase A

function getGoalsAndQualification()
{

    document.getElementById("rank").style.display = "none"
    //console.log("ckicked")
    //console.log(object.value)
        let p1=0, p2=0, p3 =0, p4 = 0 
        let g1 =0, g2=0 ,g3=0, g4=0

        //console.log("group"+ Number(i+1))
            

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
        //setTimeout(()=>{document.getElementById("rank").style.display = "block"},3000)
        
    }
    






// phase 16 teams
function display16Teams()
{
    if(teams16.length == 16)
    {
        teams8 = drawAndResult(teams16,16,document.getElementById("button16"))
    }
}

/*function deleteFirstPhase()
{
    document.getElementById("firstPhase").style.display="none"
}  */

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



    function drawAndResult(teams,numberOfTeams,btn)
    {
        let qualifiedTeam = []
        if(teams.length == numberOfTeams)
        {
            btn.setAttribute('disabled', 'disabled')
            let decrease = Number(numberOfTeams-1)
            document.getElementById("nextRoundsTeam1Div").innerHTML=  "<br>" + "<hr>" + "<hr>" + "<hr>"  +"<hr>" +"<br>"
    
            document.getElementById("nextRoundsResultDiv").innerHTML= "<br>" + "<hr>" + "<hr>" + "<hr>"  +"<hr>" +"<br>"
            document.getElementById("nextRoundsTeam2Div").innerHTML= "<br>" + "<hr>" + "<hr>" + "<hr>"  +"<hr>" +"<br>"
    
    
            for(let i =0;i<numberOfTeams/2;i++)
            {   let lblTeam1 = document.createElement("label")
                lblTeam1.className="row"
                document.getElementById("nextRoundsTeam1Div").appendChild(lblTeam1)  
                lblTeam1.innerHTML = teams[i]

                let lblTeam2 = document.createElement("label")
                lblTeam2.className="row"
                document.getElementById("nextRoundsTeam2Div").appendChild(lblTeam2)  
                lblTeam2.innerHTML = teams[decrease]

     
    
                let id = Math.random()
                let id_ = Math.random()
                let div = document.createElement("div")
                div.className="row"
                let button = document.createElement("button")
                let lbl = document.createElement("label")
                button.id = id
                lbl.id=id_
                button.innerHTML= "Result"
                button.className = "buttonsClass"
                lbl.className = "span"
                lbl.innerHTML = "00 Mins"
                div.appendChild(button)
                div.appendChild(lbl)
                document.getElementById("nextRoundsResultDiv").appendChild(div)
                button.addEventListener("click",()=>
                    { resultThroughTime(scooring(teams[i],teams[decrease])[0],scooring(teams[i],teams[decrease])[1],button,id_)})
                let result = scooring(teams[i],teams[decrease])

                
    
                if(result[0] > result[1])
                {
                    qualifiedTeam.push(teams[i])
    
                }
                else if(result[0] < result[1])
                {
                    qualifiedTeam.push(teams[decrease])
                }
                else
                {
                    let index = Math.floor(Math.random()*2)
                    qualifiedTeam.push([teams[i],teams[decrease]][index])
                    let penalties = [[4,1],[3,0],[5,4],[4,2],[3,1],[6,5]][Math.floor(Math.random()*6)]
    
                    if(index===0)
                    {
    
                        result = `(${penalties[0]}) `+ result + ` (${penalties[1]})`
                    }
                    else
                    {
                        result = `(${penalties[1]}) ` + result + ` (${penalties[0]})`
                    }
                }

    
                decrease-=1
    
    
            }
            console.log(qualifiedTeam)
            return qualifiedTeam
            
        }
    
    }