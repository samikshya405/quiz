const qusn = document.querySelector("h2");
const ans1 = document.querySelector(".btn-1");
const ans2 = document.querySelector(".btn-2");
const ans3 = document.querySelector(".btn-3");
const ans4 = document.querySelector(".btn-4");
const nex = document.querySelector(".btn-5")
const prev = document.querySelector(".prev")
const submit = document.querySelector('.submit')
const finish = document.querySelector(".finish")


let questionList = [

    {
        question: "What is the longest river in the world?",
        Ans:[
            { ans1:"Nike", correct:false},
            { ans2:"Amazon", correct:true},
            { ans3:"Mekon", correct:false},
            { ans4:"Congo", correct:false}
        ]

    },
    {
        question:"What is the height of Mt.Everest ?",
        Ans:[
            { ans1:"8814m", correct:false},
            { ans2:"8854m", correct:false},
            { ans3:"8848m", correct:true},
            { ans4:"8890m", correct:false}
        ]
        
    }
    ,

    {
        question:"What is the national game of Nepal ?",
        Ans:[
            {ans1:"Football" , correct:false},
            {ans2:"Volleyball", correct:true},
            {ans3:"Kabaddi", correct:false},
            {ans4:"dandi biyo", correct:false}
        ]
    },
    {
        question:"When does secound world war end ?",
        Ans:[
            {ans1:"1926 A.D", correct:false},
            {ans2:"1928 A.D", correct:false},
            {ans3:"1945 A.D", correct:true},
            {ans4:"1935 A.D", correct:false}
        ]
        
    },
    {
        question:"Which is the first country to win fifa world cup?",
        Ans:[
            {ans1:"Uruguay", correct:true},
            {ans2:"Brazil", correct:false},
            {ans3:"Argentine", correct:false},
            {ans4:"England", correct:false}
        ]
    },

]


    
   
    let c=0
   


    const nextQuestion =(c)=>{
        qusn.innerHTML = questionList[c].question
        ans1.innerHTML =questionList[c].Ans[0].ans1
        ans2.innerHTML =questionList[c].Ans[1].ans2
        ans3.innerHTML =questionList[c].Ans[2].ans3
        ans4.innerHTML =questionList[c].Ans[3].ans4
    }
    
    nextQuestion(c)
    
    nex.addEventListener('click',function(){
       
        c++
        nextQuestion(c)
        prev.style.display ="block"
        finish.style.justifyContent = "space-between"
        if(c==(questionList.length-1)){
            nex.style.display ="none"
            submit.style.display ="block"
        }
    })
    prev.addEventListener('click',function(){
        for(let i=0;i<questionList.length;i++){
            if(questionList[i].question===qusn.innerHTML){
                c=i
            }
        }
        c--
        nextQuestion(c)
        if(c==(questionList.length-2)){
            nex.style.display ="block"
            submit.style.display ="none"
        }
        if(c==0){
            prev.style.display = "none"
            finish.style.justifyContent = "end"

        }

    })
submit.addEventListener("click",function(){
    alert("Are you sure you want to submit?")
    
});
ans1.addEventListener("click",function(){
    console.log(ans1.innerHTML)
    let ans11=ans1.innerHTML
    // if(ans11 in questionList[0].Ans[0]){
    //     console.log("yes")
    // }else{
    //     console.log("not found")
    // }

})
ans2.addEventListener("click",function(){
    console.log(ans2.innerHTML)
})
// console.log(questionList[0].Ans[0].ans1)

// for(let n of question[0].Ans)
// console.log(questionList[0].Ans)
// for(let n of questionList[0].Ans){
//     console.log(n)
// }
// for(let i=0;i<questionList[0].Ans.length;i++){
//     if("Nike" in questionList[i].Ans[0]){
//         console.log(i)
//     }else{
//         console.log("its not here")
//     }
// }

// let obj ={

//     name:"samikshya",
//     address:'auburn'
// }

// let p="samikshya"
// for( x in obj){
//     console.log(x)
   
// }
    
