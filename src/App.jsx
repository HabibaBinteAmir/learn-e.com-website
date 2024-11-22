import { useState } from 'react'
import './App.css'
import Images from './Componants/Images'
import logo from './assets/logo.png'
import m1 from './assets/m1.png'
import m2 from './assets/m2.png'
import m3 from './assets/m3.png'
import m4 from './assets/m4.png'
import footer from './assets/footer.png'
import icon from './assets/icon.png'
import student1 from './assets/student1.png'
import student2 from './assets/student2.png'
import student3 from './assets/student3.png'
import product1 from './assets/product1.png'
import product2 from './assets/product2.png'
import product3 from './assets/product3.png'
import product4 from './assets/product4.png'
import product5 from './assets/product5.png'
import product6 from './assets/product6.png'
import courseImg from './assets/courseImg.png'
import bannerbg from './assets/bannerbg.png'
import Container from './Componants/Container'
import Menu from './Componants/Menu'
import Flex from './Componants/Flex'
import Button from './Componants/Button'
import Heading from './Componants/Heading'
import Star from './Componants/icons/Star'
import Vactor from './Componants/icons/Vactor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* navbar part starts */}
    <div className="py-6">
      <Container>
        <Flex className={'justify-between'}>
          <div className="pt-1 ml-6">
            <Images src={logo} alt={logo} className={'w-full'}/>
          </div>
          <div className="pt-2">
            <Flex className={'gap-x-10 justify-center  text-black rounded-2xl font-pop  text-[18px]'}>
              <Menu mtext={'Home'} className={'hover:text-hoverColor hover:font-semibold'}/>
              <Menu mtext={'Course'} className={'hover:text-hoverColor hover:font-semibold'}/>
              <Menu mtext={'Monitor'} className={'hover:text-hoverColor hover:font-semibold'}/>
              <Menu mtext={'About'} className={'hover:text-hoverColor hover:font-semibold'}/>
            </Flex>

          </div>
          <div className="mr-20">
            <Button btntext={'Get Started'} className={'px-[25px] py-[15px] bg-[#F5C362] text-black rounded-2xl font-pop font-semibold text-[18px]   '}/>
            
          </div>
        </Flex>
      </Container>

    </div>
    
    {/* navbar part end */}
    {/* banner part starts */}
    <div className="py-[55px] ">
      <Container>
        <Flex className={'justify-between'}>
          <div className="w-[42%] py-[55px]">
            <Heading text={'Getting Quality Education is now more Easy'} as={'h1'} className={'font-bold text-[63px] text-[#07222C] font-Karma'}/>
            <Heading text={'t is a long established fact that a reader will be distracted by the readable content of a page when looking  '} as={'p'} className={'font-medium text-[18px] text-[#565A5B] font-pop pt-4 pb-8'}/>
            <div className=" ">
              <Flex >
              <Button btntext={'Get Started'} className={'px-[23px] py-[12px]  hover:bg-[#F5C362] text-[#565A5B] rounded-2xl font-pop font-semibold text-xl bg-white border border-borderColor mr-10'}/>
              <Button btntext={'Get Started'} className={'px-[23px] py-[12px]  hover:bg-[#F5C362] text-[#565A5B] rounded-2xl font-pop font-semibold text-xl bg-white border border-borderColor mr-10'}/>
            

              </Flex>
            </div>


          </div>
          <div className="w-[50%]">
            <Images src={bannerbg} alt={bannerbg}/>

          </div>
        </Flex>
      </Container>
    </div>
    {/* banner part end */}
    {/* counterup  */}
    <div className="py-[40px] bg-[#0166FF] mb-[100px]">
     <Container>
     <Flex className={'justify-between'}>
        <div className="w-[20%] text-center border-r border-white">
        <Heading text={'8200'} as={'h3'} className={'font-bold text-[40px] text-white font-Karma border-right'}/>
        <Heading text={'Success Stories'} as={'h3'} className={' text-[20px] text-white font-pop  '}/>
        </div>
        <div className="w-[20%] text-center border-r border-white">
        <Heading text={'12200'} as={'h3'} className={'font-bold text-[40px] text-white font-Karma border-right'}/>
        <Heading text={'Expert Mentors'} as={'h3'} className={' text-[20px] text-white font-pop  '}/>
        </div>
        <div className="w-[20%] text-center border-r border-white">
        <Heading text={'50000'} as={'h3'} className={'font-bold text-[40px] text-white font-Karma border-right'}/>
        <Heading text={'Hours  Course'} as={'h3'} className={' text-[20px] text-white font-pop  '}/>
        </div>
        <div className="w-[20%] text-center ">
        <Heading text={'70000'} as={'h3'} className={'font-bold text-[40px] text-white font-Karma '}/>
        <Heading text={'Active Student'} as={'h3'} className={' text-[20px] text-white font-pop  '}/>
        </div>
      </Flex>
     </Container>

    </div>



    {/* counterup  */}
    {/* counter part starts */}
    <div className="">
      <Container>
        <div className=" text-center  ">
        <Heading text={'Benefits of online Education'} as={'h2'} className={'font-bold text-[45px] text-[#07222C] font-Karma'}/>
        <Heading text={' It is a long established fact that a reader will be distracted by the readable content of a page when looking   '} as={'p'} className={'font-medium text-[18px] text-[#565A5B] font-pop pr-[320px] pl-[320px] pb-[100px]'}/>

        </div>
      </Container>
      
    </div>
    {/* counter part end */}
    {/* monitors part start */}
    <div className="">
      <Container className={'max-w-monitorsContainer py-6 mb-[50px] m-auto items-center'}>
        <Flex className={'justify-between items-center'}>
          <div className="w-[23%] shadow-lg rounded-xl">
            <Images src={m1} className={'mr-[px]'}/>
            <Heading text={'One on One Monitor'} as={'h4'} className={'font-bold text-[25px] text-[#07222C] font-Karma'}/>
            <Heading text={'Lorem Ipsum is simply dummy text of the printing and typesetting'} as={'p'} className={' text-[18px] text-[#565A5B] font-pop  pb-4'}/>
          </div>
          <div className="w-[23%] shadow-lg rounded-xl ">
            <Images src={m2} className={'mr-[px]'}/>
            <Heading text={'24/7 Mentor '} as={'h4'} className={'font-bold text-[25px] text-[#07222C] font-Karma'}/>
            <Heading text={'Lorem Ipsum is simply dummy text of the printing and typesetting'} as={'p'} className={' text-[18px] text-[#565A5B] font-pop  pb-4 '}/>
          </div>
          <div className="w-[23%] shadow-lg rounded-xl ">
            <Images src={m3} className={'mr-[px]'}/>
            <Heading text={'Whiteboard'} as={'h4'} className={'font-bold text-[25px] text-[#07222C] font-Karma'}/>
            <Heading text={'Lorem Ipsum is simply dummy text of the printing and typesetting'} as={'p'} className={' text-[18px] text-[#565A5B] font-pop pb-4  '}/>
          </div>
          <div className="w-[23%] shadow-lg rounded-xl ">
            <Images src={m4} className={'mr-[px]'}/>
            <Heading text={'Affordable Price'} as={'h4'} className={'font-bold text-[25px] text-[#07222C] font-Karma'}/>
            <Heading text={'Lorem Ipsum is simply dummy text of the printing and typesetting'} as={'p'} className={' text-[18px] text-[#565A5B] font-pop pb-4  '}/>
          </div>
        </Flex>
      </Container>
    </div>
   
    {/* monitors part end */}
    {/* coursePart starts */}
    <div className="py-[20px]  gap-x-10">
      <Container className={'max-w-monitorsContainer m-auto'}>
        <Flex className={'justify-between'}>
          <div className="w-[43%]">
            <Images src={courseImg} className={'w-full'}/>
          </div>
          <div className="w-[43%] py-[55px]">
            <Heading text={'We are Always Ensure Best Course for your learning'} as={'h1'} className={'font-bold text-[48px] text-[#07222C] font-Karma '}/>
            <Heading text={'t is a long established fact that a reader will be distracted by the readable content of a page when looking  '} as={'p'} className={'font-medium text-[18px] text-[#565A5B] font-pop pt-4 pb-8'}/>
            <div className=" ">
              <Flex >
              <Button btntext={'Join Us Free'} className={'px-[23px] py-[12px]  hover:bg-[#F5C362] text-[#565A5B] rounded-2xl font-pop font-semibold text-xl bg-white border border-borderColor mr-10'}/>
             
            

              </Flex>
            </div>


          </div>
          

        </Flex>
      </Container>
    </div>
    {/* coursePart end */}
    {/* productPart starts */}
    <div className="">
      <Container>
        <div className=" text-center  ">
        <Heading text={'Our Popular Course'} as={'h2'} className={'font-bold text-[45px] text-[#07152F] font-Karma'}/>
        <Heading text={' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th    '} as={'p'} className={'font-medium text-[18px] text-[#565A5B] font-pop pr-[320px] pl-[320px] pb-[100px]'}/>

        </div>
      </Container>
      
    </div>
    <div className="py-[10px]">
      <Container className={'max-w-productContainer'}>
        <Flex className={'justify-between pb-10'}>
          <div className="w-[28%] pb-[20px] shadow-2xl rounded-2xl">
            <Images src={product1} className={'w-full  '}/> 
            <Heading text={'Web Design  Basic to advance'} as={'h4'} className={'font-bold text-[20px] text-[#07152F] font-roboto pb-[25px] pt-[25px] text-center'}/>
           <Flex className={'pb-8 pl-6 pt-5'}> 
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star className={''}/>
            <Heading text={'5.0  (2 rating)'} as={'p'} className={'font-medium text-[15px] text-[#6A6B6C] font-pop pl-6'}/>

           </Flex>
           <div className="pl-[20px] pb-6 pt-3 ">
           <Button btntext={'Get Started'} className={'px-[70px] py-[6px]  hover:bg-[#F5C362] text-[#6A6B6C] rounded-b-lg rounded-l-lg font-pop font-semibold text-[18px] bg-white border border-borderColor  '}/>
           </div>
          </div>
          <div className="w-[28%] pb-[20px] shadow-2xl rounded-2xl">
            <Images src={product2} className={'w-full  '}/> 
            <Heading text={'Web development  Basic to advance'} as={'h4'} className={'font-bold text-[20px] text-[#07152F] font-roboto pb-[25px] pt-[25px] text-center'}/>
           <Flex className={'pb-8 pl-4'}> 
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star className={''}/>
            <Heading text={'5.0  (2 rating)'} as={'p'} className={'font-medium text-[15px] text-[#6A6B6C] font-pop pl-4'}/>
           </Flex>
           <div className="pl-[20px] pb-6 ">
           <Button btntext={'Get Started'} className={'px-[70px] py-[6px]  hover:bg-[#F5C362] text-[#6A6B6C]  font-pop font-semibold text-[18px] bg-white border border-borderColor  rounded-b-lg rounded-l-lg'}/>
           </div>
          </div>
          <div className="w-[28%] pb-[20px] shadow-2xl rounded-2xl">
            <Images src={product3} className={'w-full  '}/> 
            <Heading text={'Digital marketing  Basic to advance'} as={'h4'} className={'font-bold text-[20px] text-[#07152F] font-roboto pb-[25px] pt-[25px] text-center'}/>
           <Flex className={'pb-8 pl-4'}> 
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star className={''}/>
            <Heading text={'5.0  (2 rating)'} as={'p'} className={'font-medium text-[15px] text-[#6A6B6C] font-pop pl-4'}/>
           </Flex>
           <div className="pl-[20px] pb-6 ">
           <Button btntext={'Get Started'} className={'px-[70px] py-[6px]  hover:bg-[#F5C362] text-[#6A6B6C]  font-pop font-semibold text-[18px] bg-white border border-borderColor  rounded-b-lg rounded-l-lg'}/>
           </div>
          </div>
        </Flex>
        <Flex className={'justify-between pb-10'}>
          <div className="w-[28%] pb-[20px] shadow-2xl rounded-2xl">
            <Images src={product4} className={'w-full  '}/> 
            <Heading text={'App Design  Basic to advance'} as={'h4'} className={'font-bold text-[20px] text-[#07152F] font-roboto pb-[25px] pt-[25px] text-center'}/>
           <Flex className={'pb-8 pl-4 pt-7'}> 
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star className={''}/>
            <Heading text={'5.0  (2 rating)'} as={'p'} className={'font-medium text-[15px] text-[#6A6B6C] font-pop pl-5'}/>

           </Flex>
           <div className="pl-[20px] pb-6 pt-2 ">
           <Button btntext={'Get Started'} className={'px-[70px] py-[6px]  hover:bg-[#F5C362] text-[#6A6B6C] rounded-b-lg rounded-l-lg font-pop font-semibold text-[18px] bg-white border border-borderColor  '}/>
           </div>
          </div>
          <div className="w-[28%] pb-[20px] shadow-2xl rounded-2xl">
            <Images src={product5} className={'w-full  '}/> 
            <Heading text={'Mobile design  Basic to advance'} as={'h4'} className={'font-bold text-[20px] text-[#07152F] font-roboto pb-[25px] pt-[25px] text-center'}/>
           <Flex className={'pb-8 pl-43'}> 
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star className={''}/>
            <Heading text={'5.0  (2 rating)'} as={'p'} className={'font-medium text-[15px] text-[#6A6B6C] font-pop pl-4'}/>
           </Flex>
           <div className="pl-[20px] pb-6 ">
           <Button btntext={'Get Started'} className={'px-[70px] py-[6px]  hover:bg-[#F5C362] text-[#6A6B6C]  font-pop font-semibold text-[18px] bg-white border border-borderColor  rounded-b-lg rounded-l-lg'}/>
           </div>
          </div>
          <div className="w-[28%] pb-[20px] shadow-2xl rounded-2xl">
            <Images src={product6} className={'w-full  '}/> 
            <Heading text={'Graphics Design  Basic to advance'} as={'h4'} className={'font-bold text-[20px] text-[#07152F] font-roboto pb-[25px] pt-[25px] text-center'}/>
           <Flex className={'pb-11 pl-4'}> 
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star className={''}/>
            <Heading text={'5.0  (2 rating)'} as={'p'} className={'font-medium text-[15px] text-[#6A6B6C] font-pop pl-8'}/>
           </Flex>
           <div className="pl-[20px] pb-6 ">
           <Button btntext={'Get Started'} className={'px-[70px] py-[6px]  hover:bg-[#F5C362] text-[#6A6B6C]  font-pop font-semibold text-[18px] bg-white border border-borderColor  rounded-b-lg rounded-l-lg'}/>
           </div>
          </div>
        </Flex>
        <div className="flex justify-center pt-4 pb-8">
            <Button btntext={'Get Started'} className={'px-[25px] py-[15px] bg-[#F5C362] text-black rounded-2xl font-pop font-semibold text-[18px]   '}/>
          </div>
      </Container>
    </div>
    {/* productPart end */}
    {/* reviewPart starts */}
   
      <div className="">
      <Container className={'max-w-monitorsContainer'}>
        <div className=" text-center pt-11">
        <Heading text={'What our Students say'} as={'h2'} className={'font-bold text-[45px] text-[#190D30] font-roboto'}/>
        <Heading text={' There are many variations of passages of Lorem Ipsum available,        '} as={'p'} className={'font-semibold text-[18px] text-[#534D5E] font-pop pb-[80px]'}/>
        </div>
        <Flex className={'pb-11 justify-between'}>
          <div className="w-[30%] pt-5 pb-6 rounded-3xl shadow-2xl p-[25px]">
          <Heading text={'Great Platform'} as={'h4'} className={'font-bold text-[25px] text-[#190D30] font-roboto pb-5'}/>
          <Vactor className={''} />
          <Heading text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took'} as={'h4'} className={' text-[15px] text-[#534D5E] font-pop  border-[#B1B3B6] border-b-2 pb-6 pt-5'}/>
         <Flex>
          <div className="pt-4 pb-8">
            <Images src={student1}/>
          </div>
          <div className="pl-8 pt-4">
          
          <Heading text={'Beth Luna'} as={'h4'} className={'font-bold text-[16px] text-[#534D5E] font-roboto pb-5'}/>
          <Flex>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          </Flex>
          </div>
         </Flex>
          </div>
          <div className="w-[30%] pt-5 pb-6 rounded-3xl shadow-2xl p-[25px]">
          <Heading text={'Great Platform'} as={'h4'} className={'font-bold text-[25px] text-[#190D30] font-roboto pb-5'}/>
          <Vactor className={''} />
          <Heading text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took'} as={'h4'} className={' text-[15px] text-[#534D5E] font-pop  border-[#B1B3B6] border-b-2 pb-6 pt-5'}/>
         <Flex>
          <div className="pt-4 pb-8">
            <Images src={student2}/>
          </div>
          <div className="pl-8 pt-4">
          
          <Heading text={'Belinda Gomez'} as={'h4'} className={'font-bold text-[16px] text-[#534D5E] font-roboto pb-5'}/>
          <Flex>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          </Flex>
          </div>
         </Flex>
          </div>
          <div className="w-[30%] pt-5 pb-6 rounded-3xl shadow-2xl p-[25px]">
          <Heading text={'Great Platform'} as={'h4'} className={'font-bold text-[25px] text-[#190D30] font-roboto pb-5'}/>
          <Vactor className={''} />
          <Heading text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took'} as={'h4'} className={' text-[15px] text-[#534D5E] font-pop  border-[#B1B3B6] border-b-2 pb-6 pt-5'}/>
         <Flex>
          <div className="pt-4 pb-8">
            <Images src={student3}/>
          </div>
          <div className="pl-8 pt-4">
          
          <Heading text={'Howard Clayton'} as={'h4'} className={'font-bold text-[16px] text-[#534D5E] font-roboto pb-5'}/>
          <Flex>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          <Star/>
          </Flex>
          </div>
         </Flex>
          </div>
        </Flex>
      </Container>
    </div>
    {/* reviewPart end */}
    {/* footer part starts */}
    <div className="py-[100px] bg-[#0166FF] pb-[50px]">
      <Container className={'max-w-productContainer'}>
        <Flex className={'justify-between'}>
          <div className="w-[40%] ">
            <Images src={footer}/>
            <Heading text={'Follow on social service'} as={'h4'} className={'font-medium text-[20px] text-[#FFFFFF] font-pop pb-8 pt-6'}/>
            <Images src={icon}/>
          </div>
          <div className="">
          <Heading text={'Links'} as={'h4'} className={'font-medium text-[20px] text-[#FFFFFF] font-pop pb-4 '}/>
          <div className={'text-[#FFFFFF]'}>
          <Menu mtext={'Home'}/>
          <Menu mtext={'Help center'} className={'pt-6 pb-6'}/>
          <Menu mtext={'Service'}/>
          </div>
          

          </div>
          <div className="">
          <Heading text={'Resource'} as={'h4'} className={'font-medium text-[20px] text-[#FFFFFF] font-pop pb-4 '}/>
          <div className={'text-[#FFFFFF]'}>
          <Menu mtext={'About'}/>
          <Menu mtext={'Carrier'} className={'pt-6 pb-6'}/>
          <Menu mtext={'Legal Notice'}/>
          </div>
          

          </div>
          <div className="">
          <Heading text={'Contacts'} as={'h4'} className={'font-medium text-[20px] text-[#FFFFFF] font-pop pb-4 '}/>
          <div className={'text-[#FFFFFF]'}>
          <Menu mtext={'192. New york'}/>
          <Menu mtext={'Support'} className={'pt-6 pb-6'}/>
          <Menu mtext={'+1125156363'}/>
          </div>
          

          </div>
        </Flex>
        <div className="border-b-2 border-[#ffffff] pt-[100px] mr-[150px] flex justify-center ml-28">
        </div>
        <Heading text={'Copyright 2020@ all right'} as={'h4'} className={'font-medium text-[16px] text-[#FFFFFF] font-pop pb-4 text-center pt-5 '}/>

      </Container>
    </div>
    {/* footer part end */}



    </>
  )
}

export default App
