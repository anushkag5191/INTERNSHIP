const quiz=[
    {
        question:"Which team has won the IPL the most number of times?",
    ans1:"mumbai indians",
    ans2:"Chennai super kings",
    ans3:"Rajasthan royals",
    ans4:"Royal challengers banglore",
    answer:"mumbai indians"
    },
    {
        question:"Which year was IPL's inaugural year?",
        ans1:2009,
        ans2:2008,
        ans3:2011,
        ans4:2014,
        answer:2008
    },
    {
        question:"Which team captain has won the most number of trophies in IPL?",
        ans1:"MS Dhoni",
        ans2:"Shubham Gill",
        ans3:"Rohit Sharma",
        ans4:"Virat Kohli",
        answer:"Rohit Sharma"
    }
];
const quizques=document.getElementById("quizques");
const first=document.getElementById("first");
const second=document.getElementById("second");
const third=document.getElementById("third");
const fourth=document.getElementById("fourth");
const btn=document.getElementById("nxtbtn");
const correct=document.querySelectorAll('.answer-input');
let currentindex=0;
let score=0;
function loadquestion()
{
    reset();
    const qdata=quiz[currentindex];
    quizques.textContent=` ${currentindex+1})${qdata.question}`;
    first.textContent=qdata.ans1;
    second.textContent=qdata.ans2;
    third.textContent=qdata.ans3;
    fourth.textContent=qdata.ans4; 
}
loadquestion();
function getanswer()
{
    let selected;
    correct.forEach((input)=>{
        if(input.checked)
            selected=input.value;
    });
    return selected;
}
btn.addEventListener("click",()=>
{
     const qdata=quiz[currentindex];
    const ans=getanswer();
    if(ans==null)
    {
        alert("option required!");
        return; 
    }
    if(qdata[ans]==qdata.answer)
    {
        score++;
    }
    currentindex++;
    if(currentindex<quiz.length)
        {
              loadquestion();
        }
    else{
        document.querySelector(".container").innerHTML=`
        <h2> your score is:${score}/${quiz.length}</h2>
         <button class="btn" onclick="location.reload()">Restart</button>`;
    }
});
function reset()
{
 correct.forEach((input)=>{
      input.checked=false;
    })   
}