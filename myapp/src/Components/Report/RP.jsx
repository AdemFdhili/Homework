import Profile from '../Profile/ProfArea';
import Editor from '../Pictureprofile/Picture';
import { useState } from "react";
import './RP.css';



export default function Result(){
    const cards =[
        {
          Work:"Work",hours:Tm1,Date:Tm7,bgColor:'#FF8B64'
        },
        {
            Work:"Play",hours:Tm2,Date:Tm8,bgColor:'#56C2E6'
        },
        {
            Work:"Study",hours:Tm3,Date:Tm9,bgColor:'#FF5E7D'
        },
        {
            Work:"Exercise",hours:Tm4,Date:Tm10,bgColor:'#4BCF83'
        },
        {
            Work:"Social",hours:Tm5,Date:Tm11,bgColor:'#7235D1'
        },
        {
            Work:"Self care",hours:Tm6,Date:Tm12,bgColor:'#F1C75B'
        },
    
      ]

      const [Tm1, setTm1] = useState(25);
      const [Tm2, setTm2] = useState(3);
      const [Tm3, setTm3] = useState(15);
      const [Tm4, setTm4] = useState(15);
      const [Tm5, setTm5] = useState(16);
      const [Tm6, setTm6] = useState(29);
      const [Tm7, setTm7] = useState("last week - " + 50);
      const [Tm8, setTm8] = useState("last week - " + 60);
      const [Tm9, setTm9] = useState("last week - " + 44);
      const [Tm10, setTm10] = useState("last week - " + 88);
      const [Tm11, setTm11] = useState("last week - " + 15);
      const [Tm12, setTm12] = useState("last week - " + 19);

      return (
        <div className='position'>
          <div className='Box'>
          
         
         
         
         
          <div className='Container'>
            <div className='Profile-info'>
               <Editor/>
            <h3 className='Text-Report'>Report for</h3>
            <h1 className='Text'>Robert Fisk</h1>
            </div>
               
               
               
               
               
               
                <div className='Duration'>
                    <h2 onClick={() => {
                    setTm1(10);
                    setTm2(14);
                    setTm3(57);
                    setTm4(4);
                    setTm5(20);
                    setTm6(20);
                    setTm7("last day - " + 1);
                    setTm8("last day - " + 12);
                    setTm9("last day - " + 24);
                    setTm10("last day - " + 11);
                    setTm11("last day - " + 30);
                    setTm12("last day - " + 160);
                    }}>Daily</h2>
                    <h2 onClick={() => {
                    setTm1(25);
                    setTm2(30);
                    setTm3(65);
                    setTm4(15);
                    setTm5(16);
                    setTm6(29);
                    setTm7("last week - " + 50);
                    setTm8("last week - " + 60);
                    setTm9("last week - " + 44);
                    setTm10("last week - " + 88);
                    setTm11("last week - " + 15);
                    setTm12("last week - " + 19);
                   }}>Weekly</h2>
                    <h2 onClick={() => {
                    setTm1(9);
                    setTm2(29);
                    setTm3(59);
                    setTm4(81);
                    setTm5(31);
                    setTm6(37);
                    setTm7("last month - " + 95);
                    setTm8("last month - " + 10);
                    setTm9("last month - " + 76);
                    setTm10("last month - " + 30);
                    setTm11("last month - " + 65);
                    setTm12("last month - " + 29);
                  }}>Monthly</h2>
                </div>
            </div>
          </div>
          
          
          
          
          
          
          
          <div className='profarea'>
            {
             cards.map((val) => (
                  <Profile {...val}/>
              ))
            }
          </div>











        </div>
      );



    }
