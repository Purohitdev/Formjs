let radcount = 1;
let chec = 1;

function fun1(a,b){
    var select=document.querySelector("#slector").value;
     // console.log(select);
    if(select == "Text"){
        // main
        let main1=document.querySelector("#div1");
        //  main append
        let appchild=document.createElement("div");
        appchild.className="appndiv";
        // append div 1
        let appchild1=document.createElement("div");
        appchild1.className="appndiv1"; 
        // 
        let inp=document.createElement("input");
        inp.className="inp3";

        appchild1.appendChild(inp);
        // 
        let butt=document.createElement("button");
        butt.className="butt1";
        appchild1.appendChild(butt);
        butt.innerHTML+="<i class='fa fa-close'onclick=fun4(this)></i>"; 
        //  append div 2
        let appchil2=document.createElement("div");
        appchil2.className="appndiv2"; 
        // 
        let inp1=document.createElement("input");
        inp1.className="inp4";
        appchil2.appendChild(inp1);
        // 
        let butt1=document.createElement("button");
        butt1.className="butt2";   
        appchil2.appendChild(butt1);
        butt1.innerHTML+="add";
        // 
        appchild.appendChild(appchil2);
        // 
        appchild.appendChild(appchild1);
        // 
        main1.appendChild(appchild);

        butt1.addEventListener('click',()=>{
            let label1=document.createElement("label")
            appchil2.appendChild(label1);
            label1.innerHTML=`${inp1.value}:-`
            inp1.style.display="none"
            butt1.remove();
        });
    
    }
    else if(select == "Number"){
        // console.log("wrking")
        // main
        let main2=document.querySelector("#div1")
       
        // main append
        let num1=document.createElement("div")
        num1.className="numdiv"

       //append div1 
        let num2=document.createElement("div");
        num2.className="numdiv1";
        
        // 
        let numin=document.createElement("input");
        numin.className="inp5";
        num2.appendChild(numin);

        // 
        let butt1=document.createElement("button");
        butt1.className="butt1";
        num2.appendChild(butt1);
        butt1.innerHTML+="<i class='fa fa-close'onclick=fun4(this)></i>"; 
        // append div2

        let num3=document.createElement("div");
        num3.className="numdiv2"; 
        // 

        let numin2=document.createElement("input");
        // numin2.className="inp6";
        num3.appendChild(numin2);
        // 

        let butt2=document.createElement("button");
        butt2.className="butt2";   
        num3.appendChild(butt2);
        butt2.innerHTML+="add";

        // 
        num1.appendChild(num3);
        // 
        num1.appendChild(num2);
        // 
        main2.appendChild(num1);

        butt2.addEventListener('click',()=>{
            let label1=document.createElement("label")
            num2.appendChild(label1);
            label1.innerHTML=`${numin2.value}:-`
            numin2.style.display="none"
            butt2.remove();
        });
    }
    else if(select == "Email"){

        let main3=document.querySelector("#div1")
          // main append
          let emal1=document.createElement("div")
         emal1.className="emaldiv"

         //append div1 
        let eml2=document.createElement("div");
        eml2.className="emaldiv1";

        let eamin=document.createElement("input");
        eamin.className="inp7";
        eml2.appendChild(eamin);

        let butt3=document.createElement("button");
        butt3.className="butt1";
        eml2.appendChild(butt3);
        butt3.innerHTML+="<i class='fa fa-close'onclick=fun4(this)></i>"; 

        // append div2
        let eml3=document.createElement("div");
        eml3.className="emaldiv2";

        //  
        let eamin2=document.createElement("input");
        eamin2.className="inp8";
        eml3.appendChild(eamin2);
        // 

        let butt4=document.createElement("button");
        butt4.className="butt2";   
        eml3.appendChild(butt4);
        butt4.innerHTML+="add";
        // 
        emal1.appendChild(eml3);
        // 
        emal1.appendChild(eml2);
        // 
        main3.appendChild(emal1);   

        butt4.addEventListener('click',()=>{
            let label1=document.createElement("label")
            eml3.appendChild(label1);
            label1.innerHTML=`${eamin2.value}:-`;
            eamin2.style.display="none"
            butt4.remove();
        });

    }
    else if(select == "Radio"){
        let main4=document.querySelector("#div1");
         // main append
         let rad1=document.createElement("div")
         rad1.className="raddiv";

        //append div1 
        let rad2=document.createElement("div");
        rad2.className="raddiv1";

        let radmin=document.createElement("input");
        radmin.className="inp9";
        rad2.appendChild(radmin);

        let butt7=document.createElement("button");
        butt7.className="butt2";   
        rad2.appendChild(butt7);
        butt7.innerHTML+="add";

         // append div2
         let rad3=document.createElement("div");
         rad3.className="raddiv2";
 
         //  
         let radmin2=document.createElement("input");
         radmin2.className="inp10";
         rad3.appendChild(radmin2);
         // 
         let butt6=document.createElement("button");
         butt6.className="butt2";   
         rad3.appendChild(butt6);
         butt6.innerHTML+="add";

         let buttD=document.createElement("button");
         buttD.className="butt2";   
         rad2.appendChild(buttD);
         buttD.innerHTML+="done";
         // 
         
         rad1.appendChild(rad3);
        // 
        rad1.appendChild(rad2);
        // 
        main4.appendChild(rad1);
        
        buttD.addEventListener('click',()=>{
            radmin.style.display="none"
            butt7.remove();
            buttD.remove();
            rad2.remove();  

        }); 
            
         // append div3
         let rad4=document.createElement("div");
         rad4.className="raddiv3";
        //  
        rad1.appendChild(rad4);

        let radnew=document.createElement("div");
        radnew.className="raddivlast";
        rad1.appendChild(radnew);

        let butt5=document.createElement("button");
        butt5.className="butt1";
        butt5.innerHTML+="<i class='fa fa-close'onclick=fun4(this)></i>"; 
        radnew.appendChild(butt5);

        butt6.addEventListener('click',()=>{
            let label1=document.createElement("label")
            rad3.appendChild(label1);
            label1.innerHTML=`${radmin2.value}:-`;
            radmin2.style.display="none"
            butt6.remove();
        });

        butt7.addEventListener('click',()=>{
            let mainradio=document.createElement("p");
            rad4.appendChild(mainradio)
            let label2=document.createElement("input");
            label2.type="radio"
            label2.name=`radio${radcount}`
            // label value put in span
            label2.value=radmin.value;
            let label= document.createElement("span")
            mainradio.appendChild(label2)
            mainradio.appendChild(label)
            label.innerHTML=label2.value;   
        });

        radcount++;

    }
    else if(select == "Select"){
        // console.log("working");

        let main5=document.querySelector("#div1");
        // main append
        let sel1=document.createElement("div")
        sel1.className="seldiv";
        //append div1 
         let sel2=document.createElement("div");
         sel2.className="seldiv1";

         let selmin=document.createElement("input");
         selmin.className="inp11";
         sel2.appendChild(selmin);

         let butt8=document.createElement("button");
         butt8.className="butt2";   
         sel2.appendChild(butt8);
         butt8.innerHTML+="add";

         sel1.appendChild(sel2);
         main5.appendChild(sel1); 

         butt8.addEventListener('click',()=>{
            let label1=document.createElement("label")
            sel2.appendChild(label1);
            label1.innerHTML=`${selmin.value}:-`;
            selmin.style.display="none"
            butt8.remove();
        });
        //  part 2

         //append div2 
         let sel3=document.createElement("div");
         sel3.className="seldiv2";
         sel1.appendChild(sel3);

         let sel4=document.createElement("div");
         sel4.className="seldiv3";
         let selectdrop=document.createElement("select");
         selectdrop.className="dropdown";
         sel4.appendChild(selectdrop);

         let sel5=document.createElement("div");
         sel5.className="seldiv4";

         let selmin1=document.createElement("input");
         selmin1.className="inp12";
         sel5.appendChild(selmin1);

         let selmin2=document.createElement("button");
         selmin2.className="butt2";
         selmin2.innerHTML+="add";
         sel5.appendChild(selmin2);

         let selmin3=document.createElement("button");
         selmin3.className="butt2";
         selmin3.innerHTML+="done";
         sel5.appendChild(selmin3);

         sel3.appendChild(sel4);
         sel3.appendChild(sel5);

         let sellast=document.createElement("div");
         sellast.className="lastdiv";
         sel1.appendChild(sellast);

         let butt9=document.createElement("button");
         butt9.className="butt1";
         butt9.innerHTML+="<i class='fa fa-close'onclick=fun4(this)></i>"; 
         sellast.appendChild(butt9);

         selmin2.addEventListener('click',()=>{
            let opt=document.createElement("option");
            console.log(opt);
            selectdrop.appendChild(opt);
            opt.innerHTML=`${selmin1.value}`
        });

        selmin3.addEventListener('click',()=>{
            selmin1.style.display="none"
            sel5.remove();

        });
    }
    else if(select == "Checkbox"){
        // console.log("working")
        let main6=document.querySelector("#div1");
        // 
        let che1=document.createElement("div")
        che1.className="chediv";
        //append div1 
         let che2=document.createElement("div");
         che2.className="chediv1";
        //  

        let chemin=document.createElement("input");
        chemin.className="inp13";
        che2.appendChild(chemin);

        let butt10=document.createElement("button");
        butt10.className="butt2";   
        che2.appendChild(butt10);
        butt10.innerHTML+="add";

        che1.appendChild(che2);
        main6.appendChild(che1);

        butt10.addEventListener('click',()=>{
            let label1=document.createElement("label")
            che2.appendChild(label1);
            label1.innerHTML=`${chemin.value}:-`;
            chemin.style.display="none"
            butt10.remove();
        });
        
        //append div2
        let che3=document.createElement("div");
        che3.className="chediv2";   
        //  
        che1.appendChild(che3);

        let che4=document.createElement("div");
        che4.className="chediv3";
        che3.appendChild(che4);

        let che5=document.createElement("div");
        che5.className="chediv4";
        che3.appendChild(che5);

        let chemin1=document.createElement("input");
        chemin1.className="inp13";
        che5.appendChild(chemin1);

        let chemin2=document.createElement("button");
        chemin2.className="butt2";
        chemin2.innerHTML+="add";
        che5.appendChild(chemin2);

        let chemin3=document.createElement("button");
        chemin3.className="butt2";  
        chemin3.innerHTML+="done";
        che5.appendChild(chemin3);

        let crosss=document.createElement("div");
        crosss.className="chediv5";
        che1.appendChild(crosss);

        let butt11=document.createElement("button");
        butt11.className="butt1";   
        butt11.innerHTML+="<i class='fa fa-close'onclick=fun4(this)></i>"; 
        crosss.appendChild(butt11);

        chemin3.addEventListener('click',()=>{
            chemin1.style.display="none"
            chemin3.remove();
            chemin2.remove();

        });

        chemin2.addEventListener('click',()=>{
            let maincheck=document.createElement("p");
            che4.appendChild(maincheck)
            let label2=document.createElement("input");
            label2.type="checkbox"
            label2.name=`checkbox${chec}`
            // label value put in span
            label2.value=chemin1.value;
            let label= document.createElement("span")
            maincheck.appendChild(label2)
            maincheck.appendChild(label)
            label.innerHTML=label2.value; 

        });

        chec++;
    }


    else if(select == "Submit"){
        // console.log("working")
        let main7=document.querySelector("#div1");
        // 
        let sub=document.createElement("div");
        sub.className="subdiv1";
        main7.appendChild(sub);

        let person = confirm("Is your form completed");
        if (confirm("Press a button!")) {
        let butsub=document.createElement("button");
        butsub.className="butt2";  
        butsub.id="demo2";  
        butsub.innerHTML+="submit";
        sub.appendChild(butsub);

        butsub.addEventListener('click',()=>{
            let mainn1=document.querySelector(".p1");
            let butsub=document.getElementById("demo2");
            butsub.style.display="none";
          
            let inner=document.querySelector(".main");
            let sec1=document.createElement("div");
            sec1.className="part1";
            mainn1.appendChild(sec1);

            let sec2=document.createElement("div");
            sec2.className="part2";
            sec1.appendChild(sec2);
            sec2.innerHTML=inner.innerHTML;   

            let btn3 =document.createElement("button")
            btn3.className="btn3"
            btn3.innerHTML+="submit";
            sec2.appendChild(btn3);
            
            btn3.addEventListener('click',()=>{

                let disablee=document.querySelector(".btn3");
                console.log(disablee)
     
                let inp3value= document.querySelector(".inp3");
                console.log(inp3value); 
                // inp3value.innerHTML=inp3value
               
                let th3 =document.querySelector(".p2")
                // console.log(th3);
                th3.innerHTML=mainn1.innerHTML;
                let cdiv=document.createElement("div")
                cdiv.id="cdiv"
                th3.appendChild(cdiv);
                //  button none
                document.querySelector(".p2 .btn3").style.display = "none";

                let in2 = document.querySelectorAll(".p1 .inp3");
                let in3=document.querySelectorAll(".p2 .inp3");

                console.log(in2);
                let inapp = document.querySelectorAll(".p2 .appndiv");
                for(var i =0; i<in2.length; i++){
                    console.log(i);
                    console.log(in2[i]);
                    console.log(inapp[i]);
                    let p1 =document.createElement("p")
                    p1.innerHTML=in2[i].value
                    inapp[i].appendChild(p1)

                }

                for(var j of inapp){
                    j.children[1].style.display = "none";
                } 

                // 

                let in4= document.querySelectorAll(".p1 .inp7");
                console.log(in4); 

                let inapp1 = document.querySelectorAll(".p2 .emaldiv");
                for(var z =0; z<inapp1.length; z++){
                    console.log(z);
                    console.log(in4[z]);
                    console.log(inapp1[z]);
                    let p2 =document.createElement("p")
                    p2.innerHTML=in4[z].value;
                    inapp1[z].appendChild(p2);

                }

                for(var l of inapp1){
                    l.children[1].style.display = "none";
                } 

                // 

                let in5= document.querySelectorAll(".p1 .raddiv3 input");
                console.log(in5); 
            
                let inapp2 = document.querySelectorAll(".p2 .raddiv");
                console.log(inapp2);
                console.log(in5);

                for(var y =0; y<in5.length; y++){
                    console.log(y);
                    console.log(in5[y]);
                    if(in5[y].checked){
                    let p3 =document.createElement("p");
                        let finalv=in5[y]
                        console.log(finalv.value);
                        p3.innerHTML=finalv.value;
                        inapp2[0].appendChild(p3);
                    }

                    for(var x of inapp2){
                        x.children[1].style.display = "none";
                        x.children[2].style.display = "none";
                    } 

                }   

                // 

                let in6= document.querySelectorAll(".p1 .chediv3 input");
                console.log(in6);

                let inapp3 = document.querySelectorAll(".p2 .chediv");
                console.log(inapp3);
   
                console.log(in6.length)
                for(let c =0; c<in6.length; c++){
                    console.log(c);
                    console.log(in6[c] + "asdfgh");
                    // if(in6[c].checked){ 
                 if (in6[c].checked == true){
                    let p4 =document.createElement("p");
                        let fina=in6[c]
                        console.log(fina.value);
                        p4.innerHTML=fina.value;
                        inapp3[0].appendChild(p4);
                    }
                 }

                  for(var c of inapp3){
                    c.children[1].style.display = "none";
                    c.children[2].style.display = "none";
                } 

                // 

                let in7= document.querySelectorAll(".p1 .seldiv3 select option");
                console.log(in7);

                let inapp4 = document.querySelectorAll(".p2 .seldiv");
                console.log(inapp4);

                console.log(in7.length);
                for(let d =0; d<in7.length; d++){
                    console.log(d);
                    console.log(in7[d]);
                 let parentSelect = in7[d].parentNode; // Get the parent select element
                if (parentSelect.tagName === "SELECT" && in7[d].selected) {
                console.log(in7[d])
                let p5 = document.createElement("p");
                console.log(in7[d].parentNode);
                p5.innerHTML = in7[d].value;
                inapp4[0].appendChild(p5);
                }
                    // 
                }


                for(var d of inapp4){
                    d.children[1].style.display = "none";
                    d.children[2].style.display = "none";
                } 
            })

        });


        } else {
            console.log("canel")
          }
    }
}

function fun4(k){
    let pre =k.parentElement;
    let pree=pre.parentElement;
    let preee=pree.parentElement;
    preee.style.display="none";
}